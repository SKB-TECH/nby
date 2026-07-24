'use client';

import {useTransition} from 'react';
import {Check, ChevronDown} from 'lucide-react';
import {useLocale} from 'next-intl';
import {usePathname, useRouter} from '@/i18n/routing';
import {cn} from '@/lib/utils';

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import ReactCountryFlag from 'react-country-flag';

const languages = [
    {
        code: 'fr',
        label: 'Français',
        country: 'FR',
    },
    {
        code: 'en',
        label: 'English',
        country: 'US',
    },

];

type LanguageSwitcherProps = {
    variant?: 'default' | 'topbar';
    showLabel?: boolean;
};

export default function LanguageSwitcher({
    variant = 'default',
    showLabel = true,
}: LanguageSwitcherProps) {
    const locale = useLocale();

    const router = useRouter();
    const pathname = usePathname();

    const [isPending, startTransition] = useTransition();

    const currentLanguage =
        languages.find((lang) => lang.code === locale) || languages[0];

    const changeLanguage = (newLocale: string) => {
        startTransition(() => {
            router.replace(pathname, {locale: newLocale});
        });
    };

    const isTopbar = variant === 'topbar';

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <button
                    type="button"
                    className={cn(
                        "inline-flex items-center gap-2 rounded-full transition-all",
                        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70",
                        isTopbar
                            ? "h-8 px-2 text-xs font-medium text-white hover:bg-white/10"
                            : "h-11 border border-slate-200 bg-white px-4 text-sm font-semibold text-slate-900 hover:border-slate-300 hover:bg-slate-50"
                    )}
                    aria-label="Change language"
                >
                    <ReactCountryFlag
                        svg
                        countryCode={currentLanguage.country}
                        style={{
                            width: isTopbar ? '1.15em' : '1.5em',
                            height: isTopbar ? '1.15em' : '1.5em',
                            borderRadius: '999px',
                            objectFit: 'cover',
                        }}
                    />
                    {showLabel && (
                        <span className={cn(isTopbar ? "hidden sm:inline" : "inline")}>
                            {currentLanguage.label}
                        </span>
                    )}
                    <ChevronDown
                        className={cn(
                            "h-3.5 w-3.5",
                            isTopbar ? "text-white/80" : "text-slate-400"
                        )}
                    />
                </button>
            </DropdownMenuTrigger>

            <DropdownMenuContent
                align="end"
                className="w-56 rounded-lg border border-slate-200 bg-white p-2 shadow-lg shadow-slate-900/10"
            >
                {languages.map((lang) => {
                    const active = locale === lang.code;

                    return (
                        <DropdownMenuItem
                            key={lang.code}
                            onClick={() => changeLanguage(lang.code)}
                            disabled={isPending}
                            className="flex cursor-pointer items-center justify-between rounded-md px-3 py-2.5 outline-none transition-all hover:bg-slate-100 focus:bg-slate-100"
                        >
                            <div className="flex items-center gap-3">
                                <ReactCountryFlag
                                    svg
                                    countryCode={lang.country}
                                    style={{
                                        width: '1.7em',
                                        height: '1.7em',
                                        borderRadius: '999px',
                                        objectFit: 'cover',
                                    }}
                                />

                                <div className="flex flex-col">
                                  <span className="text-sm font-semibold text-slate-800">
                                    {lang.label}
                                  </span>
                                </div>
                            </div>

                            {active && (
                                <Check className="h-4 w-4 text-blue-600" />
                            )}
                        </DropdownMenuItem>
                    );
                })}
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
