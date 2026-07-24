"use client";

import { FormEvent, useState } from "react";
import { Check, Megaphone, Target, X } from "lucide-react";
import { motion } from "framer-motion";
import { plainText, publicApi, type PublicCampaign } from "@/lib/church-api";

export default function GivingCampaigns({ campaigns, locale }: { campaigns: PublicCampaign[]; locale: "fr" | "en" }) {
    const [selected, setSelected] = useState<PublicCampaign | null>(null);
    const [sent, setSent] = useState(false);
    const [error, setError] = useState("");
    if (!campaigns.length) return null;
    const fr = locale === "fr";
    async function submit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        if (!selected) return;
        const form = new FormData(event.currentTarget);
        setError("");
        try {
            await publicApi("/public/pledges", { method: "POST", body: JSON.stringify({ campaignId: selected.id, subscriberName: form.get("name"), phone: form.get("phone"), pledgedAmount: Number(form.get("amount")), currency: selected.currency, dueDate: form.get("dueDate") || undefined, status: "pending" }) });
            setSent(true);
        } catch (submitError) { setError(submitError instanceof Error ? submitError.message : "Enregistrement impossible."); }
    }
    return <section className="bg-[#071117] px-5 py-20 text-white sm:px-8"><div className="mx-auto max-w-[1160px]"><p className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[.25em] text-[#f0a40b]"><Megaphone className="h-4 w-4" />{fr ? "Appels de fonds en cours" : "Current fundraising campaigns"}</p><h2 className="mt-4 font-serif text-4xl">{fr ? "Bâtissons ensemble." : "Let’s build together."}</h2><div className="mt-10 grid gap-5 md:grid-cols-2">{campaigns.map((campaign, index) => <motion.article key={campaign.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * .08 }} className="grid overflow-hidden border border-white/10 bg-white/[.04] sm:grid-cols-[160px_1fr]">{campaign.posterUrl ? <img src={campaign.posterUrl} alt="" className="h-full min-h-52 w-full object-cover" /> : <span className="grid min-h-40 place-items-center bg-[#df9200]/10"><Target className="h-10 w-10 text-[#f0a40b]" /></span>}<div className="p-6"><h3 className="font-serif text-2xl">{campaign.title}</h3><p className="mt-3 line-clamp-3 text-sm leading-6 text-white/55">{plainText(campaign.description)}</p><p className="mt-5 text-xs font-black uppercase tracking-wider text-[#f0a40b]">{fr ? "Objectif" : "Goal"} : {Number(campaign.targetAmount).toLocaleString(locale)} {campaign.currency}</p><button onClick={() => { setSelected(campaign); setSent(false); }} className="mt-5 bg-[#df9200] px-5 py-3 text-[10px] font-black uppercase tracking-wider">{fr ? "Faire une souscription" : "Make a pledge"}</button></div></motion.article>)}</div></div>
        {selected && <div className="fixed inset-0 z-[80] grid place-items-center bg-[#071117]/80 p-5 backdrop-blur-sm" onMouseDown={() => setSelected(null)}><form onSubmit={submit} onMouseDown={e => e.stopPropagation()} className="relative w-full max-w-lg bg-white p-7 text-[#071117] shadow-2xl sm:p-9"><button type="button" onClick={() => setSelected(null)} className="absolute right-5 top-5"><X /></button>{sent ? <div className="py-10 text-center"><Check className="mx-auto h-12 w-12 text-[#df9200]" /><h3 className="mt-5 font-serif text-3xl">{fr ? "Souscription enregistrée" : "Pledge recorded"}</h3><p className="mt-3 text-sm text-slate-500">{fr ? "L’équipe NBY vous contactera pour le suivi." : "The NBY team will contact you for follow-up."}</p></div> : <><p className="text-[10px] font-black uppercase tracking-wider text-[#df9200]">{selected.title}</p><h3 className="mt-3 font-serif text-3xl">{fr ? "Ma souscription" : "My pledge"}</h3><div className="mt-7 grid gap-4"><input name="name" required placeholder={fr ? "Nom complet" : "Full name"} className="h-13 border border-slate-200 px-4 outline-none focus:border-[#df9200]" /><input name="phone" required type="tel" placeholder="Téléphone / WhatsApp" className="h-13 border border-slate-200 px-4 outline-none focus:border-[#df9200]" /><div className="relative"><input name="amount" required type="number" min="1" placeholder={fr ? "Montant promis" : "Pledged amount"} className="h-13 w-full border border-slate-200 px-4 pr-20 outline-none focus:border-[#df9200]" /><span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold text-[#df9200]">{selected.currency}</span></div><label className="text-[10px] font-bold uppercase text-slate-500">{fr ? "Échéance souhaitée" : "Target date"}<input name="dueDate" type="date" className="mt-2 h-13 w-full border border-slate-200 px-4 outline-none focus:border-[#df9200]" /></label>{error && <p className="text-xs text-red-600">{error}</p>}<button className="h-14 bg-[#df9200] text-xs font-black uppercase text-white">{fr ? "Confirmer ma souscription" : "Confirm my pledge"}</button></div></>}</form></div>}
    </section>;
}
