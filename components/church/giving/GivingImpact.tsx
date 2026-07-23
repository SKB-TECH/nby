"use client";

import { motion } from "framer-motion";
import { BookOpenText, Heart, RadioTower } from "lucide-react";
import type { GivingCopy } from "./giving-copy";

const icons = [RadioTower, Heart, BookOpenText];

export default function GivingImpact({ copy }: { copy: GivingCopy }) {
    return <section className="bg-[#fff5df] px-5 py-20 sm:px-8"><div className="mx-auto max-w-[1100px]"><div className="text-center"><p className="text-[10px] font-black uppercase tracking-[.28em] text-[#df9200]">{copy.impactEyebrow}</p><h2 className="mt-4 font-serif text-4xl sm:text-5xl">{copy.impactTitle}</h2></div><div className="mt-12 grid gap-px bg-[#e9dcc1] md:grid-cols-3">{copy.impacts.map(([title, text], index) => { const Icon = icons[index]; return <motion.article key={title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * .1 }} className="bg-[#fffaf0] p-8 sm:p-10"><span className="grid h-12 w-12 place-items-center bg-[#df9200] text-white"><Icon className="h-6 w-6" /></span><h3 className="mt-7 font-serif text-2xl">{title}</h3><p className="mt-3 text-sm leading-7 text-slate-600">{text}</p></motion.article>; })}</div></div></section>;
}
