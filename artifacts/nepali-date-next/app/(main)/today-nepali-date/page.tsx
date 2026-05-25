import type { Metadata } from "next";
import { MapPin, Sunrise } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { JsonLd, breadcrumbLd } from "@/components/seo/JsonLd";
import { getTodayInKathmandu } from "@/lib/converter";
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

  return (
    <div className="container mx-auto px-4 py-12 max-w-5xl">
      <JsonLd
        data={breadcrumbLd([
          { name: "Home", path: "/" },
          { name: "Today's Nepali Date", path: "/today-nepali-date" },
        ])}
      />
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
        </div>
      </div>
    </div>
  );
}
