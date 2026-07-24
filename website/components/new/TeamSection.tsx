"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useLocale } from "next-intl";
import { localeCode, siteCopy } from "./site-copy";

const avatars = [
    "from-slate-300 via-cyan-200 to-slate-600",
    "from-sky-100 via-white to-cyan-500",
    "from-amber-100 via-slate-200 to-slate-800",
];

export default function TeamSection() {
    const copy = siteCopy[localeCode(useLocale())].home;

    return (
        <section id="contact" className="bg-[#102f47] px-5 pt-12 pb-32 text-white sm:px-8 lg:px-24 lg:pb-44">
            <motion.div
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-90px" }}
                transition={{ duration: 0.7 }}
                className="mx-auto max-w-[1420px] rounded-[48px] border border-white/10 bg-white/[0.06] px-8 py-12 shadow-2xl shadow-black/20 lg:px-16"
            >
                <div className="grid items-center gap-10 lg:grid-cols-[280px_1fr_auto]">
                    <div className="flex justify-center lg:justify-start">
                        {avatars.map((gradient, index) => (
                            <motion.span
                                key={gradient}
                                initial={{ opacity: 0, x: -16 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.45, delay: index * 0.08 }}
                                className={`-ml-3 first:ml-0 h-16 w-16 rounded-full border-4 border-[#1a243a] bg-gradient-to-br ${gradient} shadow-lg`}
                                aria-hidden="true"
                                style={{ zIndex: avatars.length - index }}
                            />
                        ))}
                    </div>

                    <div>
                        <h2 className="text-[30px] font-black tracking-[-0.035em]">
                            {copy.teamTitle}
                        </h2>
                        <p className="mt-4 max-w-3xl text-lg font-medium leading-8 text-slate-400">
                            {copy.teamDescription}
                        </p>
                    </div>

                    <Link
                        href="/contact"
                        className="inline-flex h-16 items-center justify-center rounded-lg border border-cyan-200 bg-white px-10 text-lg font-extrabold text-cyan-400 shadow-lg shadow-cyan-950/20 transition hover:bg-cyan-50"
                    >
                        {copy.primary}
                    </Link>
                </div>
            </motion.div>
        </section>
    );
}
