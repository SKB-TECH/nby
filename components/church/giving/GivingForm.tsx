"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Building2, Check, Coins, CreditCard, Gift, HandHeart, LockKeyhole, ShieldCheck, Smartphone, Sparkles } from "lucide-react";
import type { GivingCopy } from "./giving-copy";

const methodIcons = [Smartphone, CreditCard, Building2];
const donationIcons = [Coins, Gift, HandHeart];

export default function GivingForm({ copy }: { copy: GivingCopy }) {
    const [designation, setDesignation] = useState<string>(copy.designations[1]);
    const [donationType, setDonationType] = useState(0);
    const [frequency, setFrequency] = useState<"once" | "monthly">("once");
    const [amount, setAmount] = useState("");
    const [category, setCategory] = useState("");
    const [description, setDescription] = useState("");
    const [landLocation, setLandLocation] = useState("");
    const [landArea, setLandArea] = useState("");
    const [landDocuments, setLandDocuments] = useState("");
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [currency, setCurrency] = useState("USD");
    const [method, setMethod] = useState(0);
    const [ready, setReady] = useState(false);
    const numericAmount = Number(amount.replace(",", "."));
    const amountIsValid = Number.isFinite(numericAmount) && numericAmount > 0;
    const isLandDonation = donationType === 1 && category === copy.itemCategories[0];
    const landIsValid = !isLandDonation || Boolean(landLocation.trim() && landArea.trim() && landDocuments.trim());
    const proposalIsValid = Boolean(category && description.trim() && name.trim() && phone.trim() && landIsValid);
    const formIsValid = donationType === 0 ? amountIsValid : proposalIsValid;
    const displayedAmount = donationType === 0 ? (amount || "—") : (category || "—");

    return (
        <section id="don-form" className="relative overflow-hidden bg-[#f4f6fa] px-5 py-24 sm:px-8">
            <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#df9200]/8 blur-3xl" />
            <div className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-[#071117]/5 blur-3xl" />
            <div className="relative mx-auto grid max-w-[1160px] items-start gap-8 lg:grid-cols-[.72fr_1.28fr]">
                <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:sticky lg:top-28">
                    <p className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[.28em] text-[#df9200]"><Sparkles className="h-4 w-4" />{copy.formEyebrow}</p>
                    <h2 className="mt-5 max-w-sm font-serif text-4xl leading-[1.05] sm:text-6xl">{copy.formTitle}</h2>
                    <p className="mt-6 max-w-sm text-sm leading-7 text-slate-500">{copy.trustText}</p>
                    <div className="relative mt-9 overflow-hidden rounded-[26px] bg-[#071117] p-7 text-white shadow-[0_25px_70px_rgba(7,17,23,.2)] sm:p-8">
                        <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full border-[28px] border-[#df9200]/10" />
                        <div className="flex items-center justify-between">
                            <span className="grid h-12 w-12 place-items-center rounded-2xl bg-[#df9200] text-white"><ShieldCheck className="h-6 w-6" /></span>
                            <span className="rounded-full border border-white/10 px-3 py-1.5 text-[9px] font-black uppercase tracking-[.18em] text-white/55">{donationType === 0 ? (frequency === "once" ? copy.once : copy.monthly) : copy.donationTypes[donationType]}</span>
                        </div>
                        <p className="mt-8 text-[10px] font-bold uppercase tracking-[.2em] text-white/45">{donationType === 0 ? copy.amount : copy.donationType}</p>
                        <p className={`${donationType === 0 ? "text-5xl" : "text-3xl"} mt-2 font-serif text-white`}>{displayedAmount} {donationType === 0 && <span className="font-sans text-sm font-bold text-[#f0a40b]">{currency}</span>}</p>
                        <div className="mt-7 border-t border-white/10 pt-5">
                            <h3 className="font-serif text-xl">{copy.trust}</h3>
                            <div className="mt-3 flex items-center gap-2 text-xs text-white/50"><Check className="h-4 w-4 text-[#f0a40b]" />{designation}</div>
                        </div>
                    </div>
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-[28px] border border-white bg-white/95 p-5 shadow-[0_30px_90px_rgba(7,17,23,.1)] backdrop-blur sm:p-10">
                    <FieldLabel>{copy.donationType}</FieldLabel>
                    <div className="mt-4 grid gap-3 sm:grid-cols-3">
                        {copy.donationTypes.map((item, index) => {
                            const Icon = donationIcons[index];
                            return <button type="button" key={item} onClick={() => { setDonationType(index); setReady(false); }} className={`relative rounded-2xl border p-4 text-left transition-all ${donationType === index ? "border-[#df9200] bg-[#fff8e9] shadow-[0_12px_30px_rgba(223,146,0,.12)]" : "border-slate-200 hover:-translate-y-1 hover:border-slate-400"}`}><span className={`grid h-10 w-10 place-items-center rounded-xl ${donationType === index ? "bg-[#df9200] text-white" : "bg-slate-100 text-slate-500"}`}><Icon className="h-5 w-5" /></span><strong className="mt-4 block text-xs">{item}</strong><span className="mt-2 block text-[10px] leading-4 text-slate-400">{copy.donationTypeHelp[index]}</span>{donationType === index && <Check className="absolute right-4 top-4 h-4 w-4 text-[#df9200]" />}</button>;
                        })}
                    </div>

                    <div className="my-9 h-px bg-slate-100" />
                    <FieldLabel>{copy.designation}</FieldLabel>
                    <div className="mt-4 flex flex-wrap gap-2 rounded-2xl bg-slate-50 p-2">{copy.designations.map(item => <Choice key={item} active={designation === item} onClick={() => setDesignation(item)}>{item}</Choice>)}</div>

                    {donationType === 0 && <><div className="mt-9 grid gap-7 sm:grid-cols-2">
                        <div><FieldLabel>{copy.frequency}</FieldLabel><div className="mt-4 grid grid-cols-2 gap-2 rounded-2xl bg-slate-50 p-2"><Choice active={frequency === "once"} onClick={() => setFrequency("once")}>{copy.once}</Choice><Choice active={frequency === "monthly"} onClick={() => setFrequency("monthly")}>{copy.monthly}</Choice></div></div>
                        <div><FieldLabel>{copy.currency}</FieldLabel><select value={currency} onChange={e => setCurrency(e.target.value)} className="mt-4 h-[60px] w-full rounded-2xl border border-slate-200 bg-white px-5 text-sm font-bold outline-none transition focus:border-[#df9200] focus:ring-4 focus:ring-[#df9200]/10"><option value="USD">USD — Dollar américain</option><option value="CDF">CDF — Franc congolais</option><option value="EUR">EUR — Euro</option></select></div>
                    </div>

                    <div className="mt-9">
                        <FieldLabel>{copy.amount}</FieldLabel>
                        <div className="relative mt-4">
                            <input
                                inputMode="decimal"
                                autoComplete="off"
                                value={amount}
                                onChange={e => {
                                    const next = e.target.value.replace(/[^\d.,]/g, "").replace(/([.,].*)[.,]/g, "$1");
                                    setAmount(next);
                                    setReady(false);
                                }}
                                placeholder={copy.other}
                                aria-label={copy.amount}
                                aria-invalid={amount.length > 0 && !amountIsValid}
                                className="h-[76px] w-full rounded-2xl border border-slate-200 bg-slate-50 px-6 pr-24 text-2xl font-bold outline-none transition placeholder:text-base placeholder:font-normal focus:border-[#df9200] focus:bg-white focus:ring-4 focus:ring-[#df9200]/10"
                            />
                            <span className="absolute right-6 top-1/2 -translate-y-1/2 rounded-lg bg-white px-3 py-2 text-xs font-black text-[#df9200] shadow-sm">{currency}</span>
                        </div>
                    </div>

                    <div className="mt-9"><FieldLabel>{copy.payment}</FieldLabel><div className="mt-4 grid gap-3 sm:grid-cols-3">{copy.methods.map((item, index) => { const Icon = methodIcons[index]; return <button type="button" key={item} onClick={() => setMethod(index)} className={`group relative flex min-h-28 flex-col items-start justify-between rounded-2xl border p-5 text-left text-xs font-bold transition-all duration-300 ${method === index ? "border-[#df9200] bg-[#fff8e9] text-[#071117] shadow-[0_12px_30px_rgba(223,146,0,.12)]" : "border-slate-200 text-slate-500 hover:-translate-y-1 hover:border-slate-400"}`}><span className={`grid h-10 w-10 place-items-center rounded-xl transition ${method === index ? "bg-[#df9200] text-white" : "bg-slate-100 group-hover:bg-slate-200"}`}><Icon className="h-5 w-5" /></span>{item}{method === index && <span className="absolute right-4 top-4 grid h-5 w-5 place-items-center rounded-full bg-[#071117] text-white"><Check className="h-3 w-3" /></span>}</button>; })}</div></div>
                    </>}

                    {donationType > 0 && <div className="mt-9 space-y-7">
                        <div>
                            <FieldLabel>{donationType === 1 ? copy.itemCategory : copy.skillCategory}</FieldLabel>
                            <select value={category} onChange={e => { setCategory(e.target.value); setReady(false); }} className="mt-4 h-[60px] w-full rounded-2xl border border-slate-200 bg-white px-5 text-sm font-bold outline-none transition focus:border-[#df9200] focus:ring-4 focus:ring-[#df9200]/10">
                                <option value="">—</option>
                                {(donationType === 1 ? copy.itemCategories : copy.skillCategories).map(item => <option key={item}>{item}</option>)}
                            </select>
                        </div>
                        <div>
                            <FieldLabel>{donationType === 1 ? copy.itemDescription : copy.skillDescription}</FieldLabel>
                            <textarea value={description} onChange={e => { setDescription(e.target.value); setReady(false); }} placeholder={donationType === 1 ? copy.itemPlaceholder : copy.skillPlaceholder} className="mt-4 min-h-32 w-full resize-none rounded-2xl border border-slate-200 p-5 text-sm outline-none transition focus:border-[#df9200] focus:ring-4 focus:ring-[#df9200]/10" />
                        </div>
                        {isLandDonation && <div className="rounded-2xl border border-[#df9200]/25 bg-[#fff8e9] p-5">
                            <div className="grid gap-3 sm:grid-cols-2">
                                <input value={landLocation} onChange={e => { setLandLocation(e.target.value); setReady(false); }} placeholder={copy.landLocation} className="h-[58px] rounded-xl border border-[#df9200]/20 bg-white px-5 text-sm outline-none focus:border-[#df9200]" />
                                <input value={landArea} onChange={e => { setLandArea(e.target.value); setReady(false); }} placeholder={copy.landArea} className="h-[58px] rounded-xl border border-[#df9200]/20 bg-white px-5 text-sm outline-none focus:border-[#df9200]" />
                            </div>
                            <input value={landDocuments} onChange={e => { setLandDocuments(e.target.value); setReady(false); }} placeholder={copy.landDocuments} className="mt-3 h-[58px] w-full rounded-xl border border-[#df9200]/20 bg-white px-5 text-sm outline-none focus:border-[#df9200]" />
                        </div>}
                        <div>
                            <FieldLabel>{copy.contactLabel}</FieldLabel>
                            <div className="mt-4 grid gap-3 sm:grid-cols-2">
                                <input value={name} onChange={e => { setName(e.target.value); setReady(false); }} placeholder={copy.namePlaceholder} className="h-[58px] rounded-2xl border border-slate-200 px-5 text-sm outline-none transition focus:border-[#df9200] focus:ring-4 focus:ring-[#df9200]/10" />
                                <input type="tel" value={phone} onChange={e => { setPhone(e.target.value); setReady(false); }} placeholder={copy.phonePlaceholder} className="h-[58px] rounded-2xl border border-slate-200 px-5 text-sm outline-none transition focus:border-[#df9200] focus:ring-4 focus:ring-[#df9200]/10" />
                            </div>
                        </div>
                    </div>}

                    <button type="button" disabled={!formIsValid} onClick={() => setReady(true)} className="group mt-10 flex h-16 w-full items-center justify-between rounded-2xl bg-[#df9200] px-6 text-xs font-black uppercase tracking-wider text-white shadow-[0_15px_35px_rgba(223,146,0,.25)] transition hover:bg-[#071117] disabled:cursor-not-allowed disabled:bg-slate-200 disabled:text-slate-400 disabled:shadow-none"><span className="flex items-center gap-3">{donationType === 0 ? <LockKeyhole className="h-4 w-4" /> : <HandHeart className="h-4 w-4" />}{donationType === 0 ? copy.continue : donationType === 1 ? copy.submitInKind : copy.submitSkill}</span><ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" /></button>
                    {donationType === 0 && <p className="mt-4 flex items-center justify-center gap-2 text-center text-[11px] text-slate-400"><ShieldCheck className="h-4 w-4 text-emerald-600" />{copy.notice}</p>}

                    <AnimatePresence>{ready && <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="overflow-hidden"><div className="mt-7 rounded-2xl border border-[#df9200]/30 bg-[#fff8e9] p-6"><span className="grid h-10 w-10 place-items-center rounded-full bg-[#df9200] text-white"><Check className="h-5 w-5" /></span><h3 className="mt-4 font-serif text-2xl">{copy.pendingTitle}</h3><p className="mt-2 text-sm leading-6 text-slate-600">{donationType === 0 ? copy.pendingText : copy.proposalReady}</p><p className="mt-4 text-xs font-black uppercase tracking-wider text-[#df9200]">{displayedAmount} {donationType === 0 && currency} · {designation}</p><button type="button" onClick={() => setReady(false)} className="mt-5 text-xs font-bold underline underline-offset-4">{copy.close}</button></div></motion.div>}</AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
}

function FieldLabel({ children }: { children: React.ReactNode }) {
    return <span className="block text-[11px] font-black uppercase tracking-[.16em] text-[#071117]">{children}</span>;
}

function Choice({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) {
    return <button type="button" onClick={onClick} className={`min-h-12 rounded-xl border px-4 text-xs font-bold transition-all ${active ? "border-[#df9200] bg-[#df9200] text-white shadow-[0_8px_20px_rgba(223,146,0,.18)]" : "border-slate-200 bg-white text-slate-600 hover:border-[#df9200] hover:text-[#071117]"}`}>{children}</button>;
}
