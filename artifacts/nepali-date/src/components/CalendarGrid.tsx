import { Link } from "wouter";
import {
  getCalendarMonth,
  toNepaliNumeral,
  WEEKDAYS_EN,
  WEEKDAYS_NP,
  BS_MONTHS_EN,
  BS_MONTHS_NP,
} from "@/lib/converter";
import { festivalsForYear } from "@/data/festivals";
import { cn } from "@/lib/utils";

interface CalendarGridProps {
  year: number;
  month: number;
  showHeading?: boolean;
}

export function CalendarGrid({ year, month, showHeading = true }: CalendarGridProps) {
  const fests = festivalsForYear(year);
  const cal = getCalendarMonth(year, month, fests);

  // Build grid: empty leading cells based on startWeekday (0=Sun)
  const cells: (typeof cal.days[number] | null)[] = [];
  for (let i = 0; i < cal.startWeekday; i++) cells.push(null);
  cells.push(...cal.days);
  while (cells.length % 7 !== 0) cells.push(null);

  const today = new Date();
  const todayIso = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, "0")}-${String(today.getDate()).padStart(2, "0")}`;

  return (
    <div className="bg-card border rounded-2xl overflow-hidden">
      {showHeading && (
        <div className="px-5 py-4 border-b bg-muted/30 flex items-baseline justify-between">
          <h3 className="font-serif text-xl font-semibold">
            {BS_MONTHS_EN[month - 1]} {year}{" "}
            <span className="text-muted-foreground text-base font-normal">
              {BS_MONTHS_NP[month - 1]} {toNepaliNumeral(year)}
            </span>
          </h3>
          <span className="text-xs text-muted-foreground uppercase tracking-wider">
            {cal.daysInMonth} days
          </span>
        </div>
      )}
      <div className="grid grid-cols-7 text-center text-[11px] uppercase tracking-wider text-muted-foreground border-b bg-muted/10">
        {WEEKDAYS_EN.map((d, i) => (
          <div key={d} className="py-2">
            <div>{d.slice(0, 3)}</div>
            <div className="text-[10px] opacity-70">{WEEKDAYS_NP[i].slice(0, 3)}</div>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-7">
        {cells.map((cell, i) => {
          if (!cell) {
            return <div key={`e-${i}`} className="aspect-square border-t border-r last:border-r-0" />;
          }
          const isToday = cell.adIso === todayIso;
          const isSaturday = cell.weekday === 6;
          const isHoliday = cell.isHoliday;
          return (
            <Link
              key={cell.adIso}
              href={`/bs-to-ad/${cell.bsYear}/${cell.bsMonth}/${cell.bsDay}`}
              className={cn(
                "aspect-square border-t flex flex-col items-center justify-center p-1.5 transition-colors hover-elevate group relative",
                (i + 1) % 7 !== 0 && "border-r",
                isToday && "bg-primary/10 ring-1 ring-primary ring-inset",
                isHoliday && !isToday && "bg-destructive/5",
              )}
              title={cell.festival ?? cell.adIso}
            >
              <span
                className={cn(
                  "font-serif text-lg leading-none font-semibold",
                  (isSaturday || isHoliday) && "text-destructive",
                )}
              >
                {toNepaliNumeral(cell.bsDay)}
              </span>
              <span className="text-[10px] text-muted-foreground mt-0.5">
                {cell.bsDay}
              </span>
              {cell.festival && (
                <span className="absolute bottom-0.5 left-1 right-1 text-[9px] truncate text-destructive/80 font-medium">
                  {cell.festival}
                </span>
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
