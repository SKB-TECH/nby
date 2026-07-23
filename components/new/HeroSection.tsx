"use client";

import { motion } from "framer-motion";
import { useLocale } from "next-intl";
import {
    Activity,
    Banknote,
    Building2,
    Fingerprint,
    Gauge,
    Landmark,
    ScanSearch,
    ShieldCheck,
    TrendingUp,
    type LucideIcon,
} from "lucide-react";
import ThreeBackground from "./ThreeBackground";
import { localeCode, type LocaleCode, siteCopy } from "./site-copy";

const capabilityCopy: Record<LocaleCode, {
    eyebrow: string;
    title: string;
    items: Array<{ title: string; description: string; icon: LucideIcon }>;
}> = {
    en: {
        eyebrow: "Financial intelligence built for every client",
        title: "iKwook connects your data to measurable performance",
        items: [
            {
                title: "Public finance",
                description: "Models for agencies that need auditability, revenue recovery and expenditure discipline.",
                icon: Landmark,
            },
            {
                title: "Revenue recovery",
                description: "Identify hidden leakage, missed collections and high-value optimization opportunities.",
                icon: Banknote,
            },
            {
                title: "Fraud detection",
                description: "Detect anomalies across transactions, declarations and operational financial flows.",
                icon: ScanSearch,
            },
            {
                title: "Cost control",
                description: "Rationalize spending with decision models built around your real operating data.",
                icon: Gauge,
            },
        ],
    },
    fr: {
        eyebrow: "Intelligence financière conçue pour chaque client",
        title: "iKwook relie vos données à une performance mesurable",
        items: [
            {
                title: "Finances publiques",
                description: "Des modèles pour l'auditabilité, la récupération des revenus et la discipline budgétaire.",
                icon: Landmark,
            },
            {
                title: "Récupération des revenus",
                description: "Repérez les fuites, les manques à gagner et les opportunités financières prioritaires.",
                icon: Banknote,
            },
            {
                title: "Détection de fraude",
                description: "Détectez les anomalies dans les transactions, déclarations et flux financiers.",
                icon: ScanSearch,
            },
            {
                title: "Contrôle des coûts",
                description: "Rationalisez les dépenses avec des modèles fondés sur vos données opérationnelles.",
                icon: Gauge,
            },
        ],
    },
};

function SignalCard({
    className,
    icon: Icon,
    label,
    value,
    status,
}: {
    className: string;
    icon: LucideIcon;
    label: string;
    value: string;
    status: string;
}) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 18, scale: 0.96 }}
            animate={{ opacity: 1, y: [0, -10, 0], scale: 1 }}
            transition={{ duration: 5, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
            className={`absolute hidden rounded-2xl border border-white/10 bg-white/[0.11] p-4 text-white shadow-2xl shadow-black/30 backdrop-blur-xl lg:block ${className}`}
        >
            <div className="flex items-center gap-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#123a56]/40 text-cyan-300">
                    <Icon className="h-5 w-5" />
                </span>
                <span>
                    <span className="block text-[11px] font-extrabold uppercase tracking-[0.12em] text-slate-400">
                        {label}
                    </span>
                    <span className="mt-1 flex items-baseline gap-2">
                        <strong className="text-[22px] leading-none">{value}</strong>
                        <span className="text-xs font-bold text-cyan-300">{status}</span>
                    </span>
                </span>
            </div>
        </motion.div>
    );
}

