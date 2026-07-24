"use client";

import { useLocale } from "next-intl";
import { messagesCopy } from "./messages-data";
import MessagesHero from "./MessagesHero";
import LiveSection from "./LiveSection";
import SermonsGrid from "./SermonsGrid";
import SubscribeSection from "./SubscribeSection";
import { contentText, usePublicSiteData } from "@/lib/church-api";

export default function MessagesPage() {
    const locale = useLocale() === "en" ? "en" : "fr";
    const base = messagesCopy[locale];
    const { data } = usePublicSiteData(locale);
    const copy = {
        ...base,
        title: contentText(data?.content, "messages.hero.title", base.title),
        subtitle: contentText(data?.content, "messages.hero.subtitle", base.subtitle),
    };
    const apiSermons = data?.sermons.filter(item => item.youtubeVideoId).map(item => ({
        id: item.youtubeVideoId!,
        title: item.title,
        category: item.category ?? (locale === "fr" ? "Prédication" : "Sermon"),
        date: item.preachedAt ? new Intl.DateTimeFormat(locale, { dateStyle: "long" }).format(new Date(item.preachedAt)) : "",
        thumbnailUrl: item.thumbnailUrl,
    }));
    const liveVideoId = data?.sermons.find(item => item.live && item.youtubeVideoId)?.youtubeVideoId;
    return <div className="bg-[#f7f8fc] text-[#071117]"><MessagesHero copy={copy} /><LiveSection copy={copy} liveVideoId={liveVideoId} /><SermonsGrid copy={copy} sermonsData={apiSermons?.length ? apiSermons : undefined} /><SubscribeSection copy={copy} /></div>;
}
