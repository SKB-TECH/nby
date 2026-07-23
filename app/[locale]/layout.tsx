import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { routing } from '@/i18n/routing';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ScrollProgress from '@/components/church/layout/ScrollProgress';
import './globals.css';

type Locale = (typeof routing.locales)[number];

export const metadata: Metadata = {
    title: {
        default: "NBY",
        template: "%s | NBY",
    },
    description: "NBY — Nzambe Ba Lukaka Ye, Cité du Surnaturel.",
    applicationName: "NBY",
};

export default async function LocaleLayout({
                                               children,
                                               params,
                                           }: {
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;

    if (!routing.locales.includes(locale as Locale)) {
        notFound();
    }

    const messages = await getMessages();

    return (
        <html lang={locale}>
        <body>
        <NextIntlClientProvider messages={messages}>
            <Header />
            <main>{children}</main>
            <Footer />
            <ScrollProgress />
        </NextIntlClientProvider>
        </body>
        </html>
    );
}
