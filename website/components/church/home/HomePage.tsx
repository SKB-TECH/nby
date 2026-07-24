"use client";

import { useLocale } from "next-intl";
import HeroSection from "./HeroSection";
import WelcomeSection from "./WelcomeSection";
import EventsSection from "./EventsSection";
import DnaSection from "./DnaSection";
import MinistriesSection from "./MinistriesSection";
import SermonSection from "./SermonSection";
import PrayerSection from "./PrayerSection";
import GivingSection from "./GivingSection";
import VisitSection from "./VisitSection";
import { contentText, plainText, usePublicSiteData } from "@/lib/church-api";

const copy = {
    fr: {
        eyebrow: "Nzambe Ba Lukaka Ye",
        title: "Bienvenue sur la Terre du Surnaturel",
        subtitle: "Un lieu de prophétie, de sacerdoce et de miracles où la présence de Dieu transforme les vies.",
        visit: "Planifier ma visite",
        live: "Suivre en direct",
        next: "Prochain culte",
        day: "Dimanche",
        time: "9h30 — 12h30",
        place: "Lingwala, Kinshasa",
        welcomeEyebrow: "Bienvenue à NBY",
        welcomeTitle: "Une cité où le naturel rencontre le surnaturel.",
        welcomeText: "Nzambe Ba Lukaka Ye est une communauté centrée sur Jésus-Christ, appelée à manifester la voix de Dieu, à former un peuple sacerdotal et à témoigner de sa puissance par les miracles.",
        pastor: "Prophète Cedu Mbuma",
        pastorRole: "Prophète et responsable principal",
        learn: "Découvrir notre histoire",
        eventsEyebrow: "Les programmes de NBY",
        eventsTitle: "Nos cultes chaque semaine",
        events: [
            ["CHAQUE MERCREDI · 16H30–19H30", "Culte du surnaturel", "Un temps de prophétie, de prière, d’enseignement et de manifestation de la puissance de Dieu."],
            ["CHAQUE VENDREDI · 16H30–19H30", "Culte du surnaturel", "Une rencontre dans la présence de Dieu consacrée à la délivrance, aux miracles et à la restauration."],
            ["CHAQUE DIMANCHE · 9H30–12H30", "Culte dominical", "Le grand rassemblement de la famille NBY pour la louange, la Parole, la communion et le ministère."],
        ],
        dnaTitle: "Les trois piliers de NBY",
        dna: [
            ["La prophétie", "Entendre la voix de Dieu, recevoir sa direction et communiquer fidèlement son cœur à son peuple."],
            ["Le sacerdoce", "Former des hommes et des femmes consacrés, enracinés dans la prière, l’adoration et le service."],
            ["Les miracles", "Croire et expérimenter la puissance surnaturelle de Dieu qui guérit, restaure et transforme."],
        ],
        ministryTitle: "Nos ministères",
        ministryText: "Il y a une place pour chaque personne et chaque génération.",
        ministries: ["Jeunesse", "Femmes", "Hommes", "Enfants", "Louange"],
        sermonEyebrow: "Dernier message",
        sermonTitle: "Une foi inébranlable",
        sermonName: "L’ancre de l’espérance",
        sermonText: "Découvrez comment garder une foi solide lorsque les circonstances changent.",
        watch: "Regarder le message",
        helpTitle: "Comment pouvons-nous prier pour vous ?",
        helpText: "Votre histoire compte. Notre équipe aimerait vous accompagner dans la prière.",
        first: "Prénom",
        last: "Nom",
        email: "Adresse courriel",
        prayer: "Partagez votre sujet de prière",
        send: "Envoyer ma demande",
        sending: "Envoi en cours…",
        prayerSent: "Votre demande a bien été transmise.",
        anotherPrayer: "Envoyer une autre demande",
        givingTitle: "Une générosité fidèle",
        givingText: "Votre générosité soutient notre mission, aide les familles et nous permet de servir notre ville.",
        give: "Faire un don",
        visitTitle: "Nous rendre visite",
        address: "200 Avenue Dodoma, Lingwala, Kinshasa, RDC",
        service: "Programmes hebdomadaires",
        serviceTime: "Mer. & ven. 16h30–19h30 · Dim. 9h30–12h30",
        announceVisit: "Annoncer ma première visite",
        visitorTitle: "Nous préparerons votre accueil",
        visitorText: "Laissez vos coordonnées afin que notre équipe puisse vous accueillir personnellement.",
        visitorSent: "Merci ! Notre équipe d’accueil a bien reçu votre visite.",
    },
    en: {
        eyebrow: "Nzambe Ba Lukaka Ye",
        title: "Welcome to the Land of the Supernatural",
        subtitle: "A place of prophecy, priesthood and miracles where the presence of God transforms lives.",
        visit: "Plan your visit",
        live: "Watch live",
        next: "Next service",
        day: "Sunday",
        time: "9:30 AM — 12:30 PM",
        place: "Lingwala, Kinshasa",
        welcomeEyebrow: "Welcome to NBY",
        welcomeTitle: "A city where the natural meets the supernatural.",
        welcomeText: "Nzambe Ba Lukaka Ye is a Jesus-centered community called to manifest God’s voice, form a priestly people and witness his power through miracles.",
        pastor: "Prophet Cedu Mbuma",
        pastorRole: "Prophet and lead pastor",
        learn: "Discover our story",
        eventsEyebrow: "NBY weekly program",
        eventsTitle: "Our weekly services",
        events: [
            ["EVERY WEDNESDAY · 4:30–7:30 PM", "Supernatural Service", "A time of prophecy, prayer, teaching and manifestation of God’s power."],
            ["EVERY FRIDAY · 4:30–7:30 PM", "Supernatural Service", "A gathering in God’s presence dedicated to deliverance, miracles and restoration."],
            ["EVERY SUNDAY · 9:30 AM–12:30 PM", "Sunday Service", "The NBY family gathering for worship, the Word, fellowship and ministry."],
        ],
        dnaTitle: "The three pillars of NBY",
        dna: [
            ["Prophecy", "Hearing God’s voice, receiving his direction and faithfully communicating his heart to his people."],
            ["Priesthood", "Forming consecrated men and women rooted in prayer, worship and service."],
            ["Miracles", "Believing and experiencing God’s supernatural power to heal, restore and transform."],
        ],
        ministryTitle: "Our ministries",
        ministryText: "There is a place for every person and every generation.",
        ministries: ["Youth", "Women", "Men", "Kids", "Worship"],
        sermonEyebrow: "Latest message",
        sermonTitle: "Unshakable faith",
        sermonName: "The anchor of hope",
        sermonText: "Discover how to keep your faith steady when circumstances change.",
        watch: "Watch the message",
        helpTitle: "How can we pray for you?",
        helpText: "Your story matters. Our team would love to stand with you in prayer.",
        first: "First name",
        last: "Last name",
        email: "Email address",
        prayer: "Share your prayer request",
        send: "Send prayer request",
        sending: "Sending…",
        prayerSent: "Your prayer request has been sent.",
        anotherPrayer: "Send another request",
        givingTitle: "Faithful stewardship",
        givingText: "Your generosity supports our mission, helps families and enables us to serve our city.",
        give: "Give now",
        visitTitle: "Visit us",
        address: "200 Dodoma Avenue, Lingwala, Kinshasa, DRC",
        service: "Weekly services",
        serviceTime: "Wed. & Fri. 4:30–7:30 PM · Sun. 9:30 AM–12:30 PM",
        announceVisit: "Plan my first visit",
        visitorTitle: "We’ll prepare your welcome",
        visitorText: "Share your details so our team can welcome you personally.",
        visitorSent: "Thank you! Our welcome team has received your visit.",
    },
};

