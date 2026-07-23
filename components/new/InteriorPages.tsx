"use client";

import Image from "next/image";
import Link from "next/link";
import { useLocale } from "next-intl";
import { motion } from "framer-motion";
import {
    Activity,
    ArrowRight,
    BarChart3,
    BrainCircuit,
    Calendar,
    Database,
    Fingerprint,
    Mail,
    MapPin,
    Phone,
    Search,
    Send,
    ShieldCheck,
    TrendingUp,
    Upload,
    UsersRound,
    type LucideIcon,
} from "lucide-react";
import ThreeBackground from "./ThreeBackground";
import { localeCode, siteCopy } from "./site-copy";

type Feature = {
    icon: LucideIcon;
    title: string;
    description: string;
    metric?: string;
};

const fadeUp = {
    initial: { opacity: 0, y: 28 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-90px" },
    transition: { duration: 0.65 },
};

function FeatureGrid({ features }: { features: Feature[] }) {
    return (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => {
                const Icon = feature.icon;

                return (
                    <motion.article
                        key={feature.title}
                        {...fadeUp}
                        transition={{ duration: 0.6, delay: index * 0.06 }}
                        className="rounded-lg border border-slate-200 bg-white p-7 shadow-sm shadow-slate-100 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200"
                    >
                        <div className="mb-7 flex h-11 w-11 items-center justify-center rounded-lg bg-cyan-50 text-[#123a56]">
                            <Icon className="h-5 w-5" />
                        </div>
                        <h3 className="text-lg font-black tracking-[-0.02em] text-[#102f47]">
                            {feature.title}
                        </h3>
                        <p className="mt-3 min-h-[78px] text-sm font-medium leading-6 text-slate-500">
                            {feature.description}
                        </p>
                        {feature.metric && (
                            <p className="mt-6 border-t border-slate-100 pt-4 text-xs font-black uppercase tracking-[0.06em] text-[#123a56]">
                                {feature.metric}
                            </p>
                        )}
                    </motion.article>
                );
            })}
        </div>
    );
}

function DarkCta({
    title,
    subtitle,
    primary,
    secondary,
}: {
    title: string;
    subtitle: string;
    primary: string;
    secondary?: string;
}) {
    return (
        <section className="bg-white px-5 py-24 sm:px-8 lg:px-24">
            <motion.div
                {...fadeUp}
                className="relative mx-auto max-w-[1260px] overflow-hidden rounded-[36px] bg-[#102f47] px-8 py-16 text-center text-white shadow-2xl shadow-slate-300 lg:px-20"
            >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(34,211,238,0.18),transparent_32%)]" />
                <ThreeBackground className="pointer-events-none absolute inset-0 z-[1] opacity-60 mix-blend-screen" />
                <div className="relative z-10">
                    <h2 className="mx-auto max-w-3xl text-[34px] font-black leading-tight tracking-[-0.035em] sm:text-[50px]">
                        {title}
                    </h2>
                    <p className="mx-auto mt-6 max-w-2xl text-base font-medium leading-7 text-slate-400">
                        {subtitle}
                    </p>
                    <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
                        <Link className="inline-flex h-13 items-center justify-center rounded-lg bg-[#123a56] px-8 text-sm font-black text-white shadow-lg shadow-cyan-950/30" href="/contact">
                            {primary}
                        </Link>
                        {secondary && (
                            <a className="inline-flex h-13 items-center justify-center rounded-lg border border-white/15 bg-white/[0.06] px-8 text-sm font-black text-white" href="#methodology">
                                {secondary}
                            </a>
                        )}
                    </div>
                </div>
            </motion.div>
        </section>
    );
}

