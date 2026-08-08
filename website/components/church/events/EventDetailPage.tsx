"use client";

import Image from "next/image";
import Link from "next/link";
import { useLocale } from "next-intl";
import { ArrowLeft, CalendarDays, Clock3, MapPin } from "lucide-react";
import { plainText, usePublicSiteData } from "../../../lib/church-api";

export default function EventDetailPage({ eventId }: { eventId: string }) {
    const locale = useLocale() === "en" ? "en" : "fr";
    const { data, loading } = usePublicSiteData(locale);
    const event = data?.activities.find(item => item.id === eventId);
    const formatDate = (value: string) => new Intl.DateTimeFormat(locale, { dateStyle: "full" }).format(new Date(value));
    const formatTime = (value: string) => new Intl.DateTimeFormat(locale, { hour: "2-digit", minute: "2-digit" }).format(new Date(value));

    if (loading) return <div className="grid min-h-[60vh] place-items-center bg-[#f7f8fc] text-sm text-slate-500">{locale === "en" ? "Loading event…" : "Chargement de l’événement…"}</div>;

    if (!event) return <section className="grid min-h-[60vh] place-items-center bg-[#f7f8fc] px-5 text-center"><div><p className="text-[10px] font-bold uppercase tracking-[.28em] text-[#df9200]">NBY · Cité du Surnaturel</p><h1 className="mt-4 font-serif text-4xl">{locale === "en" ? "Event not found" : "Événement introuvable"}</h1><p className="mt-4 text-slate-500">{locale === "en" ? "This event is no longer available." : "Cet événement n’est plus disponible."}</p><Link href={`/${locale}/events`} className="mt-8 inline-flex items-center gap-2 rounded bg-[#071117] px-6 py-3 text-xs font-bold text-white"><ArrowLeft className="h-4 w-4" />{locale === "en" ? "All events" : "Tous les événements"}</Link></div></section>;

    return <article className="bg-[#f7f8fc] pb-24 text-[#071117]">
        <header className="relative min-h-[520px] overflow-hidden bg-[#071117] text-white">
            <Image src={event.posterUrl || "/church/hero-sanctuary.png"} alt={event.title} fill priority sizes="100vw" className="object-cover opacity-65" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#071117]/95 via-[#071117]/70 to-[#071117]/20" />
            <div className="relative mx-auto flex min-h-[520px] max-w-[1180px] flex-col justify-center px-5 py-20 sm:px-8">
                <Link href={`/${locale}/events`} className="mb-10 flex w-fit items-center gap-2 text-xs font-bold text-white/75 transition hover:text-[#f0a40b]"><ArrowLeft className="h-4 w-4" />{locale === "en" ? "Back to events" : "Retour aux événements"}</Link>
                <span className="w-fit rounded bg-[#f0a40b] px-4 py-2 text-[10px] font-bold uppercase tracking-wider text-[#071117]">{event.type}</span>
                <h1 className="mt-5 max-w-4xl font-serif text-5xl leading-tight sm:text-7xl">{event.title}</h1>
            </div>
        </header>
        <div className="mx-auto grid max-w-[1180px] gap-12 px-5 pt-14 sm:px-8 lg:grid-cols-[1fr_340px]">
            <section><p className="text-[10px] font-bold uppercase tracking-[.28em] text-[#df9200]">{locale === "en" ? "About this event" : "À propos de cet événement"}</p><p className="mt-5 whitespace-pre-line text-base leading-8 text-slate-600">{plainText(event.description) || (locale === "en" ? "More information will be available soon." : "Plus d’informations seront bientôt disponibles.")}</p></section>
            <aside className="h-fit rounded bg-white p-7 shadow-lg"><h2 className="font-serif text-2xl">{locale === "en" ? "Practical information" : "Informations pratiques"}</h2><div className="mt-6 space-y-5 text-sm text-slate-600"><p className="flex gap-3"><CalendarDays className="h-5 w-5 shrink-0 text-[#df9200]" /><span>{formatDate(event.startsAt)}</span></p><p className="flex gap-3"><Clock3 className="h-5 w-5 shrink-0 text-[#df9200]" /><span>{formatTime(event.startsAt)}{event.endsAt ? ` — ${formatTime(event.endsAt)}` : ""}</span></p>{event.location && <p className="flex gap-3"><MapPin className="h-5 w-5 shrink-0 text-[#df9200]" /><span>{event.location}</span></p>}</div><Link href={`/${locale}/contact`} className="mt-8 block rounded bg-[#df9200] px-6 py-4 text-center text-xs font-bold uppercase tracking-wider text-white transition hover:bg-[#071117]">{locale === "en" ? "Contact us" : "Nous contacter"}</Link></aside>
        </div>
    </article>;
}
