"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { YouthCopy } from "./youth-copy";

export default function YouthMentors({ copy }: { copy: YouthCopy }) {
    return <section className="px-5 py-24 text-center sm:px-8"><div className="mx-auto max-w-[1050px]"><p className="text-[10px] font-bold uppercase tracking-[.28em] text-[#df9200]">{copy.mentorsEyebrow}</p><h2 className="mt-4 font-serif text-4xl">{copy.mentorsTitle}</h2><div className="mt-12 grid gap-8 sm:grid-cols-3">{copy.mentors.map((mentor, i) => <motion.article key={mentor[0]} initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} whileHover={{ y: -7 }} viewport={{ once: true }} transition={{ delay: i * .08 }}><div className="relative aspect-square overflow-hidden grayscale transition duration-500 hover:grayscale-0"><Image src="/church/community-fellowship.png" alt={mentor[0]} fill className="object-cover" style={{ objectPosition: `${20 + i * 30}% center` }} /></div><h3 className="mt-5 font-serif text-xl">{mentor[0]}</h3><p className="mt-1 text-[10px] font-bold uppercase tracking-wider text-[#df9200]">{mentor[1]}</p></motion.article>)}</div></div></section>;
}