function MetricStrip({ stats }: { stats: ReadonlyArray<{ value: string; label: string; note: string }> }) {
    return (
        <section className="border-y border-slate-100 bg-white">
            <div className="mx-auto grid max-w-[1420px] gap-8 px-5 py-14 text-center sm:px-8 md:grid-cols-4 lg:px-24">
                {stats.map((stat, index) => (
                    <motion.div
                        key={stat.label}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.45, delay: index * 0.06 }}
                    >
                        <div className="text-[42px] font-black leading-none tracking-[-0.05em] text-[#123a56]">
                            {stat.value}
                        </div>
                        <div className="mt-2 text-xs font-black uppercase tracking-[0.12em] text-slate-600">
                            {stat.label}
                        </div>
                        <div className="mt-1 text-[11px] font-semibold text-slate-400">{stat.note}</div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}

export function GovernmentLandingPage() {
    const c = siteCopy[localeCode(useLocale())].government;
    const icons = [TrendingUp, Search, Fingerprint, ShieldCheck, Activity, Database];
    const features: Feature[] = c.features.map((feature, index) => ({
        ...feature,
        icon: icons[index],
    }));

    return (
        <>
            <section className="relative overflow-hidden bg-[#102f47] text-white">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_35%,rgba(56,189,248,0.18),transparent_30%)]" />
                <ThreeBackground className="pointer-events-none absolute inset-0 z-[1] opacity-70 mix-blend-screen" />
                <div className="relative z-10 mx-auto grid min-h-[650px] max-w-[1420px] items-center gap-14 px-5 py-24 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:px-24">
                    <motion.div initial={{ opacity: 0, y: 34 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75 }}>
                        <h1 className="max-w-[620px] text-[32px] font-black leading-[1.1] tracking-[-0.025em] sm:text-[40px] lg:text-[48px]">
                            {c.title}
                        </h1>
                        <p className="mt-6 max-w-xl text-sm font-medium leading-7 text-slate-300 sm:text-base">
                            {c.subtitle}
                        </p>
                        <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                            <Link href="/contact" className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-[#123a56] px-7 text-sm font-black text-white">
                                {c.primary} <ArrowRight className="h-4 w-4" />
                            </Link>
                            <a href="#methodology" className="inline-flex h-12 items-center justify-center rounded-lg bg-white/10 px-7 text-sm font-black text-white">
                                {c.secondary}
                            </a>
                        </div>
                    </motion.div>
                    <motion.div initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.15 }} className="relative min-h-[420px]">
                        <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full border-[28px] border-[#123a56]/40" />
                        <div className="absolute left-1/2 top-1/2 h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-[40%] border-[22px] border-[#123a56]/50" />
                        <div className="absolute right-10 top-16 rounded-lg bg-white/80 px-5 py-4 text-sm font-black text-slate-700 shadow-xl">Anomaly Detected: 0.002%</div>
                        <div className="absolute bottom-20 left-12 rounded-lg bg-white/80 px-5 py-4 text-sm font-black text-slate-700 shadow-xl">$420.5M Optimization</div>
                    </motion.div>
                </div>
            </section>

            <MetricStrip stats={c.metrics} />

            <section className="bg-white px-5 py-28 sm:px-8 lg:px-24">
                <div className="mx-auto max-w-[1120px]">
                    <motion.div {...fadeUp} className="mx-auto mb-16 max-w-2xl text-center">
                        <h2 className="text-[38px] font-black leading-tight tracking-[-0.035em] text-[#102f47]">{c.serviceTitle}</h2>
                        <p className="mt-4 text-sm font-medium leading-6 text-slate-500">{c.serviceSubtitle}</p>
                    </motion.div>
                    <FeatureGrid features={features} />
                </div>
            </section>

            <section id="methodology" className="relative overflow-hidden bg-[#081d2c] px-5 py-28 text-white sm:px-8 lg:px-24">
                <ThreeBackground className="pointer-events-none absolute inset-0 z-[1] opacity-55 mix-blend-screen" />
                <div className="relative z-10 mx-auto max-w-[1260px]">
                    <motion.div {...fadeUp}>
                        <h2 className="text-[34px] font-black tracking-[-0.035em]">{c.workflowTitle}</h2>
                        <p className="mt-3 max-w-xl text-sm font-medium leading-6 text-slate-400">{c.workflowSubtitle}</p>
                    </motion.div>
                    <div className="mt-14 grid gap-7 md:grid-cols-4">
                        {["Data Ingestion", "Resolve", "Model", "Enforce"].map((step, index) => (
                            <motion.article key={step} {...fadeUp} transition={{ duration: 0.55, delay: index * 0.08 }} className="rounded-lg border border-white/10 bg-white p-7 text-[#102f47] first:bg-[#11183a] first:text-white">
                                <span className="text-xs font-black text-[#123a56]">0{index + 1}</span>
                                <h3 className="mt-8 text-xl font-black">{step}</h3>
                                <p className="mt-4 text-sm font-medium leading-6 opacity-70">Automated intelligence layer with evidence-ready financial signals.</p>
                            </motion.article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-white px-5 py-28 sm:px-8 lg:px-24">
                <motion.div {...fadeUp} className="mx-auto grid max-w-[1120px] overflow-hidden rounded-lg bg-white shadow-2xl shadow-slate-300 lg:grid-cols-2">
                    <div className="p-12">
                        <h2 className="text-[32px] font-black leading-tight tracking-[-0.035em] text-[#102f47]">{c.caseTitle}</h2>
                        <p className="mt-6 text-sm font-medium leading-7 text-slate-500">{c.caseText}</p>
                        <div className="mt-8 flex gap-10">
                            <strong className="text-3xl text-[#123a56]">6 Months</strong>
                            <strong className="text-3xl text-[#123a56]">98%</strong>
                        </div>
                    </div>
                    <div className="bg-gradient-to-br from-[#123a56] to-cyan-400 p-12">
                        <Image src="/generated/financial-intelligence-workstation.png" alt="Command center" width={800} height={450} className="h-full min-h-[280px] w-full rounded-lg object-cover" />
                    </div>
                </motion.div>
            </section>

            <DarkCta title={c.ctaTitle} subtitle={c.ctaSubtitle} primary={c.primary} secondary={c.secondary} />
        </>
    );
}

export function EnterpriseLandingPage() {
    const c = siteCopy[localeCode(useLocale())].enterprise;
    const icons = [Database, TrendingUp, UsersRound, Search, Activity, BarChart3];
    const features: Feature[] = c.features.map((feature, index) => ({
        ...feature,
        icon: icons[index],
    }));

    return (
        <>
            <section className="bg-white px-5 py-28 sm:px-8 lg:px-24">
                <div className="mx-auto grid max-w-[1260px] items-center gap-14 lg:grid-cols-2">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
                        <h1 className="max-w-[620px] text-[32px] font-black leading-[1.1] tracking-[-0.025em] text-[#102f47] sm:text-[40px] lg:text-[48px]">
                            {c.title}
                        </h1>
                        <p className="mt-6 max-w-lg text-sm font-medium leading-7 text-slate-500 sm:text-base">{c.subtitle}</p>
                        <div className="mt-9 flex gap-4">
                            <Link href="/contact" className="inline-flex h-12 items-center rounded-lg bg-[#123a56] px-7 text-sm font-black text-white">{c.primary}</Link>
                            <a href="#cases" className="inline-flex h-12 items-center rounded-lg border border-slate-200 px-7 text-sm font-black text-[#102f47]">{c.secondary}</a>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.94, x: 28 }}
                        animate={{ opacity: 1, scale: 1, x: 0 }}
                        transition={{ duration: 0.75, delay: 0.12 }}
                        className="relative"
                    >
                        <div className="absolute -inset-8 rounded-full bg-cyan-100/70 blur-3xl" />
                        <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl shadow-slate-300">
                            <Image
                                src="/generated/business-hero-intelligence.png"
                                alt="Enterprise financial intelligence dashboard"
                                width={1200}
                                height={675}
                                className="aspect-video h-auto w-full object-cover"
                                priority
                            />
                        </div>
                        <div className="absolute -bottom-6 left-8 rounded-xl border border-white/60 bg-white/90 px-6 py-4 shadow-2xl shadow-slate-300 backdrop-blur">
                            <p className="text-xs font-black uppercase text-slate-400">Revenue Flow</p>
                            <p className="mt-1 text-2xl font-black text-[#102f47]">$24.8M</p>
                        </div>
                    </motion.div>
                </div>
            </section>

            <section className="border-y border-slate-100 bg-slate-50 px-5 py-10 sm:px-8 lg:px-24">
                <div className="mx-auto flex max-w-[1260px] flex-wrap justify-between gap-8 text-sm font-black uppercase tracking-[0.12em] text-slate-400">
                    {["SAP", "Oracle", "Salesforce", "Snowflake", "Workday"].map((item) => <span key={item}>{item}</span>)}
                </div>
            </section>

            <section className="bg-white px-5 py-28 sm:px-8 lg:px-24">
                <div className="mx-auto max-w-[1120px]">
                    <motion.div {...fadeUp} className="mb-16">
                        <h2 className="text-[42px] font-black tracking-[-0.035em] text-[#102f47]">{c.sectionTitle}</h2>
                        <p className="mt-4 max-w-xl text-sm font-medium leading-6 text-slate-500">{c.sectionSubtitle}</p>
                    </motion.div>
                    <FeatureGrid features={features} />
                </div>
            </section>

            <section className="relative overflow-hidden bg-[#102f47] px-5 py-28 text-white sm:px-8 lg:px-24">
                <ThreeBackground className="pointer-events-none absolute inset-0 z-[1] opacity-60 mix-blend-screen" />
                <div className="relative z-10 mx-auto grid max-w-[1260px] items-center gap-16 lg:grid-cols-2">
                    <motion.div {...fadeUp}>
                        <h2 className="max-w-md text-[42px] font-black leading-tight tracking-[-0.035em]">{c.darkTitle}</h2>
                        <p className="mt-6 text-base font-medium leading-8 text-slate-400">{c.darkText}</p>
                    </motion.div>
                    <motion.div {...fadeUp} className="rounded-lg bg-white/[0.06] p-8 shadow-2xl shadow-black/30">
                        <div className="grid grid-cols-7 gap-3">
                            {Array.from({ length: 49 }).map((_, index) => (
                                <span key={index} className={`aspect-square rounded ${index === 17 || index === 31 ? "bg-red-400" : "bg-slate-600/60"}`} />
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            <section id="cases" className="bg-white px-5 py-28 sm:px-8 lg:px-24">
                <div className="mx-auto grid max-w-[1120px] gap-12 lg:grid-cols-2">
                    <motion.div {...fadeUp}>
                        <h2 className="text-[38px] font-black leading-tight tracking-[-0.035em] text-[#102f47]">{c.achievementTitle}</h2>
                        <p className="mt-4 text-base font-medium leading-7 text-slate-500">{c.achievementText}</p>
                        <div className="mt-8 space-y-4">
                            <div className="rounded-lg bg-cyan-50 p-5 text-xl font-black text-[#123a56]">85% <span className="text-sm text-slate-500">Accuracy improvement</span></div>
                            <div className="rounded-lg bg-cyan-50 p-5 text-xl font-black text-cyan-500">$14M <span className="text-sm text-slate-500">Avg. revenue recovery</span></div>
                        </div>
                    </motion.div>
                    <motion.div {...fadeUp} className="space-y-5">
                        {["The granularity of iKwook's churn models allowed us to save $4.2M in enterprise contracts.", "Implementing resource loss detection transformed supply-chain transparency."].map((quote) => (
                            <blockquote key={quote} className="rounded-lg border border-slate-200 bg-white p-7 text-base font-semibold leading-7 text-slate-600 shadow-sm">“{quote}”</blockquote>
                        ))}
                    </motion.div>
                </div>
            </section>

            <DarkCta title={c.ctaTitle} subtitle={c.ctaSubtitle} primary={c.primary} secondary={c.secondary} />
        </>
    );
}

export function IndividualsLandingPage() {
    const c = siteCopy[localeCode(useLocale())].individuals;
    const icons = [Activity, Search, TrendingUp, BarChart3, BrainCircuit, ShieldCheck];
    const modules: Feature[] = c.features.map((feature, index) => ({
        ...feature,
        icon: icons[index],
    }));

    return (
        <>
            <section className="bg-gradient-to-r from-white to-cyan-50 px-5 py-28 sm:px-8 lg:px-24">
                <div className="mx-auto grid max-w-[1260px] items-center gap-14 lg:grid-cols-2">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
                        <h1 className="max-w-[620px] text-[32px] font-black leading-[1.1] tracking-[-0.025em] text-[#102f47] sm:text-[40px] lg:text-[48px]">
                            {c.title}
                        </h1>
                        <p className="mt-6 max-w-lg text-sm font-medium leading-7 text-slate-500 sm:text-base">{c.subtitle}</p>
                        <div className="mt-9 flex gap-4">
                            <Link href="/contact" className="inline-flex h-12 items-center rounded-lg bg-[#123a56] px-7 text-sm font-black text-white">{c.primary}</Link>
                            <a href="#plans" className="inline-flex h-12 items-center rounded-lg border border-slate-200 bg-white px-7 text-sm font-black text-[#102f47]">{c.secondary}</a>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.94, x: 28 }}
                        animate={{ opacity: 1, scale: 1, x: 0 }}
                        transition={{ duration: 0.75 }}
                        className="relative"
                    >
                        <div className="absolute -inset-8 rounded-full bg-cyan-100/80 blur-3xl" />
                        <div className="relative overflow-hidden rounded-2xl border border-white bg-white shadow-2xl shadow-slate-300">
                            <Image
                                src="/generated/individuals-hero-intelligence.png"
                                alt="Personal financial intelligence on tablet and phone"
                                width={1200}
                                height={675}
                                className="aspect-video h-auto w-full object-cover"
                                priority
                            />
                        </div>
                        <div className="absolute -bottom-6 right-8 rounded-xl border border-white/60 bg-white/90 px-6 py-4 shadow-2xl shadow-slate-300 backdrop-blur">
                            <p className="text-xs font-black uppercase text-slate-400">Private Model</p>
                            <p className="mt-1 text-2xl font-black text-[#123a56]">Active</p>
                        </div>
                    </motion.div>
                </div>
            </section>

            <section className="bg-slate-50 px-5 py-28 sm:px-8 lg:px-24">
                <div className="mx-auto max-w-[1120px]">
                    <motion.div {...fadeUp} className="mb-16 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
                        <div>
                            <h2 className="text-[38px] font-black tracking-[-0.035em] text-[#102f47]">{c.sectionTitle}</h2>
                            <p className="mt-4 max-w-xl text-sm font-medium leading-6 text-slate-500">{c.sectionSubtitle}</p>
                        </div>
                        <div className="rounded-full bg-white p-1 text-sm font-black shadow-sm"><span className="rounded-full bg-cyan-50 px-4 py-2 text-[#123a56]">Wealth Intelligence</span><span className="px-4 py-2 text-slate-500">Risk Analysis</span></div>
                    </motion.div>
                    <FeatureGrid features={modules} />
                </div>
            </section>

            <section className="bg-white px-5 py-28 text-center sm:px-8 lg:px-24">
                <motion.div {...fadeUp} className="mx-auto max-w-2xl">
                    <h2 className="text-[38px] font-black leading-tight tracking-[-0.035em] text-[#102f47]">{c.pathTitle}</h2>
                    <p className="mt-4 text-sm font-medium text-slate-500">{c.pathSubtitle}</p>
                </motion.div>
                <div className="mx-auto mt-16 grid max-w-[1120px] gap-6 md:grid-cols-4">
                    {c.steps.map((step, index) => (
                        <motion.article key={step} {...fadeUp} transition={{ duration: 0.55, delay: index * 0.08 }} className="rounded-lg border border-slate-200 bg-white p-7 text-left shadow-lg shadow-slate-100">
                            <span className="text-sm font-black text-[#123a56]">0{index + 1}</span>
                            <h3 className="mt-6 text-lg font-black text-[#102f47]">{step}</h3>
                            <p className="mt-3 text-sm font-medium leading-6 text-slate-500">Securely transition into personalized model training.</p>
                        </motion.article>
                    ))}
                </div>
            </section>

            <section id="plans" className="bg-cyan-50/50 px-5 py-28 sm:px-8 lg:px-24">
                <div className="mx-auto grid max-w-[1120px] items-center gap-10 lg:grid-cols-[0.85fr_1fr_1fr]">
                    <motion.div {...fadeUp}>
                        <h2 className="text-[34px] font-black tracking-[-0.035em] text-[#102f47]">{c.plansTitle}</h2>
                        <p className="mt-5 text-base font-medium leading-7 text-slate-500">{c.plansText}</p>
                    </motion.div>
                    {["Premium|$499|For growing portfolios", "Private Wealth|$1,950|For complex estates"].map((plan, index) => {
                        const [name, price, desc] = plan.split("|");
                        return (
                            <motion.article key={name} {...fadeUp} transition={{ duration: 0.6, delay: index * 0.08 }} className={`rounded-lg p-9 shadow-2xl ${index ? "bg-[#102f47] text-white shadow-slate-300" : "bg-white text-[#102f47] shadow-slate-300"}`}>
                                <h3 className="text-2xl font-black">{name}</h3>
                                <p className="mt-2 text-sm font-medium opacity-70">{desc}</p>
                                <p className="mt-8 text-5xl font-black">{price}<span className="text-sm font-semibold opacity-60">/month</span></p>
                                <button className="mt-8 h-11 w-full rounded-lg bg-[#123a56] text-sm font-black text-white">Contact Access</button>
                            </motion.article>
                        );
                    })}
                </div>
            </section>

            <DarkCta title={c.ctaTitle} subtitle={c.ctaSubtitle} primary={c.primary} secondary={c.secondary} />
        </>
    );
}

export function ContactLandingPage() {
    const c = siteCopy[localeCode(useLocale())].contact;
    const fieldValues = [
        c.fields.firstName,
        c.fields.name,
        c.fields.category,
        c.fields.country,
        c.fields.interest,
        c.fields.language,
        c.fields.email,
        c.fields.phone,
    ];

    return (
        <>
            <section className="bg-slate-50 px-5 py-24 sm:px-8 lg:px-24">
                <div className="mx-auto grid max-w-[1260px] items-center gap-14 lg:grid-cols-[0.92fr_1.08fr]">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
                        <h1 className="max-w-[620px] text-[32px] font-black leading-[1.1] tracking-[-0.025em] text-[#102f47] sm:text-[40px] lg:text-[48px]">
                            {c.title}
                        </h1>
                        <p className="mt-6 max-w-2xl text-sm font-semibold leading-7 text-slate-500 sm:text-base">{c.subtitle}</p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.94, x: 28 }}
                        animate={{ opacity: 1, scale: 1, x: 0 }}
                        transition={{ duration: 0.75, delay: 0.1 }}
                        className="relative"
                    >
                        <div className="absolute -inset-8 rounded-full bg-[#123a56]/10 blur-3xl" />
                        <div className="relative overflow-hidden rounded-2xl bg-[#102f47] shadow-2xl shadow-slate-300">
                            <Image
                                src="/generated/contact-hero-access-center.png"
                                alt="Global financial intelligence access center"
                                width={1200}
                                height={675}
                                className="aspect-video h-auto w-full object-cover"
                                priority
                            />
                        </div>
                    </motion.div>
                </div>
            </section>

            <section className="bg-white px-5 py-24 sm:px-8 lg:px-24">
                <div className="mx-auto grid max-w-[1260px] gap-10 lg:grid-cols-[1.08fr_0.92fr]">
                    <motion.form {...fadeUp} className="rounded-2xl border border-slate-200 bg-white p-7 text-left shadow-2xl shadow-slate-200 sm:p-9">
                        <h2 className="text-2xl font-black tracking-[-0.02em] text-[#102f47] sm:text-3xl">{c.formTitle}</h2>
                        <p className="mt-3 max-w-2xl text-sm font-medium leading-6 text-slate-500">{c.formSubtitle}</p>
                        <div className="mt-8 grid gap-4 md:grid-cols-2">
                            {fieldValues.map((label) => (
                                <label key={label} className="text-xs font-black uppercase text-slate-500">
                                    {label}
                                    <input className="mt-2 h-11 w-full rounded-lg border border-slate-200 bg-slate-50/60 px-4 text-sm outline-none transition focus:border-[#123a56] focus:bg-white" />
                                </label>
                            ))}
                        </div>
                        <label className="mt-4 block text-xs font-black uppercase text-slate-500">
                            {c.fields.subject}
                            <textarea className="mt-2 h-20 w-full rounded-lg border border-slate-200 bg-slate-50/60 p-4 text-sm outline-none transition focus:border-[#123a56] focus:bg-white" />
                        </label>
                        <label className="mt-4 block text-xs font-black uppercase text-slate-500">
                            {c.fields.message}
                            <textarea className="mt-2 h-32 w-full rounded-lg border border-slate-200 bg-slate-50/60 p-4 text-sm outline-none transition focus:border-[#123a56] focus:bg-white" />
                        </label>
                        <div className="mt-5 flex items-center gap-4 rounded-lg border border-dashed border-slate-200 bg-slate-50/60 p-4">
                            <Upload className="h-6 w-6 text-[#123a56]" />
                            <div><strong className="block text-sm text-[#102f47]">RFP / Briefing Documentation</strong><span className="text-xs font-medium text-slate-500">PDF, DOCX, ZIP</span></div>
                        </div>
                        <button type="button" className="mt-7 flex h-13 w-full items-center justify-center gap-3 rounded-lg bg-[#123a56] text-base font-black text-white shadow-lg shadow-cyan-200 transition hover:bg-[#0f2f47]">
                            {c.submit} <Send className="h-5 w-5" />
                        </button>
                    </motion.form>

                    <div className="space-y-6">
                        <motion.div {...fadeUp} className="relative overflow-hidden rounded-2xl bg-[#102f47] p-8 text-white shadow-2xl shadow-slate-300">
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(34,211,238,0.24),transparent_32%)]" />
                            <ThreeBackground className="pointer-events-none absolute inset-0 z-[1] opacity-55 mix-blend-screen" />
                            <div className="relative z-10">
                                <Calendar className="h-8 w-8 text-cyan-300" />
                                <h3 className="mt-8 text-3xl font-black tracking-[-0.03em]">{c.infoTitle}</h3>
                                <p className="mt-5 text-sm font-medium leading-7 text-slate-300">{c.confidentiality}</p>
                                <div className="mt-8 grid gap-3">
                                    <ContactLine icon={MapPin} title={c.company} value={c.location} dark />
                                    <ContactLine icon={Phone} title="Phone" value={c.phone} dark />
                                    <ContactLine icon={Mail} title="Email" value={c.email} dark />
                                </div>
                            </div>
                        </motion.div>

                        <motion.div {...fadeUp} className="rounded-2xl border border-slate-200 bg-slate-50 p-7">
                            <h3 className="text-xl font-black text-[#102f47]">iKwook Inc</h3>
                            <p className="mt-3 text-sm font-medium leading-7 text-slate-500">
                                {c.location}
                            </p>
                            <div className="mt-6 grid gap-3">
                                <ContactLine icon={Phone} title="Phone" value={c.phone} />
                                <ContactLine icon={Mail} title="Email" value={c.email} />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <DarkCta title={c.ctaTitle} subtitle={c.ctaSubtitle} primary={c.submit} />
        </>
    );
}

function ContactLine({
    icon: Icon,
    title,
    value,
    dark = false,
}: {
    icon: LucideIcon;
    title: string;
    value: string;
    dark?: boolean;
}) {
    return (
        <div className={`flex items-center gap-4 rounded-xl p-4 ${dark ? "bg-white/8" : "bg-white"}`}>
            <span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-lg ${dark ? "bg-white/10 text-cyan-300" : "bg-cyan-50 text-[#123a56]"}`}>
                <Icon className="h-5 w-5" />
            </span>
            <span className="min-w-0">
                <span className={`block text-xs font-black uppercase ${dark ? "text-slate-400" : "text-slate-400"}`}>{title}</span>
                <strong className={`block break-words text-base ${dark ? "text-white" : "text-[#102f47]"}`}>{value}</strong>
            </span>
        </div>
    );
}
