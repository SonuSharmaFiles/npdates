import { useRoute, Link } from "wouter";
import { Seo } from "@/components/Seo";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { getFiscalYear } from "@/lib/converter";

export default function FiscalYearLanding() {
  const [, params] = useRoute("/fiscal-year/:year");
  const startYear = Number(params?.year);
  if (!startYear || startYear < 1970 || startYear > 2098) {
    return (
      <div className="container mx-auto px-4 py-16">
        <h1 className="font-serif text-3xl font-bold">Fiscal year not found</h1>
      </div>
    );
  }

  const fy = getFiscalYear(startYear);
  const shortEnd = String(startYear + 1).slice(-2);

  return (
    <>
      <Seo
        title={`Nepal Fiscal Year ${fy.label} — Start & End Dates (BS / AD)`}
        description={`Nepal fiscal year ${startYear}/${shortEnd}: starts ${fy.startBs.formatted} (${fy.startAd.formatted}), ends ${fy.endBs.formatted} (${fy.endAd.formatted}).`}
        path={`/fiscal-year/${startYear}`}
        breadcrumb={[
          { name: "Home", url: "/" },
          { name: "Fiscal Year", url: "/fiscal-year-converter" },
          { name: fy.label, url: `/fiscal-year/${startYear}` },
        ]}
      />
      <div className="container mx-auto px-4 py-10 max-w-4xl">
        <Breadcrumbs
          items={[
            { name: "Home", url: "/" },
            { name: "Fiscal Year", url: "/fiscal-year-converter" },
            { name: fy.label, url: `/fiscal-year/${startYear}` },
          ]}
        />
        <header className="mt-6 mb-10">
          <h1 className="font-serif text-5xl md:text-6xl font-bold tracking-tight text-primary">
            {fy.label}
          </h1>
          <p className="text-muted-foreground mt-3 text-lg">
            Nepal's fiscal year {startYear}/{shortEnd} — official start and end dates in both Bikram Sambat and Gregorian calendars.
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-card border rounded-2xl p-6">
            <p className="text-xs uppercase tracking-wider text-muted-foreground">
              FY starts
            </p>
            <div className="font-serif text-2xl font-semibold mt-2">
              {fy.startBs.formatted}
            </div>
            <div className="text-muted-foreground mt-1">
              {fy.startAd.formatted} ({fy.startAd.weekdayName})
            </div>
          </div>
          <div className="bg-card border rounded-2xl p-6">
            <p className="text-xs uppercase tracking-wider text-muted-foreground">
              FY ends
            </p>
            <div className="font-serif text-2xl font-semibold mt-2">
              {fy.endBs.formatted}
            </div>
            <div className="text-muted-foreground mt-1">
              {fy.endAd.formatted} ({fy.endAd.weekdayName})
            </div>
          </div>
        </div>

        <section className="mt-12 prose prose-neutral dark:prose-invert max-w-none">
          <h2>About fiscal year {fy.label}</h2>
          <p>
            In Nepal, the government's fiscal year (आर्थिक वर्ष) begins on{" "}
            <strong>1 Shrawan</strong> and runs through the last day of{" "}
            <strong>Ashadh</strong> the following Bikram Sambat year. Fiscal year{" "}
            <strong>{fy.label}</strong> therefore starts on {fy.startAd.formatted}
            and ends on {fy.endAd.formatted}. Annual budgets, tax filings, school
            sessions for many institutions, and most government planning cycles in
            Nepal are anchored to this window.
          </p>
          <h3>Related fiscal years</h3>
          <ul>
            <li>
              <Link href={`/fiscal-year/${startYear - 1}`}>
                Previous: FY {startYear - 1}/{String(startYear).slice(-2)}
              </Link>
            </li>
            <li>
              <Link href={`/fiscal-year/${startYear + 1}`}>
                Next: FY {startYear + 1}/{String(startYear + 2).slice(-2)}
              </Link>
            </li>
            <li>
              <Link href="/fiscal-year-converter">Find FY for any date</Link>
            </li>
          </ul>
        </section>
      </div>
    </>
  );
}
