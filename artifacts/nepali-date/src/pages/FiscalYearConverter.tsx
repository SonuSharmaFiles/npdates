import { useMemo, useState } from "react";
import { Link } from "wouter";
import { Seo } from "@/components/Seo";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { BsDateSelector } from "@/components/BsDateSelector";
import { AdDateSelector } from "@/components/AdDateSelector";
import { Button } from "@/components/ui/button";
import {
  bsToAd,
  adToBs,
  getFiscalYear,
  getTodayInKathmandu,
  BS_MONTHS_EN,
} from "@/lib/converter";

type Mode = "BS" | "AD";

export default function FiscalYearConverter() {
  const today = getTodayInKathmandu();
  const [mode, setMode] = useState<Mode>("BS");
  const [bs, setBs] = useState({ year: today.bs.year, month: today.bs.month, day: today.bs.day });
  const [ad, setAd] = useState({ year: today.ad.year, month: today.ad.month, day: today.ad.day });

  const result = useMemo(() => {
    try {
      const bsDate =
        mode === "BS"
          ? bsToAd(bs.year, bs.month, bs.day).bs
          : adToBs(ad.year, ad.month, ad.day).bs;
      const fyStart = bsDate.month >= 4 ? bsDate.year : bsDate.year - 1;
      const fy = getFiscalYear(fyStart);
      return { fy, bsDate, fyStart };
    } catch {
      return null;
    }
  }, [mode, bs, ad]);

  return (
    <>
      <Seo
        title="Nepali Fiscal Year Converter — Find FY for Any Date | npdates"
        description="Look up Nepal's fiscal year (FY) for any Bikram Sambat or Gregorian date. The Nepali fiscal year runs from 1 Shrawan to end of Ashadh."
        path="/fiscal-year-converter"
        breadcrumb={[
          { name: "Home", url: "/" },
          { name: "Fiscal Year Converter", url: "/fiscal-year-converter" },
        ]}
      />
      <div className="container mx-auto px-4 py-10 max-w-5xl">
        <Breadcrumbs
          items={[
            { name: "Home", url: "/" },
            { name: "Fiscal Year Converter", url: "/fiscal-year-converter" },
          ]}
        />
        <header className="mt-6 mb-8">
          <h1 className="font-serif text-4xl md:text-5xl font-bold tracking-tight">
            Nepali Fiscal Year Converter
          </h1>
          <p className="text-muted-foreground mt-3 text-lg">
            Find the Nepal fiscal year (FY) for any date. The Nepali FY runs{" "}
            <strong>1 Shrawan – end of Ashadh</strong> (roughly mid-July to mid-July).
          </p>
        </header>

        <div className="flex gap-2 mb-6">
          <Button
            variant={mode === "BS" ? "default" : "outline"}
            size="sm"
            onClick={() => setMode("BS")}
          >
            BS Date
          </Button>
          <Button
            variant={mode === "AD" ? "default" : "outline"}
            size="sm"
            onClick={() => setMode("AD")}
          >
            AD Date
          </Button>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-card border rounded-2xl p-6">
            {mode === "BS" ? (
              <BsDateSelector date={bs} onChange={setBs} />
            ) : (
              <AdDateSelector date={ad} onChange={setAd} />
            )}
          </div>
          <div className="bg-muted/30 border rounded-2xl p-8">
            {result ? (
              <>
                <p className="text-xs uppercase tracking-wider text-muted-foreground">
                  Fiscal year
                </p>
                <div className="font-serif text-5xl font-bold mt-2 text-primary">
                  {result.fy.label}
                </div>
                <dl className="mt-6 space-y-3 text-sm">
                  <div className="flex justify-between border-b pb-2">
                    <dt className="text-muted-foreground">Starts</dt>
                    <dd className="font-medium text-right">
                      {result.fy.startBs.formatted}
                      <div className="text-xs text-muted-foreground">
                        {result.fy.startAd.formatted}
                      </div>
                    </dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-muted-foreground">Ends</dt>
                    <dd className="font-medium text-right">
                      {result.fy.endBs.formatted}
                      <div className="text-xs text-muted-foreground">
                        {result.fy.endAd.formatted}
                      </div>
                    </dd>
                  </div>
                </dl>
                <Link
                  href={`/fiscal-year/${result.fyStart}`}
                  className="inline-block mt-6 text-sm text-primary font-medium hover:underline"
                >
                  See full {result.fy.label} →
                </Link>
              </>
            ) : (
              <p className="text-muted-foreground">Enter a valid date.</p>
            )}
          </div>
        </div>

        <section className="mt-14 max-w-3xl prose prose-neutral dark:prose-invert">
          <h2>About the Nepali fiscal year</h2>
          <p>
            Nepal's government and businesses operate on a fiscal year that begins on{" "}
            <strong>1 Shrawan</strong> ({BS_MONTHS_EN[3]}) and ends on the last day of{" "}
            <strong>Ashadh</strong> ({BS_MONTHS_EN[2]}) the following Bikram Sambat
            year. In the Gregorian calendar, this corresponds roughly to mid-July
            through mid-July, making it about three months ahead of the Indian fiscal
            year and six months ahead of the standard calendar year.
          </p>
          <h2>Common fiscal years</h2>
          <ul>
            <li><Link href="/fiscal-year/2080">FY 2080/81</Link></li>
            <li><Link href="/fiscal-year/2081">FY 2081/82</Link></li>
            <li><Link href="/fiscal-year/2082">FY 2082/83</Link></li>
            <li><Link href="/fiscal-year/2083">FY 2083/84</Link></li>
            <li><Link href="/fiscal-year/2084">FY 2084/85</Link></li>
          </ul>
        </section>
      </div>
    </>
  );
}
