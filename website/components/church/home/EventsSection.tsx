"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, CalendarDays, Clock3 } from "lucide-react";
import type { HomeCopy } from "./HomePage";

const visuals = [
    { src: "/church/weekly-wednesday.jpeg", day: "MER", dayEn: "WED", position: "center center" },
    { src: "/church/weekly-friday.jpeg", day: "VEN", dayEn: "FRI", position: "center center" },
    { src: "/church/weekly-sunday.jpeg", day: "DIM", dayEn: "SUN", position: "center center" },
];

export default function EventsSection({ copy: c }: { copy: HomeCopy }) {
    const english = c.eventsEyebrow.includes("weekly");
    return <section id="events" className="relative overflow-hidden bg-[#e9eef2] px-5 py-24 sm:px-8 lg:py-32">
        <div className="pointer-events-none absolute -right-40 top-0 h-96 w-96 rounded-full bg-[#6d8798]/15 blur-[100px]" />
        <div className="relative mx-auto max-w-[1240px]">
            <div className="grid items-end gap-8 lg:grid-cols-[1fr_.55fr]"><div><p className="text-xs font-bold uppercase tracking-[.28em] text-[#df9200]">{c.eventsEyebrow}</p><h2 className="mt-5 max-w-3xl font-serif text-5xl leading-tight sm:text-6xl">{c.eventsTitle}</h2></div><p className="max-w-md text-sm leading-7 text-slate-500">{english ? "Three weekly gatherings to pray, receive the Word and experience God’s supernatural presence together." : "Trois rendez-vous chaque semaine pour prier, recevoir la Parole et expérimenter ensemble la présence surnaturelle de Dieu."}</p></div>
            <div className="mt-14 grid gap-6 lg:grid-cols-3">{c.events.map((event, index) => {
                const visual = visuals[index];
                return <motion.article key={`${event[0]}-${event[1]}`} initial={{ opacity: 0, y: 35 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-70px" }} transition={{ duration: .65, delay: index * .1 }} whileHover={{ y: -8 }} className="group overflow-hidden border border-[#dfd8ca] bg-white shadow-[0_18px_50px_rgba(7,17,23,.08)]">
                    <div className="relative h-[310px] overflow-hidden">
                        <Image src={visual.src} alt={event[1]} fill sizes="(max-width: 1024px) 100vw, 33vw" className="object-cover transition duration-700 group-hover:scale-105" style={{ objectPosition: visual.position }} />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#071117]/75 via-transparent to-transparent" />
                        <span className="absolute left-5 top-5 grid h-16 w-16 place-items-center bg-[#df9200] text-center text-[11px] font-black tracking-[.12em] text-white">{english ? visual.dayEn : visual.day}</span>
                        <span className="absolute bottom-5 left-5 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[.14em] text-white"><CalendarDays className="h-4 w-4 text-[#f0a40b]" />{event[0].split("·")[0]}</span>
                    </div>
                    <div className="p-7">
                        <div className="flex items-start justify-between gap-4"><h3 className="font-serif text-3xl leading-tight text-[#172033]">{event[1]}</h3><ArrowUpRight className="h-5 w-5 shrink-0 text-[#df9200] transition group-hover:translate-x-1 group-hover:-translate-y-1" /></div>
                        <p className="mt-4 flex items-center gap-2 text-[11px] font-black uppercase tracking-wider text-[#df9200]"><Clock3 className="h-4 w-4" />{event[0].split("·")[1]}</p>
                        <p className="mt-5 text-sm leading-7 text-slate-500">{event[2]}</p>
                        <a href="#visit" className="mt-7 inline-flex border-b border-[#172033] pb-1 text-[10px] font-black uppercase tracking-[.14em] text-[#172033] transition hover:border-[#df9200] hover:text-[#df9200]">{english ? "Plan my visit" : "Planifier ma visite"}</a>
                    </div>
                </motion.article>;
            })}</div>
        </div>
    </section>;
}
