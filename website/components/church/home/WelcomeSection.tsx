"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import type { HomeCopy } from "./HomePage";
import { reveal } from "./motion";

export default function WelcomeSection({ copy: c }: { copy: HomeCopy }) {
    return (
        <section className="mx-auto grid max-w-[1180px] items-center gap-14 px-5 py-24 sm:px-8 lg:grid-cols-[.8fr_1.2fr] lg:py-32">
            <motion.div {...reveal} className="relative mx-auto w-full max-w-md"><Image src="/church/prophete-cedu-mbuma.jpeg" alt="Prophète Cedu Mbuma" width={384} height={512} className="aspect-[3/4] w-full bg-[#181818] object-cover object-top shadow-[18px_18px_0_#f0a40b]" /></motion.div>
            <motion.div {...reveal}>
                <p className="text-xs font-bold uppercase tracking-[.25em] text-[#df9200]">{c.welcomeEyebrow}</p>
                <h2 className="mt-5 max-w-2xl font-serif text-4xl leading-[1.08] sm:text-6xl">{c.welcomeTitle}</h2>
                <p className="mt-7 max-w-xl text-base leading-8 text-slate-600">{c.welcomeText}</p>
                <p className="mt-7 font-serif text-xl">{c.pastor}</p><p className="text-xs uppercase tracking-widest text-slate-400">{c.pastorRole}</p>
                <a href="#dna" className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-[#9a6c1d]">{c.learn}<ArrowRight className="h-4 w-4" /></a>
            </motion.div>
        </section>
    );
}
