import type { Metadata } from "next";
import Link from "next/link";
import {
  Clock,
  Cake,
  Sigma,
  Code2,
  BookOpen,
  ArrowRight,
  CheckCircle2,
  CalendarRange,
  Languages,
  Terminal,
} from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { JsonLd, faqLd, breadcrumbLd } from "@/components/seo/JsonLd";
import { ConverterCard } from "@/components/converter/ConverterCard";
import { getTodayInKathmandu, toNepaliNumeral } from "@/lib/converter";

export const metadata: Metadata = buildMetadata({
  title:
    "Nepali Date Converter (BS ↔ AD) — Today's Nepali Date | npdates",
  description:
    "Convert BS to AD and AD to BS in seconds. Check today's Nepali date, calculate age and date differences — free, day-accurate, and built for Nepalis.",
  path: "/",
  keywords: [
    "Nepali date converter",
    "BS to AD converter",
    "AD to BS",
    "today Nepali date",
    "Bikram Sambat",
    "age calculator",
    "date difference",
  ],
});

const TRUST_SIGNALS = [
  {
    icon: CheckCircle2,
    title: "Day-accurate conversion",
    desc: "Every BS↔AD date verified against the published Nepal patro — correct to the weekday.",
  },
  {
    icon: CalendarRange,
    title: "Supports BS 1970–2099",
    desc: "130 years of Bikram Sambat data, covering historical records and future dates.",
  },
  {
    icon: Languages,
    title: "Nepali numerals support",
    desc: "Results rendered in both English and Devanagari (देवनागरी) numerals.",
  },
  {
    icon: Terminal,
    title: "Free developer API",
    desc: "Drop-in JSON REST endpoints — convert dates and fetch the fiscal year.",
  },
];

const LEARN = [
  {
    title: "What is Bikram Sambat?",
    desc: "A primer on Nepal's official solar calendar — origin, structure and why it's still in use.",
    href: "/blog/what-is-bikram-sambat",
  },
  {
    title: "BS vs AD explained",
    desc: "The 56-year gap, why naive year math breaks, and how official conversion actually works.",
    href: "/blog/difference-between-bs-and-ad",
  },
  {
    title: "How BS↔AD conversion works",
    desc: "Under the hood — epoch math, month-length tables, and why year arithmetic isn't enough.",
    href: "/blog/how-bs-to-ad-conversion-works",
  },
  {
    title: "Nepal fiscal year guide",
    desc: "Shrawan to Ashadh — how Nepal's government budget cycle differs from the calendar year.",
    href: "/blog/nepali-fiscal-year-explained",
  },
];

const FEATURES = [
  { icon: Clock, title: "Today's Nepali Date", desc: "Live BS date with weekday, month and fiscal year.", href: "/today-nepali-date" },
  { icon: Cake, title: "Age Calculator", desc: "Years, months and days from any BS or AD birth date.", href: "/age-calculator" },
  { icon: Sigma, title: "Date Difference", desc: "Days, weeks, months between any two dates.", href: "/date-difference" },
  { icon: BookOpen, title: "Fiscal Year", desc: "Find Nepal's fiscal year for any date.", href: "/fiscal-year-converter" },
  { icon: Code2, title: "Public API", desc: "Free REST endpoints for developers.", href: "/api-docs" },
];

const FAQ = [
  {
    q: "How do I convert BS to AD?",
    a: "Use the converter at the top of this page: enter a Bikram Sambat year, month and day, and the corresponding Gregorian (AD) date appears instantly. The conversion is accurate across BS years 1970–2099.",
  },
  {
    q: "What is the current Nepali year?",
    a: "Nepal is currently in the Bikram Sambat year shown in our converter. The new BS year begins on 1 Baisakh, around mid-April of each Gregorian year.",
  },
  {
    q: "Why is my naive year math wrong?",
    a: "Subtracting 56 or 57 from an AD year only works half the time, because the BS new year falls in mid-April. Always use a real converter rather than year arithmetic.",
  },
  {
    q: "Is this converter accurate?",
    a: "Yes. We use the published Bikram Sambat patro for each year and a verified epoch (1 Baisakh 1970 BS = 13 April 1913 AD). Every conversion is correct to the day, including weekday.",
  },
  {
    q: "Is the API free to use?",
    a: "Yes, the public API is free for reasonable use. See the API documentation page for endpoints and examples.",
  },
];

