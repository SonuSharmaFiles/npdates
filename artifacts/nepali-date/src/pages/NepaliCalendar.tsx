import { useState } from "react";
import { Link } from "wouter";
import { Seo } from "@/components/Seo";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CalendarGrid } from "@/components/CalendarGrid";
import {
  BS_MONTHS_EN,
  BS_MAX_YEAR,
  BS_MIN_YEAR,
  getTodayInKathmandu,
} from "@/lib/converter";
import { festivalsForYear } from "@/data/festivals";

export default function NepaliCalendar() {
  const today = getTodayInKathmandu();
  const [year, setYear] = useState<number>(today.bs.year);
  const [month, setMonth] = useState<number>(today.bs.month);

  const goPrev = () => {
    if (month === 1) {
      if (year > BS_MIN_YEAR) {
        setYear(year - 1);
        setMonth(12);
      }
    } else setMonth(month - 1);
  };
  const goNext = () => {
    if (month === 12) {
      if (year < BS_MAX_YEAR) {
        setYear(year + 1);
        setMonth(1);
      }
    } else setMonth(month + 1);
  };
  const goToday = () => {
    setYear(today.bs.year);
    setMonth(today.bs.month);
  };

  const isCurrentMonth = year === today.bs.year && month === today.bs.month;
  const fests = festivalsForYear(year).filter((f) => f.bsMonth === month);

  return (
    <>
      <Seo
        title={`Nepali Calendar ${year} — ${BS_MONTHS_EN[month - 1]} | npdates`}
        description={`Browse the Bikram Sambat ${BS_MONTHS_EN[month - 1]} ${year} calendar with AD mappings, festivals, and Nepal public holidays.`}
        path="/nepali-calendar"
        breadcrumb={[
          { name: "Home", url: "/" },
          { name: "Nepali Calendar", url: "/nepali-calendar" },
        ]}
      />
      <div className="container mx-auto px-4 py-10">
        <Breadcrumbs
          items={[
            { name: "Home", url: "/" },
            { name: "Nepali Calendar", url: "/nepali-calendar" },
          ]}
        />
        <header className="mt-6 mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <h1 className="font-serif text-3xl md:text-4xl font-bold">
              Nepali Calendar
            </h1>
            <p className="text-muted-foreground mt-2">
              The official Bikram Sambat calendar with festivals and Gregorian (AD) mappings.
            </p>
          </div>
          {/* Month/year selectors for quick jumps */}
          <div className="flex items-center gap-2">
            <select
              value={month}
              onChange={(e) => setMonth(Number(e.target.value))}
              className="h-9 rounded-lg border bg-background px-3 text-sm font-medium focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
            >
              {BS_MONTHS_EN.map((m, i) => (
                <option key={m} value={i + 1}>
                  {m}
                </option>
              ))}
            </select>
            <select
              value={year}
              onChange={(e) => setYear(Number(e.target.value))}
              className="h-9 rounded-lg border bg-background px-3 text-sm font-medium focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
            >
              {Array.from({ length: BS_MAX_YEAR - BS_MIN_YEAR + 1 }, (_, i) => BS_MIN_YEAR + i).map(
                (y) => (
                  <option key={y} value={y}>
                    {y} BS
                  </option>
                ),
              )}
            </select>
          </div>
        </header>

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
                <p className="text-sm text-muted-foreground">
                  No major festivals listed for this month.
                </p>
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
                    <Link
                      href={`/nepali-calendar-${y}`}
                      className="block text-center py-1.5 rounded border hover-elevate"
                    >
                      {y}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>

        <section className="mt-14 max-w-3xl prose prose-neutral dark:prose-invert">
          <h2>About the Nepali (Bikram Sambat) calendar</h2>
          <p>
            The Bikram Sambat (BS) calendar is Nepal's official solar calendar, currently
            running about 56 years and 8 months ahead of the Gregorian (AD) calendar. It
            consists of twelve months that vary in length between 29 and 32 days, with the
            new year falling on the first day of <strong>Baisakh</strong> in mid-April.
          </p>
          <p>
            On this page you can browse any Nepali month from {BS_MIN_YEAR} BS to{" "}
            {BS_MAX_YEAR} BS, see the corresponding Gregorian dates, and identify
            festivals and public holidays. Click any date for a deeper conversion view.
          </p>
        </section>
      </div>
    </>
  );
}
