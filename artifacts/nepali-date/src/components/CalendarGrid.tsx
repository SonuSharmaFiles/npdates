import { Link } from "wouter";
import { ChevronLeft, ChevronRight, CalendarDays } from "lucide-react";
import {
  getCalendarMonth,
  toNepaliNumeral,
  WEEKDAYS_EN,
  WEEKDAYS_NP,
  BS_MONTHS_EN,
  BS_MONTHS_NP,
  bsToAd,
  AD_MONTHS_EN,
} from "@/lib/converter";
import { festivalsForYear } from "@/data/festivals";
import { cn } from "@/lib/utils";

interface CalendarGridProps {
  year: number;
  month: number;
  showHeading?: boolean;
  /** Navigation callbacks — when provided, renders prev/next/today controls */
  onPrev?: () => void;
  onNext?: () => void;
  onToday?: () => void;
  /** Whether the currently displayed month is the current month */
  isCurrentMonth?: boolean;
}

/** Short Nepali weekday labels for the header */
const WEEKDAYS_NP_SHORT = ["आइत", "सोम", "मंगल", "बुध", "बिही", "शुक्र", "शनि"];

export function CalendarGrid({
  year,
  month,
  showHeading = true,
  onPrev,
  onNext,
  onToday,
  isCurrentMonth,
}: CalendarGridProps) {
  const fests = festivalsForYear(year);
  const cal = getCalendarMonth(year, month, fests);

  // Compute the AD month range for the sub-heading
  const firstDay = bsToAd(year, month, 1);
  const lastDay = bsToAd(year, month, cal.daysInMonth);
  const adRangeLabel = firstDay.ad.monthName === lastDay.ad.monthName
    ? `${firstDay.ad.monthName.toUpperCase()} ${firstDay.ad.year}`
    : `${firstDay.ad.monthName.substring(0, 3).toUpperCase()}/${lastDay.ad.monthName.substring(0, 3).toUpperCase()} ${lastDay.ad.year}`;

  const hasNav = onPrev || onNext || onToday;

  // Build grid: empty leading cells based on startWeekday (0=Sun)
  const cells: (typeof cal.days[number] | null)[] = [];
  for (let i = 0; i < cal.startWeekday; i++) cells.push(null);
  cells.push(...cal.days);
  while (cells.length % 7 !== 0) cells.push(null);

  // Use UTC date so it matches the UTC-based adIso values from bsToAd()
  const todayIso = new Date().toISOString().slice(0, 10);

  return (
    <div className="nepali-patro bg-card rounded-2xl overflow-hidden border-2 border-border shadow-lg">
      {/* ── Month header: Nepali month name + AD equivalent ── */}
      {showHeading && (
        <div className="patro-month-header relative overflow-hidden">
          {/* Gradient background */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary to-primary/90" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(255,255,255,0.15)_0%,transparent_60%)]" />
          <div className="relative px-4 md:px-5 py-3.5 md:py-4 flex items-center justify-between">
            {/* Left: Month name */}
            <div className="flex items-baseline gap-3 min-w-0">
              <h3 className="font-serif text-xl sm:text-2xl md:text-3xl font-extrabold text-white tracking-tight leading-none truncate">
                {BS_MONTHS_NP[month - 1]} {toNepaliNumeral(year)}
              </h3>
            </div>

            {/* Right: AD label + navigation */}
            <div className="flex items-center gap-2 md:gap-3 shrink-0">
              {/* AD range info */}
              <div className="text-right hidden sm:block mr-1">
                <span className="text-white/90 font-semibold text-xs md:text-sm tracking-wider">
                  {adRangeLabel}
                </span>
                <div className="text-white/60 text-[10px] md:text-xs mt-0.5">
                  {cal.daysInMonth} days
                </div>
              </div>

              {/* Navigation controls */}
              {hasNav && (
                <div className="flex items-center gap-1">
                  {/* Previous month */}
                  {onPrev && (
                    <button
                      onClick={onPrev}
                      className="patro-nav-btn group flex items-center justify-center w-8 h-8 md:w-9 md:h-9 rounded-lg bg-white/15 hover:bg-white/25 active:bg-white/30 backdrop-blur-sm transition-all duration-150 border border-white/20"
                      aria-label="Previous month"
                    >
                      <ChevronLeft className="w-4 h-4 md:w-5 md:h-5 text-white group-hover:scale-110 transition-transform" />
                    </button>
                  )}

                  {/* Today button */}
                  {onToday && (
                    <button
                      onClick={onToday}
                      disabled={isCurrentMonth}
                      className={cn(
                        "patro-nav-today flex items-center gap-1.5 h-8 md:h-9 px-3 md:px-4 rounded-lg text-xs md:text-sm font-bold tracking-wide transition-all duration-150 border",
                        isCurrentMonth
                          ? "bg-white/10 text-white/40 border-white/10 cursor-default"
                          : "bg-white text-primary hover:bg-white/90 active:scale-95 border-white/80 shadow-md hover:shadow-lg",
                      )}
                      aria-label="Go to current month"
                    >
                      <CalendarDays className="w-3.5 h-3.5" />
                      <span>Today</span>
                    </button>
                  )}

                  {/* Next month */}
                  {onNext && (
                    <button
                      onClick={onNext}
                      className="patro-nav-btn group flex items-center justify-center w-8 h-8 md:w-9 md:h-9 rounded-lg bg-white/15 hover:bg-white/25 active:bg-white/30 backdrop-blur-sm transition-all duration-150 border border-white/20"
                      aria-label="Next month"
                    >
                      <ChevronRight className="w-4 h-4 md:w-5 md:h-5 text-white group-hover:scale-110 transition-transform" />
                    </button>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* ── Compact nav bar when heading is hidden but navigation is provided ── */}
      {!showHeading && hasNav && (
        <div className="patro-month-header relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary to-primary/90" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(255,255,255,0.15)_0%,transparent_60%)]" />
          <div className="relative px-4 md:px-5 py-2.5 flex items-center justify-between">
            <div className="flex items-baseline gap-2 min-w-0">
              <span className="font-serif text-lg md:text-xl font-bold text-white tracking-tight leading-none truncate">
                {BS_MONTHS_NP[month - 1]} {toNepaliNumeral(year)}
              </span>
              <span className="text-white/70 text-xs md:text-sm font-medium hidden sm:inline">
                {adRangeLabel}
              </span>
            </div>
            <div className="flex items-center gap-1">
              {onPrev && (
                <button
                  onClick={onPrev}
                  className="patro-nav-btn group flex items-center justify-center w-8 h-8 rounded-lg bg-white/15 hover:bg-white/25 active:bg-white/30 backdrop-blur-sm transition-all duration-150 border border-white/20"
                  aria-label="Previous month"
                >
                  <ChevronLeft className="w-4 h-4 text-white group-hover:scale-110 transition-transform" />
                </button>
              )}
              {onToday && (
                <button
                  onClick={onToday}
                  disabled={isCurrentMonth}
                  className={cn(
                    "patro-nav-today flex items-center gap-1.5 h-8 px-3 rounded-lg text-xs font-bold tracking-wide transition-all duration-150 border",
                    isCurrentMonth
                      ? "bg-white/10 text-white/40 border-white/10 cursor-default"
                      : "bg-white text-primary hover:bg-white/90 active:scale-95 border-white/80 shadow-md hover:shadow-lg",
                  )}
                  aria-label="Go to current month"
                >
                  <CalendarDays className="w-3.5 h-3.5" />
                  <span>Today</span>
                </button>
              )}
              {onNext && (
                <button
                  onClick={onNext}
                  className="patro-nav-btn group flex items-center justify-center w-8 h-8 rounded-lg bg-white/15 hover:bg-white/25 active:bg-white/30 backdrop-blur-sm transition-all duration-150 border border-white/20"
                  aria-label="Next month"
                >
                  <ChevronRight className="w-4 h-4 text-white group-hover:scale-110 transition-transform" />
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      {/* ── Weekday header row ── */}
      <div className="grid grid-cols-7 patro-weekday-header">
        {WEEKDAYS_EN.map((d, i) => {
          const isSat = i === 6;
          return (
            <div
              key={d}
              className={cn(
                "py-2.5 px-1 text-center border-b-2 border-border/50",
                i < 6 && "border-r border-border/30",
                isSat
                  ? "bg-destructive text-white"
                  : "bg-primary/10 dark:bg-primary/20 text-foreground",
              )}
            >
              <div className={cn(
                "font-bold text-[11px] md:text-xs uppercase tracking-wider",
                isSat ? "text-white" : "text-primary dark:text-primary",
              )}>
                {WEEKDAYS_NP_SHORT[i]}
              </div>
              <div className={cn(
                "text-[9px] md:text-[10px] uppercase tracking-widest mt-0.5 font-semibold",
                isSat ? "text-white/80" : "text-muted-foreground",
              )}>
                {d.substring(0, 3).toUpperCase()}
              </div>
            </div>
          );
        })}
      </div>

      {/* ── Calendar grid ── */}
      <div className="grid grid-cols-7">
        {cells.map((cell, i) => {
          const colIndex = i % 7;
          const isSaturdayCol = colIndex === 6;

          if (!cell) {
            return (
              <div
                key={`e-${i}`}
                className={cn(
                  "patro-cell-empty min-h-[72px] md:min-h-[88px] border-b border-border/40",
                  colIndex < 6 && "border-r border-border/40",
                  isSaturdayCol && "bg-destructive/[0.03] dark:bg-destructive/[0.06]",
                )}
              />
            );
          }

          const isToday = cell.adIso === todayIso;
          const isSaturday = cell.weekday === 6;
          const isHoliday = cell.isHoliday;

          return (
            <Link
              key={cell.adIso}
              href={`/bs-to-ad/${cell.bsYear}/${cell.bsMonth}/${cell.bsDay}`}
              className={cn(
                "patro-cell group relative flex flex-col items-center justify-start pt-2 pb-1 px-1 min-h-[72px] md:min-h-[88px]",
                "border-b border-border/40 transition-all duration-150",
                colIndex < 6 && "border-r border-border/40",
                // Saturday column tint
                isSaturdayCol && !isToday && "bg-destructive/[0.03] dark:bg-destructive/[0.06]",
                // Holiday background
                isHoliday && !isToday && !isSaturdayCol && "bg-destructive/[0.04] dark:bg-destructive/[0.07]",
                // Today highlight
                isToday && "bg-primary/10 dark:bg-primary/15 ring-2 ring-primary ring-inset z-10",
                // Hover
                "hover:bg-primary/[0.06] dark:hover:bg-primary/[0.12] hover:shadow-md",
              )}
              title={cell.festival ?? cell.adIso}
            >
              {/* Festival / event label at top */}
              {cell.festival && (
                <span className="absolute top-0.5 left-0.5 right-0.5 text-[8px] md:text-[9px] leading-tight truncate text-destructive font-bold text-center pointer-events-none">
                  {cell.festival}
                </span>
              )}

              {/* BS day — large bold Devanagari numeral */}
              <span
                className={cn(
                  "font-serif font-black text-2xl md:text-3xl lg:text-4xl leading-none",
                  cell.festival ? "mt-2.5" : "mt-1",
                  isSaturday || isHoliday
                    ? "text-destructive dark:text-red-400"
                    : "text-foreground",
                  isToday && "text-primary dark:text-primary",
                )}
              >
                {toNepaliNumeral(cell.bsDay)}
              </span>

              {/* AD day — bold, bottom-right corner */}
              <span
                className={cn(
                  "absolute bottom-1 right-1.5 text-[10px] md:text-xs font-bold leading-none",
                  isSaturday || isHoliday
                    ? "text-destructive/60 dark:text-red-400/60"
                    : "text-muted-foreground",
                  isToday && "text-primary/70",
                )}
              >
                {cell.adIso.split("-")[2].replace(/^0/, "")}
              </span>

              {/* Today badge */}
              {isToday && (
                <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 text-[7px] md:text-[8px] font-bold text-primary uppercase tracking-widest">
                  Today
                </span>
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
