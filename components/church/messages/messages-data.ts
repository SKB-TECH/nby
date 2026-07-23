export const YOUTUBE_CHANNEL = "https://www.youtube.com/@prophetecedoumbuma3565";
export const YOUTUBE_LIVE = `${YOUTUBE_CHANNEL}/live`;
export const YOUTUBE_CHANNEL_ID = "UCihdvyrABU48hM1CtuZL6sQ";

export const sermons = [
    { id: "UR6I3ckiuLM", title: "Séminaire PROMIDE 2026 | Dédé N'LANDU, Pasteur | J2", category: "Séminaire", date: "23 juillet 2026" },
    { id: "aS8h6mHN8Ys", title: "Temps d’exaucement — Prophète Cedou Mbuma", category: "Prophétie", date: "15 juin 2026" },
    { id: "4rrcNiFEiBo", title: "Qui m’a touché ? — Prophète Cedou Mbuma", category: "Miracles", date: "15 juin 2026" },
    { id: "x0C-HtsZw0I", title: "Portes de juin : élevez vos linteaux !", category: "Prédication", date: "15 juin 2026" },
    { id: "5yVDAp0e0Qk", title: "Autel, spiritualité et bénédiction — Clôture", category: "Enseignement", date: "31 mai 2026" },
    { id: "HIUvpZ48eQY", title: "Autel, spiritualité et bénédiction — Jour 3", category: "Enseignement", date: "28 mai 2026" },
];

export const messagesCopy = {
    fr: {
        eyebrow: "La Parole qui transforme",
        title: "Prédications & enseignements",
        subtitle: "Retrouvez les messages de la Cité du Surnaturel et grandissez dans la prophétie, le sacerdoce et la foi qui produit des miracles.",
        channel: "Visiter la chaîne YouTube",
        liveEyebrow: "Culte en direct",
        liveTitle: "Rejoindre le direct NBY",
        liveText: "Lorsqu’un culte est diffusé, le lecteur permet de le suivre ici sans quitter la plateforme. En dehors des directs, il affiche l’état de la diffusion.",
        joinLive: "Vérifier et rejoindre le direct",
        liveStatus: "Accès au direct YouTube",
        latest: "Dernières prédications",
        watch: "Regarder ici",
        all: "Voir toutes les vidéos",
        subscribeTitle: "Ne manquez aucune prédication",
        subscribeText: "Abonnez-vous à la chaîne officielle du Prophète Cedou Mbuma et activez la cloche pour recevoir les nouveaux messages et les directs.",
        subscribe: "S’abonner sur YouTube",
    },
    en: {
        eyebrow: "The Word that transforms",
        title: "Sermons & teachings",
        subtitle: "Watch messages from the City of the Supernatural and grow in prophecy, priesthood and miracle-working faith.",
        channel: "Visit the YouTube channel",
        liveEyebrow: "Live service",
        liveTitle: "Join NBY live",
        liveText: "When a service is streaming, the player lets you watch it here without leaving the platform. Outside live hours, it displays the broadcast status.",
        joinLive: "Check and join live",
        liveStatus: "YouTube live access",
        latest: "Latest sermons",
        watch: "Watch here",
        all: "View all videos",
        subscribeTitle: "Never miss a sermon",
        subscribeText: "Subscribe to Prophet Cedou Mbuma’s official channel and turn on notifications for new messages and live services.",
        subscribe: "Subscribe on YouTube",
    },
};

export type MessagesCopy = (typeof messagesCopy)["fr"];
