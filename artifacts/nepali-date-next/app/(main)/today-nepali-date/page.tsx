import type { Metadata } from "next";
import { CalendarDays, MapPin, Sunrise } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { getTodayInKathmandu, getFiscalYear, BS_MONTHS_EN } from "@/lib/converter";
import { festivalsForYear } from "@/data/festivals";
import { KathmanduClock } from "@/components/today/KathmanduClock";

export const metadata: Metadata = buildMetadata({
  title: "Today's Nepali Date",
  description:
    "What is today's Nepali date in Bikram Sambat (BS)? Get the current Nepali date, weekday and equivalent Gregorian (AD) date — Kathmandu time (UTC+5:45).",
  path: "/today-nepali-date",
  keywords: ["today Nepali date", "aja ko miti", "current BS date", "Nepali calendar today"],
});

export default function TodayPage() {
  const today = getTodayInKathmandu();

  // Nepali fiscal year starts on 1 Shrawan (month 4); months 1-3 belong to the previous FY
  const fyStart = today.bs.month >= 4 ? today.bs.year : today.bs.year - 1;
  const fiscalYear = getFiscalYear(fyStart);

  // Find the next upcoming festival in the current BS year
  const festivals = festivalsForYear(today.bs.year);
  const upcoming = festivals.find(
    (f) =>
      f.bsMonth > today.bs.month ||
      (f.bsMonth === today.bs.month && f.bsDay >= today.bs.day),
  );

  return (
    <div className="container mx-auto px-4 py-12 max-w-5xl">
      <h1 className="font-serif text-3xl font-bold mb-8">Today in Nepal</h1>

      <div className="grid md:grid-cols-5 gap-6">
        <div className="md:col-span-3 bg-card border rounded-2xl shadow-sm p-8 md:p-12 flex flex-col justify-center relative overflow-hidden">
          <div className="absolute top-0 right-0 p-6 opacity-5 text-primary">
            <Sunrise className="w-48 h-48" />
          </div>

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <MapPin className="w-4 h-4" />
              Asia/Kathmandu Time
            </div>

            <div className="space-y-2 mb-8">
              <div className="text-xl text-muted-foreground font-medium">
                {today.bs.weekdayNameNepali} / {today.bs.weekdayName}
              </div>
              <div className="font-serif text-5xl md:text-7xl font-bold text-foreground tracking-tight">
                {today.bs.day} {today.bs.monthName}
              </div>
              <div className="text-3xl md:text-4xl text-muted-foreground font-serif">
                {today.bs.year} BS
              </div>
            </div>

            <div className="pt-8 border-t border-border/50">
              <div className="text-lg text-muted-foreground">Gregorian Equivalent</div>
              <div className="text-2xl font-medium mt-1">{today.ad.formatted}</div>
            </div>
          </div>
        </div>

        <div className="md:col-span-2 space-y-6">
          <KathmanduClock />

          <div className="bg-card border rounded-2xl p-6 shadow-sm hover-elevate">
            <div className="flex items-center gap-3 text-muted-foreground mb-4">
              <CalendarDays className="w-5 h-5" />
              <h3 className="font-medium">Fiscal Year</h3>
            </div>
            <div className="text-2xl font-bold font-serif mb-1">{fiscalYear.label}</div>
            <div className="text-sm text-muted-foreground">
              Ends {fiscalYear.endBs.formatted}
            </div>
          </div>

          {upcoming && (
            <div className="bg-primary border-primary border text-primary-foreground rounded-2xl p-6 shadow-sm hover-elevate">
              <h3 className="font-medium opacity-90 mb-4 uppercase tracking-wider text-xs">
                Upcoming Festival
              </h3>
              <div className="text-2xl font-bold font-serif mb-2">{upcoming.nameNepali}</div>
              <div className="text-lg opacity-90 mb-1">{upcoming.name}</div>
              <div className="text-sm opacity-80 mt-4 bg-black/20 inline-block px-3 py-1 rounded-full">
                {upcoming.bsDay} {BS_MONTHS_EN[upcoming.bsMonth - 1]}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
