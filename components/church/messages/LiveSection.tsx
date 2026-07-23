"use client";

import { motion } from "framer-motion";
import { Radio } from "lucide-react";
import { YOUTUBE_CHANNEL_ID, type MessagesCopy } from "./messages-data";

export default function LiveSection({ copy }: { copy: MessagesCopy }) {
    return (
        <section className="px-5 py-20 sm:px-8">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mx-auto grid max-w-[1180px] overflow-hidden bg-[#0d182b] text-white shadow-2xl lg:grid-cols-[1.3fr_.7fr]">
                <div className="relative min-h-[360px] bg-black lg:min-h-[470px]">
                    <iframe
                        src={`https://www.youtube.com/embed/live_stream?channel=${YOUTUBE_CHANNEL_ID}&rel=0`}
                        title={copy.liveTitle}
                        className="absolute inset-0 h-full w-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                    />
                </div>
                <div className="flex flex-col justify-center p-8 sm:p-12">
                    <p className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[.25em] text-[#f0a40b]"><Radio className="h-4 w-4" />{copy.liveEyebrow}</p>
                    <h2 className="mt-5 font-serif text-4xl">{copy.liveTitle}</h2>
                    <p className="mt-5 leading-8 text-white/60">{copy.liveText}</p>
                    <span className="mt-6 w-fit rounded-full border border-white/15 px-4 py-2 text-[10px] font-bold uppercase tracking-wider text-white/65">{copy.liveStatus}</span>
                </div>
            </motion.div>
        </section>
    );
}
