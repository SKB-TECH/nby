"use client";

import { HeartHandshake } from "lucide-react";
import { Link } from "@/i18n/routing";
import type { HomeCopy } from "./HomePage";

export default function GivingSection({ copy: c }: { copy: HomeCopy }) {
    return <section className="bg-[#fff5df] px-5 py-20 sm:px-8"><div className="mx-auto grid max-w-[980px] items-center gap-10 lg:grid-cols-[1fr_.8fr]"><div><HeartHandshake className="h-9 w-9 text-[#df9200]" /><h2 className="mt-4 font-serif text-4xl">{c.givingTitle}</h2><p className="mt-4 max-w-xl leading-7 text-slate-600">{c.givingText}</p></div><div className="bg-white p-7 shadow-sm"><div className="grid grid-cols-3 gap-3">{["25 $", "50 $", "100 $"].map(v => <span key={v} className="border border-slate-200 py-3 text-center text-sm font-bold">{v}</span>)}</div><Link href="/give" className="mt-4 flex h-13 w-full items-center justify-center bg-[#df9200] text-sm font-bold text-white transition hover:bg-[#071117]">{c.give}</Link></div></div></section>;
}
