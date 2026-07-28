"use client";

import { FormEvent, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Check, HandHeart, LockKeyhole, Send } from "lucide-react";
import type { HomeCopy } from "./HomePage";
import { publicApi } from "../../../lib/church-api";

export default function PrayerSection({ copy: c }: { copy: HomeCopy }) {
    const [sent, setSent] = useState(false);
    const [sending, setSending] = useState(false);
    const [error, setError] = useState("");
    async function submit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const formElement = event.currentTarget;
        const form = new FormData(formElement);
        setSending(true); setError("");
        try {
            await publicApi("/public/prayer-requests", { method: "POST", body: JSON.stringify({ name: `${form.get("firstName")} ${form.get("lastName")}`.trim(), email: form.get("email"), request: form.get("request"), confidential: true, status: "new" }) });
            formElement.reset();
            setSent(true);
        } catch (submitError) {
            setError(submitError instanceof Error ? submitError.message : "Envoi impossible.");
        } finally { setSending(false); }
    }
    const english = c.first === "First name";
    return <section id="prayer" className="relative overflow-hidden bg-[#241f1b] px-4 py-20 text-white sm:px-8 lg:py-28">
        <div className="pointer-events-none absolute right-0 top-0 h-96 w-96 bg-[#df9200]/10 blur-[120px]" />
        <div className="relative mx-auto grid max-w-[1280px] overflow-hidden border border-white/10 bg-[#302923] shadow-2xl lg:grid-cols-[.92fr_1.08fr]">
            <motion.div initial={{ opacity: 0, x: -35 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: .8 }} className="relative min-h-[540px] lg:min-h-[760px]">
                <Image src="/church/cedu-prayer-section.jpeg" alt="Prophète Cedu Mbuma — NBY" fill sizes="(max-width: 1024px) 100vw, 46vw" className="object-cover object-[55%_center]" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#241f1b] via-[#241f1b]/5 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-[#302923]/45" />
                <div className="absolute inset-x-0 bottom-0 p-8 sm:p-10">
                    <span className="block h-px w-14 bg-[#df9200]" />
                    <p className="mt-5 max-w-md font-serif text-2xl italic leading-9 text-white/90">{english ? "No prayer is too small, and no burden is too heavy to bring before God." : "Aucune prière n’est trop petite, aucun fardeau n’est trop lourd pour être présenté à Dieu."}</p>
                    <p className="mt-4 text-[10px] font-black uppercase tracking-[.18em] text-[#f0a40b]">Prophète Cedu Mbuma</p>
                </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 35 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: .8 }} className="flex flex-col justify-center bg-[#f1ede5] p-7 text-[#172033] sm:p-12 lg:p-16">
                <span className="grid h-14 w-14 place-items-center bg-[#df9200] text-white"><HandHeart className="h-6 w-6" /></span>
                <p className="mt-7 text-[10px] font-black uppercase tracking-[.27em] text-[#df9200]">{english ? "We stand with you" : "Nous prions avec vous"}</p>
                <h2 className="mt-4 max-w-xl font-serif text-4xl leading-tight sm:text-5xl">{c.helpTitle}</h2>
                <p className="mt-5 max-w-xl text-sm leading-7 text-slate-500">{c.helpText}</p>
                {sent ? <div className="mt-9 border border-[#e5d8bd] bg-white p-9 text-center shadow-lg"><Check className="mx-auto h-11 w-11 text-[#df9200]" /><p className="mt-5 font-serif text-2xl">{c.prayerSent}</p><button onClick={() => setSent(false)} className="mt-6 border-b border-[#9d6200] pb-1 text-xs font-bold text-[#9d6200]">{c.anotherPrayer}</button></div> : <form onSubmit={submit} className="mt-9 grid gap-4 sm:grid-cols-2">
                    <label className="text-[9px] font-black uppercase tracking-wider text-slate-500">{c.first}<input name="firstName" required placeholder={c.first} className="mt-2 h-13 w-full border border-[#ded7c9] bg-white px-4 text-sm outline-none transition focus:border-[#df9200]" /></label>
                    <label className="text-[9px] font-black uppercase tracking-wider text-slate-500">{c.last}<input name="lastName" required placeholder={c.last} className="mt-2 h-13 w-full border border-[#ded7c9] bg-white px-4 text-sm outline-none transition focus:border-[#df9200]" /></label>
                    <label className="text-[9px] font-black uppercase tracking-wider text-slate-500 sm:col-span-2">{c.email}<input name="email" required placeholder={c.email} type="email" className="mt-2 h-13 w-full border border-[#ded7c9] bg-white px-4 text-sm outline-none transition focus:border-[#df9200]" /></label>
                    <label className="text-[9px] font-black uppercase tracking-wider text-slate-500 sm:col-span-2">{c.prayer}<textarea name="request" required placeholder={c.prayer} className="mt-2 min-h-36 w-full resize-y border border-[#ded7c9] bg-white p-4 text-sm outline-none transition focus:border-[#df9200]" /></label>
                    {error && <p className="text-xs text-red-600 sm:col-span-2">{error}</p>}
                    <p className="flex items-center gap-2 text-[9px] leading-5 text-slate-400 sm:col-span-2"><LockKeyhole className="h-4 w-4 shrink-0 text-[#df9200]" />{english ? "Your request remains confidential and is entrusted only to the prayer team." : "Votre demande reste confidentielle et sera confiée uniquement à l’équipe de prière."}</p>
                    <button disabled={sending} className="flex h-14 items-center justify-center gap-3 bg-[#071117] text-xs font-black uppercase tracking-wider text-white transition hover:bg-[#df9200] disabled:opacity-50 sm:col-span-2">{sending ? c.sending : c.send}<Send className="h-4 w-4" /></button>
                </form>}
            </motion.div>
        </div>
    </section>;
}
