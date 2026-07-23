"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import ThreeBackground from "@/components/new/ThreeBackground";
import type { HomeCopy } from "./HomePage";

const churchColors: [string, string, string] = ["#fff4d6", "#f0a40b", "#ffffff"];

export default function HeroSection({ copy: c }: { copy: HomeCopy }) {
    return (
        <section className="relative min-h-[690px] overflow-hidden">
            <Image src="/church/hero-sanctuary.png" alt="Sanctuaire de l’église pendant un rassemblement" fill priority className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#071117]/90 via-[#071117]/55 to-[#071117]/15" />
            <ThreeBackground className="pointer-events-none absolute inset-0 z-[3] opacity-90 mix-blend-screen" colors={churchColors} glowColor="#f0a40b" particleCount={1400} particleSize={0.22} speed={0.48} />
            <motion.div aria-hidden="true" animate={{ opacity: [0.2, 0.46, 0.2], scale: [0.94, 1.08, 0.94] }} transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }} className="pointer-events-none absolute right-[18%] top-[10%] z-[2] h-80 w-80 rounded-full bg-[#f0a40b]/25 blur-[100px]" />
            <motion.div aria-hidden="true" animate={{ opacity: [0.08, 0.24, 0.08], x: [-18, 18, -18] }} transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }} className="pointer-events-none absolute -top-24 right-[30%] z-[2] h-[720px] w-24 rotate-12 bg-gradient-to-b from-white/45 via-[#f0a40b]/15 to-transparent blur-2xl" />
            <div className="relative z-10 mx-auto flex min-h-[690px] max-w-[1240px] items-center px-5 py-24 sm:px-8 lg:px-16">
                <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-2xl text-white">
                    <p className="text-xs font-bold uppercase tracking-[.3em] text-[#f0a40b]">{c.eyebrow}</p>
                    <h1 className="mt-6 font-serif text-5xl leading-[1.05] sm:text-7xl lg:text-[84px]">{c.title}</h1>
                    <p className="mt-6 max-w-xl text-lg leading-8 text-white/80">{c.subtitle}</p>
                    <div className="mt-10 flex flex-wrap gap-4">
                        <a href="#visit" className="inline-flex h-14 items-center gap-3 bg-[#df9200] px-7 text-sm font-bold text-white transition hover:bg-[#b87400]">{c.visit}<ArrowRight className="h-4 w-4" /></a>
                        <a href="#message" className="inline-flex h-14 items-center gap-3 border border-white/40 bg-white/10 px-7 text-sm font-bold text-white backdrop-blur-sm transition hover:bg-white/20"><Play className="h-4 w-4 fill-current" />{c.live}</a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