export default function HeroSection() {
    const locale = localeCode(useLocale());
    const copy = siteCopy[locale].home;
    const capabilities = capabilityCopy[locale];

    return (
        <>
            <section className="relative overflow-hidden bg-[#102f47] text-white">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_73%_53%,rgba(31,215,232,0.22),transparent_24%),radial-gradient(circle_at_15%_0%,rgba(56,189,248,0.12),transparent_30%)]" />
                <div className="absolute inset-0 opacity-35 [background-image:linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] [background-size:64px_64px]" />
                <ThreeBackground className="pointer-events-none absolute inset-0 z-[1] opacity-75 mix-blend-screen" />

                <div className="relative z-10 mx-auto grid min-h-[790px] max-w-[1420px] items-center gap-16 px-5 py-24 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:px-24 lg:py-28">
                    <motion.div
                        initial={{ opacity: 0, y: 34 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="max-w-2xl"
                    >
                        <motion.h1
                            initial={{ opacity: 0, y: 28 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.15 }}
                            className="text-[32px] font-black leading-[1.1] tracking-[-0.025em] sm:text-[42px] lg:text-[50px]"
                        >
                            {copy.heroTitle}
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 22 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.28 }}
                            className="mt-7 max-w-[600px] text-base font-semibold leading-8 text-slate-300 sm:text-lg"
                        >
                            {copy.heroSubtitle}
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="mt-12 flex flex-col gap-5 sm:flex-row"
                        >
                            <a
                                href="#contact"
                                className="inline-flex h-16 items-center justify-center rounded-lg bg-[#123a56] px-10 text-lg font-extrabold text-white shadow-2xl shadow-cyan-600/30 transition hover:bg-[#0f2f47]"
                            >
                                {copy.primary}
                            </a>
                            <a
                                href="#methodology"
                                className="inline-flex h-16 items-center justify-center rounded-lg border border-white/18 bg-white/[0.04] px-10 text-lg font-extrabold text-white transition hover:bg-white/10"
                            >
                                {copy.secondary}
                            </a>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.92 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.9, delay: 0.35 }}
                        className="relative min-h-[580px]"
                    >
                        <motion.div
                            animate={{ y: [0, -16, 0] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute inset-0 flex items-center justify-center"
                        >
                            <div className="relative flex h-72 w-72 items-center justify-center rounded-[44px] border border-white/10 bg-white/[0.12] shadow-2xl shadow-cyan-950/60 backdrop-blur-xl">
                                <div className="absolute inset-0 rounded-[44px] bg-gradient-to-br from-white/10 to-cyan-400/5" />
                                <Activity className="relative h-36 w-36 stroke-[1.8] text-cyan-300 drop-shadow-[0_0_28px_rgba(34,211,238,0.55)]" />
                            </div>
                        </motion.div>

                        <SignalCard
                            className="left-12 top-24"
                            icon={ShieldCheck}
                            label="Fraud Detection"
                            value="99.98%"
                            status="+12.4%"
                        />
                        <SignalCard
                            className="right-0 top-6"
                            icon={Building2}
                            label="Predictive Model"
                            value="Active"
                            status="v4.2"
                        />
                        <SignalCard
                            className="bottom-24 left-0"
                            icon={TrendingUp}
                            label="Revenue Leakage"
                            value="-$0.00"
                            status="Optimized"
                        />
                        <SignalCard
                            className="bottom-4 right-12"
                            icon={Fingerprint}
                            label="Anomaly Score"
                            value="0.02"
                            status="Minimal"
                        />
                    </motion.div>
                </div>
            </section>

            <section className="relative overflow-hidden border-y border-slate-100 bg-white text-[#123a56]">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/60 to-transparent" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(56,189,248,0.09),transparent_34%),linear-gradient(180deg,#ffffff,rgba(248,250,252,0.84))]" />
                <div className="relative mx-auto min-h-[330px] max-w-[900px] px-5 py-14 sm:px-8 lg:py-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.55 }}
                        className="text-center"
                    >
                        <p className="text-[11px] font-black uppercase tracking-[0.2em] text-cyan-500">
                            {capabilities.eyebrow}
                        </p>
                        <h2 className="mx-auto mt-3 max-w-[560px] text-[24px] font-black leading-tight tracking-[-0.02em] text-[#123a56] sm:text-[30px]">
                            {capabilities.title}
                        </h2>
                    </motion.div>

                    <div className="mx-auto mt-9 grid max-w-[760px] gap-4 sm:grid-cols-2">
                        {capabilities.items.map((item, index) => {
                            const Icon = item.icon;

                            return (
                                <motion.article
                                    key={item.title}
                                    initial={{ opacity: 0, y: 22 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-60px" }}
                                    transition={{ duration: 0.5, delay: index * 0.06 }}
                                    className="group grid min-h-[92px] grid-cols-[42px_1fr] gap-4 rounded-lg border border-slate-200 bg-white p-4 text-left shadow-[0_14px_34px_rgba(15,47,71,0.08)] transition hover:-translate-y-1 hover:border-cyan-200 hover:shadow-[0_18px_44px_rgba(15,47,71,0.12)]"
                                >
                                    <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-50 text-[#123a56] transition group-hover:bg-[#123a56] group-hover:text-white">
                                        <Icon className="h-5 w-5" />
                                    </span>
                                    <span>
                                        <span className="block text-[14px] font-black tracking-[-0.01em] text-[#123a56]">
                                            {item.title}
                                        </span>
                                        <span className="mt-1 block text-[12px] font-semibold leading-5 text-slate-500">
                                            {item.description}
                                        </span>
                                    </span>
                                </motion.article>
                            );
                        })}
                    </div>
                </div>
            </section>
        </>
    );
}
