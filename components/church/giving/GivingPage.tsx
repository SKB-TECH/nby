"use client";

import { useLocale } from "next-intl";
import GivingHero from "./GivingHero";
import GivingForm from "./GivingForm";
import GivingImpact from "./GivingImpact";
import { givingCopy } from "./giving-copy";

export default function GivingPage() {
    const copy = givingCopy[useLocale() === "en" ? "en" : "fr"];
    return <div className="bg-[#f7f8fc] text-[#071117]"><GivingHero copy={copy} /><GivingForm copy={copy} /><GivingImpact copy={copy} /></div>;
}
