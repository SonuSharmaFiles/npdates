import { Helmet } from "react-helmet-async";
import { getTodayInKathmandu, getFiscalYear } from "@/lib/converter";
import { festivalsForYear } from "@/data/festivals";
import { useState, useEffect } from "react";
import { CalendarDays, Clock, MapPin, Sunrise } from "lucide-react";

export default function Today() {
  const [time, setTime] = useState<string>("");
  const today = getTodayInKathmandu();
  const fiscalYear = getFiscalYear(today.bs.year);
  
  // Find upcoming festival
  const festivals = festivalsForYear(today.bs.year);
  const upcoming = festivals.find(f => 
    f.bsMonth > today.bs.month || (f.bsMonth === today.bs.month && f.bsDay >= today.bs.day)
  );

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const utcMs = now.getTime() + now.getTimezoneOffset() * 60_000;
      const kathmandu = new Date(utcMs + 5.75 * 60 * 60_000);
      setTime(kathmandu.toLocaleTimeString('en-US', { hour12: true, hour: 'numeric', minute: '2-digit', second: '2-digit' }));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <Helmet>
        <title>Today's Nepali Date | npdates</title>
        <meta name="description" content={`Today's Nepali date is ${today.bs.formattedNepali} (${today.bs.formatted}). View the current Bikram Sambat date, time, and upcoming festivals in Nepal.`} />
        <link rel="canonical" href="https://npdates.app/today-nepali-date" />
      </Helmet>

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
                <div className="text-xl text-muted-foreground font-medium">{today.bs.weekdayNameNepali} / {today.bs.weekdayName}</div>
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
            <div className="bg-card border rounded-2xl p-6 shadow-sm hover-elevate">
              <div className="flex items-center gap-3 text-muted-foreground mb-4">
                <Clock className="w-5 h-5" />
                <h3 className="font-medium">Current Time</h3>
              </div>
              <div className="text-3xl font-bold font-mono tracking-tight">
                {time || "Loading..."}
              </div>
            </div>

            <div className="bg-card border rounded-2xl p-6 shadow-sm hover-elevate">
              <div className="flex items-center gap-3 text-muted-foreground mb-4">
                <CalendarDays className="w-5 h-5" />
                <h3 className="font-medium">Fiscal Year</h3>
              </div>
              <div className="text-2xl font-bold font-serif mb-1">
                {fiscalYear.label}
              </div>
              <div className="text-sm text-muted-foreground">
                Ends {fiscalYear.endBs.formatted}
              </div>
            </div>

            {upcoming && (
              <div className="bg-primary border-primary border text-primary-foreground rounded-2xl p-6 shadow-sm hover-elevate">
                <h3 className="font-medium opacity-90 mb-4 uppercase tracking-wider text-xs">Upcoming Festival</h3>
                <div className="text-2xl font-bold font-serif mb-2">
                  {upcoming.nameNepali}
                </div>
                <div className="text-lg opacity-90 mb-1">
                  {upcoming.name}
                </div>
                <div className="text-sm opacity-80 mt-4 bg-black/20 inline-block px-3 py-1 rounded-full">
                  {upcoming.bsDay} {BS_MONTHS_EN[upcoming.bsMonth - 1]}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

// Need to import BS_MONTHS_EN since I used it above
import { BS_MONTHS_EN } from "@/lib/converter";
