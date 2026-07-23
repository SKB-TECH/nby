"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { YouthCopy } from "./youth-copy";

export default function YouthEvents({ copy }: { copy: YouthCopy }) {
    return <section className="bg-[#f7f8fc] px-5 py-24 sm:px-8"><div className="mx-auto max-w-[1180px]"><p className="text-[10px] font-bold uppercase tracking-[.28em] text-[#df9200]">NBY Youth</p><h2 className="mt-3 font-serif text-4xl">{copy.eventsTitle}</h2><div className="mt-10 grid auto-rows-[210px] gap-4 md:grid-cols-2 lg:grid-cols-3">{copy.events.map((event, i) => <motion.article key={event[0]} initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} whileHover={{ y: -6 }} viewport={{ once: true }} className={`group relative overflow-hidden ${i === 0 ? "md:row-span-2 lg:col-span-2" : ""}`}><Image src={i % 2 ? "/church/community-fellowship.png" : "/church/hero-sanctuary.png"} alt={event[0]} fill className="object-cover transition duration-700 group-hover:scale-110" /><div className="absolute inset-0 bg-gradient-to-t from-[#071117]/95 via-[#071117]/20 to-transparent" /><div className="absolute inset-x-0 bottom-0 p-6 text-white"><h3 className="font-serif text-2xl">{event[0]}</h3><p className="mt-2 max-w-xl text-sm leading-6 text-white/65">{event[1]}</p></div></motion.article>)}</div></div></section>;
}
