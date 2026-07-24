"use client";

import { useLocale } from "next-intl";
import GivingHero from "./GivingHero";
import GivingForm from "./GivingForm";
import GivingImpact from "./GivingImpact";
import { givingCopy } from "./giving-copy";
import GivingCampaigns from "./GivingCampaigns";
import { usePublicSiteData } from "@/lib/church-api";

export default function GivingPage() {
    const locale = useLocale() === "en" ? "en" : "fr";
    const copy = givingCopy[locale];
    const { data } = usePublicSiteData(locale);
    return <div className="bg-[#f7f8fc] text-[#071117]"><GivingHero copy={copy} /><GivingCampaigns campaigns={data?.campaigns ?? []} locale={locale} /><GivingForm copy={copy} /><GivingImpact copy={copy} /></div>;
}
