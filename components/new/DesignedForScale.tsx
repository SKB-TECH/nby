"use client";

import { motion } from "framer-motion";
import { useLocale } from "next-intl";
import { ArrowRight, Building2, CheckCircle2, Landmark, UsersRound } from "lucide-react";
import ThreeBackground from "./ThreeBackground";
import { localeCode, siteCopy } from "./site-copy";

export default function DesignedForScale() {
    const copy = siteCopy[localeCode(useLocale())].home;
    const icons = [Landmark, Building2, UsersRound];

    return (
        <section id="solutions" className="relative overflow-hidden bg-[#102f47] py-32 text-white lg:py-44">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(18,58,86,0.34),transparent_28%),radial-gradient(circle_at_78%_65%,rgba(34,211,238,0.16),transparent_30%)]" />
            <ThreeBackground className="pointer-events-none absolute inset-0 z-[1] opacity-55 mix-blend-screen" />

            <div className="relative z-10 mx-auto max-w-[1420px] px-5 sm:px-8 lg:px-24">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-120px" }}
                    transition={{ duration: 0.7 }}
                    className="mx-auto max-w-4xl text-center"
                >
                    <h2 className="text-[40px] font-black leading-tight tracking-[-0.035em] sm:text-[56px]">
                        {copy.scaleTitle}
                    </h2>
                    <p className="mt-7 text-xl font-medium leading-8 text-slate-400">
                        {copy.scaleSubtitle}
                    </p>
                </motion.div>

                <div className="mt-28 grid gap-10 lg:grid-cols-3">
                    {copy.segments.map((segment, index) => {
                        const Icon = icons[index];

                        return (
                            <motion.article
                                key={segment.title}
                                initial={{ opacity: 0, y: 34 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-90px" }}
                                transition={{ duration: 0.65, delay: index * 0.12 }}
                                whileHover={{ y: -8 }}
                                className="rounded-lg border border-white/5 bg-white/[0.06] p-9 shadow-2xl shadow-black/20 transition-colors hover:bg-white/[0.08]"
                            >
                                <div className="mb-9 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#123a56] to-cyan-500 shadow-lg shadow-cyan-900/25">
                                    <Icon className="h-8 w-8 text-white" />
                                </div>

                                <h3 className="text-[32px] font-black tracking-[-0.03em]">
                                    {segment.title}
                                </h3>
                                <p className="mt-5 min-h-[104px] text-lg font-medium leading-8 text-slate-400">
                                    {segment.heading}
                                </p>
                                <p className="mt-4 text-sm font-medium leading-7 text-slate-400">
                                    {segment.description}
                                </p>

                                <ul className="mt-8 space-y-5">
                                    {segment.features.map((feature) => (
                                        <li key={feature} className="flex items-center gap-4 text-base font-bold text-slate-300">
                                            <CheckCircle2 className="h-5 w-5 text-cyan-300" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>

                                <a
                                    href="#methodology"
                                    className="mt-12 inline-flex items-center gap-3 text-lg font-extrabold text-cyan-300"
                                >
                                    {segment.cta}
                                    <ArrowRight className="h-5 w-5" />
                                </a>
                            </motion.article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
