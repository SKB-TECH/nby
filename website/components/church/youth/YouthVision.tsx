"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { YouthCopy } from "./youth-copy";

export default function YouthVision({ copy }: { copy: YouthCopy }) {
    return <section className="px-5 py-24 sm:px-8 lg:py-32"><div className="mx-auto grid max-w-[1100px] items-center gap-16 lg:grid-cols-2"><motion.div initial={{ opacity: 0, x: -35 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}><p className="text-[10px] font-bold uppercase tracking-[.28em] text-[#df9200]">{copy.visionEyebrow}</p><h2 className="mt-5 font-serif text-4xl sm:text-5xl">{copy.visionTitle}</h2><p className="mt-7 leading-8 text-slate-600">{copy.visionText}</p></motion.div><motion.div initial={{ opacity: 0, x: 35 }} whileInView={{ opacity: 1, x: 0 }} whileHover={{ rotate: .8 }} viewport={{ once: true }} className="relative aspect-[4/5] overflow-hidden shadow-xl"><Image src="/church/hero-sanctuary.png" alt={copy.visionTitle} fill className="object-cover" /></motion.div></div></section>;
}
