"use client";

import { useLocale } from "next-intl";
import { eventsCopy } from "./events-copy";
import EventsHero from "./EventsHero";
import FeaturedEvent from "./FeaturedEvent";
import EventsList from "./EventsList";
import WeeklyRhythm from "./WeeklyRhythm";
import HostEvent from "./HostEvent";
import { contentText, plainText, usePublicSiteData } from "@/lib/church-api";

export default function EventsPage() {
    const locale = useLocale() === "en" ? "en" : "fr";
    const base = eventsCopy[locale];
    const { data } = usePublicSiteData(locale);
    const copy = {
        ...base,
        title: contentText(data?.content, "events.hero.title", base.title),
        intro: contentText(data?.content, "events.hero.intro", base.intro),
    };
    const apiEvents = data?.activities?.map(activity => {
        const start = new Date(activity.startsAt);
        const end = activity.endsAt ? new Date(activity.endsAt) : null;
        const month = new Intl.DateTimeFormat(locale, { month: "short" }).format(start).replace(".", "").toUpperCase();
        const time = `${new Intl.DateTimeFormat(locale, { hour: "2-digit", minute: "2-digit" }).format(start)}${end ? ` — ${new Intl.DateTimeFormat(locale, { hour: "2-digit", minute: "2-digit" }).format(end)}` : ""}`;
        return [String(start.getDate()).padStart(2, "0"), month, activity.type.toUpperCase(), activity.title, time, plainText(activity.description), activity.posterUrl] as const;
    });
    return <div className="bg-[#f7f8fc] text-[#071117]"><EventsHero copy={copy} /><FeaturedEvent copy={copy} /><EventsList copy={copy} events={apiEvents?.length ? apiEvents : undefined} /><WeeklyRhythm copy={copy} /><HostEvent copy={copy} /></div>;
}
