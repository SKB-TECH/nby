import type { Metadata } from "next";
import GivingPage from "@/components/church/giving/GivingPage";

export const metadata: Metadata = {
    title: "Faire un don",
    description: "Soutenez la mission de NBY — Nzambe Ba Lukaka Ye, Cité du Surnaturel.",
};

export default function Page() {
    return <GivingPage />;
}
