"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useLocale } from "next-intl";
import { Menu, X } from "lucide-react";
import { Link, usePathname } from "@/i18n/routing";
import LanguageSwitcher from "@/components/new/LanguageSwitcher";
import PageLoader from "@/components/church/layout/PageLoader";

export default function Header() {
    const [open, setOpen] = useState(false);
    const [navigating, setNavigating] = useState(false);
    const fr = useLocale() !== "en";
    const pathname = usePathname();
    const items = [
        [fr ? "Accueil" : "Home", "/"],
        [fr ? "Événements" : "Events", "/events"],
        [fr ? "Prédications" : "Sermons", "/messages"],
        [fr ? "Contact" : "Contact", "/contact"],
    ] as const;
    const isActive = (href: string) =>
        href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);

    useEffect(() => {
        setNavigating(false);
        setOpen(false);
    }, [pathname]);

    return (
        <header className="sticky top-0 z-50 border-b border-slate-200 bg-[#fbfaf6]/95 backdrop-blur">
            <div className="mx-auto flex h-[76px] max-w-[1240px] items-center justify-between px-5 sm:px-8">
                <Link href="/" className="flex items-center gap-3" aria-label="NBY — Nzambe Ba Lukaka Ye">
                    <Image src="/church/nby-logo.jpg" alt="Logo NBY" width={64} height={64} priority className="h-14 w-14 object-cover" />
                    <span className="hidden sm:block"><strong className="block text-sm font-black uppercase leading-none text-[#071117]">Nzambe Ba Lukaka Ye</strong><small className="mt-1.5 block text-[9px] font-bold uppercase tracking-[.18em] text-[#df9200]">{fr ? "Cité du Surnaturel" : "City of the Supernatural"}</small></span>
                </Link>
                <nav className="hidden items-center gap-7 lg:flex">
                    {items.map(([label, href]) => {
                        const active = isActive(href);
                        return <Link key={label} href={href} aria-current={active ? "page" : undefined} onClick={() => !active && setNavigating(true)} className={`relative flex h-[76px] items-center text-xs font-bold uppercase tracking-[.08em] transition ${active ? "text-[#df9200]" : "text-slate-600 hover:text-[#df9200]"}`}>{label}<span className={`absolute inset-x-0 bottom-0 h-0.5 origin-left bg-[#df9200] transition-transform duration-300 ${active ? "scale-x-100" : "scale-x-0"}`} /></Link>;
                    })}
                </nav>
                <div className="hidden items-center gap-4 lg:flex"><LanguageSwitcher /><Link href="/#visit" className="bg-[#071117] px-5 py-3 text-xs font-bold uppercase tracking-wide text-white transition hover:bg-[#df9200]">{fr ? "Planifier une visite" : "Plan a visit"}</Link></div>
                <div className="flex items-center gap-2 lg:hidden"><LanguageSwitcher /><button onClick={() => setOpen(!open)} className="grid h-10 w-10 place-items-center border border-slate-200" aria-label="Menu">{open ? <X /> : <Menu />}</button></div>
            </div>
            {open && <nav className="border-t border-slate-200 bg-white px-5 py-4 lg:hidden">{items.map(([label, href]) => { const active = isActive(href); return <Link key={label} href={href} aria-current={active ? "page" : undefined} onClick={() => { setOpen(false); if (!active) setNavigating(true); }} className={`flex items-center justify-between border-b py-3 text-sm font-bold ${active ? "border-[#df9200] text-[#df9200]" : "border-slate-100 text-slate-700"}`}>{label}{active && <span className="h-1.5 w-1.5 rounded-full bg-[#df9200]" />}</Link>; })}</nav>}
            {navigating && <PageLoader overlay />}
        </header>
    );
}
