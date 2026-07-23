"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Clock3 } from "lucide-react";
import type { EventsCopy } from "./events-copy";

export default function EventsList({ copy }: { copy: EventsCopy }) {
    const [activeFilter, setActiveFilter] = useState(copy.filters[0]);
    const normalize = (value: string) =>
        value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toUpperCase();
    const filteredEvents =
        activeFilter === copy.filters[0]
            ? copy.events
            : copy.events.filter((event) => normalize(event[2]) === normalize(activeFilter));

    return (
        <section className="px-5 py-20 sm:px-8">
            <div className="mx-auto max-w-[1180px]">
                <h2 className="font-serif text-4xl">{copy.upcoming}</h2>
                <div className="mt-8 flex flex-wrap gap-3 border-b border-slate-200 pb-6" role="tablist">
                    {copy.filters.map((filter) => {
                        const active = activeFilter === filter;
                        return (
                            <motion.button
                                key={filter}
                                type="button"
                                role="tab"
                                aria-selected={active}
                                whileHover={{ y: -2 }}
                                whileTap={{ scale: 0.96 }}
                                onClick={() => setActiveFilter(filter)}
                                className={`rounded-full px-5 py-2 text-xs font-bold transition ${
                                    active
                                        ? "bg-[#071117] text-white shadow-md"
                                        : "bg-[#eaf0fb] text-slate-500 hover:bg-[#df9200] hover:text-white"
                                }`}
                            >
                                {filter}
                            </motion.button>
                        );
                    })}
                </div>

                <motion.p layout className="mt-5 text-xs font-bold uppercase tracking-wider text-slate-400">
                    {filteredEvents.length} événement{filteredEvents.length > 1 ? "s" : ""}
                </motion.p>

                <div className="mt-5 space-y-5">
                    <AnimatePresence mode="popLayout">
                        {filteredEvents.map((event, index) => (
                            <motion.article
                                layout
                                key={event[3]}
                                initial={{ opacity: 0, y: 22, scale: 0.98 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: -16, scale: 0.98 }}
                                whileHover={{ x: 6 }}
                                transition={{ duration: 0.35, delay: index * 0.04 }}
                                className="grid items-center gap-5 rounded bg-white p-5 shadow-sm sm:grid-cols-[76px_1fr_auto]"
                            >
                                <div className="grid h-20 place-items-center rounded bg-[#071117] text-center text-white">
                                    <span>
                                        <strong className="block text-xl">{event[0]}</strong>
                                        <small className="text-[9px] tracking-wider">{event[1]}</small>
                                    </span>
                                </div>
                                <div>
                                    <p className="flex flex-wrap items-center gap-3 text-[10px] font-bold">
                                        <span className="rounded bg-[#fff0cf] px-2 py-1 text-[#9d6200]">{event[2]}</span>
                                        <span className="flex items-center gap-1 text-slate-400">
                                            <Clock3 className="h-3 w-3" />{event[4]}
                                        </span>
                                    </p>
                                    <h3 className="mt-2 font-serif text-2xl">{event[3]}</h3>
                                    <p className="mt-2 text-sm text-slate-500">{event[5]}</p>
                                </div>
                                <button aria-label={event[3]} className="flex items-center gap-2 text-xs font-bold text-[#9d6200]">
                                    Détails <ArrowRight className="h-4 w-4" />
                                </button>
                            </motion.article>
                        ))}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}
