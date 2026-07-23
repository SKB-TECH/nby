"use client";

import { ArrowRight, CalendarDays, Clock3, MapPin } from "lucide-react";
import { Link } from "@/i18n/routing";
import type { HomeCopy } from "./HomePage";

export default function VisitSection({ copy: c }: { copy: HomeCopy }) {
    return <section id="visit" className="bg-white px-5 py-24 sm:px-8"><div className="mx-auto grid max-w-[1180px] gap-12 lg:grid-cols-2"><div><p className="text-xs font-bold uppercase tracking-[.25em] text-[#df9200]">NBY · Cité du Surnaturel</p><h2 className="mt-4 font-serif text-5xl">{c.visitTitle}</h2><div className="mt-9 space-y-6 text-slate-600"><p className="flex gap-4"><MapPin className="h-5 w-5 shrink-0 text-[#df9200]" /><span>{c.address}<small className="mt-1 block text-slate-400">Réf. Huilerie–Dodoma</small></span></p><p className="flex gap-4"><CalendarDays className="h-5 w-5 text-[#df9200]" />{c.service}</p><p className="flex gap-4"><Clock3 className="h-5 w-5 text-[#df9200]" />{c.serviceTime}</p></div><Link href="/contact" className="mt-9 inline-flex h-13 items-center gap-3 bg-[#071117] px-7 text-sm font-bold text-white">{c.visit}<ArrowRight className="h-4 w-4" /></Link></div><div className="relative min-h-96 overflow-hidden rounded-2xl border border-slate-200 bg-[#d9dee6] shadow-xl"><iframe src="https://www.google.com/maps?q=200+Avenue+Dodoma,+Lingwala,+Kinshasa,+RDC&output=embed" title="Carte de NBY — Cité du Surnaturel" className="absolute inset-0 h-full w-full" loading="lazy" referrerPolicy="no-referrer-when-downgrade" /></div></div></section>;
}
