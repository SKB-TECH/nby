"use client";

import { motion } from "framer-motion";
import ThreeBackground from "@/components/new/ThreeBackground";
import type { EventsCopy } from "./events-copy";

const colors: [string, string, string] = ["#fff4d6", "#f0a40b", "#ffffff"];

export default function EventsHero({ copy }: { copy: EventsCopy }) {
    return <section className="relative overflow-hidden px-5 pb-10 pt-20 text-center sm:px-8"><ThreeBackground className="pointer-events-none absolute inset-0 opacity-35" colors={colors} glowColor="#f0a40b" particleCount={700} particleSize={0.15} speed={0.32} /><motion.div initial="hidden" animate="visible" variants={{ hidden: {}, visible: { transition: { staggerChildren: .12 } } }} className="relative mx-auto max-w-3xl"><motion.p variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0 } }} className="text-[10px] font-bold uppercase tracking-[.3em] text-[#df9200]">NBY · Cité du Surnaturel</motion.p><motion.h1 variants={{ hidden: { opacity: 0, y: 22 }, visible: { opacity: 1, y: 0 } }} className="mt-4 font-serif text-5xl sm:text-7xl">{copy.title}</motion.h1><motion.p variants={{ hidden: { opacity: 0, y: 18 }, visible: { opacity: 1, y: 0 } }} className="mx-auto mt-6 max-w-2xl leading-8 text-slate-600">{copy.intro}</motion.p></motion.div></section>;
}
