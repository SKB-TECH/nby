"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Play } from "lucide-react";
import { sermons, YOUTUBE_CHANNEL, type MessagesCopy } from "./messages-data";
import VideoPlayerModal from "./VideoPlayerModal";

export default function SermonsGrid({ copy }: { copy: MessagesCopy }) {
    const [selected, setSelected] = useState<(typeof sermons)[number] | null>(null);

    return (
        <section className="px-5 py-20 sm:px-8">
            <div className="mx-auto max-w-[1180px]">
                <div className="flex items-end justify-between gap-6">
                    <h2 className="font-serif text-4xl sm:text-5xl">{copy.latest}</h2>
                    <a href={`${YOUTUBE_CHANNEL}/videos`} target="_blank" rel="noreferrer" className="hidden items-center gap-2 text-xs font-bold uppercase text-[#9d6200] sm:flex">{copy.all}<ExternalLink className="h-4 w-4" /></a>
                </div>
                <div className="mt-12 grid gap-x-7 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
                    {sermons.map((sermon, index) => (
                        <motion.article key={sermon.id} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} whileHover={{ y: -7 }} viewport={{ once: true }} transition={{ delay: index * .06 }} className="group">
                            <button type="button" onClick={() => setSelected(sermon)} className="w-full text-left">
                                <div className="relative aspect-video overflow-hidden bg-[#071117]">
                                    <img src={`https://i.ytimg.com/vi/${sermon.id}/hqdefault.jpg`} alt={sermon.title} className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
                                    <div className="absolute inset-0 bg-black/15 transition group-hover:bg-black/35" />
                                    <span className="absolute inset-0 grid place-items-center"><span className="grid h-14 w-14 place-items-center rounded-full bg-white text-[#df9200] shadow-xl transition group-hover:scale-110"><Play className="ml-1 h-5 w-5 fill-current" /></span></span>
                                </div>
                                <p className="mt-5 text-[10px] font-bold uppercase tracking-[.18em] text-[#df9200]">{sermon.category} · {sermon.date}</p>
                                <h3 className="mt-3 font-serif text-2xl leading-tight">{sermon.title}</h3>
                                <span className="mt-4 inline-flex items-center gap-2 text-xs font-bold text-slate-500">{copy.watch}<Play className="h-3.5 w-3.5" /></span>
                            </button>
                        </motion.article>
                    ))}
                </div>
            </div>
            <VideoPlayerModal videoId={selected?.id ?? null} title={selected?.title ?? ""} onClose={() => setSelected(null)} />
        </section>
    );
}
