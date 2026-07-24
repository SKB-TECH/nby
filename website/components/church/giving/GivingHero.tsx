"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { HeartHandshake } from "lucide-react";
import ThreeBackground from "@/components/new/ThreeBackground";
import type { GivingCopy } from "./giving-copy";

export default function GivingHero({ copy }: { copy: GivingCopy }) {
    return (
        <section className="relative min-h-[540px] overflow-hidden bg-[#071117] text-white">
            <Image src="/church/hero-sanctuary.png" alt="" fill priority className="object-cover opacity-30" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#071117] via-[#071117]/85 to-[#071117]/40" />
            <ThreeBackground className="pointer-events-none absolute inset-0 z-[2] opacity-80 mix-blend-screen" colors={["#ffffff", "#f0a40b", "#fff0cf"]} glowColor="#f0a40b" particleCount={1200} particleSize={0.2} speed={0.4} />
            <div className="relative z-10 mx-auto flex min-h-[540px] max-w-[1180px] items-center px-5 py-24 sm:px-8">
                <motion.div initial="hidden" animate="visible" variants={{ hidden: {}, visible: { transition: { staggerChildren: .12 } } }} className="max-w-3xl">
                    <motion.p variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0 } }} className="flex items-center gap-3 text-[11px] font-black uppercase tracking-[.3em] text-[#f0a40b]"><HeartHandshake className="h-5 w-5" />{copy.eyebrow}</motion.p>
                    <motion.h1 variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } }} className="mt-6 max-w-2xl font-serif text-5xl leading-[1.05] sm:text-7xl">{copy.title}</motion.h1>
                    <motion.p variants={{ hidden: { opacity: 0, y: 18 }, visible: { opacity: 1, y: 0 } }} className="mt-7 max-w-2xl text-base leading-8 text-white/70">{copy.intro}</motion.p>
                    <motion.blockquote variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }} className="mt-8 border-l-2 border-[#df9200] pl-5 font-serif text-xl italic text-white/90">“{copy.verse}” <span className="mt-2 block font-sans text-[10px] font-black not-italic uppercase tracking-[.2em] text-[#f0a40b]">{copy.reference}</span></motion.blockquote>
                </motion.div>
            </div>
        </section>
    );
}
