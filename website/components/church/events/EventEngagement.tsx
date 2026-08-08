"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import { Check, Heart, MessageCircle, Pencil, Send, Share2, SmilePlus, Trash2, X } from "lucide-react";
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
    const [editingId, setEditingId] = useState<string | null>(null);
    const [editingMessage, setEditingMessage] = useState("");
    const [replyingTo, setReplyingTo] = useState<string | null>(null);
    const [replyMessage, setReplyMessage] = useState("");
    const messageRef = useRef<HTMLTextAreaElement>(null);
    const nameRef = useRef<HTMLInputElement>(null);
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
        if (busy || !message.trim()) return;
        if (!name.trim()) { nameRef.current?.focus(); nameRef.current?.reportValidity(); return; }
        setBusy(true);
        try {
            const response = await publicApi<ActivityEngagement>(`/public/activities/${eventId}/comments`, { method: "POST", body: JSON.stringify({ visitorId: visitorId(), authorName: name, message }) });
            setData(current => ({ ...response, liked: current.liked }));
            setMessage("");
        } finally { setBusy(false); }
    }

    async function share() {
        const url = new URL(window.location.href);
        url.search = "";
        url.hash = "";
        const shareMessage = fr
            ? `✨ ${title}\n\nDécouvrez cet événement de NBY · Cité du Surnaturel.\n\n🔗 ${url.toString()}`
            : `✨ ${title}\n\nDiscover this event from NBY · City of the Supernatural.\n\n🔗 ${url.toString()}`;
        try {
            if (navigator.share) await navigator.share({ title, text: shareMessage });
            else { await navigator.clipboard.writeText(url.toString()); setShared(true); window.setTimeout(() => setShared(false), 2500); }
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

    async function saveComment(commentId: string) {
        if (busy || editingMessage.trim().length < 2) return;
        setBusy(true);
        try {
            setData(await publicApi<ActivityEngagement>(`/public/activities/${eventId}/comments/${commentId}`, { method: "PATCH", body: JSON.stringify({ visitorId: visitorId(), message: editingMessage }) }));
            setEditingId(null);
            setEditingMessage("");
        } finally { setBusy(false); }
    }

    async function removeComment(commentId: string) {
        if (busy || !window.confirm(fr ? "Supprimer définitivement ce commentaire ?" : "Delete this comment permanently?")) return;
        setBusy(true);
        try {
            setData(await publicApi<ActivityEngagement>(`/public/activities/${eventId}/comments/${commentId}?visitorId=${encodeURIComponent(visitorId())}`, { method: "DELETE" }));
        } finally { setBusy(false); }
    }

    async function toggleCommentLike(commentId: string, liked: boolean) {
        if (busy) return;
        setBusy(true);
        try {
            setData(await publicApi<ActivityEngagement>(`/public/activities/${eventId}/comments/${commentId}/like`, { method: "POST", body: JSON.stringify({ visitorId: visitorId(), liked: !liked }) }));
        } finally { setBusy(false); }
    }

    async function reply(commentId: string) {
        if (busy || !name.trim() || replyMessage.trim().length < 2) return;
        setBusy(true);
        try {
            setData(await publicApi<ActivityEngagement>(`/public/activities/${eventId}/comments`, { method: "POST", body: JSON.stringify({ visitorId: visitorId(), parentId: commentId, authorName: name, message: replyMessage }) }));
            setReplyingTo(null);
            setReplyMessage("");
        } finally { setBusy(false); }
    }

    const renderComment = (item: ActivityEngagement["comments"][number], isReply = false) => <article key={item.id} className={`event-comment-card ${isReply ? "reply" : ""}`}><span className="event-comment-avatar">{item.authorName.trim().charAt(0).toUpperCase()}</span><div><header><span><strong>{item.authorName}</strong>{item.owned && <small>{fr ? "Votre commentaire" : "Your comment"}</small>}</span><time>{new Intl.DateTimeFormat(locale, { dateStyle: "medium", timeStyle: "short", timeZone: "Africa/Kinshasa" }).format(new Date(item.createdAt))}</time></header>{editingId === item.id ? <div className="event-comment-edit"><textarea value={editingMessage} onChange={event => setEditingMessage(event.target.value)} maxLength={1000} autoFocus /><div><button type="button" onClick={() => { setEditingId(null); setEditingMessage(""); }}><X />{fr ? "Annuler" : "Cancel"}</button><button type="button" disabled={busy || editingMessage.trim().length < 2} onClick={() => void saveComment(item.id)}><Check />{fr ? "Enregistrer" : "Save"}</button></div></div> : <><p>{item.message}</p><footer><button type="button" className={item.liked ? "liked" : ""} onClick={() => void toggleCommentLike(item.id, item.liked)}><Heart fill={item.liked ? "currentColor" : "none"} />{item.likes || ""} {fr ? "J’aime" : "Like"}</button>{!isReply && <button type="button" onClick={() => { setReplyingTo(current => current === item.id ? null : item.id); setReplyMessage(""); }}><MessageCircle />{fr ? "Répondre" : "Reply"}</button>}{item.owned && <><button type="button" onClick={() => { setEditingId(item.id); setEditingMessage(item.message); }}><Pencil />{fr ? "Modifier" : "Edit"}</button><button type="button" className="delete" onClick={() => void removeComment(item.id)}><Trash2 />{fr ? "Supprimer" : "Delete"}</button></>}</footer>{replyingTo === item.id && <div className="event-reply-form"><textarea value={replyMessage} onChange={event => setReplyMessage(event.target.value)} maxLength={1000} autoFocus placeholder={name.trim() ? (fr ? "Écrivez votre réponse…" : "Write your reply…") : (fr ? "Indiquez d’abord votre nom ci-dessus…" : "Enter your name above first…")} /><div><button type="button" onClick={() => setReplyingTo(null)}>{fr ? "Annuler" : "Cancel"}</button><button type="button" disabled={busy || !name.trim() || replyMessage.trim().length < 2} onClick={() => void reply(item.id)}><Send />{fr ? "Répondre" : "Reply"}</button></div></div>}</>}</div></article>;

    return <section className="mt-14 border-t border-slate-200 pt-10">
        <div className="flex flex-wrap gap-3">
            <button type="button" onClick={() => void toggleLike()} disabled={busy} className={`event-social-button ${data.liked ? "active" : ""}`}><Heart className="h-5 w-5" fill={data.liked ? "currentColor" : "none"} />{data.likes} {fr ? "J’aime" : "Like"}</button>
            <a href="#event-comments" className="event-social-button"><MessageCircle className="h-5 w-5" />{data.comments.length} {fr ? "Commentaire(s)" : "Comment(s)"}</a>
            <button type="button" onClick={() => void share()} className="event-social-button">{shared ? <Check className="h-5 w-5" /> : <Share2 className="h-5 w-5" />}{shared ? (fr ? "Lien copié" : "Link copied") : (fr ? "Partager" : "Share")}</button>
        </div>
        <div id="event-comments" className="event-comments mt-10"><div className="event-comments-heading"><span><MessageCircle /></span><div><p>{fr ? "La communauté réagit" : "Community reactions"}</p><h2>{fr ? "Commentaires" : "Comments"}</h2></div></div>
            <form onSubmit={comment} className="event-comment-form social-composer">
                <div className="social-composer-row">
                    <span className="social-composer-avatar">{name.trim() ? name.trim().charAt(0).toUpperCase() : "N"}</span>
                    <div className="social-composer-content">
                        <label className="social-name-field"><span>{fr ? "Votre nom" : "Your name"}</span><input ref={nameRef} value={name} onChange={event => setName(event.target.value)} maxLength={80} required placeholder={fr ? "Ex. Benjamin" : "E.g. Benjamin"} /></label>
                        <div className="event-message-field social-message-field"><textarea ref={messageRef} value={message} onChange={event => setMessage(event.target.value)} maxLength={1000} required rows={2} placeholder={fr ? "Écrire un commentaire…" : "Write a comment…"} />
                    {showEmojis && <div className="event-emoji-picker" role="group" aria-label={fr ? "Choisir un emoji" : "Choose an emoji"}><div className="event-emoji-picker-head"><strong>{fr ? "Choisir un emoji" : "Choose an emoji"}</strong><button type="button" onClick={() => setShowEmojis(false)} aria-label={fr ? "Fermer les emojis" : "Close emojis"}><X /></button></div>{COMMENT_EMOJIS.map(emoji => <button key={emoji} type="button" onClick={() => addEmoji(emoji)} aria-label={emoji}>{emoji}</button>)}</div>}
                            <div className="event-comment-actions"><button type="button" onClick={() => setShowEmojis(current => !current)} aria-expanded={showEmojis} aria-label={fr ? "Ajouter un emoji" : "Add an emoji"} className={`event-emoji-trigger ${showEmojis ? "active" : ""}`}><SmilePlus /></button><small>{message.length ? `${message.length}/1000` : (fr ? "Soyez respectueux et bienveillant" : "Be respectful and kind")}</small><button disabled={busy || !message.trim()} className="event-publish-button"><span>{busy ? "…" : (fr ? "Publier" : "Post")}</span><Send /></button></div>
                        </div>
                    </div>
                </div>
            </form>
            <div className="event-comment-feed">{data.comments.filter(item => !item.parentId).map(item => <div key={item.id} className="event-comment-thread">{renderComment(item)}{data.comments.filter(reply => reply.parentId === item.id).reverse().map(reply => renderComment(reply, true))}</div>)}{!data.comments.length && <div className="event-comments-empty"><MessageCircle /><strong>{fr ? "La conversation commence ici" : "The conversation starts here"}</strong><p>{fr ? "Soyez le premier à partager un mot d’encouragement." : "Be the first to share a word of encouragement."}</p></div>}</div>
        </div>
    </section>;
}
