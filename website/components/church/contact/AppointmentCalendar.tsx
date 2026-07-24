"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const weekdays = {
    fr: ["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"],
    en: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
};

export default function AppointmentCalendar({
    value,
    onChange,
    locale,
    availableDates,
}: {
    value: string;
    onChange: (date: string) => void;
    locale: "fr" | "en";
    availableDates: string[];
}) {
    const months = useMemo(() => {
        const keys = availableDates.map(date => date.slice(0, 7));
        return [...new Set(keys)].sort();
    }, [availableDates]);
    const [monthIndex, setMonthIndex] = useState(0);
    useEffect(() => setMonthIndex(0), [months.join(",")]);

    if (!months.length) {
        return <div className="rounded border border-dashed border-slate-300 bg-[#fbfaf6] p-10 text-center text-sm text-slate-500">Aucun créneau disponible pour le moment.</div>;
    }

    const [year, monthNumber] = months[Math.min(monthIndex, months.length - 1)].split("-").map(Number);
    const month = monthNumber - 1;
    const firstDay = new Date(Date.UTC(year, month, 1));
    const mondayOffset = (firstDay.getUTCDay() + 6) % 7;
    const daysInMonth = new Date(Date.UTC(year, month + 1, 0)).getUTCDate();
    const available = new Set(availableDates);
    const cells = Array.from({ length: 42 }, (_, index) => {
        const day = index - mondayOffset + 1;
        return day > 0 && day <= daysInMonth ? day : null;
    });
    const monthLabel = new Intl.DateTimeFormat(locale, { month: "long", year: "numeric", timeZone: "UTC" }).format(firstDay);

    return (
        <div className="overflow-hidden rounded border border-slate-200 bg-[#fbfaf6] shadow-[0_18px_50px_rgba(7,17,23,.08)]">
            <div className="flex items-center justify-between bg-[#071117] px-5 py-5 text-white">
                <button type="button" onClick={() => setMonthIndex(index => Math.max(0, index - 1))} disabled={monthIndex === 0} className="grid h-10 w-10 place-items-center rounded border border-white/15 transition hover:bg-white/10 disabled:opacity-25" aria-label="Mois précédent"><ChevronLeft className="h-5 w-5" /></button>
                <AnimatePresence mode="wait"><motion.h3 key={months[monthIndex]} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} className="font-serif text-2xl capitalize">{monthLabel}</motion.h3></AnimatePresence>
                <button type="button" onClick={() => setMonthIndex(index => Math.min(months.length - 1, index + 1))} disabled={monthIndex >= months.length - 1} className="grid h-10 w-10 place-items-center rounded border border-white/15 transition hover:bg-white/10 disabled:opacity-25" aria-label="Mois suivant"><ChevronRight className="h-5 w-5" /></button>
            </div>
            <div className="p-4 sm:p-6">
                <div className="grid grid-cols-7">{weekdays[locale].map(day => <div key={day} className="pb-4 text-center text-[10px] font-black uppercase tracking-wider text-slate-400">{day}</div>)}</div>
                <motion.div key={months[monthIndex]} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="grid grid-cols-7 gap-1 sm:gap-2">
                    {cells.map((day, index) => {
                        if (!day) return <span key={`blank-${index}`} className="aspect-square" />;
                        const iso = `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
                        const isAvailable = available.has(iso);
                        const selected = value === iso;
                        return <motion.button key={iso} type="button" disabled={!isAvailable} onClick={() => onChange(iso)} whileHover={isAvailable ? { y: -2, scale: 1.04 } : undefined} whileTap={isAvailable ? { scale: .94 } : undefined} className={`relative aspect-square rounded text-sm font-bold transition ${selected ? "bg-[#df9200] text-white shadow-lg" : isAvailable ? "border border-[#df9200]/25 bg-[#fff0cf] text-[#8a5700]" : "text-slate-300"}`}>{day}{isAvailable && !selected && <span className="absolute bottom-1.5 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-[#df9200]" />}</motion.button>;
                    })}
                </motion.div>
                <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-slate-200 pt-5 text-xs text-slate-500">
                    <span className="flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-full bg-[#df9200]" />{locale === "fr" ? "Jour disponible" : "Available day"}</span>
                    <span>{locale === "fr" ? "Fuseau horaire : Kinshasa" : "Time zone: Kinshasa"}</span>
                </div>
            </div>
        </div>
    );
}
