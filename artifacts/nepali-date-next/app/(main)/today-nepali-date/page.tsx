import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, Sunrise } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { JsonLd, breadcrumbLd } from "@/components/seo/JsonLd";
import { getTodayInKathmandu } from "@/lib/converter";
import { KathmanduClock } from "@/components/today/KathmanduClock";

export const metadata: Metadata = buildMetadata({
  title: "Today's Nepali Date (BS) — Aja Ko Miti, Live in Kathmandu Time",
  description:
    "What is today's Nepali date? Live Bikram Sambat (BS) date with weekday, Gregorian (AD) equivalent and Asia/Kathmandu clock — always day-accurate, always up to date.",
  path: "/today-nepali-date",
  keywords: [
    "today Nepali date",
    "aja ko miti",
    "current BS date",
    "Nepali date today",
    "today Bikram Sambat",
    "Nepali calendar today",
    "Kathmandu time",
    "today miti",
  ],
});

export default function TodayPage() {
  const today = getTodayInKathmandu();

  return (
    <div className="container mx-auto px-4 py-12 max-w-5xl">
      <JsonLd
        data={breadcrumbLd([
          { name: "Home", path: "/" },
          { name: "Today's Nepali Date", path: "/today-nepali-date" },
        ])}
      />
      <h1 className="font-serif text-3xl font-bold mb-8">Today in Nepal</h1>

      <div className="grid md:grid-cols-5 gap-6">
        <div className="md:col-span-3 bg-card border rounded-2xl shadow-sm p-8 md:p-12 flex flex-col justify-center relative overflow-hidden">
          <div className="absolute top-0 right-0 p-6 opacity-5 text-primary">
            <Sunrise className="w-48 h-48" />
          </div>

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <MapPin className="w-4 h-4" />
              Asia/Kathmandu Time
            </div>

            <div className="space-y-2 mb-8">
              <div className="text-xl text-muted-foreground font-medium">
                {today.bs.weekdayNameNepali} / {today.bs.weekdayName}
              </div>
              <div className="font-serif text-5xl md:text-7xl font-bold text-foreground tracking-tight">
                {today.bs.day} {today.bs.monthName}
              </div>
              <div className="text-3xl md:text-4xl text-muted-foreground font-serif">
                {today.bs.year} BS
              </div>
            </div>

            <div className="pt-8 border-t border-border/50">
              <div className="text-lg text-muted-foreground">Gregorian Equivalent</div>
              <div className="text-2xl font-medium mt-1">{today.ad.formatted}</div>
            </div>
          </div>
        </div>

        <div className="md:col-span-2 space-y-6">
          <KathmanduClock />
        </div>
      </div>

      <section className="mt-14 max-w-3xl prose prose-neutral dark:prose-invert">
        <h2>About today's Nepali date</h2>
        <p>
          The Bikram Sambat (BS) date shown above is calculated live in <strong>Asia/Kathmandu</strong>{" "}
          time (UTC+5:45). That matters because the day rolls over in Nepal up to 13 hours and 45
          minutes before it does in places like Los Angeles, so a website serving the "current
          Nepali date" needs to anchor itself to Kathmandu, not the visitor's local clock.
        </p>
        <p>
          The Bikram Sambat calendar is Nepal's official solar calendar — roughly 56 years and 8
          months ahead of the Gregorian (AD) calendar. Months range from 29 to 32 days and the
          year begins on <strong>1 Baisakh</strong>, around mid-April. Today's BS date is the same
          one printed on every Nepali patro, citizenship card and government form for this day.
        </p>
        <h2>How is today's date calculated?</h2>
        <p>
          The current moment in Asia/Kathmandu is converted to its BS equivalent using a verified
          epoch (1 Baisakh 1970 BS = 13 April 1913 AD) and a per-year month-length table covering
          BS 1970 through 2099. The weekday is the same as the underlying Gregorian weekday — both
          calendars share the same seven-day week.
        </p>
        <h2>Need to convert another date?</h2>
        <p>
          To convert any specific BS or AD date, use the{" "}
          <Link href="/">BS to AD converter</Link> on the homepage or the{" "}
          <Link href="/ad-to-bs-converter/">AD to BS converter</Link>. To calculate exact age, see
          the <Link href="/age-calculator/">age calculator</Link>. For the gap between two dates,
          use the <Link href="/date-difference/">date difference calculator</Link>.
        </p>
      </section>
    </div>
  );
}
