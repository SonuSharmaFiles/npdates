"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { BsDateSelector } from "./BsDateSelector";
import { AdDateSelector } from "./AdDateSelector";
import { Button } from "@/components/ui/button";
import { bsToAd, adToBs, getFiscalYear, getTodayInKathmandu } from "@/lib/converter";

type Mode = "BS" | "AD";

export function FiscalYearConverterForm() {
  const today = getTodayInKathmandu();
  const [mode, setMode] = useState<Mode>("BS");
  const [bs, setBs] = useState({ year: today.bs.year, month: today.bs.month, day: today.bs.day });
  const [ad, setAd] = useState({ year: today.ad.year, month: today.ad.month, day: today.ad.day });

  const result = useMemo(() => {
    try {
      const bsDate = mode === "BS"
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
      <div className="flex gap-2 mb-6">
        <Button variant={mode === "BS" ? "default" : "outline"} size="sm" onClick={() => setMode("BS")}>BS Date</Button>
        <Button variant={mode === "AD" ? "default" : "outline"} size="sm" onClick={() => setMode("AD")}>AD Date</Button>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-card border rounded-2xl p-6">
          {mode === "BS" ? <BsDateSelector date={bs} onChange={setBs} /> : <AdDateSelector date={ad} onChange={setAd} />}
        </div>
        <div className="bg-muted/30 border rounded-2xl p-8">
          {result ? (
            <>
              <p className="text-xs uppercase tracking-wider text-muted-foreground">Fiscal year</p>
              <div className="font-serif text-5xl font-bold mt-2 text-primary">{result.fy.label}</div>
              <dl className="mt-6 space-y-3 text-sm">
                <div className="flex justify-between border-b pb-2">
                  <dt className="text-muted-foreground">Starts</dt>
                  <dd className="font-medium text-right">
                    {result.fy.startBs.formatted}
                    <div className="text-xs text-muted-foreground">{result.fy.startAd.formatted}</div>
                  </dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-muted-foreground">Ends</dt>
                  <dd className="font-medium text-right">
                    {result.fy.endBs.formatted}
                    <div className="text-xs text-muted-foreground">{result.fy.endAd.formatted}</div>
                  </dd>
                </div>
              </dl>
              <Link href={`/fiscal-year/${result.fyStart}`} className="inline-block mt-6 text-sm text-primary font-medium hover:underline">
                See full {result.fy.label} →
              </Link>
            </>
          ) : (
            <p className="text-muted-foreground">Enter a valid date.</p>
          )}
        </div>
      </div>
    </>
  );
}
