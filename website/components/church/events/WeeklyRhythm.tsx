"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Church } from "lucide-react";
import type { EventsCopy } from "./events-copy";

export default function WeeklyRhythm({ copy }: { copy: EventsCopy }) {
    return <section className="bg-[#0d182b] px-5 py-24 text-white sm:px-8"><div className="mx-auto grid max-w-[1180px] items-center gap-16 lg:grid-cols-2"><motion.div initial={{ opacity: 0, x: -35 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}><p className="font-serif text-2xl italic text-[#f0a40b]">{copy.rhythmEyebrow}</p><h2 className="mt-3 font-serif text-4xl">{copy.rhythmTitle}</h2><p className="mt-5 max-w-xl leading-7 text-white/60">{copy.rhythmText}</p><div className="mt-8 divide-y divide-white/10">{copy.rhythm.map(item => <motion.div key={item[0]} whileHover={{ x: 8 }} className="grid grid-cols-[42px_1fr] gap-3 py-5"><span className="font-serif italic text-[#f0a40b]">{item[0]}</span><span><strong className="block text-xs uppercase tracking-wider">{item[1]}</strong><small className="mt-1 block text-white/50">{item[2]}</small></span></motion.div>)}</div></motion.div><motion.div initial={{ opacity: 0, x: 35 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative min-h-[480px] overflow-hidden rounded"><Image src="/church/community-fellowship.png" alt={copy.welcome} fill className="object-cover opacity-55" /><motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 4, repeat: Infinity }} className="absolute inset-x-10 top-1/2 -translate-y-1/2 bg-[#0d182b]/95 p-10 text-center shadow-2xl"><Church className="mx-auto h-9 w-9 text-[#f0a40b]" /><h3 className="mt-4 font-serif text-3xl italic">{copy.welcome}</h3><p className="mt-4 text-sm leading-6 text-white/55">{copy.welcomeText}</p></motion.div></motion.div></div></section>;
}
