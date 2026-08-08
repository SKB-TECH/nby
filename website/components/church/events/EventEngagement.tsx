"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import { Check, Heart, MessageCircle, Send, Share2, SmilePlus } from "lucide-react";
import { ActivityEngagement, publicApi } from "../../../lib/church-api";

const COMMENT_EMOJIS = ["🙏", "🙌", "❤️", "🔥", "✨", "😊", "👏", "🕊️", "🎉", "💪", "💯", "😍", "🥰", "😇", "🤲", "📖", "⛪", "🌟"];

function visitorId() {
    const key = "nby-event-visitor";
    let value = localStorage.getItem(key);
    if (!value) {
        value = crypto.randomUUID();
        localStorage.setItem(key, value);
    }
    return value;
}

export default function EventEngagement({ eventId, title, locale }: { eventId: string; title: string; locale: "fr" | "en" }) {
    const [data, setData] = useState<ActivityEngagement>({ likes: 0, liked: false, comments: [] });
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");
    const [busy, setBusy] = useState(false);
    const [shared, setShared] = useState(false);
    const [showEmojis, setShowEmojis] = useState(false);
    const messageRef = useRef<HTMLTextAreaElement>(null);
    const fr = locale === "fr";

    useEffect(() => {
        const id = visitorId();
        publicApi<ActivityEngagement>(`/public/activities/${eventId}/engagement?visitorId=${encodeURIComponent(id)}`).then(setData).catch(() => undefined);
    }, [eventId]);

    async function toggleLike() {
        if (busy) return;
        setBusy(true);
        try {
            setData(await publicApi<ActivityEngagement>(`/public/activities/${eventId}/like`, { method: "POST", body: JSON.stringify({ visitorId: visitorId(), liked: !data.liked }) }));
        } finally { setBusy(false); }
    }

    async function comment(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        if (busy || !name.trim() || !message.trim()) return;
        setBusy(true);
        try {
            const response = await publicApi<ActivityEngagement>(`/public/activities/${eventId}/comments`, { method: "POST", body: JSON.stringify({ authorName: name, message }) });
            setData(current => ({ ...response, liked: current.liked }));
            setMessage("");
        } finally { setBusy(false); }
    }

    async function share() {
        const shareData = { title, text: fr ? `Découvrez cet événement de NBY : ${title}` : `Discover this NBY event: ${title}`, url: window.location.href };
        try {
            if (navigator.share) await navigator.share(shareData);
            else { await navigator.clipboard.writeText(window.location.href); setShared(true); window.setTimeout(() => setShared(false), 2500); }
        } catch {}
    }

    function addEmoji(emoji: string) {
        const input = messageRef.current;
        const start = input?.selectionStart ?? message.length;
        const end = input?.selectionEnd ?? message.length;
        setMessage(`${message.slice(0, start)}${emoji}${message.slice(end)}`);
        requestAnimationFrame(() => {
            input?.focus();
            input?.setSelectionRange(start + emoji.length, start + emoji.length);
        });
    }

    return <section className="mt-14 border-t border-slate-200 pt-10">
        <div className="flex flex-wrap gap-3">
            <button type="button" onClick={() => void toggleLike()} disabled={busy} className={`event-social-button ${data.liked ? "active" : ""}`}><Heart className="h-5 w-5" fill={data.liked ? "currentColor" : "none"} />{data.likes} {fr ? "J’aime" : "Like"}</button>
            <a href="#event-comments" className="event-social-button"><MessageCircle className="h-5 w-5" />{data.comments.length} {fr ? "Commentaire(s)" : "Comment(s)"}</a>
            <button type="button" onClick={() => void share()} className="event-social-button">{shared ? <Check className="h-5 w-5" /> : <Share2 className="h-5 w-5" />}{shared ? (fr ? "Lien copié" : "Link copied") : (fr ? "Partager" : "Share")}</button>
        </div>
        <div id="event-comments" className="mt-10"><h2 className="font-serif text-3xl">{fr ? "Commentaires" : "Comments"}</h2>
            <form onSubmit={comment} className="event-comment-form mt-6 rounded bg-white p-5 shadow-sm sm:p-7">
                <label className="block max-w-md text-xs font-bold text-slate-600">{fr ? "Votre nom" : "Your name"}<input value={name} onChange={event => setName(event.target.value)} maxLength={80} required className="event-comment-input" /></label>
                <label className="mt-5 block text-xs font-bold text-slate-600">{fr ? "Votre commentaire" : "Your comment"}<textarea ref={messageRef} value={message} onChange={event => setMessage(event.target.value)} maxLength={1000} required rows={4} placeholder={fr ? "Écrivez votre message… 🙏" : "Write your message… 🙏"} className="event-comment-input resize-y" /></label>
                {showEmojis && <div className="event-emoji-picker" role="group" aria-label={fr ? "Choisir un emoji" : "Choose an emoji"}>{COMMENT_EMOJIS.map(emoji => <button key={emoji} type="button" onClick={() => addEmoji(emoji)} aria-label={emoji}>{emoji}</button>)}</div>}
                <div className="event-comment-actions">
                    <button type="button" onClick={() => setShowEmojis(current => !current)} aria-expanded={showEmojis} className={`event-emoji-trigger ${showEmojis ? "active" : ""}`}><SmilePlus className="h-5 w-5" />{fr ? "Ajouter un emoji" : "Add an emoji"}</button>
                    <span>{message.length}/1000</span>
                    <button disabled={busy || !name.trim() || !message.trim()} className="event-publish-button"><Send className="h-4 w-4" />{busy ? (fr ? "Publication…" : "Posting…") : (fr ? "Publier" : "Post")}</button>
                </div>
            </form>
            <div className="mt-6 space-y-3">{data.comments.map(item => <article key={item.id} className="rounded bg-white p-5 shadow-sm"><div className="flex flex-wrap items-baseline justify-between gap-2"><strong className="text-sm">{item.authorName}</strong><time className="text-xs text-slate-400">{new Intl.DateTimeFormat(locale, { dateStyle: "medium", timeStyle: "short", timeZone: "Africa/Kinshasa" }).format(new Date(item.createdAt))}</time></div><p className="mt-3 whitespace-pre-wrap text-sm leading-6 text-slate-600">{item.message}</p></article>)}{!data.comments.length && <p className="rounded border border-dashed border-slate-300 p-6 text-center text-sm text-slate-400">{fr ? "Soyez le premier à commenter cet événement." : "Be the first to comment on this event."}</p>}</div>
        </div>
    </section>;
}
