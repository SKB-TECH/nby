"use client";

import { motion } from "framer-motion";
import { CalendarDays, Sparkles } from "lucide-react";
import type { YouthCopy } from "./youth-copy";

export default function WeeklyGathering({ copy }: { copy: YouthCopy }) {
    const cards = [[copy.chapel, copy.chapelText], [copy.expect, copy.expectText]];
    return <section id="weekly" className="bg-[#0d182b] px-5 py-20 text-white sm:px-8"><div className="mx-auto grid max-w-[1180px] gap-8 lg:grid-cols-[1fr_1fr_.7fr]"><div><h2 className="font-serif text-3xl">{copy.weekly}</h2><p className="mt-2 font-bold text-[#f0a40b]">{copy.every}</p><div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">{cards.map((card, i) => <motion.div key={card[0]} whileHover={{ y: -6, borderColor: "#df9200" }} className="border border-white/10 p-6"><Sparkles className="h-5 w-5 text-[#f0a40b]" /><h3 className="mt-5 font-serif text-xl">{card[0]}</h3><p className="mt-3 text-sm leading-6 text-white/55">{card[1]}</p></motion.div>)}</div></div><div /><motion.div initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-white/10 p-8 text-center"><CalendarDays className="mx-auto h-9 w-9 text-[#f0a40b]" /><h3 className="mt-5 font-serif text-2xl italic">{copy.first}</h3><p className="mt-4 text-sm leading-6 text-white/60">{copy.firstText}</p><button className="mt-7 bg-white px-6 py-3 text-xs font-bold uppercase text-[#071117]">{copy.plan}</button></motion.div></div></section>;
}
