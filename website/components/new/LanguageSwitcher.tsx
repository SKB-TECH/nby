"use client";

import { usePathname, useRouter } from "next/navigation";
import { useLocale } from "next-intl";
import { useState } from "react";
import ReactCountryFlag from "react-country-flag";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Check, ChevronDown } from "lucide-react";

const languages = [
    { code: "en", name: "English", flag: "GB" },
    { code: "fr", name: "Français", flag: "FR" },
];

export default function LanguageSwitcher() {
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    const switchLanguage = (langCode: string) => {
        const segments = pathname?.split("/") || [];

        if (segments.length > 1 && ["en", "fr"].includes(segments[1])) {
            segments[1] = langCode;
        } else {
            segments.splice(1, 0, langCode);
        }

        router.push(segments.join("/") || "/");
        setIsOpen(false);
    };

    const currentLanguage = languages.find((lang) => lang.code === locale) || languages[0];

    return (
        <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
            <DropdownMenuTrigger asChild>
                <Button
                    variant="outline"
                    className="flex h-10 items-center gap-2 rounded-full border-slate-200 bg-white px-3 text-slate-700 transition-colors hover:border-[#123a56] hover:bg-white"
                    aria-label="Change language"
                >
                    <ReactCountryFlag
                        countryCode={currentLanguage.flag}
                        svg
                        style={{ width: "20px", height: "20px" }}
                        alt={currentLanguage.name}
                    />
                    <span className="hidden text-sm font-bold text-slate-900 sm:inline">
                        {currentLanguage.code.toUpperCase()}
                    </span>
                    <ChevronDown
                        className={`h-4 w-4 text-slate-500 transition-transform ${isOpen ? "rotate-180" : ""}`}
                    />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
                {languages.map((lang) => (
                    <DropdownMenuItem
                        key={lang.code}
                        onClick={() => switchLanguage(lang.code)}
                        className="flex cursor-pointer items-center gap-3"
                    >
                        <ReactCountryFlag
                            countryCode={lang.flag}
                            svg
                            style={{ width: "24px", height: "24px" }}
                            alt={lang.name}
                        />
                        <span className="flex-1">{lang.name}</span>
                        {lang.code === locale && <Check className="h-4 w-4 text-[#123a56]" />}
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
