import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd, faqLd } from "@/components/seo/JsonLd";
import { adToBs, BS_MONTHS_EN, AD_MONTHS_EN } from "@/lib/converter";
import {
  AD_LANDING_YEARS,
  isBsLandingPreRendered,
  isCalendarPreRendered,
} from "@/lib/pre-render-years";

const AD_PRE_RENDER_YEARS = AD_LANDING_YEARS;

type Params = { year: string; month: string; day: string };

export const dynamicParams = false;

export function generateStaticParams(): Params[] {
  const out: Params[] = [];
  for (const y of AD_PRE_RENDER_YEARS) {
    const monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if (y % 4 === 0 && (y % 100 !== 0 || y % 400 === 0)) monthDays[1] = 29;
    for (let m = 1; m <= 12; m++) {
      for (let d = 1; d <= monthDays[m - 1]; d++) {
        out.push({ year: String(y), month: String(m), day: String(d) });
      }
    }
  }
  return out;
}

function parseParams(p: Params): { year: number; month: number; day: number } | null {
  const year = Number(p.year);
  const month = Number(p.month);
  const day = Number(p.day);
  if (!year || !month || !day) return null;
  if (month < 1 || month > 12 || day < 1 || day > 31) return null;
  try { adToBs(year, month, day); } catch { return null; }
  return { year, month, day };
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const p = await params;
  const parsed = parseParams(p);
  if (!parsed) {
    return buildMetadata({ title: "Invalid date", description: "Invalid AD date.", path: `/ad-to-bs/${p.year}/${p.month}/${p.day}`, noIndex: true });
  }
  const { bs, ad } = adToBs(parsed.year, parsed.month, parsed.day);
  return buildMetadata({
    title: `${ad.formatted} in Nepali (BS) — ${bs.formatted}`,
    description: `${ad.formatted} converts to ${bs.formatted} (${bs.weekdayNameNepali}) in the Bikram Sambat calendar.`,
    path: `/ad-to-bs/${parsed.year}/${parsed.month}/${parsed.day}`,
  });
}

