"use client";

import { HeartHandshake } from "lucide-react";
import type { HomeCopy } from "./HomePage";

export default function GivingSection({ copy: c }: { copy: HomeCopy }) {
    return <section className="bg-[#fff5df] px-5 py-20 sm:px-8"><div className="mx-auto grid max-w-[980px] items-center gap-10 lg:grid-cols-[1fr_.8fr]"><div><HeartHandshake className="h-9 w-9 text-[#df9200]" /><h2 className="mt-4 font-serif text-4xl">{c.givingTitle}</h2><p className="mt-4 max-w-xl leading-7 text-slate-600">{c.givingText}</p></div><div className="bg-white p-7 shadow-sm"><div className="grid grid-cols-3 gap-3">{["25 $", "50 $", "100 $"].map(v => <button key={v} className="border border-slate-200 py-3 text-sm font-bold">{v}</button>)}</div><button className="mt-4 h-13 w-full bg-[#df9200] text-sm font-bold text-white">{c.give}</button></div></div></section>;
}
