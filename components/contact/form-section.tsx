import { Building2, Mail, MapPin, Phone } from "lucide-react";
import { getTranslations } from "next-intl/server";

const categoryKeys = ["governmentAgency", "revenueAuthority", "bank", "enterprise"] as const;
const countryKeys = [
  "canada",
  "unitedStates",
  "france",
  "unitedKingdom",
  "germany",
  "belgium",
  "switzerland",
  "senegal",
  "ivoryCoast",
  "cameroon",
  "morocco",
  "algeria",
  "tunisia",
  "other",
] as const;
const interestKeys = [
  "revenueFraud",
  "incomeTaxFraud",
  "profitFraud",
  "customsFraud",
  "expenditureRationalization",
  "expenditureFraud",
  "publicSpendingLoss",
  "spendingQuality",
  "resourceLoss",
  "clientIntelligence",
  "personalPerformance",
  "financialOpportunity",
  "personalModeling",
] as const;
const languageKeys = ["english", "french"] as const;

const contactCardConfig = [
  { key: "companyName", icon: Building2, lines: ["line1"] as const },
  { key: "location", icon: MapPin, lines: ["line1", "line2"] as const },
  { key: "email", icon: Mail, lines: ["line1"] as const },
  { key: "phone", icon: Phone, lines: ["line1"] as const },
] as const;

const fieldClass =
  "h-12 w-full rounded-md border border-slate-200 bg-white px-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-400";

const labelClass = "mb-2 block text-sm font-semibold text-slate-800";

export async function ContactFormSection() {
  const t = await getTranslations("contact.form");

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16 lg:px-6 lg:py-20">
        <div className="grid items-start gap-10 md:grid-cols-[1.15fr_0.85fr] md:gap-12 lg:gap-16">
          <div className="min-w-0">
            <span className="inline-flex rounded-full bg-blue-50 px-4 py-1.5 text-sm font-semibold text-blue-600">
              {t("badge")}
            </span>

            <h2 className="mt-5 text-4xl font-bold leading-tight tracking-[-0.02em] text-slate-950 sm:text-[42px]">
              {t("title")}
            </h2>

            <p className="mt-4 max-w-xl text-[15px] leading-7 text-slate-500 sm:text-base">
              {t("subtitle")}
            </p>

            <form className="mt-8 space-y-5">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="firstName" className={labelClass}>
                    {t("fields.firstName")}
                  </label>
                  <input
                    id="firstName"
                    type="text"
                    name="firstName"
                    placeholder={t("fields.firstName")}
                    className={fieldClass}
                  />
                </div>
                <div>
                  <label htmlFor="name" className={labelClass}>
                    {t("fields.name")}
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    placeholder={t("fields.name")}
                    className={fieldClass}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="category" className={labelClass}>
                  {t("fields.category")}
                </label>
                <select id="category" name="category" className={fieldClass} defaultValue="">
                  <option value="" disabled>
                    {t("fields.categoryPlaceholder")}
                  </option>
                  {categoryKeys.map((key) => (
                    <option key={key} value={key}>
                      {t(`categories.${key}`)}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="country" className={labelClass}>
                  {t("fields.country")}
                </label>
                <select id="country" name="country" className={fieldClass} defaultValue="">
                  <option value="" disabled>
                    {t("fields.countryPlaceholder")}
                  </option>
                  {countryKeys.map((key) => (
                    <option key={key} value={key}>
                      {t(`countries.${key}`)}
                    </option>
                  ))}
                </select>
              </div>

              <fieldset>
                <legend className={labelClass}>{t("fields.mainInterest")}</legend>
                <div className="grid gap-2 sm:grid-cols-2">
                  {interestKeys.map((key) => (
                    <label
                      key={key}
                      className="flex items-start gap-2 rounded-md border border-slate-200 px-3 py-2 text-sm text-slate-700"
                    >
                      <input
                        type="checkbox"
                        name="mainInterest"
                        value={key}
                        className="mt-0.5 h-4 w-4 shrink-0 accent-blue-600"
                      />
                      <span>{t(`interests.${key}`)}</span>
                    </label>
                  ))}
                </div>
              </fieldset>

              <fieldset>
                <legend className={labelClass}>{t("fields.language")}</legend>
                <div className="flex flex-wrap gap-4">
                  {languageKeys.map((key) => (
                    <label key={key} className="inline-flex items-center gap-2 text-sm text-slate-700">
                      <input
                        type="radio"
                        name="language"
                        value={key}
                        className="h-4 w-4 accent-blue-600"
                      />
                      {t(`languages.${key}`)}
                    </label>
                  ))}
                </div>
              </fieldset>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="email" className={labelClass}>
                    {t("fields.email")}
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder={t("fields.email")}
                    className={fieldClass}
                  />
                </div>
                <div>
                  <label htmlFor="phone" className={labelClass}>
                    {t("fields.phone")}
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    name="phone"
                    placeholder={t("fields.phone")}
                    className={fieldClass}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className={labelClass}>
                  {t("fields.subject")}
                </label>
                <input
                  id="subject"
                  type="text"
                  name="subject"
                  placeholder={t("fields.subject")}
                  className={fieldClass}
                />
              </div>

              <div>
                <label htmlFor="message" className={labelClass}>
                  {t("fields.message")}
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder={t("fields.message")}
                  rows={6}
                  className="w-full resize-none rounded-md border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-400"
                />
              </div>

              <button
                type="submit"
                className="inline-flex h-12 items-center justify-center rounded-full border border-blue-600 bg-white px-8 text-sm font-semibold text-blue-700 transition hover:bg-blue-50"
              >
                {t("fields.submit")}
              </button>
            </form>
          </div>

          <div className="sticky top-8 self-start md:max-w-none">
            <div className="grid grid-cols-2 gap-4">
              {contactCardConfig.map(({ key, icon: Icon, lines }) => (
                <article
                  key={key}
                  className="flex min-h-[220px] flex-col items-center justify-center rounded-2xl bg-slate-50 px-5 py-8 text-center"
                >
                  <Icon className="h-10 w-10 text-blue-600" strokeWidth={1.5} aria-hidden />
                  <h3 className="mt-5 text-lg font-bold text-slate-950">
                    {t(`cards.${key}.title`)}
                  </h3>
                  <div className="mt-3 space-y-1">
                    {lines.map((lineKey) => (
                      <p key={lineKey} className="text-sm leading-6 text-slate-500">
                        {t(`cards.${key}.${lineKey}`)}
                      </p>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
