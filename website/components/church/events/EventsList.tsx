"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Clock3, Heart, MessageCircle } from "lucide-react";
import Link from "next/link";
import { useLocale } from "next-intl";
import type { EventsCopy } from "./events-copy";
import { ActivityEngagementSummary, publicApi } from "../../../lib/church-api";

type EventItem = readonly [string, string, string, string, string, string, (string | undefined)?, (string | undefined)?];

export default function EventsList({ copy, events }: { copy: EventsCopy; events?: readonly EventItem[] }) {
    const locale = useLocale();
    const [activeFilter, setActiveFilter] = useState(copy.filters[0]);
    const [engagement, setEngagement] = useState<Record<string, ActivityEngagementSummary>>({});
    const eventItems = (events ?? []) as readonly EventItem[];
    const normalize = (value: string) =>
        value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toUpperCase();
    const filteredEvents =
        activeFilter === copy.filters[0]
            ? eventItems
            : eventItems.filter((event) => normalize(event[2]) === normalize(activeFilter));

    useEffect(() => {
        publicApi<ActivityEngagementSummary[]>("/public/activities/engagement-summary")
            .then(items => setEngagement(Object.fromEntries(items.map(item => [item.activityId, item]))))
            .catch(() => setEngagement({}));
    }, []);

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
                    {!filteredEvents.length && (
                        <div className="rounded border border-dashed border-slate-300 bg-white px-6 py-14 text-center">
                            <h3 className="font-serif text-2xl">Aucun événement publié</h3>
                            <p className="mt-2 text-sm text-slate-500">Les prochains rendez-vous de NBY seront affichés ici dès leur publication.</p>
                        </div>
                    )}
                    <AnimatePresence mode="popLayout">
                        {filteredEvents.map((event, index) => (
                            <motion.article
                                layout
                                key={event[7] ?? `${event[3]}-${event[0]}-${event[1]}`}
                                initial={{ opacity: 0, y: 22, scale: 0.98 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: -16, scale: 0.98 }}
                                whileHover={{ x: 6 }}
                                transition={{ duration: 0.35, delay: index * 0.04 }}
                                className={`grid items-center gap-5 rounded bg-white p-5 shadow-sm ${event[6] ? "sm:grid-cols-[120px_76px_1fr_auto]" : "sm:grid-cols-[76px_1fr_auto]"}`}
                            >
                                {event[6] && <img src={event[6]} alt="" className="h-24 w-full rounded object-cover sm:w-[120px]" />}
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
                                    {event[7] && <p className="event-card-engagement"><span><Heart />{engagement[event[7]]?.likes ?? 0} J’aime</span><span><MessageCircle />{engagement[event[7]]?.comments ?? 0} commentaire{(engagement[event[7]]?.comments ?? 0) > 1 ? "s" : ""}</span></p>}
                                </div>
                                {event[7] && <Link href={`/${locale}/events/${event[7]}`} aria-label={`${locale === "en" ? "View details for" : "Voir les détails de"} ${event[3]}`} className="flex items-center gap-2 text-xs font-bold text-[#9d6200] transition hover:text-[#071117]">
                                    {locale === "en" ? "Details" : "Détails"} <ArrowRight className="h-4 w-4" />
                                </Link>}
                            </motion.article>
                        ))}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}
