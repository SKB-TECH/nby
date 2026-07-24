"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { YouthCopy } from "./youth-copy";

export default function YouthGallery({ copy }: { copy: YouthCopy }) {
    return <section className="px-5 py-24 text-center sm:px-8"><h2 className="font-serif text-4xl">{copy.galleryTitle}</h2><p className="mt-3 text-sm text-slate-500">@nbyjeunesse</p><div className="mx-auto mt-10 grid max-w-[1180px] grid-cols-2 gap-3 md:grid-cols-4">{[0, 1, 2, 3].map((item) => <motion.div key={item} initial={{ opacity: 0, scale: .94 }} whileInView={{ opacity: 1, scale: 1 }} whileHover={{ scale: 1.03 }} viewport={{ once: true }} className="relative aspect-square overflow-hidden"><Image src={item % 2 ? "/church/hero-sanctuary.png" : "/church/community-fellowship.png"} alt="" fill className="object-cover" style={{ objectPosition: `${20 + item * 20}% center` }} /></motion.div>)}</div></section>;
}
