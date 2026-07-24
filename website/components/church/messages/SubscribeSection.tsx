"use client";

import { motion } from "framer-motion";
import { Bell, Play } from "lucide-react";
import { YOUTUBE_CHANNEL, type MessagesCopy } from "./messages-data";

export default function SubscribeSection({ copy }: { copy: MessagesCopy }) {
    return <section className="bg-[#fff5df] px-5 py-24 text-center sm:px-8"><motion.div initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mx-auto max-w-3xl"><motion.div animate={{ rotate: [-8, 8, -8] }} transition={{ duration: 2.2, repeat: Infinity }}><Bell className="mx-auto h-10 w-10 text-[#df9200]" /></motion.div><h2 className="mt-6 font-serif text-4xl sm:text-5xl">{copy.subscribeTitle}</h2><p className="mx-auto mt-5 max-w-2xl leading-8 text-slate-600">{copy.subscribeText}</p><motion.a whileHover={{ y: -3, scale: 1.03 }} href={`${YOUTUBE_CHANNEL}?sub_confirmation=1`} target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center gap-3 bg-[#e00000] px-7 py-4 text-xs font-bold uppercase tracking-wider text-white"><Play className="h-5 w-5" />{copy.subscribe}</motion.a></motion.div></section>;
}
