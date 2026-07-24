"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CalendarCheck } from "lucide-react";
import ThreeBackground from "@/components/new/ThreeBackground";
import type { ContactCopy } from "./contact-copy";

const colors: [string, string, string] = ["#ffffff", "#f0a40b", "#fff0cf"];

export default function ContactHero({ copy }: { copy: ContactCopy }) {
    return <section className="relative min-h-[480px] overflow-hidden bg-[#071117] text-white"><Image src="/church/hero-sanctuary.png" alt={copy.title} fill priority className="object-cover opacity-40" /><div className="absolute inset-0 bg-gradient-to-r from-[#071117]/95 via-[#071117]/70 to-transparent" /><ThreeBackground className="pointer-events-none absolute inset-0 z-[2] opacity-85 mix-blend-screen" colors={colors} glowColor="#f0a40b" particleCount={1200} particleSize={0.21} speed={0.45} /><div className="relative z-10 mx-auto flex min-h-[480px] max-w-[1180px] items-center px-5 py-20 sm:px-8"><motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} className="max-w-2xl"><CalendarCheck className="h-10 w-10 text-[#f0a40b]" /><p className="mt-6 text-[11px] font-bold uppercase tracking-[.3em] text-[#f0a40b]">{copy.eyebrow}</p><h1 className="mt-5 font-serif text-5xl sm:text-7xl">{copy.title}</h1><p className="mt-6 max-w-xl leading-8 text-white/70">{copy.subtitle}</p></motion.div></div></section>;
}
