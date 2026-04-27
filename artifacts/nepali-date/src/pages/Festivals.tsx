import { useState } from "react";
import { Link } from "wouter";
import { Seo } from "@/components/Seo";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Button } from "@/components/ui/button";
import {
  BS_MONTHS_EN,
  BS_MONTHS_NP,
  bsToAd,
  getTodayInKathmandu,
  toNepaliNumeral,
} from "@/lib/converter";
import { festivalsForYear } from "@/data/festivals";
import { useListFestivals } from "@workspace/api-client-react";

const YEARS = [2082, 2083, 2084];

export default function Festivals() {
  const today = getTodayInKathmandu();
  const [year, setYear] = useState<number>(
    YEARS.includes(today.bs.year) ? today.bs.year : 2082,
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
        <header className="mt-6 mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <h1 className="font-serif text-4xl md:text-5xl font-bold tracking-tight">
              Nepali Festivals & Public Holidays
            </h1>
            <p className="text-muted-foreground mt-3 text-lg">
              Major religious, cultural and national holidays for {year} BS.
            </p>
          </div>
          <div className="flex gap-2">
            {YEARS.map((y) => (
              <Button
                key={y}
                size="sm"
                variant={y === year ? "default" : "outline"}
                onClick={() => setYear(y)}
              >
                {y} BS
              </Button>
            ))}
          </div>
        </header>

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
            above reflect the latest published schedule.
          </p>
        </section>
      </div>
    </>
  );
}
