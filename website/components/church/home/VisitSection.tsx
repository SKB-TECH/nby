"use client";

import { FormEvent, useState } from "react";
import { ArrowRight, CalendarDays, Check, Clock3, MapPin, X } from "lucide-react";
import { Link } from "@/i18n/routing";
import type { HomeCopy } from "./HomePage";
import { publicApi } from "@/lib/church-api";

export default function VisitSection({ copy: c }: { copy: HomeCopy }) {
    const [open, setOpen] = useState(false);
    const [sent, setSent] = useState(false);
    const [error, setError] = useState("");
    async function submit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const form = new FormData(event.currentTarget);
        setError("");
        try {
            await publicApi("/public/visitors", { method: "POST", body: JSON.stringify({ firstName: form.get("firstName"), lastName: form.get("lastName"), phone: form.get("phone"), email: form.get("email"), firstVisitAt: form.get("firstVisitAt"), visitReason: "Première visite planifiée depuis le site", status: "new", consentToContact: true }) });
            setSent(true);
        } catch (submitError) { setError(submitError instanceof Error ? submitError.message : "Enregistrement impossible."); }
    }
    return <section id="visit" className="bg-white px-5 py-24 sm:px-8"><div className="mx-auto grid max-w-[1180px] gap-12 lg:grid-cols-2"><div><p className="text-xs font-bold uppercase tracking-[.25em] text-[#df9200]">NBY · Cité du Surnaturel</p><h2 className="mt-4 font-serif text-5xl">{c.visitTitle}</h2><div className="mt-9 space-y-6 text-slate-600"><p className="flex gap-4"><MapPin className="h-5 w-5 shrink-0 text-[#df9200]" /><span>{c.address}<small className="mt-1 block text-slate-400">Réf. Huilerie–Dodoma</small></span></p><p className="flex gap-4"><CalendarDays className="h-5 w-5 text-[#df9200]" />{c.service}</p><p className="flex gap-4"><Clock3 className="h-5 w-5 text-[#df9200]" />{c.serviceTime}</p></div><div className="mt-9 flex flex-wrap gap-3"><button onClick={() => { setOpen(true); setSent(false); }} className="inline-flex h-13 items-center gap-3 bg-[#df9200] px-7 text-sm font-bold text-white">{c.announceVisit}<ArrowRight className="h-4 w-4" /></button><Link href="/contact" className="inline-flex h-13 items-center gap-3 bg-[#071117] px-7 text-sm font-bold text-white">{c.visit}</Link></div></div><div className="relative min-h-96 overflow-hidden rounded-2xl border border-slate-200 bg-[#d9dee6] shadow-xl"><iframe src="https://www.google.com/maps?q=200+Avenue+Dodoma,+Lingwala,+Kinshasa,+RDC&output=embed" title="Carte de NBY — Cité du Surnaturel" className="absolute inset-0 h-full w-full" loading="lazy" referrerPolicy="no-referrer-when-downgrade" /></div></div>
        {open && <div className="fixed inset-0 z-[80] grid place-items-center bg-[#071117]/80 p-5 backdrop-blur-sm" onMouseDown={() => setOpen(false)}><form onSubmit={submit} onMouseDown={e => e.stopPropagation()} className="relative w-full max-w-lg bg-white p-8 shadow-2xl"><button type="button" onClick={() => setOpen(false)} className="absolute right-5 top-5"><X /></button>{sent ? <div className="py-8 text-center"><Check className="mx-auto h-12 w-12 text-[#df9200]" /><h3 className="mt-5 font-serif text-3xl">{c.visitorSent}</h3></div> : <><h3 className="font-serif text-3xl">{c.visitorTitle}</h3><p className="mt-3 text-sm leading-6 text-slate-500">{c.visitorText}</p><div className="mt-7 grid gap-3 sm:grid-cols-2"><input name="firstName" required placeholder={c.first} className="h-13 border border-slate-200 px-4 outline-none focus:border-[#df9200]" /><input name="lastName" required placeholder={c.last} className="h-13 border border-slate-200 px-4 outline-none focus:border-[#df9200]" /><input name="phone" required type="tel" placeholder="Téléphone / WhatsApp" className="h-13 border border-slate-200 px-4 outline-none focus:border-[#df9200] sm:col-span-2" /><input name="email" type="email" placeholder={c.email} className="h-13 border border-slate-200 px-4 outline-none focus:border-[#df9200] sm:col-span-2" /><label className="text-[10px] font-bold uppercase text-slate-500 sm:col-span-2">Date prévue<input name="firstVisitAt" required type="date" className="mt-2 h-13 w-full border border-slate-200 px-4 outline-none focus:border-[#df9200]" /></label>{error && <p className="text-xs text-red-600 sm:col-span-2">{error}</p>}<button className="h-14 bg-[#df9200] text-xs font-black uppercase text-white sm:col-span-2">{c.announceVisit}</button></div></>}</form></div>}
    </section>;
}
