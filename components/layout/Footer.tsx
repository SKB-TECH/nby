"use client";

import Image from "next/image";
import { useLocale } from "next-intl";
import { Link } from "@/i18n/routing";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
    const fr = useLocale() !== "en";
    return (
        <footer className="bg-[#0d1728] text-white/60">
            <div className="mx-auto grid max-w-[1180px] gap-12 px-5 py-16 sm:px-8 md:grid-cols-4">
                <div><Image src="/church/nby-logo.jpg" alt="NBY — Nzambe Ba Lukaka Ye" width={96} height={96} className="h-24 w-24 object-cover" /><p className="mt-5 text-sm font-bold uppercase tracking-wide text-[#e59a08]">{fr ? "Cité du Surnaturel" : "City of the Supernatural"}</p><p className="mt-3 text-sm leading-7">{fr ? "Une terre de prophétie, de sacerdoce et de miracles où chacun peut rencontrer Dieu." : "A land of prophecy, priesthood and miracles where everyone can encounter God."}</p></div>
                <div><h3 className="text-xs font-bold uppercase tracking-widest text-white">{fr ? "Découvrir" : "Discover"}</h3><div className="mt-5 space-y-3 text-sm"><Link href="/#dna" className="block">{fr ? "Notre histoire" : "Our story"}</Link><Link href="/#ministries" className="block">{fr ? "Nos ministères" : "Our ministries"}</Link><Link href="/#events" className="block">{fr ? "Événements" : "Events"}</Link></div></div>
                <div><h3 className="text-xs font-bold uppercase tracking-widest text-white">{fr ? "Participer" : "Connect"}</h3><div className="mt-5 space-y-3 text-sm"><Link href="/#visit" className="block">{fr ? "Planifier une visite" : "Plan a visit"}</Link><Link href="/#prayer" className="block">{fr ? "Demande de prière" : "Prayer request"}</Link><Link href="/#message" className="block">{fr ? "Dernier message" : "Latest message"}</Link></div></div>
                <div><h3 className="text-xs font-bold uppercase tracking-widest text-white">Contact</h3><div className="mt-5 space-y-4 text-sm"><p className="flex gap-3"><MapPin className="h-4 w-4 shrink-0 text-[#d6a94e]" />200 Avenue Dodoma, Lingwala, Kinshasa, RDC<br />Réf. Huilerie–Dodoma</p><p className="flex gap-3"><Mail className="h-4 w-4 shrink-0 text-[#d6a94e]" />contact@nby-citedusurnaturel.org</p><p className="flex gap-3"><Phone className="h-4 w-4 shrink-0 text-[#d6a94e]" />+243 819 744 334</p></div></div>
            </div>
            <div className="border-t border-white/10 px-5 py-6 text-center text-xs">© 2026 NBY — Nzambe Ba Lukaka Ye. {fr ? "Tous droits réservés." : "All rights reserved."}</div>
        </footer>
    );
}
