"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight, CalendarDays } from "lucide-react";
import {
  BS_MONTHS_EN,
  BS_MONTHS_NP,
  bsToAd,
  getTodayInKathmandu,
  toNepaliNumeral,
} from "@/lib/converter";
import { festivalsForYear, FESTIVALS } from "@/data/festivals";
import { cn } from "@/lib/utils";

function getAvailableYears(): number[] {
  const set = new Set<number>();
  FESTIVALS.forEach((f) => set.add(f.bsYear));
  return Array.from(set).sort((a, b) => a - b);
}

export function FestivalsBrowser() {
  const today = getTodayInKathmandu();
  const availableYears = getAvailableYears();
  const [year, setYear] = useState<number>(
    availableYears.includes(today.bs.year) ? today.bs.year : availableYears[0] ?? 2082,
  );

  const fests = festivalsForYear(year);
  const grouped = new Map<number, typeof fests>();
  for (const f of fests) {
    const arr = grouped.get(f.bsMonth) ?? [];
    arr.push(f);
    grouped.set(f.bsMonth, arr);
  }

  const publicHolidayCount = fests.filter((f) => f.isPublicHoliday).length;
  const isCurrentYear = year === today.bs.year;
  const idx = availableYears.indexOf(year);
  const hasPrev = idx > 0;
  const hasNext = idx < availableYears.length - 1;

  return (
    <>
      <div className="mb-4">
        <p className="text-muted-foreground text-lg">
          Major religious, cultural and national holidays for{" "}
          <strong>{year} BS</strong> · {fests.length} festivals ·{" "}
          {publicHolidayCount} public holidays
        </p>
      </div>

      <div className="mt-6 mb-8 bg-card border-2 border-border rounded-2xl overflow-hidden shadow-sm">
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary to-primary/90" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(255,255,255,0.15)_0%,transparent_60%)]" />
          <div className="relative px-4 md:px-6 py-3 flex items-center justify-between">
            <div className="flex items-baseline gap-2 min-w-0">
              <span className="font-serif text-xl md:text-2xl font-extrabold text-white tracking-tight leading-none">
                {toNepaliNumeral(year)} BS
              </span>
              <span className="text-white/60 text-sm font-medium hidden sm:inline">({year})</span>
            </div>
            <div className="flex items-center gap-1.5">
              <button
                onClick={() => hasPrev && setYear(availableYears[idx - 1])}
                disabled={!hasPrev}
                className={cn("group flex items-center justify-center w-8 h-8 md:w-9 md:h-9 rounded-lg transition-all duration-150 border", hasPrev ? "bg-white/15 hover:bg-white/25 backdrop-blur-sm border-white/20 cursor-pointer" : "bg-white/5 border-white/10 cursor-default")}
                aria-label="Previous year"
              >
                <ChevronLeft className={cn("w-4 h-4 md:w-5 md:h-5", hasPrev ? "text-white group-hover:scale-110" : "text-white/30")} />
              </button>
              <select
                value={year}
                onChange={(e) => setYear(Number(e.target.value))}
                className="h-8 md:h-9 px-2 md:px-3 rounded-lg bg-white/15 text-white text-sm md:text-base font-bold border border-white/20 backdrop-blur-sm appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-white/40 transition-all hover:bg-white/25"
                style={{ colorScheme: "dark" }}
              >
                {availableYears.map((y) => (
                  <option key={y} value={y} className="text-foreground bg-background">{y} BS</option>
                ))}
              </select>
              <button
                onClick={() => availableYears.includes(today.bs.year) && setYear(today.bs.year)}
                disabled={isCurrentYear}
                className={cn("flex items-center gap-1.5 h-8 md:h-9 px-3 md:px-4 rounded-lg text-xs md:text-sm font-bold tracking-wide transition-all duration-150 border", isCurrentYear ? "bg-white/10 text-white/40 border-white/10 cursor-default" : "bg-white text-primary hover:bg-white/90 active:scale-95 border-white/80 shadow-md")}
                aria-label="Go to current year"
              >
                <CalendarDays className="w-3.5 h-3.5" />
                <span>This Year</span>
              </button>
              <button
                onClick={() => hasNext && setYear(availableYears[idx + 1])}
                disabled={!hasNext}
                className={cn("group flex items-center justify-center w-8 h-8 md:w-9 md:h-9 rounded-lg transition-all duration-150 border", hasNext ? "bg-white/15 hover:bg-white/25 backdrop-blur-sm border-white/20 cursor-pointer" : "bg-white/5 border-white/10 cursor-default")}
                aria-label="Next year"
              >
                <ChevronRight className={cn("w-4 h-4 md:w-5 md:h-5", hasNext ? "text-white group-hover:scale-110" : "text-white/30")} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {fests.length === 0 ? (
        <div className="bg-card border rounded-2xl p-10 text-center">
          <p className="text-muted-foreground text-lg">No festivals data available for {year} BS yet.</p>
          <p className="text-sm text-muted-foreground mt-2">
            Festival data is currently available for years: {availableYears.join(", ")} BS.
          </p>
        </div>
      ) : (
        <div className="space-y-8">
          {Array.from({ length: 12 }, (_, i) => i + 1).map((m) => {
            const list = grouped.get(m);
            if (!list || list.length === 0) return null;
            return (
              <section key={m} className="bg-card border rounded-2xl overflow-hidden">
                <header className="px-5 py-3 border-b bg-muted/30 flex items-baseline justify-between">
                  <h2 className="font-serif text-xl font-semibold">
                    {BS_MONTHS_EN[m - 1]}{" "}
                    <span className="text-muted-foreground text-base font-normal">{BS_MONTHS_NP[m - 1]}</span>
                  </h2>
                  <span className="text-xs text-muted-foreground">
                    {list.length} {list.length === 1 ? "event" : "events"}
                  </span>
                </header>
                <ul className="divide-y">
                  {list.slice().sort((a, b) => a.bsDay - b.bsDay).map((f) => {
                    const ad = bsToAd(f.bsYear, f.bsMonth, f.bsDay);
                    return (
                      <li key={`${f.bsDay}-${f.name}`}>
                        <Link
                          href={`/bs-to-ad/${f.bsYear}/${f.bsMonth}/${f.bsDay}`}
                          className="grid grid-cols-[60px_1fr_auto] items-center gap-4 px-5 py-3 hover-elevate"
                        >
                          <div className="font-serif text-2xl font-bold text-primary">{toNepaliNumeral(f.bsDay)}</div>
                          <div>
                            <div className="font-medium">{f.name}</div>
                            <div className="text-xs text-muted-foreground">{f.nameNepali} · {f.category}</div>
                          </div>
                          <div className="text-right text-sm">
                            <div>{ad.ad.formatted}</div>
                            {f.isPublicHoliday && <div className="text-xs text-destructive font-medium">Public holiday</div>}
                          </div>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </section>
            );
          })}
        </div>
      )}
    </>
  );
}
