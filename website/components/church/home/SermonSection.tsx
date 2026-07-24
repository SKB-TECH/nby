"use client";

import Image from "next/image";
import { ArrowRight, BookOpen, Play } from "lucide-react";
import type { HomeCopy } from "./HomePage";

export default function SermonSection({ copy: c }: { copy: HomeCopy }) {
    return <section id="message" className="bg-[#071117] px-5 py-24 text-white sm:px-8"><div className="relative mx-auto grid max-w-[1180px] items-center gap-12 lg:grid-cols-[1.2fr_.8fr]">
        <div><p className="text-xs font-bold uppercase tracking-[.25em] text-[#f0a40b]">{c.sermonEyebrow}</p><h2 className="mt-4 font-serif text-5xl">{c.sermonTitle}</h2><div className="group relative mt-8 aspect-video overflow-hidden"><Image src="/church/hero-sanctuary.png" alt="" fill className="object-cover opacity-75" /><span className="absolute inset-0 grid place-items-center"><span className="grid h-20 w-20 place-items-center rounded-full bg-white text-[#071117]"><Play className="ml-1 h-7 w-7 fill-current" /></span></span></div></div>
        <div><BookOpen className="h-10 w-10 text-[#f0a40b]" /><h3 className="mt-6 font-serif text-4xl">{c.sermonName}</h3><p className="mt-5 leading-8 text-white/60">{c.sermonText}</p><button className="mt-8 inline-flex h-13 items-center gap-3 border border-white/20 px-6 text-sm font-bold">{c.watch}<ArrowRight className="h-4 w-4" /></button></div>
    </div></section>;
}
