"use client";

import { useMemo, useState } from "react";
import { BsDateSelector } from "./BsDateSelector";
import { AdDateSelector } from "./AdDateSelector";
import { Button } from "@/components/ui/button";
import { bsToAd, dateDifferenceDays, getTodayInKathmandu } from "@/lib/converter";

type Mode = "BS" | "AD";

export function DateDifferenceForm() {
  const today = getTodayInKathmandu();
  const [mode, setMode] = useState<Mode>("BS");
  const [from, setFrom] = useState({ year: today.bs.year, month: 1, day: 1 });
  const [to, setTo] = useState({ year: today.bs.year, month: today.bs.month, day: today.bs.day });
  const [adFrom, setAdFrom] = useState({ year: today.ad.year, month: 1, day: 1 });
  const [adTo, setAdTo] = useState({ year: today.ad.year, month: today.ad.month, day: today.ad.day });

  const result = useMemo(() => {
    try {
      const fromIso = mode === "BS"
        ? bsToAd(from.year, from.month, from.day).ad.iso
        : `${adFrom.year}-${String(adFrom.month).padStart(2, "0")}-${String(adFrom.day).padStart(2, "0")}`;
      const toIso = mode === "BS"
        ? bsToAd(to.year, to.month, to.day).ad.iso
        : `${adTo.year}-${String(adTo.month).padStart(2, "0")}-${String(adTo.day).padStart(2, "0")}`;
      const days = dateDifferenceDays(fromIso, toIso);
      const abs = Math.abs(days);
      const years = Math.floor(abs / 365.2425);
      const months = Math.floor((abs % 365.2425) / 30.4368);
      const weeks = Math.floor(abs / 7);
      return { days, abs, years, months, weeks, fromIso, toIso };
    } catch {
      return null;
    }
  }, [mode, from, to, adFrom, adTo]);

  return (
    <>
      <div className="flex gap-2 mb-6">
        <Button variant={mode === "BS" ? "default" : "outline"} size="sm" onClick={() => setMode("BS")}>Bikram Sambat</Button>
        <Button variant={mode === "AD" ? "default" : "outline"} size="sm" onClick={() => setMode("AD")}>Gregorian (AD)</Button>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-card border rounded-2xl p-6">
          <h2 className="font-semibold mb-4">From</h2>
          {mode === "BS" ? <BsDateSelector date={from} onChange={setFrom} /> : <AdDateSelector date={adFrom} onChange={setAdFrom} />}
        </div>
        <div className="bg-card border rounded-2xl p-6">
          <h2 className="font-semibold mb-4">To</h2>
          {mode === "BS" ? <BsDateSelector date={to} onChange={setTo} /> : <AdDateSelector date={adTo} onChange={setAdTo} />}
        </div>
      </div>

      <div className="mt-8 bg-muted/30 border rounded-2xl p-8 text-center">
        {result ? (
          <>
            <p className="text-xs uppercase tracking-wider text-muted-foreground">Difference</p>
            <div className="font-serif text-5xl md:text-6xl font-bold mt-2">
              {result.abs.toLocaleString()}{" "}
              <span className="text-muted-foreground text-2xl font-normal">days</span>
            </div>
            <p className="text-muted-foreground mt-2">
              ≈ {result.years} years, {result.months} months · {result.weeks.toLocaleString()} weeks
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              {result.days < 0 ? "From-date is after to-date." : ""}
              {result.days === 0 ? "Both dates are the same." : ""}
            </p>
            <p className="text-xs text-muted-foreground mt-4">{result.fromIso} → {result.toIso}</p>
          </>
        ) : (
          <p className="text-muted-foreground">Enter valid dates.</p>
        )}
      </div>
    </>
  );
}
