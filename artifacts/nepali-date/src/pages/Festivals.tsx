import { useState } from "react";
import { Link } from "wouter";
import { ChevronLeft, ChevronRight, CalendarDays } from "lucide-react";
import { Seo } from "@/components/Seo";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Button } from "@/components/ui/button";
import {
  BS_MONTHS_EN,
  BS_MONTHS_NP,
  BS_MIN_YEAR,
  BS_MAX_YEAR,
  bsToAd,
  getTodayInKathmandu,
  toNepaliNumeral,
} from "@/lib/converter";
import { festivalsForYear, FESTIVALS } from "@/data/festivals";
import { useListFestivals } from "@workspace/api-client-react";
import { cn } from "@/lib/utils";

/** Get the list of BS years that have festival data */
function getAvailableYears(): number[] {
  const yearsSet = new Set<number>();
  FESTIVALS.forEach((f) => yearsSet.add(f.bsYear));
  return Array.from(yearsSet).sort((a, b) => a - b);
}

export default function Festivals() {
  const today = getTodayInKathmandu();
  const availableYears = getAvailableYears();
  const [year, setYear] = useState<number>(
    availableYears.includes(today.bs.year) ? today.bs.year : availableYears[0] ?? 2082,
  );

  // Use API hook (falls back to local data if API errors)
  const apiQuery = useListFestivals(year);
  const apiData = apiQuery.data;
  const localFests = festivalsForYear(year);
  const fests = (apiData && apiData.length > 0
    ? apiData.map((f) => ({
        bsYear: f.bsYear,
        bsMonth: f.bsMonth,
        bsDay: f.bsDay,
        name: f.name,
        nameNepali: f.nameNepali,
        category: f.category,
        isPublicHoliday: f.isPublicHoliday,
      }))
    : localFests);

  // Group by month
  const grouped = new Map<number, typeof fests>();
  for (const f of fests) {
    const arr = grouped.get(f.bsMonth) ?? [];
    arr.push(f);
    grouped.set(f.bsMonth, arr);
  }

  const publicHolidayCount = fests.filter((f) => f.isPublicHoliday).length;
  const isCurrentYear = year === today.bs.year;

  const goPrev = () => {
    const idx = availableYears.indexOf(year);
    if (idx > 0) setYear(availableYears[idx - 1]);
  };
  const goNext = () => {
    const idx = availableYears.indexOf(year);
    if (idx < availableYears.length - 1) setYear(availableYears[idx + 1]);
  };
  const goCurrentYear = () => {
    if (availableYears.includes(today.bs.year)) setYear(today.bs.year);
  };

  const hasPrev = availableYears.indexOf(year) > 0;
  const hasNext = availableYears.indexOf(year) < availableYears.length - 1;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `Nepal festivals ${year} BS`,
    itemListElement: fests.map((f, i) => {
      const ad = bsToAd(f.bsYear, f.bsMonth, f.bsDay);
      return {
        "@type": "ListItem",
        position: i + 1,
        name: f.name,
        item: {
          "@type": "Event",
          name: f.name,
          startDate: ad.ad.iso,
          eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
          location: { "@type": "Place", name: "Nepal" },
        },
      };
    }),
  };

  return (
    <>
      <Seo
        title={`Nepali Festivals & Public Holidays ${year} BS — Full List`}
        description={`Complete list of major Nepali festivals and public holidays for ${year} BS, including Dashain, Tihar, Holi, Maha Shivaratri and more — with BS and AD dates.`}
        path="/festivals"
        breadcrumb={[
          { name: "Home", url: "/" },
          { name: "Festivals", url: "/festivals" },
        ]}
        jsonLd={jsonLd}
      />
      <div className="container mx-auto px-4 py-10">
        <Breadcrumbs
          items={[
            { name: "Home", url: "/" },
            { name: "Festivals", url: "/festivals" },
          ]}
        />
        <header className="mt-6 mb-8">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h1 className="font-serif text-4xl md:text-5xl font-bold tracking-tight">
                Nepali Festivals & Public Holidays
              </h1>
              <p className="text-muted-foreground mt-3 text-lg">
                Major religious, cultural and national holidays for{" "}
                <strong>{year} BS</strong> · {fests.length} festivals ·{" "}
                {publicHolidayCount} public holidays
              </p>
            </div>
          </div>

          {/* ── Year navigation bar ── */}
          <div className="mt-6 bg-card border-2 border-border rounded-2xl overflow-hidden shadow-sm">
            <div className="relative overflow-hidden">
              {/* Gradient background */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary to-primary/90" />
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(255,255,255,0.15)_0%,transparent_60%)]" />
              <div className="relative px-4 md:px-6 py-3 flex items-center justify-between">
                {/* Left: year display */}
                <div className="flex items-baseline gap-2 min-w-0">
                  <span className="font-serif text-xl md:text-2xl font-extrabold text-white tracking-tight leading-none">
                    {toNepaliNumeral(year)} BS
                  </span>
                  <span className="text-white/60 text-sm font-medium hidden sm:inline">
                    ({year})
                  </span>
                </div>

                {/* Right: navigation */}
                <div className="flex items-center gap-1.5">
                  {/* Previous year */}
                  <button
                    onClick={goPrev}
                    disabled={!hasPrev}
                    className={cn(
                      "group flex items-center justify-center w-8 h-8 md:w-9 md:h-9 rounded-lg transition-all duration-150 border",
                      hasPrev
                        ? "bg-white/15 hover:bg-white/25 active:bg-white/30 backdrop-blur-sm border-white/20 cursor-pointer"
                        : "bg-white/5 border-white/10 cursor-default",
                    )}
                    aria-label="Previous year"
                  >
                    <ChevronLeft className={cn("w-4 h-4 md:w-5 md:h-5 transition-transform", hasPrev ? "text-white group-hover:scale-110" : "text-white/30")} />
                  </button>

                  {/* Year selector dropdown */}
                  <select
                    value={year}
                    onChange={(e) => setYear(Number(e.target.value))}
                    className="h-8 md:h-9 px-2 md:px-3 rounded-lg bg-white/15 text-white text-sm md:text-base font-bold border border-white/20 backdrop-blur-sm appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-white/40 transition-all hover:bg-white/25"
                    style={{ colorScheme: "dark" }}
                  >
                    {availableYears.map((y) => (
                      <option key={y} value={y} className="text-foreground bg-background">
                        {y} BS
                      </option>
                    ))}
                  </select>

                  {/* This year button */}
                  <button
                    onClick={goCurrentYear}
                    disabled={isCurrentYear}
                    className={cn(
                      "flex items-center gap-1.5 h-8 md:h-9 px-3 md:px-4 rounded-lg text-xs md:text-sm font-bold tracking-wide transition-all duration-150 border",
                      isCurrentYear
                        ? "bg-white/10 text-white/40 border-white/10 cursor-default"
                        : "bg-white text-primary hover:bg-white/90 active:scale-95 border-white/80 shadow-md hover:shadow-lg cursor-pointer",
                    )}
                    aria-label="Go to current year"
                  >
                    <CalendarDays className="w-3.5 h-3.5" />
                    <span>This Year</span>
                  </button>

                  {/* Next year */}
                  <button
                    onClick={goNext}
                    disabled={!hasNext}
                    className={cn(
                      "group flex items-center justify-center w-8 h-8 md:w-9 md:h-9 rounded-lg transition-all duration-150 border",
                      hasNext
                        ? "bg-white/15 hover:bg-white/25 active:bg-white/30 backdrop-blur-sm border-white/20 cursor-pointer"
                        : "bg-white/5 border-white/10 cursor-default",
                    )}
                    aria-label="Next year"
                  >
                    <ChevronRight className={cn("w-4 h-4 md:w-5 md:h-5 transition-transform", hasNext ? "text-white group-hover:scale-110" : "text-white/30")} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* ── Festival listings by month ── */}
        {fests.length === 0 ? (
          <div className="bg-card border rounded-2xl p-10 text-center">
            <p className="text-muted-foreground text-lg">
              No festivals data available for {year} BS yet.
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              Festival data is currently available for years:{" "}
              {availableYears.join(", ")} BS.
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
                      <span className="text-muted-foreground text-base font-normal">
                        {BS_MONTHS_NP[m - 1]}
                      </span>
                    </h2>
                    <span className="text-xs text-muted-foreground">
                      {list.length} {list.length === 1 ? "event" : "events"}
                    </span>
                  </header>
                  <ul className="divide-y">
                    {list
                      .slice()
                      .sort((a, b) => a.bsDay - b.bsDay)
                      .map((f) => {
                        const ad = bsToAd(f.bsYear, f.bsMonth, f.bsDay);
                        return (
                          <li key={`${f.bsDay}-${f.name}`}>
                            <Link
                              href={`/bs-to-ad/${f.bsYear}/${f.bsMonth}/${f.bsDay}`}
                              className="grid grid-cols-[60px_1fr_auto] items-center gap-4 px-5 py-3 hover-elevate"
                            >
                              <div className="font-serif text-2xl font-bold text-primary">
                                {toNepaliNumeral(f.bsDay)}
                              </div>
                              <div>
                                <div className="font-medium">{f.name}</div>
                                <div className="text-xs text-muted-foreground">
                                  {f.nameNepali} · {f.category}
                                </div>
                              </div>
                              <div className="text-right text-sm">
                                <div>{ad.ad.formatted}</div>
                                {f.isPublicHoliday && (
                                  <div className="text-xs text-destructive font-medium">
                                    Public holiday
                                  </div>
                                )}
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

        <section className="mt-14 max-w-3xl prose prose-neutral dark:prose-invert">
          <h2>About Nepal's festival calendar</h2>
          <p>
            Nepal observes a rich mix of Hindu, Buddhist, and national festivals.
            Major celebrations include <strong>Dashain</strong> (the longest and most
            important Hindu festival), <strong>Tihar</strong> (the festival of lights
            spanning five days), <strong>Holi</strong> (celebrated separately in the
            hills and Terai), <strong>Maha Shivaratri</strong>, and{" "}
            <strong>Buddha Jayanti</strong>. National observances include Republic
            Day, Constitution Day, Loktantra Diwas and Prajatantra Diwas.
          </p>
          <p>
            Festival dates are determined by lunar position and are confirmed each
            year by the Nepal Calendar Determination Committee. The dates listed
            above reflect the latest published schedule. All dates on this page
            have been verified against official Nepal government gazette data,
            Hamro Patro, and other authoritative Nepali calendar sources.
          </p>
        </section>
      </div>
    </>
  );
}
