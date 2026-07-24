"use client";

import Image from "next/image";
import { useLocale } from "next-intl";
import { CalendarDays, Clock3, ExternalLink, Mail, MapPin, Phone, Play } from "lucide-react";
import { Link } from "@/i18n/routing";

const channel = "https://www.youtube.com/@prophetecedoumbuma3565";

export default function Footer() {
    const fr = useLocale() !== "en";
    const navLinks = [
        [fr ? "Accueil" : "Home", "/"],
        [fr ? "Événements" : "Events", "/events"],
        [fr ? "Prédications" : "Sermons", "/messages"],
        [fr ? "Faire un don" : "Give", "/give"],
        [fr ? "Prendre rendez-vous" : "Book appointment", "/contact"],
        [fr ? "NBY Jeunesse" : "NBY Youth", "/ministries/youth"],
    ] as const;
    const programs = [
        [fr ? "Mercredi" : "Wednesday", fr ? "Culte du surnaturel" : "Supernatural Service", "16h30 — 19h30"],
        [fr ? "Vendredi" : "Friday", fr ? "Culte du surnaturel" : "Supernatural Service", "16h30 — 19h30"],
        [fr ? "Dimanche" : "Sunday", fr ? "Culte dominical" : "Sunday Service", "9h30 — 12h30"],
    ];

    return (
        <footer className="relative overflow-hidden bg-[#071117] text-white/60">
            <div className="absolute -bottom-48 -left-48 h-[480px] w-[480px] rounded-full border-[90px] border-[#df9200]/5" />

            <div className="relative border-b border-white/10 bg-white/[.03]">
                <div className="mx-auto flex max-w-[1180px] flex-col items-start justify-between gap-6 px-5 py-8 sm:px-8 lg:flex-row lg:items-center">
                    <div>
                        <p className="text-[10px] font-black uppercase tracking-[.28em] text-[#f0a40b]">NBY · Cité du Surnaturel</p>
                        <h2 className="mt-2 font-serif text-2xl text-white sm:text-3xl">
                            {fr ? "Vivez la présence de Dieu avec nous." : "Experience God’s presence with us."}
                        </h2>
                    </div>
                    <div className="flex flex-wrap gap-3">
                        <Link href="/contact" className="inline-flex items-center gap-2 bg-[#df9200] px-6 py-3.5 text-xs font-black uppercase tracking-wider text-white transition hover:bg-[#f0a40b]">
                            <CalendarDays className="h-4 w-4" />{fr ? "Prendre rendez-vous" : "Book appointment"}
                        </Link>
                        <Link href="/messages" className="inline-flex items-center gap-2 border border-white/25 px-6 py-3.5 text-xs font-black uppercase tracking-wider text-white transition hover:border-[#df9200] hover:text-[#f0a40b]">
                            <Play className="h-4 w-4 fill-current" />{fr ? "Suivre le direct" : "Watch live"}
                        </Link>
                    </div>
                </div>
            </div>

            <div className="relative mx-auto grid max-w-[1180px] gap-12 px-5 py-16 sm:px-8 md:grid-cols-2 lg:grid-cols-[1.15fr_.7fr_1.15fr_1.2fr]">
                <div>
                    <Link href="/" className="inline-flex items-center gap-4">
                        <Image src="/church/nby-logo.jpg" alt="NBY — Nzambe Ba Lukaka Ye" width={88} height={88} className="h-20 w-20 rounded-xl object-cover shadow-xl" />
                        <span><strong className="block text-lg font-black uppercase text-white">NBY</strong><small className="mt-1 block text-[10px] font-bold uppercase tracking-[.16em] text-[#f0a40b]">Nzambe Ba Lukaka Ye</small></span>
                    </Link>
                    <p className="mt-6 max-w-xs text-sm leading-7">
                        {fr ? "Une cité de prophétie, de sacerdoce et de miracles où les vies sont transformées par la présence de Dieu." : "A city of prophecy, priesthood and miracles where lives are transformed by God’s presence."}
                    </p>
                    <a href={channel} target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#f0a40b]">
                        YouTube <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                </div>

                <div>
                    <FooterTitle>{fr ? "Navigation" : "Navigation"}</FooterTitle>
                    <nav className="mt-6 space-y-3">
                        {navLinks.map(([label, href]) => <Link key={href} href={href} className="block text-sm transition hover:translate-x-1 hover:text-[#f0a40b]">{label}</Link>)}
                    </nav>
                </div>

                <div>
                    <FooterTitle>{fr ? "Programmes hebdomadaires" : "Weekly program"}</FooterTitle>
                    <div className="mt-6 divide-y divide-white/10">
                        {programs.map(([day, name, time]) => (
                            <div key={day} className="grid grid-cols-[22px_1fr] gap-3 py-3 first:pt-0">
                                <Clock3 className="mt-0.5 h-4 w-4 text-[#f0a40b]" />
                                <p><strong className="block text-xs uppercase tracking-wider text-white">{day}</strong><span className="mt-1 block text-xs leading-5">{name}<br />{time}</span></p>
                            </div>
                        ))}
                    </div>
                </div>

                <div>
                    <FooterTitle>Contact</FooterTitle>
                    <div className="mt-6 space-y-5 text-sm">
                        <a href="https://maps.google.com/?q=200+Avenue+Dodoma+Lingwala+Kinshasa" target="_blank" rel="noreferrer" className="flex gap-3 transition hover:text-white"><MapPin className="h-5 w-5 shrink-0 text-[#f0a40b]" /><span>200 Avenue Dodoma, Lingwala<br />Kinshasa, RDC<br /><small>Réf. Huilerie–Dodoma</small></span></a>
                        <a href="tel:+243819744334" className="flex gap-3 transition hover:text-white"><Phone className="h-5 w-5 shrink-0 text-[#f0a40b]" />+243 819 744 334</a>
                        <a href="mailto:contact@nby-citedusurnaturel.org" className="flex gap-3 break-all transition hover:text-white"><Mail className="h-5 w-5 shrink-0 text-[#f0a40b]" />contact@nby-citedusurnaturel.org</a>
                    </div>
                </div>
            </div>

            <div className="relative border-t border-white/10">
                <div className="mx-auto flex max-w-[1180px] flex-col gap-3 px-5 py-6 text-xs sm:px-8 md:flex-row md:items-center md:justify-between">
                    <p>© 2026 NBY — Nzambe Ba Lukaka Ye. {fr ? "Tous droits réservés." : "All rights reserved."}</p>
                    <p className="text-white/35">{fr ? "Cité du Surnaturel · Kinshasa, RDC" : "City of the Supernatural · Kinshasa, DRC"}</p>
                </div>
            </div>
        </footer>
    );
}

function FooterTitle({ children }: { children: React.ReactNode }) {
    return <h3 className="text-[11px] font-black uppercase tracking-[.2em] text-white">{children}<span className="mt-3 block h-0.5 w-8 bg-[#df9200]" /></h3>;
}
