import { useRoute, Link, useLocation } from "wouter";
import { Seo } from "@/components/Seo";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CalendarGrid } from "@/components/CalendarGrid";
import {
  BS_MONTHS_EN,
  BS_MONTHS_NP,
  BS_MIN_YEAR,
  BS_MAX_YEAR,
  bsToAd,
  getDaysInBsMonth,
  toNepaliNumeral,
  getTodayInKathmandu,
} from "@/lib/converter";
import { festivalsForYear } from "@/data/festivals";

export default function CalendarMonth() {
  const [, params] = useRoute("/calendar/:year/:month");
  const [, navigate] = useLocation();
  const year = Number(params?.year);
  const month = Number(params?.month);
  if (
    !year ||
    !month ||
    year < BS_MIN_YEAR ||
    year > BS_MAX_YEAR ||
    month < 1 ||
    month > 12
  ) {
    return (
      <div className="container mx-auto px-4 py-16">
        <h1 className="font-serif text-3xl font-bold">Calendar not found</h1>
        <p className="text-muted-foreground mt-2">Use a valid year and month.</p>
      </div>
    );
  }

  const start = bsToAd(year, month, 1);
  const days = getDaysInBsMonth(year, month);
  const end = bsToAd(year, month, days);
  const fests = festivalsForYear(year).filter((f) => f.bsMonth === month);

  const prevMonth = month === 1 ? 12 : month - 1;
  const prevYear = month === 1 ? year - 1 : year;
  const nextMonth = month === 12 ? 1 : month + 1;
  const nextYear = month === 12 ? year + 1 : year;

  const today = getTodayInKathmandu();
  const isCurrentMonth = year === today.bs.year && month === today.bs.month;

  const goPrev = () => {
    if (month === 1 && year <= BS_MIN_YEAR) return;
    navigate(`/calendar/${prevYear}/${prevMonth}`);
  };
  const goNext = () => {
    if (month === 12 && year >= BS_MAX_YEAR) return;
    navigate(`/calendar/${nextYear}/${nextMonth}`);
  };
  const goToday = () => {
    navigate(`/calendar/${today.bs.year}/${today.bs.month}`);
  };

  return (
    <>
      <Seo
        title={`${BS_MONTHS_EN[month - 1]} ${year} BS Calendar — Festivals & AD Dates`}
        description={`${BS_MONTHS_EN[month - 1]} ${year} BS Nepali calendar: ${days} days, runs ${start.ad.formatted} – ${end.ad.formatted}, ${fests.length} festivals.`}
        path={`/calendar/${year}/${month}`}
        breadcrumb={[
          { name: "Home", url: "/" },
          { name: "Calendar", url: "/nepali-calendar" },
          { name: `${year} BS`, url: `/nepali-calendar-${year}` },
          {
            name: BS_MONTHS_EN[month - 1],
            url: `/calendar/${year}/${month}`,
          },
        ]}
      />
      <div className="container mx-auto px-4 py-10">
        <Breadcrumbs
          items={[
            { name: "Home", url: "/" },
            { name: "Calendar", url: "/nepali-calendar" },
            { name: `${year} BS`, url: `/nepali-calendar-${year}` },
            { name: BS_MONTHS_EN[month - 1], url: `/calendar/${year}/${month}` },
          ]}
        />
        <header className="mt-6 mb-8">
          <h1 className="font-serif text-4xl md:text-5xl font-bold tracking-tight">
            {BS_MONTHS_EN[month - 1]} {year} BS{" "}
            <span className="text-muted-foreground text-2xl md:text-3xl font-medium">
              {BS_MONTHS_NP[month - 1]} {toNepaliNumeral(year)}
            </span>
          </h1>
          <p className="text-muted-foreground mt-3 text-lg">
            {days} days · {start.ad.formatted} – {end.ad.formatted}
          </p>
        </header>

        <div className="grid lg:grid-cols-[1fr_320px] gap-8">
          <CalendarGrid
            year={year}
            month={month}
            showHeading={false}
            onPrev={goPrev}
            onNext={goNext}
            onToday={goToday}
            isCurrentMonth={isCurrentMonth}
          />
          <aside className="space-y-4">
            <div className="border rounded-2xl p-5 bg-card">
              <h2 className="font-semibold mb-3">Festivals & holidays</h2>
              {fests.length === 0 ? (
                <p className="text-sm text-muted-foreground">
                  No major festivals are listed for this month.
                </p>
              ) : (
                <ul className="space-y-3">
                  {fests.map((f) => (
                    <li key={`${f.bsDay}-${f.name}`} className="text-sm">
                      <Link
                        href={`/bs-to-ad/${year}/${month}/${f.bsDay}`}
                        className="font-medium hover:text-primary"
                      >
                        {f.name}
                      </Link>
                      <div className="text-muted-foreground text-xs">
                        {BS_MONTHS_EN[month - 1]} {f.bsDay} ·{" "}
                        {f.isPublicHoliday ? "Public holiday" : f.category}
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <div className="border rounded-2xl p-5 bg-card flex flex-col gap-2 text-sm">
              <Link
                href={`/calendar/${prevYear}/${prevMonth}`}
                className="hover:text-primary"
              >
                ← Previous month ({BS_MONTHS_EN[prevMonth - 1]} {prevYear})
              </Link>
              <Link
                href={`/calendar/${nextYear}/${nextMonth}`}
                className="hover:text-primary"
              >
                Next month ({BS_MONTHS_EN[nextMonth - 1]} {nextYear}) →
              </Link>
              <Link
                href={`/nepali-calendar-${year}`}
                className="hover:text-primary mt-2"
              >
                See full year {year} BS
              </Link>
            </div>
          </aside>
        </div>

        <section className="mt-14 max-w-3xl prose prose-neutral dark:prose-invert">
          <h2>{BS_MONTHS_EN[month - 1]} {year} BS at a glance</h2>
          <p>
            The Bikram Sambat month of <strong>{BS_MONTHS_EN[month - 1]}</strong>{" "}
            ({BS_MONTHS_NP[month - 1]}) in {year} BS contains <strong>{days} days</strong>
            . It begins on {start.ad.formatted} and ends on {end.ad.formatted}.
            Each Nepali day on the grid above maps to its Gregorian date — click any
            cell to view a detailed BS to AD conversion.
          </p>
        </section>
      </div>
    </>
  );
}
