import { getTranslations } from "next-intl/server";

export async function ContactHeroSection() {
  const t = await getTranslations("contact.hero");

  return (
    <section className="bg-gradient-to-r from-blue-700 via-blue-500 to-cyan-500">
      <div className="mx-auto grid min-h-[calc(100svh-340px)] max-w-6xl items-center gap-10 px-6 pt-12 lg:grid-cols-[1fr_auto] lg:px-8">
        <div className="max-w-2xl self-center text-white">
          <h1 className="text-4xl font-bold leading-tight tracking-[-0.02em] sm:text-5xl">
            {t("title")}
          </h1>
          <p className="mt-6 text-base font-medium leading-7 text-white/90 sm:text-lg">
            {t("subtitle")}
          </p>
        </div>
      </div>
    </section>
  );
}
