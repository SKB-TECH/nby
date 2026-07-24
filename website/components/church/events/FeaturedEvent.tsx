"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CalendarDays, MapPin } from "lucide-react";
import ThreeBackground from "@/components/new/ThreeBackground";
import type { EventsCopy } from "./events-copy";
import type { PublicActivity } from "@/lib/church-api";

const colors: [string, string, string] = ["#ffffff", "#f0a40b", "#fff0cf"];

export default function FeaturedEvent({ copy, event, locale }: { copy: EventsCopy; event?: PublicActivity; locale: "fr" | "en" }) {
    if (!event) return null;
    const startsAt = new Date(event.startsAt);
    const endsAt = event.endsAt ? new Date(event.endsAt) : null;
    const date = new Intl.DateTimeFormat(locale, { dateStyle: "long", timeStyle: "short" }).format(startsAt);
    const dateLabel = endsAt ? `${date} — ${new Intl.DateTimeFormat(locale, { timeStyle: "short" }).format(endsAt)}` : date;
    return <section className="px-5 py-10 sm:px-8"><motion.article initial={{ opacity: 0, y: 35 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative mx-auto min-h-[430px] max-w-[1180px] overflow-hidden rounded shadow-2xl"><Image src={event.posterUrl || "/church/hero-sanctuary.png"} alt={event.title} fill priority className="object-cover" /><div className="absolute inset-0 bg-gradient-to-r from-[#071117]/95 via-[#071117]/72 to-[#071117]/15" /><ThreeBackground className="pointer-events-none absolute inset-0 z-[2] opacity-85 mix-blend-screen" colors={colors} glowColor="#f0a40b" particleCount={1100} particleSize={0.2} speed={0.45} /><div className="relative z-10 flex min-h-[430px] max-w-3xl flex-col justify-center px-7 py-12 text-white sm:px-12"><span className="w-fit rounded bg-[#f0a40b] px-4 py-2 text-[10px] font-bold uppercase tracking-wider text-[#071117]">{event.type}</span><h2 className="mt-5 font-serif text-4xl italic leading-tight sm:text-6xl">{event.title}</h2>{event.description && <p className="mt-5 max-w-2xl leading-7 text-white/70">{event.description.replace(/<[^>]*>/g, " ")}</p>}<div className="mt-8 flex flex-wrap items-center gap-6 text-xs font-bold"><span className="flex items-center gap-2"><CalendarDays className="h-4 w-4 text-[#f0a40b]" />{dateLabel}</span>{event.location && <span className="flex items-center gap-2"><MapPin className="h-4 w-4 text-[#f0a40b]" />{event.location}</span>}<motion.button whileHover={{ y: -3, scale: 1.03 }} whileTap={{ scale: .97 }} className="rounded bg-white px-7 py-4 text-[#071117]">{copy.register}</motion.button></div></div></motion.article></section>;
}
