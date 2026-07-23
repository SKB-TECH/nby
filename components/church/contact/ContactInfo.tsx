"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Clock3, Mail, MapPin, Phone } from "lucide-react";
import type { ContactCopy } from "./contact-copy";

export default function ContactInfo({ copy }: { copy: ContactCopy }) {
    const fr = copy.visit === "Nous rendre visite";
    const info = [
        { icon: MapPin, label: fr ? "Notre adresse" : "Our address", value: copy.address, href: "https://maps.google.com/?q=200+Avenue+Dodoma+Lingwala+Kinshasa", featured: true },
        { icon: Clock3, label: fr ? "Horaires des cultes" : "Service times", value: copy.schedule },
        { icon: Phone, label: fr ? "Téléphone" : "Phone", value: "+243 819 744 334", href: "tel:+243819744334" },
        { icon: Mail, label: fr ? "Adresse courriel" : "Email address", value: "contact@nby-citedusurnaturel.org", href: "mailto:contact@nby-citedusurnaturel.org" },
    ];

    return (
        <section className="relative overflow-hidden bg-[#fff5df] px-5 py-24 sm:px-8">
            <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full border-[70px] border-[#df9200]/5" />
            <div className="relative mx-auto max-w-[1180px]">
                <div className="mx-auto max-w-2xl text-center">
                    <p className="text-[10px] font-black uppercase tracking-[.3em] text-[#df9200]">NBY · Cité du Surnaturel</p>
                    <h2 className="mt-4 font-serif text-4xl sm:text-5xl">{copy.visit}</h2>
                    <p className="mx-auto mt-4 max-w-xl leading-7 text-slate-500">
                        {fr ? "Retrouvez-nous à Lingwala ou contactez directement notre équipe." : "Visit us in Lingwala or contact our team directly."}
                    </p>
                </div>

                <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
                    {info.map((item, index) => {
                        const Icon = item.icon;
                        const content = (
                            <>
                                <div className={`flex items-start justify-between gap-4 ${item.featured ? "text-white" : ""}`}>
                                    <span className={`grid h-12 w-12 place-items-center rounded-full ${item.featured ? "bg-[#df9200] text-white" : "bg-[#fff0cf] text-[#df9200]"}`}>
                                        <Icon className="h-5 w-5" />
                                    </span>
                                    {item.href && <ArrowUpRight className={`h-4 w-4 transition group-hover:-translate-y-1 group-hover:translate-x-1 ${item.featured ? "text-white/45" : "text-slate-300"}`} />}
                                </div>
                                <p className={`mt-7 text-[10px] font-black uppercase tracking-[.18em] ${item.featured ? "text-[#f0a40b]" : "text-slate-400"}`}>{item.label}</p>
                                <p className={`mt-3 text-sm font-semibold leading-7 ${item.featured ? "text-white/80" : "text-[#24334d]"}`}>{item.value}</p>
                            </>
                        );

                        return (
                            <motion.article
                                key={item.label}
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                whileHover={{ y: -6 }}
                                viewport={{ once: true }}
                                transition={{ duration: .45, delay: index * .07 }}
                                className={`group min-h-[230px] overflow-hidden rounded-2xl border p-7 shadow-sm transition ${
                                    item.featured
                                        ? "border-[#071117] bg-[#071117] shadow-xl lg:col-span-1"
                                        : "border-white bg-white hover:border-[#df9200]/35 hover:shadow-xl"
                                }`}
                            >
                                {item.href ? <a href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel={item.href.startsWith("http") ? "noreferrer" : undefined} className="block h-full">{content}</a> : content}
                            </motion.article>
                        );
                    })}
                </div>

                <div className="mt-7 flex flex-col items-center justify-between gap-4 rounded-2xl border border-[#df9200]/15 bg-white/60 px-6 py-5 text-center text-xs text-slate-500 backdrop-blur sm:flex-row sm:text-left">
                    <span>{fr ? "Besoin d’aide pour votre réservation ?" : "Need help with your booking?"}</span>
                    <a href="tel:+243819744334" className="font-black uppercase tracking-wider text-[#9d6200] transition hover:text-[#df9200]">
                        {fr ? "Appelez notre équipe" : "Call our team"} →
                    </a>
                </div>
            </div>
        </section>
    );
}
