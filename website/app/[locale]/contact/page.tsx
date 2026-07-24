import type { Metadata } from "next";
import ChurchContactPage from "@/components/church/contact/ContactPage";

export const metadata: Metadata = {
    title: "Prendre rendez-vous",
    description: "Consultez les créneaux disponibles et réservez un rendez-vous avec l’équipe de NBY.",
};

export default function Page() {
    return <ChurchContactPage />;
}
