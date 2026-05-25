import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd, faqLd } from "@/components/seo/JsonLd";
import { bsToAd, BS_MONTHS_EN, getDaysInBsMonth, BS_MIN_YEAR, BS_MAX_YEAR } from "@/lib/converter";
import { BS_LANDING_YEARS, isAdLandingPreRendered } from "@/lib/pre-render-years";

const BS_PRE_RENDER_YEARS = BS_LANDING_YEARS;

type Params = { year: string; month: string; day: string };

export const dynamicParams = false;

export function generateStaticParams(): Params[] {
  const out: Params[] = [];
  for (const y of BS_PRE_RENDER_YEARS) {
    for (let m = 1; m <= 12; m++) {
      const days = getDaysInBsMonth(y, m);
      for (let d = 1; d <= days; d++) {
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
  if (!year || year < BS_MIN_YEAR || year > BS_MAX_YEAR) return null;
  if (!month || month < 1 || month > 12) return null;
  if (!day || day < 1) return null;
  try {
    const max = getDaysInBsMonth(year, month);
    if (day > max) return null;
  } catch { return null; }
  return { year, month, day };
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const p = await params;
  const parsed = parseParams(p);
  if (!parsed) {
    return buildMetadata({ title: "Invalid date", description: "Invalid BS date.", path: `/bs-to-ad/${p.year}/${p.month}/${p.day}`, noIndex: true });
  }
  const result = bsToAd(parsed.year, parsed.month, parsed.day);
  return buildMetadata({
    title: `Convert ${result.bs.formatted} to AD — ${result.ad.formatted}`,
    description: `${result.bs.formatted} converts to ${result.ad.formatted} (${result.ad.weekdayName}) in the Gregorian calendar.`,
    path: `/bs-to-ad/${parsed.year}/${parsed.month}/${parsed.day}`,
  });
}

export default async function BsToAdLanding({ params }: { params: Promise<Params> }) {
  const p = await params;
  const parsed = parseParams(p);
  if (!parsed) notFound();
  const { year, month, day } = parsed;
  const { bs, ad } = bsToAd(year, month, day);

  const monthDays = getDaysInBsMonth(year, month);
  const prevDay = day === 1 ? null : { y: year, m: month, d: day - 1 };
  const nextDay = day === monthDays ? null : { y: year, m: month, d: day + 1 };

  return (
    <>
      <JsonLd
        data={faqLd([
          { question: `What is ${bs.formatted} in AD?`, answer: `${bs.formatted} is equivalent to ${ad.formatted} in the Gregorian calendar. It is a ${ad.weekdayName}.` },
          { question: `What day of the week is ${bs.formatted}?`, answer: `${bs.formatted} falls on a ${bs.weekdayName} (${bs.weekdayNameNepali}).` },
        ])}
      />
      <div className="container mx-auto px-4 py-10 max-w-4xl">
        <Breadcrumbs
          items={[
            { name: "Home", path: "/" },
            { name: "BS to AD", path: "/" },
            { name: bs.formatted, path: `/bs-to-ad/${year}/${month}/${day}` },
          ]}
        />
        <h1 className="font-serif text-3xl md:text-4xl font-bold mt-6 mb-2">
          Convert {bs.formatted} to AD
        </h1>
        <p className="text-muted-foreground mb-8">{bs.formattedNepali} → {ad.formatted}</p>

        <article className="bg-card border rounded-2xl p-8 md:p-10">
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div>
              <p className="text-xs uppercase tracking-wider text-muted-foreground">Bikram Sambat</p>
              <div className="font-serif text-3xl md:text-4xl font-bold mt-1">{bs.formatted}</div>
              <div className="text-muted-foreground mt-1">{bs.formattedNepali} · {bs.weekdayNameNepali}</div>
            </div>
            <div className="md:border-l md:pl-6">
              <p className="text-xs uppercase tracking-wider text-muted-foreground">Gregorian (AD)</p>
              <div className="font-serif text-3xl md:text-4xl font-bold mt-1 text-primary">{ad.formatted}</div>
              <div className="text-muted-foreground mt-1">{ad.weekdayName} · {ad.iso}</div>
            </div>
          </div>

        </article>

        <nav className="mt-6 grid grid-cols-2 gap-3 text-sm">
          {prevDay && (
            <Link href={`/bs-to-ad/${prevDay.y}/${prevDay.m}/${prevDay.d}`} className="flex items-center gap-2 p-3 rounded-lg border hover-elevate">
              <ChevronLeft className="w-4 h-4" />
              <div>
                <div className="text-xs text-muted-foreground">Previous day</div>
                <div className="font-medium">{BS_MONTHS_EN[prevDay.m - 1]} {prevDay.d}, {prevDay.y}</div>
              </div>
            </Link>
          )}
          {nextDay && (
            <Link href={`/bs-to-ad/${nextDay.y}/${nextDay.m}/${nextDay.d}`} className="flex items-center gap-2 p-3 rounded-lg border hover-elevate justify-end text-right ml-auto">
              <div>
                <div className="text-xs text-muted-foreground">Next day</div>
                <div className="font-medium">{BS_MONTHS_EN[nextDay.m - 1]} {nextDay.d}, {nextDay.y}</div>
              </div>
              <ChevronRight className="w-4 h-4" />
            </Link>
          )}
        </nav>

        <section className="mt-12 prose prose-neutral dark:prose-invert max-w-none">
          <h2>About this conversion</h2>
          <p>
            <strong>{bs.formatted}</strong> ({bs.formattedNepali}) in the Bikram Sambat calendar
            corresponds to <strong>{ad.formatted}</strong> in the Gregorian calendar — a {ad.weekdayName.toLowerCase()}. The
            Bikram Sambat calendar runs approximately 56 years and 8 months ahead of the Gregorian
            calendar, with months that vary in length between 29 and 32 days based on solar position.
          </p>
          <h2>Frequently asked questions</h2>
          <h3>What is {bs.formatted} in AD?</h3>
          <p>{bs.formatted} is equivalent to <strong>{ad.formatted}</strong> in the Gregorian (AD) calendar.</p>
          <h3>What day of the week is {bs.formatted}?</h3>
          <p>{bs.formatted} falls on a <strong>{bs.weekdayName}</strong> ({bs.weekdayNameNepali}).</p>
          <h3>How do I convert other BS dates?</h3>
          <p>
            Use the <Link href="/">BS to AD converter</Link> for any other date.
          </p>
        </section>

        {isAdLandingPreRendered(ad.year) && (
          <section className="mt-10 grid md:grid-cols-1 gap-3 text-sm">
            <Link href={`/ad-to-bs/${ad.year}/${ad.month}/${ad.day}`} className="p-4 rounded-xl border hover-elevate">
              <div className="text-xs text-muted-foreground">Reverse lookup</div>
              <div className="font-medium mt-1">{ad.formatted} → BS</div>
            </Link>
          </section>
        )}
      </div>
    </>
  );
}