export type HomeCopy = (typeof copy)["fr"];

export default function ChurchHomePage() {
    const locale = useLocale() === "en" ? "en" : "fr";
    const base = copy[locale];
    const { data } = usePublicSiteData(locale);
    const dynamicEvents = data?.activities.slice(0, 3).map(activity => {
        const start = new Date(activity.startsAt);
        const schedule = new Intl.DateTimeFormat(locale, { weekday: "long", day: "numeric", month: "long", hour: "2-digit", minute: "2-digit" }).format(start).toUpperCase();
        return [schedule, activity.title, plainText(activity.description)] as const;
    });
    const c = {
        ...base,
        title: contentText(data?.content, "home.hero.title", base.title),
        subtitle: contentText(data?.content, "home.hero.subtitle", base.subtitle),
        welcomeTitle: contentText(data?.content, "home.welcome.title", base.welcomeTitle),
        welcomeText: contentText(data?.content, "home.welcome.text", base.welcomeText),
        events: dynamicEvents?.length ? dynamicEvents : base.events,
    } as unknown as HomeCopy;

    return (
        <div className="bg-[#fbfaf6] text-[#172033]">
            <HeroSection copy={c} />
            <WelcomeSection copy={c} />
            <EventsSection copy={c} />
            <DnaSection copy={c} />
            <PrayerSection copy={c} />
            <GivingSection copy={c} />
            <VisitSection copy={c} />
        </div>
    );
}
