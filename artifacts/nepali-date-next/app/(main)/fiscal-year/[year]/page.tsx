import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { getFiscalYear, BS_MIN_YEAR } from "@/lib/converter";

const FY_MIN = 2075;
const FY_MAX = 2089; // bounded by BS_MAX_YEAR=2090, since FY references startYear+1

type Params = { year: string };

export const dynamicParams = false;

export function generateStaticParams(): Params[] {
  const out: Params[] = [];
  for (let y = FY_MIN; y <= FY_MAX; y++) out.push({ year: String(y) });
  return out;
}

function parseYear(yStr: string): number | null {
  const startYear = Number(yStr);
  if (!startYear || startYear < BS_MIN_YEAR || startYear > FY_MAX) return null;
  return startYear;
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { year } = await params;
  const startYear = parseYear(year);
  if (!startYear) {
    return buildMetadata({ title: "Fiscal year not found", description: "Invalid fiscal year.", path: `/fiscal-year/${year}`, noIndex: true });
  }
  const fy = getFiscalYear(startYear);
  const shortEnd = String(startYear + 1).slice(-2);
  return buildMetadata({
    title: `Nepal Fiscal Year ${fy.label} — Start & End Dates`,
    description: `Nepal fiscal year ${startYear}/${shortEnd}: starts ${fy.startBs.formatted} (${fy.startAd.formatted}), ends ${fy.endBs.formatted} (${fy.endAd.formatted}).`,
    path: `/fiscal-year/${startYear}`,
  });
}

export default async function FiscalYearLandingPage({ params }: { params: Promise<Params> }) {
  const { year } = await params;
  const startYear = parseYear(year);
  if (!startYear) notFound();

  const fy = getFiscalYear(startYear);
  const shortEnd = String(startYear + 1).slice(-2);

  return (
    <div className="container mx-auto px-4 py-10 max-w-4xl">
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Fiscal Year", path: "/fiscal-year-converter" },
          { name: fy.label, path: `/fiscal-year/${startYear}` },
        ]}
      />
      <header className="mt-6 mb-10">
        <h1 className="font-serif text-5xl md:text-6xl font-bold tracking-tight text-primary">
          {fy.label}
        </h1>
        <p className="text-muted-foreground mt-3 text-lg">
          Nepal's fiscal year {startYear}/{shortEnd} — official start and end dates in both
          Bikram Sambat and Gregorian calendars.
        </p>
      </header>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-card border rounded-2xl p-6">
          <p className="text-xs uppercase tracking-wider text-muted-foreground">FY starts</p>
          <div className="font-serif text-2xl font-semibold mt-2">{fy.startBs.formatted}</div>
          <div className="text-muted-foreground mt-1">
            {fy.startAd.formatted} ({fy.startAd.weekdayName})
          </div>
        </div>
        <div className="bg-card border rounded-2xl p-6">
          <p className="text-xs uppercase tracking-wider text-muted-foreground">FY ends</p>
          <div className="font-serif text-2xl font-semibold mt-2">{fy.endBs.formatted}</div>
          <div className="text-muted-foreground mt-1">
            {fy.endAd.formatted} ({fy.endAd.weekdayName})
          </div>
        </div>
      </div>

      <section className="mt-12 prose prose-neutral dark:prose-invert max-w-none">
        <h2>About fiscal year {fy.label}</h2>
        <p>
          In Nepal, the government's fiscal year (आर्थिक वर्ष) begins on <strong>1 Shrawan</strong>{" "}
          and runs through the last day of <strong>Ashadh</strong> the following Bikram Sambat year.
          Fiscal year <strong>{fy.label}</strong> therefore starts on {fy.startAd.formatted} and ends
          on {fy.endAd.formatted}. Annual budgets, tax filings, school sessions for many institutions,
          and most government planning cycles in Nepal are anchored to this window.
        </p>
        <h3>Related fiscal years</h3>
        <ul>
          {startYear - 1 >= FY_MIN && (
            <li><Link href={`/fiscal-year/${startYear - 1}`}>Previous: FY {startYear - 1}/{String(startYear).slice(-2)}</Link></li>
          )}
          {startYear + 1 <= FY_MAX && (
            <li><Link href={`/fiscal-year/${startYear + 1}`}>Next: FY {startYear + 1}/{String(startYear + 2).slice(-2)}</Link></li>
          )}
          <li><Link href="/fiscal-year-converter">Find FY for any date</Link></li>
        </ul>
      </section>
    </div>
  );
}
