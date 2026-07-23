"use client";

import { motion } from "framer-motion";
import { UsersRound } from "lucide-react";
import type { EventsCopy } from "./events-copy";

export default function HostEvent({ copy }: { copy: EventsCopy }) {
    return <section className="px-5 py-24 sm:px-8"><motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative mx-auto max-w-3xl overflow-hidden rounded-2xl border border-[#f0a40b]/20 bg-white px-8 py-16 text-center shadow-sm"><UsersRound className="absolute right-8 top-7 h-20 w-20 text-slate-100" /><h2 className="relative font-serif text-3xl sm:text-4xl">{copy.hostTitle}</h2><p className="relative mx-auto mt-5 max-w-xl leading-7 text-slate-500">{copy.hostText}</p><motion.button whileHover={{ y: -3, scale: 1.03 }} whileTap={{ scale: .97 }} className="relative mt-8 rounded bg-[#071117] px-7 py-4 text-xs font-bold uppercase tracking-wider text-white transition hover:bg-[#df9200]">{copy.contact}</motion.button></motion.div></section>;
}
