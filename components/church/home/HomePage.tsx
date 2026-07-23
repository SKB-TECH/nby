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
        eventsEyebrow: "Ce qui se passe chez nous",
        eventsTitle: "Rencontres & événements",
        events: [
            ["DIM. 27 JUIL.", "Culte de célébration", "Un temps de louange, de prière et de Parole pour toute la famille."],
            ["MER. 30 JUIL.", "Soirée de prière", "Retrouvons-nous pour prier ensemble et porter les besoins de notre ville."],
            ["SAM. 02 AOÛT", "Journée des familles", "Jeux, repas communautaire et activités pour toutes les générations."],
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
        givingTitle: "Une générosité fidèle",
        givingText: "Votre générosité soutient notre mission, aide les familles et nous permet de servir notre ville.",
        give: "Faire un don",
        visitTitle: "Nous rendre visite",
        address: "200 Avenue Dodoma, Lingwala, Kinshasa, RDC",
        service: "Programmes hebdomadaires",
        serviceTime: "Mer. & ven. 16h30–19h30 · Dim. 9h30–12h30",
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
        eventsEyebrow: "What is happening",
        eventsTitle: "Gatherings & events",
        events: [
            ["SUN. JUL 27", "Celebration service", "A time of worship, prayer and the Word for the whole family."],
            ["WED. JUL 30", "Prayer night", "Come pray together and lift up the needs of our city."],
            ["SAT. AUG 02", "Family day", "Games, a community meal and activities for every generation."],
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
        givingTitle: "Faithful stewardship",
        givingText: "Your generosity supports our mission, helps families and enables us to serve our city.",
        give: "Give now",
        visitTitle: "Visit us",
        address: "200 Dodoma Avenue, Lingwala, Kinshasa, DRC",
        service: "Weekly services",
        serviceTime: "Wed. & Fri. 4:30–7:30 PM · Sun. 9:30 AM–12:30 PM",
    },
};

export type HomeCopy = (typeof copy)["fr"];

export default function ChurchHomePage() {
    const c = copy[useLocale() === "en" ? "en" : "fr"];

    return (
        <div className="bg-[#fbfaf6] text-[#172033]">
            <HeroSection copy={c} />
            <WelcomeSection copy={c} />
            <EventsSection copy={c} />
            <DnaSection copy={c} />
            <VisitSection copy={c} />
        </div>
    );
}
