"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useLocale } from "next-intl";
import { BarChart3, BrainCircuit, Database, Search, TrendingUp } from "lucide-react";
import { localeCode, siteCopy } from "./site-copy";

export default function IntelligenceSection() {
    const copy = siteCopy[localeCode(useLocale())].home;
    const icons = [Search, BrainCircuit, BarChart3];
    const stepIcons = [Database, BrainCircuit, TrendingUp];

    return (
        <section id="methodology" className="bg-white text-[#102f47]">
            <div className="mx-auto grid max-w-[1420px] items-center gap-24 px-5 py-36 sm:px-8 lg:grid-cols-[1fr_0.92fr] lg:px-24 lg:py-44">
                <motion.div
                    initial={{ opacity: 0, x: -42 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-110px" }}
                    transition={{ duration: 0.75 }}
                    className="relative"
                >
                    <div className="absolute -inset-10 rounded-full bg-cyan-100/60 blur-3xl" />
                    <div className="relative overflow-hidden rounded-lg shadow-2xl shadow-slate-300">
                        <Image
                            src="/generated/financial-intelligence-workstation.png"
                            alt="Financial AI workstation with abstract market analytics"
                            width={960}
                            height={540}
                            className="aspect-video h-auto w-full object-cover"
                            priority={false}
                        />
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 42 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-110px" }}
                    transition={{ duration: 0.75, delay: 0.08 }}
                >
                    <h2 className="max-w-[560px] text-[42px] font-black leading-[1.12] tracking-[-0.04em] sm:text-[58px]">
                        {copy.approachTitle}
                    </h2>
                    <div className="mt-12 space-y-10">
                        {copy.phases.map((item, index) => {
                            const Icon = icons[index];

                            return (
                                <motion.div
                                    key={item.title}
                                    initial={{ opacity: 0, y: 22 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.55, delay: 0.15 + index * 0.08 }}
                                    className="grid grid-cols-[64px_1fr] gap-7"
                                >
                                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-slate-100 bg-white shadow-lg shadow-slate-200/70">
                                        <Icon className="h-7 w-7 text-[#123a56]" />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-black tracking-[-0.03em]">
                                            {item.title}
                                        </h3>
                                        <p className="mt-2 text-lg font-medium leading-8 text-slate-500">
                                            {item.description}
                                        </p>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </motion.div>
            </div>

            <div className="border-t border-slate-200 bg-slate-50/40">
                <div className="mx-auto max-w-[1420px] px-5 py-36 text-center sm:px-8 lg:px-24 lg:py-44">
                    <motion.h2
                        initial={{ opacity: 0, y: 28 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.65 }}
                        className="text-[38px] font-black tracking-[-0.035em] sm:text-[50px]"
                    >
                        {copy.approachTitle}
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 18 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.65, delay: 0.08 }}
                        className="mt-5 text-xl font-medium text-slate-500"
                    >
                        {copy.approachSubtitle}
                    </motion.p>

                    <div className="mt-28 grid gap-20 lg:grid-cols-3">
                        {copy.phases.map((step, index) => {
                            const Icon = stepIcons[index];

                            return (
                                <motion.article
                                    key={step.title}
                                    initial={{ opacity: 0, y: 34 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-80px" }}
                                    transition={{ duration: 0.6, delay: index * 0.12 }}
                                    className="mx-auto max-w-[340px]"
                                >
                                    <div className="relative mx-auto mb-9 flex h-24 w-24 items-center justify-center rounded-full border border-slate-200 bg-white shadow-lg shadow-slate-200/60">
                                        <Icon className="h-8 w-8 text-[#123a56]" />
                                        <span className="absolute -right-2 top-1 flex h-9 w-9 items-center justify-center rounded-full bg-cyan-300 text-sm font-black text-white">
                                            0{index + 1}
                                        </span>
                                    </div>
                                    <h3 className="text-2xl font-black tracking-[-0.03em]">{step.title}</h3>
                                    <p className="mt-5 text-base font-medium leading-7 text-slate-500">
                                        {step.description}
                                    </p>
                                </motion.article>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
