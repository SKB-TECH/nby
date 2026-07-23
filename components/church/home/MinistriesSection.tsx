"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { HomeCopy } from "./HomePage";
import { reveal } from "./motion";

export default function MinistriesSection({ copy: c }: { copy: HomeCopy }) {
    return <section id="ministries" className="bg-white px-5 py-24 sm:px-8"><div className="mx-auto max-w-[1180px]"><h2 className="font-serif text-5xl">{c.ministryTitle}</h2><p className="mt-3 text-slate-500">{c.ministryText}</p><div className="mt-10 grid auto-rows-[180px] gap-4 sm:grid-cols-2 lg:grid-cols-4">{c.ministries.map((item, i) => <motion.article key={item} {...reveal} className={`group relative overflow-hidden ${i === 0 ? "sm:row-span-2 lg:col-span-2" : ""}`}><Image src="/church/community-fellowship.png" alt="" fill className="object-cover transition duration-700 group-hover:scale-105" style={{ objectPosition: `${15 + i * 18}% center` }} /><div className="absolute inset-0 bg-gradient-to-t from-[#071117]/85 to-transparent" /><h3 className="absolute bottom-5 left-5 font-serif text-2xl text-white">{item}</h3></motion.article>)}</div></div></section>;
}
