"use client";

import { useState } from "react";
import Link from "next/link";
import { CalendarGrid } from "./CalendarGrid";
import {
  BS_MONTHS_EN,
  BS_MAX_YEAR,
  BS_MIN_YEAR,
  getTodayInKathmandu,
} from "@/lib/converter";
import { festivalsForYear } from "@/data/festivals";

export function NepaliCalendarBrowser() {
  const today = getTodayInKathmandu();
  const [year, setYear] = useState<number>(today.bs.year);
  const [month, setMonth] = useState<number>(today.bs.month);

  const goPrev = () => {
    if (month === 1) {
      if (year > BS_MIN_YEAR) { setYear(year - 1); setMonth(12); }
    } else setMonth(month - 1);
  };
  const goNext = () => {
    if (month === 12) {
      if (year < BS_MAX_YEAR) { setYear(year + 1); setMonth(1); }
    } else setMonth(month + 1);
  };
  const goToday = () => { setYear(today.bs.year); setMonth(today.bs.month); };

  const isCurrentMonth = year === today.bs.year && month === today.bs.month;
  const fests = festivalsForYear(year).filter((f) => f.bsMonth === month);

  return (
    <>
      <div className="mt-6 mb-8 flex flex-wrap items-end justify-between gap-4">
        <div className="flex items-center gap-2">
          <select
            value={month}
            onChange={(e) => setMonth(Number(e.target.value))}
            className="h-9 rounded-lg border bg-background px-3 text-sm font-medium focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
          >
            {BS_MONTHS_EN.map((m, i) => (
              <option key={m} value={i + 1}>{m}</option>
            ))}
          </select>
          <select
            value={year}
            onChange={(e) => setYear(Number(e.target.value))}
            className="h-9 rounded-lg border bg-background px-3 text-sm font-medium focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
          >
            {Array.from({ length: BS_MAX_YEAR - BS_MIN_YEAR + 1 }, (_, i) => BS_MIN_YEAR + i).map((y) => (
              <option key={y} value={y}>{y} BS</option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid lg:grid-cols-[1fr_300px] gap-8">
        <CalendarGrid
          year={year}
          month={month}
          onPrev={goPrev}
          onNext={goNext}
          onToday={goToday}
          isCurrentMonth={isCurrentMonth}
        />
        <aside className="space-y-4">
          <div className="border rounded-2xl p-5 bg-card">
            <h2 className="font-semibold mb-3">Festivals this month</h2>
            {fests.length === 0 ? (
              <p className="text-sm text-muted-foreground">No major festivals listed for this month.</p>
            ) : (
              <ul className="space-y-2 text-sm">
                {fests.map((f) => (
                  <li key={`${f.bsDay}-${f.name}`} className="flex justify-between">
                    <span className="font-medium">{f.name}</span>
                    <span className="text-muted-foreground">{f.bsDay}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className="border rounded-2xl p-5 bg-card">
            <h2 className="font-semibold mb-3">Jump to year</h2>
            <ul className="grid grid-cols-3 gap-2 text-sm">
              {[2080, 2081, 2082, 2083, 2084, 2085].map((y) => (
                <li key={y}>
                  <Link href={`/nepali-calendar-${y}`} className="block text-center py-1.5 rounded border hover-elevate">
                    {y}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </>
  );
}
