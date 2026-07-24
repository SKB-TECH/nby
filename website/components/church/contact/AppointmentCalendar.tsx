"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { appointmentDates } from "./contact-copy";

const monthNames = {
    fr: ["Juillet 2026", "Août 2026"],
    en: ["July 2026", "August 2026"],
};

const weekdays = {
    fr: ["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"],
    en: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
};

export default function AppointmentCalendar({ value, onChange, locale }: { value: string; onChange: (date: string) => void; locale: "fr" | "en" }) {
    const [monthIndex, setMonthIndex] = useState(0);
    const month = monthIndex === 0 ? 6 : 7;
    const year = 2026;
    const firstDay = new Date(Date.UTC(year, month, 1));
    const mondayOffset = (firstDay.getUTCDay() + 6) % 7;
    const daysInMonth = new Date(Date.UTC(year, month + 1, 0)).getUTCDate();
    const available = new Set(appointmentDates.map((item) => item.iso));
    const cells = Array.from({ length: 42 }, (_, index) => {
        const day = index - mondayOffset + 1;
        return day > 0 && day <= daysInMonth ? day : null;
    });

    return (
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-[#fbfaf6] shadow-[0_18px_50px_rgba(7,17,23,.08)]">
            <div className="flex items-center justify-between bg-[#071117] px-5 py-5 text-white">
                <button type="button" onClick={() => setMonthIndex(0)} disabled={monthIndex === 0} className="grid h-10 w-10 place-items-center rounded-full border border-white/15 transition hover:bg-white/10 disabled:opacity-25" aria-label="Mois précédent"><ChevronLeft className="h-5 w-5" /></button>
                <AnimatePresence mode="wait"><motion.h3 key={monthIndex} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} className="font-serif text-2xl">{monthNames[locale][monthIndex]}</motion.h3></AnimatePresence>
                <button type="button" onClick={() => setMonthIndex(1)} disabled={monthIndex === 1} className="grid h-10 w-10 place-items-center rounded-full border border-white/15 transition hover:bg-white/10 disabled:opacity-25" aria-label="Mois suivant"><ChevronRight className="h-5 w-5" /></button>
            </div>
            <div className="p-4 sm:p-6">
                <div className="grid grid-cols-7">{weekdays[locale].map((day) => <div key={day} className="pb-4 text-center text-[10px] font-black uppercase tracking-wider text-slate-400">{day}</div>)}</div>
                <AnimatePresence mode="wait">
                    <motion.div key={monthIndex} initial={{ opacity: 0, x: monthIndex ? 25 : -25 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: monthIndex ? -25 : 25 }} transition={{ duration: .25 }} className="grid grid-cols-7 gap-1 sm:gap-2">
                        {cells.map((day, index) => {
                            if (!day) return <span key={`blank-${index}`} className="aspect-square" />;
                            const iso = `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
                            const isAvailable = available.has(iso);
                            const selected = value === iso;
                            return (
                                <motion.button
                                    key={iso}
                                    type="button"
                                    disabled={!isAvailable}
                                    onClick={() => onChange(iso)}
                                    whileHover={isAvailable ? { y: -2, scale: 1.04 } : undefined}
                                    whileTap={isAvailable ? { scale: .94 } : undefined}
                                    className={`relative aspect-square rounded-xl text-sm font-bold transition ${
                                        selected
                                            ? "bg-[#df9200] text-white shadow-lg shadow-[#df9200]/25"
                                            : isAvailable
                                                ? "border border-[#df9200]/25 bg-[#fff0cf] text-[#8a5700] hover:border-[#df9200]"
                                                : "text-slate-300"
                                    }`}
                                >
                                    {day}
                                    {isAvailable && !selected && <span className="absolute bottom-1.5 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-[#df9200]" />}
                                    {selected && <motion.span layoutId="selected-day" className="absolute inset-0 -z-10 rounded-xl bg-[#df9200]" />}
                                </motion.button>
                            );
                        })}
                    </motion.div>
                </AnimatePresence>
                <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-slate-200 pt-5 text-xs text-slate-500">
                    <span className="flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-full bg-[#df9200]" />{locale === "fr" ? "Jour disponible" : "Available day"}</span>
                    <span>{locale === "fr" ? "Fuseau horaire : Kinshasa" : "Time zone: Kinshasa"}</span>
                </div>
            </div>
        </div>
    );
}
