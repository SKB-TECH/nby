"use client";

import { useLocale } from "next-intl";
import { youthCopy } from "./youth-copy";
import YouthHero from "./YouthHero";
import YouthVision from "./YouthVision";
import WeeklyGathering from "./WeeklyGathering";
import YouthEvents from "./YouthEvents";
import YouthMentors from "./YouthMentors";
import ParentConnection from "./ParentConnection";
import YouthGallery from "./YouthGallery";

export default function YouthPage() {
    const copy = youthCopy[useLocale() === "en" ? "en" : "fr"];
    return <div className="bg-[#fbfaf6] text-[#071117]"><YouthHero copy={copy} /><YouthVision copy={copy} /><WeeklyGathering copy={copy} /><YouthEvents copy={copy} /><YouthMentors copy={copy} /><ParentConnection copy={copy} /><YouthGallery copy={copy} /></div>;
}
