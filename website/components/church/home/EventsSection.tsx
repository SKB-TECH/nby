"use client";

import { motion } from "framer-motion";
import type { HomeCopy } from "./HomePage";
import { reveal } from "./motion";

export default function EventsSection({ copy: c }: { copy: HomeCopy }) {
    return <section id="events" className="bg-[#fffaf0] px-5 py-24 sm:px-8"><div className="mx-auto max-w-[1180px]">
        <p className="text-xs font-bold uppercase tracking-[.25em] text-[#df9200]">{c.eventsEyebrow}</p><h2 className="mt-4 font-serif text-4xl sm:text-5xl">{c.eventsTitle}</h2>
        {c.events.length ? <div className="mt-12 grid gap-5 lg:grid-cols-3">{c.events.map((event, i) => <motion.article key={`${event[0]}-${event[1]}`} {...reveal} transition={{ delay: i * .08 }} className="border-t-2 border-[#e6a31a] bg-white p-7 shadow-sm"><p className="text-[11px] font-bold tracking-widest text-[#df9200]">{event[0]}</p><h3 className="mt-5 font-serif text-2xl">{event[1]}</h3><p className="mt-4 text-sm leading-6 text-slate-500">{event[2]}</p></motion.article>)}</div> : <div className="mt-10 border border-dashed border-slate-300 bg-white px-6 py-12 text-center text-sm text-slate-500">Aucun programme n’est publié pour le moment.</div>}
    </div></section>;
}
