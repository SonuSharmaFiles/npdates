import { useMemo, useState } from "react";
import { Seo } from "@/components/Seo";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { BsDateSelector } from "@/components/BsDateSelector";
import { AdDateSelector } from "@/components/AdDateSelector";
import { Button } from "@/components/ui/button";
import { bsToAd, dateDifferenceDays, getTodayInKathmandu } from "@/lib/converter";

type Mode = "BS" | "AD";

export default function DateDifference() {
  const today = getTodayInKathmandu();
  const [mode, setMode] = useState<Mode>("BS");
  const [from, setFrom] = useState({ year: today.bs.year, month: 1, day: 1 });
  const [to, setTo] = useState({ year: today.bs.year, month: today.bs.month, day: today.bs.day });
  const [adFrom, setAdFrom] = useState({ year: today.ad.year, month: 1, day: 1 });
  const [adTo, setAdTo] = useState({ year: today.ad.year, month: today.ad.month, day: today.ad.day });

  const result = useMemo(() => {
    try {
      const fromIso =
        mode === "BS"
          ? bsToAd(from.year, from.month, from.day).ad.iso
          : `${adFrom.year}-${String(adFrom.month).padStart(2, "0")}-${String(adFrom.day).padStart(2, "0")}`;
      const toIso =
        mode === "BS"
          ? bsToAd(to.year, to.month, to.day).ad.iso
          : `${adTo.year}-${String(adTo.month).padStart(2, "0")}-${String(adTo.day).padStart(2, "0")}`;
      const days = dateDifferenceDays(fromIso, toIso);
      const abs = Math.abs(days);
      const years = Math.floor(abs / 365.2425);
      const months = Math.floor((abs % 365.2425) / 30.4368);
      const weeks = Math.floor(abs / 7);
      return { days, abs, years, months, weeks, fromIso, toIso };
    } catch {
      return null;
    }
  }, [mode, from, to, adFrom, adTo]);

  return (
    <>
      <Seo
        title="Date Difference Calculator (BS & AD) — npdates"
        description="Calculate the number of days, weeks, months and years between any two Bikram Sambat or Gregorian dates."
        path="/date-difference"
        breadcrumb={[
          { name: "Home", url: "/" },
          { name: "Date Difference", url: "/date-difference" },
        ]}
      />
      <div className="container mx-auto px-4 py-10 max-w-5xl">
        <Breadcrumbs
          items={[
            { name: "Home", url: "/" },
            { name: "Date Difference", url: "/date-difference" },
          ]}
        />
        <header className="mt-6 mb-8">
          <h1 className="font-serif text-4xl md:text-5xl font-bold tracking-tight">
            Date Difference
          </h1>
          <p className="text-muted-foreground mt-3 text-lg">
            Find how many days, weeks, months or years are between any two dates.
          </p>
        </header>

        <div className="flex gap-2 mb-6">
          <Button
            variant={mode === "BS" ? "default" : "outline"}
            size="sm"
            onClick={() => setMode("BS")}
          >
            Bikram Sambat
          </Button>
          <Button
            variant={mode === "AD" ? "default" : "outline"}
            size="sm"
            onClick={() => setMode("AD")}
          >
            Gregorian (AD)
          </Button>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-card border rounded-2xl p-6">
            <h2 className="font-semibold mb-4">From</h2>
            {mode === "BS" ? (
              <BsDateSelector date={from} onChange={setFrom} />
            ) : (
              <AdDateSelector date={adFrom} onChange={setAdFrom} />
            )}
          </div>
          <div className="bg-card border rounded-2xl p-6">
            <h2 className="font-semibold mb-4">To</h2>
            {mode === "BS" ? (
              <BsDateSelector date={to} onChange={setTo} />
            ) : (
              <AdDateSelector date={adTo} onChange={setAdTo} />
            )}
          </div>
        </div>

        <div className="mt-8 bg-muted/30 border rounded-2xl p-8 text-center">
          {result ? (
            <>
              <p className="text-xs uppercase tracking-wider text-muted-foreground">
                Difference
              </p>
              <div className="font-serif text-5xl md:text-6xl font-bold mt-2">
                {result.abs.toLocaleString()}{" "}
                <span className="text-muted-foreground text-2xl font-normal">days</span>
              </div>
              <p className="text-muted-foreground mt-2">
                ≈ {result.years} years, {result.months} months · {result.weeks.toLocaleString()} weeks
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                {result.days < 0 ? "From-date is after to-date." : ""}
                {result.days === 0 ? "Both dates are the same." : ""}
              </p>
              <p className="text-xs text-muted-foreground mt-4">
                {result.fromIso} → {result.toIso}
              </p>
            </>
          ) : (
            <p className="text-muted-foreground">Enter valid dates.</p>
          )}
        </div>

        <section className="mt-14 max-w-3xl prose prose-neutral dark:prose-invert">
          <h2>How the date difference is calculated</h2>
          <p>
            For BS dates, each date is first converted to its exact Gregorian
            equivalent using the official Nepali patro (calendar) data. The number
            of days between the two AD dates is then computed in UTC to avoid any
            daylight-saving or timezone errors. The week, month and year totals
            shown are useful approximations based on the average year length.
          </p>
        </section>
      </div>
    </>
  );
}