export default async function AdToBsLanding({ params }: { params: Promise<Params> }) {
  const p = await params;
  const parsed = parseParams(p);
  if (!parsed) notFound();
  const { year, month, day } = parsed;
  const { bs, ad } = adToBs(year, month, day);

  const monthDaysAd = new Date(year, month, 0).getDate();
  const prevDay = day === 1 ? null : { y: year, m: month, d: day - 1 };
  const nextDay = day === monthDaysAd ? null : { y: year, m: month, d: day + 1 };

  return (
    <>
      <JsonLd
        data={faqLd([
          { question: `What is ${ad.formatted} in Nepali date?`, answer: `${ad.formatted} is equivalent to ${bs.formatted} in the Bikram Sambat calendar. It is a ${bs.weekdayName} (${bs.weekdayNameNepali}).` },
          { question: `What day of the week is ${ad.formatted}?`, answer: `${ad.formatted} falls on a ${ad.weekdayName}.` },
        ])}
      />
      <div className="container mx-auto px-4 py-10 max-w-4xl">
        <Breadcrumbs
          items={[
            { name: "Home", path: "/" },
            { name: "AD to BS", path: "/ad-to-bs-converter" },
            { name: ad.formatted, path: `/ad-to-bs/${year}/${month}/${day}` },
          ]}
        />
        <h1 className="font-serif text-3xl md:text-4xl font-bold mt-6 mb-2">
          {ad.formatted} in Nepali Date
        </h1>
        <p className="text-muted-foreground mb-8">AD → Bikram Sambat conversion</p>

        <article className="bg-card border rounded-2xl p-8 md:p-10">
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div>
              <p className="text-xs uppercase tracking-wider text-muted-foreground">Gregorian (AD)</p>
              <div className="font-serif text-3xl md:text-4xl font-bold mt-1">{ad.formatted}</div>
              <div className="text-muted-foreground mt-1">{ad.weekdayName} · {ad.iso}</div>
            </div>
            <div className="md:border-l md:pl-6">
              <p className="text-xs uppercase tracking-wider text-muted-foreground">Bikram Sambat</p>
              <div className="font-serif text-3xl md:text-4xl font-bold mt-1 text-primary">{bs.formatted}</div>
              <div className="text-muted-foreground mt-1">{bs.formattedNepali} · {bs.weekdayNameNepali}</div>
            </div>
          </div>

          {isCalendarPreRendered(bs.year) && (
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href={`/calendar/${bs.year}/${bs.month}`} className="inline-flex items-center justify-center rounded-md border border-input px-4 py-2 text-sm font-medium hover:bg-accent transition-colors">
                View {BS_MONTHS_EN[bs.month - 1]} {bs.year} BS calendar
              </Link>
            </div>
          )}
        </article>

        <nav className="mt-6 grid grid-cols-2 gap-3 text-sm">
          {prevDay && (
            <Link href={`/ad-to-bs/${prevDay.y}/${prevDay.m}/${prevDay.d}`} className="flex items-center gap-2 p-3 rounded-lg border hover-elevate">
              <ChevronLeft className="w-4 h-4" />
              <div>
                <div className="text-xs text-muted-foreground">Previous day</div>
                <div className="font-medium">{AD_MONTHS_EN[prevDay.m - 1]} {prevDay.d}, {prevDay.y}</div>
              </div>
            </Link>
          )}
          {nextDay && (
            <Link href={`/ad-to-bs/${nextDay.y}/${nextDay.m}/${nextDay.d}`} className="flex items-center gap-2 p-3 rounded-lg border hover-elevate justify-end text-right ml-auto">
              <div>
                <div className="text-xs text-muted-foreground">Next day</div>
                <div className="font-medium">{AD_MONTHS_EN[nextDay.m - 1]} {nextDay.d}, {nextDay.y}</div>
              </div>
              <ChevronRight className="w-4 h-4" />
            </Link>
          )}
        </nav>

        <section className="mt-12 prose prose-neutral dark:prose-invert max-w-none">
          <h2>About this conversion</h2>
          <p>
            <strong>{ad.formatted}</strong> in the Gregorian (AD) calendar corresponds to{" "}
            <strong>{bs.formatted}</strong> in the Bikram Sambat calendar used officially in Nepal.
            It is a {ad.weekdayName.toLowerCase()} ({bs.weekdayNameNepali}).
          </p>
          <h2>Frequently asked questions</h2>
          <h3>What is {ad.formatted} in Nepali date?</h3>
          <p>{ad.formatted} is <strong>{bs.formatted}</strong> ({bs.formattedNepali}) in the Bikram Sambat calendar.</p>
          <h3>How do I convert other AD dates?</h3>
          <p>
            Try the <Link href="/ad-to-bs-converter">AD to BS converter</Link> for any other date
            {isCalendarPreRendered(bs.year) && (
              <>
                {" "}or jump to a{" "}
                <Link href={`/calendar/${bs.year}/${bs.month}`}>specific BS month</Link>
              </>
            )}.
          </p>
        </section>

        <section className="mt-10 grid md:grid-cols-3 gap-3 text-sm">
          {isCalendarPreRendered(bs.year) && (
            <Link href={`/calendar/${bs.year}/${bs.month}`} className="p-4 rounded-xl border hover-elevate">
              <div className="text-xs text-muted-foreground">View month</div>
              <div className="font-medium mt-1">{BS_MONTHS_EN[bs.month - 1]} {bs.year} BS</div>
            </Link>
          )}
          {isCalendarPreRendered(bs.year) && (
            <Link href={`/nepali-calendar-${bs.year}`} className="p-4 rounded-xl border hover-elevate">
              <div className="text-xs text-muted-foreground">View year</div>
              <div className="font-medium mt-1">{bs.year} BS calendar</div>
            </Link>
          )}
          {isBsLandingPreRendered(bs.year) && (
            <Link href={`/bs-to-ad/${bs.year}/${bs.month}/${bs.day}`} className="p-4 rounded-xl border hover-elevate">
              <div className="text-xs text-muted-foreground">Reverse lookup</div>
              <div className="font-medium mt-1">{bs.formatted} → AD</div>
            </Link>
          )}
        </section>
      </div>
    </>
  );
}
