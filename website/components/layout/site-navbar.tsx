"use client";

import {
    ChevronDown,
    Menu,
    Megaphone,
    Phone,
    Search,
    ShoppingCart,
    X,
} from "lucide-react";
import {useState} from "react";
import {useTranslations} from "next-intl";
import {Link, usePathname} from "@/i18n/routing";
import LanguageSwitcher from "@/core/components/LangageSwitch";
import {Button} from "@/components/ui/button";
import {cn} from "@/lib/utils";

const socialLinks = [
    {label: "Twitter", value: "x"},
    {label: "Facebook", value: "f"},
    {label: "LinkedIn", value: "in"},
    {label: "Instagram", value: "ig"},
];

function BrandLogo() {
    return (
        <Link href="/" className="flex items-center gap-4" aria-label="Iteck home">
            <span className="relative flex h-11 w-11 shrink-0 items-center justify-center">
                <span className="absolute left-0 top-0 h-7 w-7 rounded-tl-2xl rounded-br-sm bg-gradient-to-br from-blue-700 to-blue-500" />
                <span className="absolute bottom-0 right-0 h-7 w-7 rounded-tl-sm rounded-br-2xl bg-gradient-to-br from-sky-400 to-sky-600" />
                <span className="relative h-4 w-4 bg-white" />
            </span>
            <span className="leading-none">
                <span className="block text-[29px] font-bold tracking-[-0.02em] text-slate-950">
                    Iteck
                </span>
                <span className="mt-2 block text-xs font-medium uppercase tracking-[0.03em] text-slate-500">
                    Tech & IT Solutions
                </span>
            </span>
        </Link>
    );
}

function NavLink({
    label,
    href,
    active,
    hasDropdown,
}: {
    label: string;
    href: string;
    active?: boolean;
    hasDropdown?: boolean;
}) {
    return (
        <Link
            href={href}
            className={cn(
                "inline-flex h-10 items-center gap-0.5 text-sm font-bold transition-colors",
                active ? "text-blue-600" : "text-slate-950 hover:text-blue-600"
            )}
        >
            {label}
            {hasDropdown && <ChevronDown className="h-3.5 w-3.5 stroke-[3]" />}
        </Link>
    );
}

export function SiteNavbar() {
    const t = useTranslations("navbar");
    const pathname = usePathname();
    const [mobileOpen, setMobileOpen] = useState(false);

    const navItems = [
        {label: t("home"), href: "/"},
        {label: t("governments"), href: "/governments"},
        {label: t("businesses"), href: "/businesses"},
        {label: t("individuals"), href: "/individuals"},
        {label: t("contact"), href: "/contact"},
    ];

    const isActive = (href: string) =>
        href === "/" ? pathname === "/" : pathname.startsWith(href);

    return (
        <header className="w-full bg-white">
            <div className="bg-gradient-to-r from-blue-700 via-blue-500 to-cyan-500 text-white">
                <div className="mx-auto flex h-10 max-w-6xl items-center justify-between px-4 lg:px-6">
                    <div className="flex min-w-0 items-center gap-3 text-xs">
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center bg-blue-800/55">
                            <Megaphone className="h-4 w-4 fill-white/20" />
                        </span>
                        <span className="shrink-0 font-bold">{t("nowHiring")}</span>
                        <span className="hidden truncate sm:block">
                            {t("hiringPrefix")}{" "}
                            <a href="#" className="underline underline-offset-2">
                                {t("hiringRole")}
                            </a>
                        </span>
                    </div>

                    <div className="flex items-center gap-3">
                        <div className="hidden items-center gap-3 md:flex">
                            {socialLinks.map((item) => (
                                <a
                                    key={item.label}
                                    href="#"
                                    aria-label={item.label}
                                    className="text-xs font-bold text-white/90 transition hover:text-white"
                                >
                                    {item.value}
                                </a>
                            ))}
                        </div>
                        <span className="hidden h-5 w-px bg-white/20 md:block" />
                        <LanguageSwitcher variant="topbar" showLabel />
                    </div>
                </div>
            </div>

            <div className="border-b border-slate-100 bg-white">
                <div className="mx-auto flex min-h-24 max-w-6xl items-center justify-between gap-6 px-4 lg:px-6">
                    <BrandLogo />

                    <nav className="hidden items-center gap-7 lg:flex" aria-label="Main navigation">
                        {navItems.map((item) => (
                            <NavLink
                                key={item.href}
                                label={item.label}
                                href={item.href}
                                active={isActive(item.href)}
                            />
                        ))}
                    </nav>

                    <div className="hidden items-center gap-5 lg:flex">
                        <div className="flex items-center gap-3">
                            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-blue-700 to-sky-500 text-white">
                                <Phone className="h-4 w-4" />
                            </span>
                            <span className="leading-tight">
                                <span className="block text-xs text-slate-500">{t("hotline")}</span>
                                <a
                                    href="tel:+2355356868"
                                    className="block whitespace-nowrap text-lg font-bold text-slate-950"
                                >
                                    (+23) 5535 68 68
                                </a>
                            </span>
                        </div>

                        <span className="h-9 w-px bg-slate-200" />

                        <button
                            type="button"
                            className="flex h-10 w-10 items-center justify-center rounded-full text-slate-700 transition hover:bg-slate-100"
                            aria-label="Search"
                        >
                            <Search className="h-5 w-5" />
                        </button>

                        <button
                            type="button"
                            className="relative flex h-10 w-10 items-center justify-center rounded-full text-slate-700 transition hover:bg-slate-100"
                            aria-label="Cart"
                        >
                            <ShoppingCart className="h-5 w-5" />
                            <span className="absolute right-1 top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-blue-600 px-1 text-[10px] font-bold leading-none text-white">
                                2
                            </span>
                        </button>

                        <Button className="h-12 rounded-md bg-gradient-to-r from-blue-700 to-sky-500 px-7 text-sm font-bold text-white hover:opacity-90">
                            {t("freeQuote")}
                        </Button>
                    </div>

                    <button
                        type="button"
                        className="flex h-10 w-10 items-center justify-center rounded-md border border-slate-200 text-slate-900 lg:hidden"
                        onClick={() => setMobileOpen((value) => !value)}
                        aria-label="Toggle navigation"
                        aria-expanded={mobileOpen}
                    >
                        {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                    </button>
                </div>

                {mobileOpen && (
                    <div className="border-t border-slate-100 px-4 py-4 lg:hidden">
                        <nav className="mx-auto flex max-w-6xl flex-col gap-1" aria-label="Mobile navigation">
                            {navItems.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className={cn(
                                        "flex items-center justify-between rounded-md px-3 py-3 text-sm font-bold",
                                        isActive(item.href)
                                            ? "bg-blue-50 text-blue-700"
                                            : "text-slate-900"
                                    )}
                                    onClick={() => setMobileOpen(false)}
                                >
                                    {item.label}
                                </Link>
                            ))}
                            <div className="mt-3 flex items-center justify-between border-t border-slate-100 pt-4">
                                <a href="tel:+2355356868" className="text-sm font-bold text-slate-950">
                                    (+23) 5535 68 68
                                </a>
                                <Button className="h-10 rounded-md bg-blue-600 px-5 text-white">
                                    {t("freeQuote")}
                                </Button>
                            </div>
                        </nav>
                    </div>
                )}
            </div>
        </header>
    );
}
