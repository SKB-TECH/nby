"use client";

import { useLocale } from "next-intl";
import { messagesCopy } from "./messages-data";
import MessagesHero from "./MessagesHero";
import LiveSection from "./LiveSection";
import SermonsGrid from "./SermonsGrid";
import SubscribeSection from "./SubscribeSection";

export default function MessagesPage() {
    const copy = messagesCopy[useLocale() === "en" ? "en" : "fr"];
    return <div className="bg-[#f7f8fc] text-[#071117]"><MessagesHero copy={copy} /><LiveSection copy={copy} /><SermonsGrid copy={copy} /><SubscribeSection copy={copy} /></div>;
}
