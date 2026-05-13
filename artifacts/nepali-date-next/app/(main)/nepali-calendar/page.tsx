import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { NepaliCalendarBrowser } from "@/components/calendar/NepaliCalendarBrowser";
import { BS_MIN_YEAR, BS_MAX_YEAR } from "@/lib/converter";

export const metadata: Metadata = buildMetadata({
  title: "Nepali Calendar (Patro) — Browse Bikram Sambat by Year & Month",
  description:
    "The official Bikram Sambat (BS) calendar with festivals, public holidays, and Gregorian (AD) date mappings. Browse any month from 1970 BS to 2099 BS.",
  path: "/nepali-calendar",
  keywords: ["Nepali calendar", "Bikram Sambat calendar", "Nepali patro", "BS calendar"],
});

export default function NepaliCalendarPage() {
  return (
    <div className="container mx-auto px-4 py-10">
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Nepali Calendar", path: "/nepali-calendar" }]} />

      <header className="mt-6 mb-2">
        <h1 className="font-serif text-3xl md:text-4xl font-bold">Nepali Calendar</h1>
        <p className="text-muted-foreground mt-2">
          The official Bikram Sambat calendar with festivals and Gregorian (AD) mappings.
        </p>
      </header>

      <NepaliCalendarBrowser />

      <section className="mt-14 max-w-3xl prose prose-neutral dark:prose-invert">
        <h2>About the Nepali (Bikram Sambat) calendar</h2>
        <p>
          The Bikram Sambat (BS) calendar is Nepal's official solar calendar, currently running
          about 56 years and 8 months ahead of the Gregorian (AD) calendar. It consists of twelve
          months that vary in length between 29 and 32 days, with the new year falling on the
          first day of <strong>Baisakh</strong> in mid-April.
        </p>
        <p>
          On this page you can browse any Nepali month from {BS_MIN_YEAR} BS to {BS_MAX_YEAR} BS,
          see the corresponding Gregorian dates, and identify festivals and public holidays.
          Click any date for a deeper conversion view.
        </p>
      </section>
    </div>
  );
}
