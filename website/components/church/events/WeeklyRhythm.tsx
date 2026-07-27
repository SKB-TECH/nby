"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Church } from "lucide-react";
import type { EventsCopy } from "./events-copy";

export default function WeeklyRhythm({ copy }: { copy: EventsCopy }) {
    return <section className="bg-[#0d182b] px-5 py-24 text-white sm:px-8">
        <div className="mx-auto grid max-w-[1180px] items-center gap-16 lg:grid-cols-2">
            <motion.div initial={{ opacity: 0, x: -35 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <p className="font-serif text-2xl italic text-[#f0a40b]">{copy.rhythmEyebrow}</p>
                <h2 className="mt-3 font-serif text-4xl">{copy.rhythmTitle}</h2>
                <p className="mt-5 max-w-xl leading-7 text-white/60">{copy.rhythmText}</p>
                <div className="mt-8 divide-y divide-white/10">{copy.rhythm.map(item => <motion.div key={item[0]} whileHover={{ x: 8 }} className="grid grid-cols-[42px_1fr] gap-3 py-5"><span className="font-serif italic text-[#f0a40b]">{item[0]}</span><span><strong className="block text-xs uppercase tracking-wider">{item[1]}</strong><small className="mt-1 block text-white/50">{item[2]}</small></span></motion.div>)}</div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 35 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative min-h-[590px] overflow-hidden border border-white/10">
                <Image src="/church/events-welcome-nby.jpeg" alt={copy.welcome} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover object-center" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d182b]/65 via-transparent to-transparent" />
                <motion.div initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: .25 }} className="absolute inset-x-5 bottom-5 bg-[#fffaf0]/95 p-7 text-left text-[#172033] shadow-2xl backdrop-blur-sm sm:inset-x-8 sm:bottom-8 sm:p-9">
                    <span className="grid h-12 w-12 place-items-center bg-[#df9200] text-white"><Church className="h-6 w-6" /></span>
                    <h3 className="mt-5 font-serif text-3xl italic">{copy.welcome}</h3>
                    <p className="mt-3 text-sm leading-6 text-slate-500">{copy.welcomeText}</p>
                </motion.div>
            </motion.div>
        </div>
    </section>;
}
