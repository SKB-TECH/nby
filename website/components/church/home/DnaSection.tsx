"use client";

import { motion } from "framer-motion";
import type { HomeCopy } from "./HomePage";

export default function DnaSection({ copy: c }: { copy: HomeCopy }) {
    const english = c.dnaTitle.startsWith("The");

    return (
        <section id="dna" className="relative overflow-hidden bg-[#dce4dc] px-5 py-24 text-[#172033] sm:px-8 lg:py-32">
            <div className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[720px] -translate-x-1/2 bg-white/50 blur-[150px]" />
            <div className="relative mx-auto max-w-[1180px]">
                <motion.header
                    initial={{ opacity: 0, y: 28 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="grid gap-8 border-b border-[#172033]/20 pb-12 lg:grid-cols-[.95fr_1.05fr] lg:items-end"
                >
                    <div>
                        <p className="border-l-2 border-[#df9200] pl-4 text-[10px] font-black uppercase tracking-[.3em] text-[#f0a40b]">
                            {english ? "The foundation of our calling" : "Le fondement de notre appel"}
                        </p>
                        <h2 className="mt-6 max-w-2xl font-serif text-5xl leading-[1.02] sm:text-6xl lg:text-7xl">
                            {c.dnaTitle}
                        </h2>
                    </div>
                    <p className="max-w-xl text-base leading-8 text-[#46545d] lg:justify-self-end">
                        {english
                            ? "A clear spiritual identity that shapes our faith, our service and every gathering at NBY."
                            : "Une identité spirituelle claire qui façonne notre foi, notre service et chaque rassemblement à NBY."}
                    </p>
                </motion.header>

                <div className="mt-10 grid gap-4 md:grid-cols-3">
                    {c.dna.map((item, index) => (
                        <motion.article
                            key={item[0]}
                            initial={{ opacity: 0, y: 36 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-60px" }}
                            transition={{ duration: .65, delay: index * .12 }}
                            whileHover={{ y: -8 }}
                            className={`group relative min-h-[410px] overflow-hidden border px-8 py-12 md:px-9 md:py-14 ${
                                index === 1
                                    ? "border-[#173047] bg-[#173047] text-white md:-translate-y-8"
                                    : "border-[#172033]/10 bg-[#f6f3eb] text-[#172033]"
                            }`}
                        >
                            <span className={`font-serif text-7xl leading-none transition-colors duration-500 ${
                                index === 1 ? "text-white/10 group-hover:text-[#df9200]/30" : "text-[#173047]/10 group-hover:text-[#df9200]/30"
                            }`}>
                                0{index + 1}
                            </span>
                            <span className="mt-12 block h-px w-12 bg-[#df9200] transition-all duration-500 group-hover:w-24" />
                            <h3 className="mt-7 font-serif text-3xl sm:text-4xl">{item[0]}</h3>
                            <p className={`mt-5 max-w-sm text-sm leading-7 transition-colors duration-500 ${
                                index === 1 ? "text-white/60 group-hover:text-white/85" : "text-[#52616b] group-hover:text-[#172033]"
                            }`}>
                                {item[1]}
                            </p>
                            <p className="absolute bottom-10 left-8 text-[9px] font-black uppercase tracking-[.24em] text-[#b66f00] opacity-0 transition-all duration-500 group-hover:translate-x-2 group-hover:opacity-100 md:left-9">
                                NBY · {english ? "City of the Supernatural" : "Cité du Surnaturel"}
                            </p>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
}
