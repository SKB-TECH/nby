"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import ThreeBackground from "@/components/new/ThreeBackground";
import type { YouthCopy } from "./youth-copy";

const colors: [string, string, string] = ["#ffffff", "#f0a40b", "#fff0cf"];

export default function YouthHero({ copy }: { copy: YouthCopy }) {
    return <section className="relative min-h-[650px] overflow-hidden bg-[#071117] text-white"><motion.div initial={{ scale: 1.08 }} animate={{ scale: 1 }} transition={{ duration: 1.5 }} className="absolute inset-0"><Image src="/church/community-fellowship.png" alt={copy.title} fill priority className="object-cover" /></motion.div><div className="absolute inset-0 bg-[#071117]/55" /><div className="absolute inset-0 bg-gradient-to-t from-[#071117]/70 via-transparent to-black/20" /><ThreeBackground className="pointer-events-none absolute inset-0 z-[2] opacity-90 mix-blend-screen" colors={colors} glowColor="#f0a40b" particleCount={1400} particleSize={0.22} speed={0.5} /><div className="relative z-10 mx-auto flex min-h-[650px] max-w-[1180px] items-center justify-center px-5 py-24 text-center sm:px-8"><motion.div initial="hidden" animate="visible" variants={{ hidden: {}, visible: { transition: { staggerChildren: .13 } } }} className="max-w-3xl"><motion.p variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0 } }} className="text-[11px] font-bold uppercase tracking-[.3em] text-[#f0a40b]">{copy.eyebrow}</motion.p><motion.h1 variants={{ hidden: { opacity: 0, y: 25 }, visible: { opacity: 1, y: 0 } }} className="mt-5 font-serif text-5xl sm:text-7xl lg:text-8xl">{copy.title}</motion.h1><motion.p variants={{ hidden: { opacity: 0, y: 18 }, visible: { opacity: 1, y: 0 } }} className="mx-auto mt-6 max-w-2xl leading-8 text-white/75">{copy.subtitle}</motion.p><motion.a variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }} whileHover={{ y: -3, scale: 1.03 }} href="#weekly" className="mt-9 inline-flex items-center gap-3 bg-[#df9200] px-7 py-4 text-xs font-bold uppercase tracking-wider">{copy.join}<ArrowRight className="h-4 w-4" /></motion.a></motion.div></div></section>;
}
