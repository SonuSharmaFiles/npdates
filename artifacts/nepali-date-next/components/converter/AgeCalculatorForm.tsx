"use client";

import { useMemo, useState } from "react";
import { BsDateSelector } from "./BsDateSelector";
import { AdDateSelector } from "./AdDateSelector";
import { Button } from "@/components/ui/button";
import { ageFromAd, bsToAd, getTodayInKathmandu, toNepaliNumeral } from "@/lib/converter";

type Mode = "BS" | "AD";

export function AgeCalculatorForm() {
  const today = getTodayInKathmandu();
  const [mode, setMode] = useState<Mode>("BS");
  const [bs, setBs] = useState({ year: 2050, month: 1, day: 15 });
  const [ad, setAd] = useState({ year: today.ad.year - 25, month: today.ad.month, day: today.ad.day });

  const result = useMemo(() => {
    try {
      let birthIso: string;
      let birthFormatted: string;
      if (mode === "BS") {
        const conv = bsToAd(bs.year, bs.month, bs.day);
        birthIso = conv.ad.iso;
        birthFormatted = `${conv.bs.formatted} (${conv.ad.formatted})`;
      } else {
        birthIso = `${ad.year}-${String(ad.month).padStart(2, "0")}-${String(ad.day).padStart(2, "0")}`;
        birthFormatted = new Date(birthIso + "T00:00:00Z").toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
      }
      const age = ageFromAd(birthIso);
      const totalWeeks = Math.floor(age.totalDays / 7);
      const totalHours = age.totalDays * 24;
      const nextBirthday = new Date(birthIso + "T00:00:00Z");
      nextBirthday.setUTCFullYear(nextBirthday.getUTCFullYear() + age.years + 1);
      const todayUtc = new Date(new Date().toISOString().slice(0, 10) + "T00:00:00Z");
      const daysToBirthday = Math.ceil((nextBirthday.getTime() - todayUtc.getTime()) / 86400000);
      return { age, birthFormatted, totalWeeks, totalHours, daysToBirthday };
    } catch {
      return null;
    }
  }, [mode, bs, ad]);

  return (
    <div className="grid md:grid-cols-2 gap-8">
      <div className="bg-card border rounded-2xl p-6">
        <div className="flex gap-2 mb-6">
          <Button variant={mode === "BS" ? "default" : "outline"} size="sm" onClick={() => setMode("BS")}>BS Date of Birth</Button>
          <Button variant={mode === "AD" ? "default" : "outline"} size="sm" onClick={() => setMode("AD")}>AD Date of Birth</Button>
        </div>
        {mode === "BS" ? <BsDateSelector date={bs} onChange={setBs} /> : <AdDateSelector date={ad} onChange={setAd} />}
      </div>

      <div className="bg-muted/30 border rounded-2xl p-8 flex flex-col justify-center">
        {result ? (
          <>
            <p className="text-xs uppercase tracking-wider text-muted-foreground">Your age today</p>
            <div className="font-serif text-5xl md:text-6xl font-bold mt-2">
              {result.age.years}
              <span className="text-muted-foreground text-2xl font-normal"> years</span>
            </div>
            <div className="text-muted-foreground mt-2">{result.age.months} months, {result.age.days} days</div>
            <div className="text-sm text-muted-foreground mt-1">({toNepaliNumeral(result.age.years)} वर्ष)</div>

            <dl className="mt-6 grid grid-cols-2 gap-3 text-sm">
              <div className="bg-card border rounded-lg p-3">
                <dt className="text-muted-foreground text-xs">Total days</dt>
                <dd className="font-semibold text-base">{result.age.totalDays.toLocaleString()}</dd>
              </div>
              <div className="bg-card border rounded-lg p-3">
                <dt className="text-muted-foreground text-xs">Total weeks</dt>
                <dd className="font-semibold text-base">{result.totalWeeks.toLocaleString()}</dd>
              </div>
              <div className="bg-card border rounded-lg p-3">
                <dt className="text-muted-foreground text-xs">Total hours</dt>
                <dd className="font-semibold text-base">{result.totalHours.toLocaleString()}</dd>
              </div>
              <div className="bg-card border rounded-lg p-3">
                <dt className="text-muted-foreground text-xs">Next birthday</dt>
                <dd className="font-semibold text-base">in {result.daysToBirthday} days</dd>
              </div>
            </dl>
            <p className="text-xs text-muted-foreground mt-4">Born {result.birthFormatted}</p>
          </>
        ) : (
          <p className="text-muted-foreground">Enter a valid date.</p>
        )}
      </div>
    </div>
  );
}
