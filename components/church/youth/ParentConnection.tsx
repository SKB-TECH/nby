"use client";

import { motion } from "framer-motion";
import type { YouthCopy } from "./youth-copy";

export default function ParentConnection({ copy }: { copy: YouthCopy }) {
    return <section className="bg-[#f7f8fc] px-5 py-20 sm:px-8"><motion.div initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mx-auto grid max-w-[1180px] gap-10 bg-[#05090c] p-8 text-white sm:p-12 lg:grid-cols-[1fr_.8fr]"><div><h2 className="font-serif text-4xl">{copy.parentsTitle}</h2><p className="mt-5 max-w-xl leading-7 text-white/65">{copy.parentsText}</p><div className="mt-7 flex flex-wrap gap-3"><button className="bg-[#df9200] px-6 py-3 text-xs font-bold uppercase">{copy.guide}</button><button className="border border-white/30 px-6 py-3 text-xs font-bold uppercase">{copy.contact}</button></div></div><blockquote className="border border-[#df9200]/40 p-7 font-serif text-2xl italic leading-9">{copy.quote}</blockquote></motion.div></section>;
}