export default function HomePage() {
  const today = getTodayInKathmandu();

  return (
    <>
      <JsonLd data={faqLd(FAQ.map((f) => ({ question: f.q, answer: f.a })))} />
      <JsonLd data={breadcrumbLd([{ name: "Home", path: "/" }])} />

      <section className="relative overflow-hidden border-b">
        <div
          className="absolute inset-0 -z-10 opacity-50 dark:opacity-30 pointer-events-none"
          style={{
            background:
              "radial-gradient(800px 400px at 80% -10%, hsl(var(--primary)/.15), transparent 60%), radial-gradient(700px 360px at 0% 10%, hsl(var(--secondary)/.20), transparent 60%)",
          }}
        />
        <div className="container mx-auto px-4 pt-16 pb-10 md:pt-24 md:pb-14">
          <div className="grid lg:grid-cols-[1.1fr_1fr] gap-10 items-center max-w-6xl mx-auto">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-medium px-3 py-1 rounded-full border bg-card text-muted-foreground mb-5">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
                Today is {today.bs.formatted} · {today.ad.formatted}
              </div>
              <h1 className="font-serif text-4xl md:text-6xl font-bold tracking-tight leading-[1.05]">
                Nepali Date Converter —{" "}
                <span className="text-primary">BS ↔ AD</span>, instantly.
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mt-6 max-w-xl">
                Convert Bikram Sambat to Gregorian and back in a single tap. Day-accurate,
                Devanagari-aware, and free.
              </p>
              <div className="mt-7 flex flex-wrap items-center gap-3 text-sm">
                <span className="text-muted-foreground">Trusted across:</span>
                <span className="px-2.5 py-1 rounded-md bg-card border text-foreground">
                  BS 1970 – 2099
                </span>
                <span className="px-2.5 py-1 rounded-md bg-card border text-foreground">
                  Day-accurate
                </span>
                <span className="px-2.5 py-1 rounded-md bg-card border text-foreground">
                  Devanagari ({toNepaliNumeral(today.bs.year)})
                </span>
              </div>
            </div>
            <div>
              <ConverterCard />
            </div>
          </div>
        </div>
      </section>

      <section aria-label="Why npdates" className="border-b">
        <div className="container mx-auto px-4 py-10 md:py-14 max-w-6xl">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {TRUST_SIGNALS.map((t) => (
              <div
                key={t.title}
                className="p-5 rounded-2xl border bg-card hover-elevate"
              >
                <t.icon className="w-5 h-5 text-primary" />
                <div className="mt-3 font-semibold text-sm">{t.title}</div>
                <p className="text-sm text-muted-foreground mt-1.5 leading-relaxed">
                  {t.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 border-b">
        <div className="container mx-auto px-4 max-w-6xl">
          <header className="max-w-2xl mb-10">
            <h2 className="font-serif text-3xl md:text-4xl font-bold tracking-tight">
              Every Nepali date tool, in one place.
            </h2>
            <p className="text-muted-foreground mt-3 text-lg">
              Calculators, fiscal year, embeddable widgets and a developer API — all built on the
              same accurate engine.
            </p>
          </header>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {FEATURES.map((f) => (
              <Link
                key={f.href}
                href={f.href}
                className="block p-5 rounded-2xl border bg-card hover-elevate-2 group"
              >
                <f.icon className="w-5 h-5 text-primary" />
                <h3 className="font-semibold mt-3">{f.title}</h3>
                <p className="text-sm text-muted-foreground mt-1.5 leading-relaxed">
                  {f.desc}
                </p>
                <div className="mt-3 inline-flex items-center text-xs text-primary font-medium gap-1 group-hover:gap-2 transition-all">
                  Open <ArrowRight className="w-3 h-3" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 border-b">
        <div className="container mx-auto px-4 max-w-6xl">
          <header className="max-w-2xl mb-10">
            <h2 className="font-serif text-3xl md:text-4xl font-bold tracking-tight">
              Learn About Nepali Dates
            </h2>
            <p className="text-muted-foreground mt-3 text-lg">
              Plain-language guides on the Bikram Sambat calendar, fiscal year, and how Nepal's
              dates relate to the Gregorian system.
            </p>
          </header>
          <ul className="grid sm:grid-cols-2 lg:grid-cols-2 gap-4">
            {LEARN.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="block p-5 rounded-2xl border bg-card hover-elevate-2 group h-full"
                >
                  <h3 className="font-semibold">{l.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1.5 leading-relaxed">
                    {l.desc}
                  </p>
                  <div className="mt-3 inline-flex items-center text-xs text-primary font-medium gap-1 group-hover:gap-2 transition-all">
                    Read <ArrowRight className="w-3 h-3" />
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-16 md:py-24 border-b">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-serif text-3xl md:text-4xl font-bold tracking-tight mb-8">
            What is Bikram Sambat?
          </h2>
          <div className="prose prose-neutral dark:prose-invert max-w-none">
            <p>
              Bikram Sambat (विक्रम सम्बत, BS) is the official solar calendar of
              Nepal. It runs approximately 56 years and 8 months ahead of the
              Gregorian calendar, with twelve months that vary in length between
              29 and 32 days. The new year begins on{" "}
              <strong>1 Baisakh</strong>, which falls in mid-April.
            </p>
            <p>
              Citizenship cards, passports, school certificates, government tenders,
              tax filings and the federal budget in Nepal all use BS dates. Most
              Nepalis live with both calendars in parallel — a quick, accurate
              converter makes that easier.
            </p>
            <p>
              <Link href="/blog/what-is-bikram-sambat">Read the full guide →</Link>
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="font-serif text-3xl md:text-4xl font-bold tracking-tight mb-8">
            Frequently asked questions
          </h2>
          <div className="space-y-3">
            {FAQ.map((f) => (
              <details
                key={f.q}
                className="group rounded-xl border bg-card p-5 hover-elevate"
              >
                <summary className="font-medium cursor-pointer list-none flex items-center justify-between">
                  {f.q}
                  <span className="text-muted-foreground transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="text-muted-foreground mt-3 leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
