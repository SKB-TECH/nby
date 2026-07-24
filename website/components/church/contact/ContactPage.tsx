"use client";

import { useLocale } from "next-intl";
import { contactCopy } from "./contact-copy";
import ContactHero from "./ContactHero";
import AppointmentBooking from "./AppointmentBooking";
import ContactInfo from "./ContactInfo";

export default function ContactPage() {
    const copy = contactCopy[useLocale() === "en" ? "en" : "fr"];
    return <div className="bg-[#f7f8fc] text-[#071117]"><ContactHero copy={copy} /><AppointmentBooking copy={copy} /><ContactInfo copy={copy} /></div>;
}
