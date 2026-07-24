"use client";

import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { ChevronDown, Menu, Search, ShoppingCart, X } from "lucide-react";
import { useState, useTransition } from "react";
import { useRouter } from "@/i18n/routing";
import { usePathname } from "next/navigation";

const locales = [
  { code: "en", label: "English", flag: "🇺🇸" },
  { code: "fr", label: "Français", flag: "🇫🇷" },
];

export default function Navbar() {
  const t = useTranslations("navbar");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();
  const [openMobile, setOpenMobile] = useState(false);

  const currentLocale = locales.find((item) => item.code === locale) ?? locales[0];

  const changeLanguage = (nextLocale: string) => {
    startTransition(() => {
      router.replace(pathname, { locale: nextLocale });
    });
  };

  const navItems = [
    { label: t("home"), href: "/" },
    { label: t("governments"), href: "/governments" },
    { label: t("businesses"), href: "/businesses" },
    { label: t("individuals"), href: "/individuals" },
    { label: t("contact"), href: "/contact" },
  ];

  return (
    <header className="w-full bg-white">
      <div className="h-10 bg-gradient-to-r from-blue-700 to-cyan-500 text-white">
        <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-4 text-xs">
          <div className="flex items-center gap-3">
            <span className="font-bold">{t("nowHiring")}</span>
            <span>{t("hiringText")}</span>
          </div>

          <div className="hidden items-center gap-4 md:flex">
            <span>𝕏</span>
            <span>f</span>
            <span>in</span>
            <span>◎</span>

            <div className="relative group">
              <button
                disabled={isPending}
                className="flex items-center gap-1 rounded px-2 py-1 hover:bg-white/10"
              >
                <span>{currentLocale.flag}</span>
                <span>{currentLocale.label}</span>
                <ChevronDown size={14} />
              </button>

              <div className="invisible absolute right-0 top-full z-50 mt-2 w-36 rounded border bg-white py-2 text-slate-800 opacity-0 shadow-lg transition-all group-hover:visible group-hover:opacity-100">
                {locales.map((item) => (
                  <button
                    key={item.code}
                    onClick={() => changeLanguage(item.code)}
                    className="flex w-full items-center gap-2 px-4 py-2 text-left text-sm hover:bg-slate-100"
                  >
                    <span>{item.flag}</span>
                    <span>{item.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-b bg-white">
        <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-4">
          <Link href="/" className="flex items-center gap-4">
            <div className="h-12 w-12 rounded bg-gradient-to-br from-blue-700 to-cyan-500" />
            <div>
              <h1 className="text-3xl font-black text-slate-900">Iteck</h1>
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                Tech & IT Solutions
              </p>
            </div>
          </Link>

          <nav className="hidden items-center gap-9 lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-bold text-slate-900 hover:text-blue-600"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-5 lg:flex">
            <div className="flex items-center gap-3 border-r pr-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white">
                ☎
              </div>
              <div>
                <p className="text-xs text-slate-400">{t("hotline")}</p>
                <p className="font-black text-slate-900">(+23) 5535 68 68</p>
              </div>
            </div>

            <Search size={20} />
            <div className="relative">
              <ShoppingCart size={20} />
              <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-blue-600 text-[10px] text-white">
                2
              </span>
            </div>

            <Link
              href="/quote"
              className="rounded bg-blue-600 px-7 py-4 text-sm font-bold text-white hover:bg-blue-700"
            >
              {t("freeQuote")}
            </Link>
          </div>

          <button
            className="lg:hidden"
            onClick={() => setOpenMobile((v) => !v)}
          >
            {openMobile ? <X /> : <Menu />}
          </button>
        </div>

        {openMobile && (
          <div className="border-t px-4 py-5 lg:hidden">
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpenMobile(false)}
                  className="font-bold text-slate-900"
                >
                  {item.label}
                </Link>
              ))}

              <div className="mt-4 flex gap-2">
                {locales.map((item) => (
                  <button
                    key={item.code}
                    onClick={() => changeLanguage(item.code)}
                    className="rounded border px-3 py-2 text-sm"
                  >
                    {item.flag} {item.label}
                  </button>
                ))}
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
