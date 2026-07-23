"use client";

import { useLocale } from "next-intl";
import { eventsCopy } from "./events-copy";
import EventsHero from "./EventsHero";
import FeaturedEvent from "./FeaturedEvent";
import EventsList from "./EventsList";
import WeeklyRhythm from "./WeeklyRhythm";
import HostEvent from "./HostEvent";

export default function EventsPage() {
    const copy = eventsCopy[useLocale() === "en" ? "en" : "fr"];
    return <div className="bg-[#f7f8fc] text-[#071117]"><EventsHero copy={copy} /><FeaturedEvent copy={copy} /><EventsList copy={copy} /><WeeklyRhythm copy={copy} /><HostEvent copy={copy} /></div>;
}
