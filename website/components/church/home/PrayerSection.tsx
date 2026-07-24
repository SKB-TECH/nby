"use client";

import { FormEvent, useState } from "react";
import { Check, HandHeart } from "lucide-react";
import type { HomeCopy } from "./HomePage";
import { publicApi } from "@/lib/church-api";

export default function PrayerSection({ copy: c }: { copy: HomeCopy }) {
    const [sent, setSent] = useState(false);
    const [sending, setSending] = useState(false);
    const [error, setError] = useState("");
    async function submit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const form = new FormData(event.currentTarget);
        setSending(true); setError("");
        try {
            await publicApi("/public/prayer-requests", { method: "POST", body: JSON.stringify({ name: `${form.get("firstName")} ${form.get("lastName")}`.trim(), email: form.get("email"), request: form.get("request"), confidential: true, status: "new" }) });
            event.currentTarget.reset();
            setSent(true);
        } catch (submitError) {
            setError(submitError instanceof Error ? submitError.message : "Envoi impossible.");
        } finally { setSending(false); }
    }
    return <section id="prayer" className="bg-[#fffaf0] px-5 py-24 sm:px-8"><div className="mx-auto max-w-3xl text-center"><HandHeart className="mx-auto h-9 w-9 text-[#df9200]" /><h2 className="mt-5 font-serif text-4xl">{c.helpTitle}</h2><p className="mt-4 text-slate-500">{c.helpText}</p>{sent ? <div className="mt-10 bg-white p-10 shadow-xl"><Check className="mx-auto h-10 w-10 text-[#df9200]" /><p className="mt-4 font-serif text-2xl">{c.prayerSent}</p><button onClick={() => setSent(false)} className="mt-6 text-xs font-bold text-[#9d6200] underline">{c.anotherPrayer}</button></div> : <form onSubmit={submit} className="mt-10 grid gap-4 bg-white p-7 text-left shadow-xl sm:grid-cols-2"><input name="firstName" required aria-label={c.first} placeholder={c.first} className="h-12 border border-slate-200 px-4 text-sm outline-none focus:border-[#e6a31a]" /><input name="lastName" required aria-label={c.last} placeholder={c.last} className="h-12 border border-slate-200 px-4 text-sm outline-none focus:border-[#e6a31a]" /><input name="email" required aria-label={c.email} placeholder={c.email} type="email" className="h-12 border border-slate-200 px-4 text-sm outline-none focus:border-[#e6a31a] sm:col-span-2" /><textarea name="request" required aria-label={c.prayer} placeholder={c.prayer} className="min-h-32 border border-slate-200 p-4 text-sm outline-none focus:border-[#e6a31a] sm:col-span-2" />{error && <p className="text-xs text-red-600 sm:col-span-2">{error}</p>}<button disabled={sending} className="h-13 bg-[#071117] text-sm font-bold text-white disabled:opacity-50 sm:col-span-2">{sending ? c.sending : c.send}</button></form>}</div></section>;
}
