"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink, Play } from "lucide-react";
import ThreeBackground from "@/components/new/ThreeBackground";
import { YOUTUBE_CHANNEL, type MessagesCopy } from "./messages-data";

const colors: [string, string, string] = ["#ffffff", "#f0a40b", "#fff0cf"];

export default function MessagesHero({ copy }: { copy: MessagesCopy }) {
    return <section className="relative min-h-[560px] overflow-hidden bg-[#071117] text-white"><Image src="/church/hero-sanctuary.png" alt={copy.title} fill priority className="object-cover opacity-45" /><div className="absolute inset-0 bg-gradient-to-r from-[#071117]/95 via-[#071117]/75 to-transparent" /><ThreeBackground className="pointer-events-none absolute inset-0 z-[2] opacity-90 mix-blend-screen" colors={colors} glowColor="#f0a40b" particleCount={1400} particleSize={0.22} speed={0.48} /><div className="relative z-10 mx-auto flex min-h-[560px] max-w-[1180px] items-center px-5 py-24 sm:px-8"><motion.div initial="hidden" animate="visible" variants={{ hidden: {}, visible: { transition: { staggerChildren: .12 } } }} className="max-w-3xl"><motion.p variants={{ hidden: { opacity: 0, y: 14 }, visible: { opacity: 1, y: 0 } }} className="text-[11px] font-bold uppercase tracking-[.3em] text-[#f0a40b]">{copy.eyebrow}</motion.p><motion.h1 variants={{ hidden: { opacity: 0, y: 25 }, visible: { opacity: 1, y: 0 } }} className="mt-5 font-serif text-5xl sm:text-7xl">{copy.title}</motion.h1><motion.p variants={{ hidden: { opacity: 0, y: 18 }, visible: { opacity: 1, y: 0 } }} className="mt-6 max-w-2xl leading-8 text-white/70">{copy.subtitle}</motion.p><motion.a variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0 } }} whileHover={{ y: -3 }} href={YOUTUBE_CHANNEL} target="_blank" rel="noreferrer" className="mt-9 inline-flex items-center gap-3 bg-[#df9200] px-7 py-4 text-xs font-bold uppercase tracking-wider"><Play className="h-5 w-5" />{copy.channel}<ExternalLink className="h-4 w-4" /></motion.a></motion.div></div></section>;
}
