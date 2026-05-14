import Link from "next/link";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { CalendarGrid } from "@/components/calendar/CalendarGrid";
import { BS_MONTHS_EN, BS_MONTHS_NP, bsToAd, toNepaliNumeral } from "@/lib/converter";
import { festivalsForYear } from "@/data/festivals";

export function NepaliCalendarYearView({ year }: { year: number }) {
  const fests = festivalsForYear(year);
  const yearStart = bsToAd(year, 1, 1);

  return (
    <div className="container mx-auto px-4 py-10">
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Calendar", path: "/nepali-calendar" },
          { name: `${year} BS`, path: `/nepali-calendar-${year}` },
        ]}
      />
      <header className="mt-6 mb-10">
        <h1 className="font-serif text-4xl md:text-5xl font-bold tracking-tight">
          Nepali Calendar {year} BS
        </h1>
        <p className="text-muted-foreground mt-3 text-lg">
          The full Bikram Sambat year {toNepaliNumeral(year)} — starting{" "}
          <strong>{yearStart.ad.formatted}</strong>. {fests.length} festivals and public holidays tracked.
        </p>
      </header>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
        {Array.from({ length: 12 }, (_, i) => i + 1).map((m) => (
          <Link key={m} href={`/calendar/${year}/${m}`} className="block hover-elevate-2 rounded-2xl">
            <CalendarGrid year={year} month={m} />
          </Link>
        ))}
      </div>

      <section className="mt-16 max-w-3xl prose prose-neutral dark:prose-invert">
        <h2>About BS {year}</h2>
        <p>
          Bikram Sambat year <strong>{year}</strong> begins on {yearStart.ad.formatted} (
          {yearStart.ad.weekdayName}) and runs through the following spring. The 12 Nepali months
          in order are {BS_MONTHS_EN.map((m, i) => `${m} (${BS_MONTHS_NP[i]})`).join(", ")}.
        </p>
        <h2>Festivals in {year} BS</h2>
        {fests.length === 0 ? (
          <p>No major festivals are tracked for this year yet.</p>
        ) : (
          <ul>
            {fests.map((f) => (
              <li key={`${f.bsMonth}-${f.bsDay}-${f.name}`}>
                <strong>{f.name}</strong> — {BS_MONTHS_EN[f.bsMonth - 1]} {f.bsDay}
                {f.isPublicHoliday ? " (public holiday)" : ""}
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}

export function calendarYearMetadata(year: number) {
  return {
    title: `Nepali Calendar ${year} BS — Full Year, Months & Festivals`,
    description: `Complete Nepali (Bikram Sambat) calendar for ${year} BS with all 12 months, festivals, public holidays, and Gregorian (AD) date mappings.`,
    path: `/nepali-calendar-${year}`,
  };
}
