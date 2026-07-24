"use client";

import { FormEvent, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { CalendarDays, Check, Clock3, LockKeyhole, UserRound } from "lucide-react";
import { appointmentDates, slotsByDate, type ContactCopy } from "./contact-copy";
import AppointmentCalendar from "./AppointmentCalendar";
import { publicApi } from "@/lib/church-api";

export default function AppointmentBooking({ copy }: { copy: ContactCopy }) {
    const [type, setType] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [confirmed, setConfirmed] = useState(false);
    const [submitting, setSubmitting] = useState(false);
    const [error, setError] = useState("");
    const locale = copy.title === "Book an appointment" ? "en" : "fr";
    const selectedDate = useMemo(() => appointmentDates.find((item) => item.iso === date), [date]);

    async function submit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        if (!type || !date || !time) return;
        const form = new FormData(event.currentTarget);
        setSubmitting(true); setError("");
        try {
            await publicApi("/public/appointments", {
                method: "POST",
                body: JSON.stringify({
                    name: `${form.get("firstName")} ${form.get("lastName")}`.trim(),
                    email: form.get("email"),
                    phone: form.get("phone"),
                    reason: type,
                    scheduledAt: `${date}T${time}:00+02:00`,
                    notes: form.get("note"),
                    status: "pending",
                }),
            });
            setConfirmed(true);
        } catch (submitError) {
            setError(submitError instanceof Error ? submitError.message : "Impossible d’enregistrer le rendez-vous.");
        } finally {
            setSubmitting(false);
        }
    }

    function reset() {
        setType(""); setDate(""); setTime(""); setConfirmed(false);
    }

    if (confirmed) {
        return <section className="px-5 py-24 sm:px-8"><motion.div initial={{ opacity: 0, scale: .96 }} animate={{ opacity: 1, scale: 1 }} className="mx-auto max-w-2xl rounded-2xl bg-white p-10 text-center shadow-xl"><span className="mx-auto grid h-20 w-20 place-items-center rounded-full bg-[#fff0cf] text-[#df9200]"><Check className="h-9 w-9" /></span><h2 className="mt-7 font-serif text-4xl">{copy.confirmed}</h2><p className="mt-5 leading-8 text-slate-600">{copy.confirmedText}</p><div className="mx-auto mt-7 max-w-md rounded-lg bg-[#071117] p-6 text-left text-white"><p className="font-bold">{type}</p><p className="mt-2 text-sm text-white/65">{selectedDate?.[locale]} · {time}</p></div><button type="button" onClick={reset} className="mt-7 bg-[#df9200] px-7 py-4 text-xs font-bold uppercase tracking-wider text-white">{copy.another}</button></motion.div></section>;
    }

    return (
        <section className="px-5 py-20 sm:px-8">
            <form onSubmit={submit} className="mx-auto grid max-w-[1180px] items-start gap-8 lg:grid-cols-[1fr_360px]">
                <div className="space-y-8">
                    <Step title={copy.chooseType} icon={UserRound}>
                        <div className="grid gap-3 sm:grid-cols-2">{copy.types.map((item) => <ChoiceButton key={item} active={type === item} onClick={() => setType(item)}>{item}</ChoiceButton>)}</div>
                    </Step>
                    <Step title={copy.chooseDate} icon={CalendarDays}>
                        <AppointmentCalendar value={date} locale={locale} onChange={(selectedDate) => { setDate(selectedDate); setTime(""); }} />
                    </Step>
                    <Step title={copy.chooseTime} icon={Clock3}>
                        {!date ? <p className="text-sm text-slate-400">{copy.chooseDate}</p> : <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">{slotsByDate[date].map((slot) => <ChoiceButton key={slot} active={time === slot} onClick={() => setTime(slot)}>{slot}</ChoiceButton>)}</div>}
                        <p className="mt-4 text-xs text-slate-400">{copy.duration}</p>
                    </Step>
                    <Step title={copy.details} icon={UserRound}>
                        <div className="grid gap-4 sm:grid-cols-2"><Field name="firstName" label={copy.firstName} required /><Field name="lastName" label={copy.lastName} required /><Field name="email" label={copy.email} type="email" required /><Field name="phone" label={copy.phone} type="tel" required /><label className="sm:col-span-2 text-xs font-bold uppercase tracking-wide text-slate-500">{copy.note}<textarea name="note" className="mt-2 min-h-28 w-full rounded-lg border border-slate-200 p-4 text-sm font-normal normal-case outline-none focus:border-[#df9200]" /></label></div>
                    </Step>
                </div>
                <aside className="sticky top-24 rounded-2xl bg-[#0d182b] p-7 text-white shadow-xl"><h2 className="font-serif text-2xl">{copy.summary}</h2>{type && date && time ? <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-6 space-y-4"><Summary icon={UserRound} text={type} /><Summary icon={CalendarDays} text={selectedDate?.[locale] ?? date} /><Summary icon={Clock3} text={`${time} · 30 min`} /></motion.div> : <p className="mt-5 text-sm leading-6 text-white/50">{copy.noSelection}</p>}{error && <p className="mt-5 bg-red-500/15 p-3 text-xs leading-5 text-red-200">{error}</p>}<button type="submit" disabled={!type || !date || !time || submitting} className="mt-7 h-13 w-full bg-[#df9200] text-xs font-bold uppercase tracking-wider text-white transition disabled:cursor-not-allowed disabled:opacity-35">{submitting ? "Enregistrement…" : copy.reserve}</button><p className="mt-5 flex gap-2 text-[11px] leading-5 text-white/45"><LockKeyhole className="h-4 w-4 shrink-0 text-[#f0a40b]" />{copy.privacy}</p></aside>
            </form>
        </section>
    );
}

function Step({ title, icon: Icon, children }: { title: string; icon: typeof UserRound; children: React.ReactNode }) {
    return <motion.section initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-2xl bg-white p-6 shadow-sm sm:p-8"><h2 className="mb-6 flex items-center gap-3 font-serif text-2xl"><Icon className="h-5 w-5 text-[#df9200]" />{title}</h2>{children}</motion.section>;
}

function ChoiceButton({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) {
    return <motion.button type="button" whileHover={{ y: -2 }} whileTap={{ scale: .97 }} onClick={onClick} className={`min-h-12 rounded-lg border px-4 py-3 text-sm font-bold transition ${active ? "border-[#df9200] bg-[#fff0cf] text-[#9d6200]" : "border-slate-200 bg-white text-slate-600 hover:border-[#df9200]"}`}>{children}</motion.button>;
}

function Field({ name, label, type = "text", required = false }: { name: string; label: string; type?: string; required?: boolean }) {
    return <label className="text-xs font-bold uppercase tracking-wide text-slate-500">{label}<input name={name} type={type} required={required} className="mt-2 h-12 w-full rounded-lg border border-slate-200 px-4 text-sm font-normal normal-case outline-none focus:border-[#df9200]" /></label>;
}

function Summary({ icon: Icon, text }: { icon: typeof UserRound; text: string }) {
    return <p className="flex items-center gap-3 border-b border-white/10 pb-4 text-sm"><Icon className="h-4 w-4 text-[#f0a40b]" />{text}</p>;
}
