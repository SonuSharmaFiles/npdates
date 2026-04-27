import { Link } from "wouter";
import { Seo } from "@/components/Seo";
import { ConverterCard } from "@/components/ConverterCard";
import {
  Calendar,
  CalendarDays,
  Clock,
  Cake,
  Sigma,
  Sparkles,
  Code2,
  BookOpen,
  ArrowRight,
} from "lucide-react";
import { getTodayInKathmandu, toNepaliNumeral } from "@/lib/converter";

const FEATURES = [
  { icon: CalendarDays, title: "BS ↔ AD Converter", desc: "Instant, accurate conversion across 130 years.", href: "/bs-to-ad-converter" },
  { icon: Clock, title: "Today's Nepali Date", desc: "Live BS date with weekday, month and fiscal year.", href: "/today-nepali-date" },
  { icon: Calendar, title: "Nepali Calendar", desc: "Browse any BS month with festivals highlighted.", href: "/nepali-calendar" },
  { icon: Cake, title: "Age Calculator", desc: "Years, months and days from any BS or AD birth date.", href: "/age-calculator" },
  { icon: Sigma, title: "Date Difference", desc: "Days, weeks, months between any two dates.", href: "/date-difference" },
  { icon: Sparkles, title: "Festivals", desc: "Dashain, Tihar, Holi and every public holiday.", href: "/festivals" },
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

export default function Home() {
  const today = getTodayInKathmandu();

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <Seo
        title="Nepali Date Converter — BS to AD & AD to BS, Calendar, Festivals"
        description="The fastest, most accurate Nepali date converter. Convert Bikram Sambat (BS) ↔ AD instantly, view today's Nepali date, browse the Nepali calendar, festivals and fiscal year."
        path="/"
        jsonLd={faqLd}
      />

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
                The Nepali date toolkit you'll actually{" "}
                <span className="text-primary">enjoy</span> using.
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mt-6 max-w-xl">
                Convert Bikram Sambat to AD and back in a single tap. Browse the
                Nepali calendar, festivals, fiscal year and more — fast, accurate,
                free.
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

      <section className="py-16 md:py-24 border-b">
        <div className="container mx-auto px-4 max-w-6xl">
          <header className="max-w-2xl mb-10">
            <h2 className="font-serif text-3xl md:text-4xl font-bold tracking-tight">
              Every Nepali date tool, in one place.
            </h2>
            <p className="text-muted-foreground mt-3 text-lg">
              Calendars, calculators, festivals, fiscal year, embeddable widgets and
              a developer API — all built on the same accurate engine.
            </p>
          </header>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
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
