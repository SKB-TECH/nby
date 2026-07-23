"use client";

import { HandHeart } from "lucide-react";
import type { HomeCopy } from "./HomePage";

export default function PrayerSection({ copy: c }: { copy: HomeCopy }) {
    return <section id="prayer" className="bg-[#fffaf0] px-5 py-24 sm:px-8"><div className="mx-auto max-w-3xl text-center"><HandHeart className="mx-auto h-9 w-9 text-[#df9200]" /><h2 className="mt-5 font-serif text-4xl">{c.helpTitle}</h2><p className="mt-4 text-slate-500">{c.helpText}</p><form className="mt-10 grid gap-4 bg-white p-7 text-left shadow-xl sm:grid-cols-2"><input aria-label={c.first} placeholder={c.first} className="h-12 border border-slate-200 px-4 text-sm outline-none focus:border-[#e6a31a]" /><input aria-label={c.last} placeholder={c.last} className="h-12 border border-slate-200 px-4 text-sm outline-none focus:border-[#e6a31a]" /><input aria-label={c.email} placeholder={c.email} type="email" className="h-12 border border-slate-200 px-4 text-sm outline-none focus:border-[#e6a31a] sm:col-span-2" /><textarea aria-label={c.prayer} placeholder={c.prayer} className="min-h-32 border border-slate-200 p-4 text-sm outline-none focus:border-[#e6a31a] sm:col-span-2" /><button type="button" className="h-13 bg-[#071117] text-sm font-bold text-white sm:col-span-2">{c.send}</button></form></div></section>;
}
