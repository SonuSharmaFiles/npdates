import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { CalendarGrid } from "@/components/calendar/CalendarGrid";
import { BS_MONTHS_EN, BS_MONTHS_NP, BS_MIN_YEAR, BS_MAX_YEAR, bsToAd, toNepaliNumeral } from "@/lib/converter";
import { festivalsForYear } from "@/data/festivals";

const PRE_RENDER_YEARS = [2080, 2081, 2082, 2083, 2084, 2085];

type Params = { year: string };

export const dynamicParams = false;

export function generateStaticParams(): Params[] {
  return PRE_RENDER_YEARS.map((y) => ({ year: String(y) }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { year: yStr } = await params;
  const year = Number(yStr);
  if (!year || year < BS_MIN_YEAR || year > BS_MAX_YEAR) {
    return buildMetadata({ title: "Year out of range", description: "Invalid BS year.", path: `/nepali-calendar-${yStr}`, noIndex: true });
  }
  return buildMetadata({
    title: `Nepali Calendar ${year} BS — Full Year, Months & Festivals`,
    description: `Complete Nepali (Bikram Sambat) calendar for ${year} BS with all 12 months, festivals, public holidays, and Gregorian (AD) date mappings.`,
    path: `/nepali-calendar-${year}`,
  });
}

export default async function CalendarYearPage({ params }: { params: Promise<Params> }) {
  const { year: yStr } = await params;
  const year = Number(yStr);
  if (!year || year < BS_MIN_YEAR || year > BS_MAX_YEAR) notFound();

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
