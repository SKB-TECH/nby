"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Quote, Sparkles } from "lucide-react";
import type { HomeCopy } from "./HomePage";
import { reveal } from "./motion";

const portraits = [
    { src: "/church/pastoral-prayer.jpeg", position: "center 35%", number: "01", kind: "prayer" },
    { src: "/church/prophetic-ministry.jpeg", position: "center top", number: "02", kind: "prophecy" },
    { src: "/church/prayer-prophecy-ministry.jpeg", position: "center center", number: "03", kind: "presence" },
] as const;

export default function PrayerProphecySection({ copy: c }: { copy: HomeCopy }) {
    return <section className="relative overflow-hidden bg-[#061117] py-24 text-white lg:py-32">
        <div className="pointer-events-none absolute left-1/2 top-0 h-[520px] w-[800px] -translate-x-1/2 bg-[#df9200]/10 blur-[150px]" />
        <div className="relative mx-auto grid max-w-[1180px] items-end gap-12 px-5 sm:px-8 lg:grid-cols-[1.15fr_.85fr]">
            <motion.div {...reveal}>
                <p className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[.3em] text-[#f0a40b]"><Sparkles className="h-4 w-4" />{c.intensePrayerEyebrow}</p>
                <h2 className="mt-6 max-w-3xl font-serif text-5xl leading-[1.05] sm:text-7xl">{c.intensePrayerTitle}</h2>
            </motion.div>
            <motion.div {...reveal}>
                <p className="text-base leading-8 text-white/60">{c.intensePrayerText}</p>
                <blockquote className="mt-7 flex gap-4 border-t border-white/10 pt-6 font-serif text-lg italic leading-7 text-white/80"><Quote className="mt-1 h-5 w-5 shrink-0 text-[#df9200]" />{c.intensePrayerQuote}</blockquote>
            </motion.div>
        </div>

        <div className="relative mx-auto mt-16 grid max-w-[1380px] gap-4 px-4 md:grid-cols-3 sm:px-6">
            {portraits.map((photo, index) => {
                const title = photo.kind === "prayer" ? c.prayerMomentTitle : photo.kind === "prophecy" ? c.prophecyMomentTitle : c.intensePrayerEyebrow;
                const description = photo.kind === "prayer" ? c.prayerMomentText : photo.kind === "prophecy" ? c.prophecyMomentText : c.intensePrayerText;
                return <motion.article key={photo.src} initial={{ opacity: 0, y: 45 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: .7, delay: index * .12 }} className="group relative aspect-[2/3] min-h-[520px] overflow-hidden border border-white/10 bg-[#0c1a21]">
                    <Image src={photo.src} alt={title} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition duration-1000 group-hover:scale-[1.04]" style={{ objectPosition: photo.position }} />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#061117] via-[#061117]/5 to-transparent" />
                    <span className="absolute right-5 top-5 font-serif text-5xl text-white/25">{photo.number}</span>
                    <div className="absolute inset-x-0 bottom-0 p-7 sm:p-8">
                        <span className="mb-4 block h-px w-12 bg-[#df9200] transition-all duration-500 group-hover:w-24" />
                        <h3 className="font-serif text-3xl">{title}</h3>
                        <p className="mt-3 max-h-32 overflow-hidden text-sm leading-6 text-white/60 opacity-100 transition-all duration-500 md:max-h-0 md:opacity-0 md:group-hover:max-h-32 md:group-hover:opacity-100">{description}</p>
                    </div>
                </motion.article>;
            })}
        </div>
    </section>;
}
