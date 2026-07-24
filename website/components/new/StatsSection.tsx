"use client";

import { motion } from "framer-motion";
import { useLocale } from "next-intl";
import ThreeBackground from "./ThreeBackground";
import { localeCode, siteCopy } from "./site-copy";

export default function StatsSection() {
    const stats = siteCopy[localeCode(useLocale())].home.stats;

    return (
        <section className="relative overflow-hidden bg-[#102f47] pt-32 pb-12 text-white lg:pt-40 lg:pb-20">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(34,211,238,0.12),transparent_32%)]" />
            <ThreeBackground className="pointer-events-none absolute inset-0 z-[1] opacity-70 mix-blend-screen" />

            <div className="relative z-10 mx-auto max-w-[1420px] px-5 sm:px-8 lg:px-24">
                <div className="grid gap-10 text-center sm:grid-cols-2 lg:grid-cols-4">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 28, scale: 0.96 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            viewport={{ once: true, margin: "-80px" }}
                            transition={{ duration: 0.55, delay: index * 0.08 }}
                        >
                            <div className="text-[56px] font-black leading-none tracking-[-0.05em] text-cyan-300 sm:text-[68px]">
                                {stat.value}
                            </div>
                            <div className="mt-4 text-sm font-extrabold uppercase tracking-[0.16em] text-slate-400">
                                {stat.label}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
