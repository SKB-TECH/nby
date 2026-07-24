"use client";

import { motion } from "framer-motion";
import { Cross, Eye, Sparkles } from "lucide-react";
import type { HomeCopy } from "./HomePage";
import { reveal } from "./motion";

const icons = [Eye, Cross, Sparkles];

export default function DnaSection({ copy: c }: { copy: HomeCopy }) {
    return <section id="dna" className="mx-auto max-w-[1180px] px-5 py-24 text-center sm:px-8"><h2 className="font-serif text-4xl">{c.dnaTitle}</h2><div className="mt-14 grid gap-12 md:grid-cols-3">{c.dna.map((item, i) => { const Icon = icons[i]; return <motion.div key={item[0]} {...reveal}><span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#fff0cf] text-[#df9200]"><Icon className="h-6 w-6" /></span><h3 className="mt-5 font-serif text-2xl">{item[0]}</h3><p className="mx-auto mt-3 max-w-xs text-sm leading-6 text-slate-500">{item[1]}</p></motion.div>; })}</div></section>;
}
