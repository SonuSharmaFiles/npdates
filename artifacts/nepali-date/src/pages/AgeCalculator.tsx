import { useMemo, useState } from "react";
import { Seo } from "@/components/Seo";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { BsDateSelector } from "@/components/BsDateSelector";
import { AdDateSelector } from "@/components/AdDateSelector";
import { Button } from "@/components/ui/button";
import {
  ageFromAd,
  bsToAd,
  getTodayInKathmandu,
  toNepaliNumeral,
} from "@/lib/converter";

type Mode = "BS" | "AD";

export default function AgeCalculator() {
  const today = getTodayInKathmandu();
  const [mode, setMode] = useState<Mode>("BS");
  const [bs, setBs] = useState({ year: 2050, month: 1, day: 15 });
  const [ad, setAd] = useState({
    year: today.ad.year - 25,
    month: today.ad.month,
    day: today.ad.day,
  });

  const result = useMemo(() => {
    try {
      let birthIso: string;
      let birthFormatted: string;
      if (mode === "BS") {
        const conv = bsToAd(bs.year, bs.month, bs.day);
        birthIso = conv.ad.iso;
        birthFormatted = `${conv.bs.formatted} (${conv.ad.formatted})`;
      } else {
        birthIso = `${ad.year}-${String(ad.month).padStart(2, "0")}-${String(ad.day).padStart(2, "0")}`;
        birthFormatted = new Date(birthIso + "T00:00:00Z").toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        });
      }
      const age = ageFromAd(birthIso);
      const totalWeeks = Math.floor(age.totalDays / 7);
      const totalHours = age.totalDays * 24;
      const nextBirthday = new Date(birthIso + "T00:00:00Z");
      nextBirthday.setUTCFullYear(nextBirthday.getUTCFullYear() + age.years + 1);
      // Use UTC midnight for today so the subtraction is day-accurate
      const todayUtc = new Date(new Date().toISOString().slice(0, 10) + "T00:00:00Z");
      const daysToBirthday = Math.ceil(
        (nextBirthday.getTime() - todayUtc.getTime()) / 86400000,
      );
      return { age, birthFormatted, totalWeeks, totalHours, daysToBirthday };
    } catch {
      return null;
    }
  }, [mode, bs, ad]);

  return (
    <>
      <Seo
        title="Nepali Age Calculator — Calculate Age in BS or AD | npdates"
        description="Calculate your exact age in years, months, and days from a Bikram Sambat (BS) or Gregorian (AD) date of birth. Includes total days, weeks and next birthday countdown."
        path="/age-calculator"
        breadcrumb={[
          { name: "Home", url: "/" },
          { name: "Age Calculator", url: "/age-calculator" },
        ]}
      />
      <div className="container mx-auto px-4 py-10 max-w-5xl">
        <Breadcrumbs
          items={[
            { name: "Home", url: "/" },
            { name: "Age Calculator", url: "/age-calculator" },
          ]}
        />
        <header className="mt-6 mb-8">
          <h1 className="font-serif text-4xl md:text-5xl font-bold tracking-tight">
            Age Calculator
          </h1>
          <p className="text-muted-foreground mt-3 text-lg">
            Calculate your exact age from any BS or AD date of birth.
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-card border rounded-2xl p-6">
            <div className="flex gap-2 mb-6">
              <Button
                variant={mode === "BS" ? "default" : "outline"}
                size="sm"
                onClick={() => setMode("BS")}
              >
                BS Date of Birth
              </Button>
              <Button
                variant={mode === "AD" ? "default" : "outline"}
                size="sm"
                onClick={() => setMode("AD")}
              >
                AD Date of Birth
              </Button>
            </div>
            {mode === "BS" ? (
              <BsDateSelector date={bs} onChange={setBs} />
            ) : (
              <AdDateSelector date={ad} onChange={setAd} />
            )}
          </div>

          <div className="bg-muted/30 border rounded-2xl p-8 flex flex-col justify-center">
            {result ? (
              <>
                <p className="text-xs uppercase tracking-wider text-muted-foreground">
                  Your age today
                </p>
                <div className="font-serif text-5xl md:text-6xl font-bold mt-2">
                  {result.age.years}
                  <span className="text-muted-foreground text-2xl font-normal">
                    {" "}years
                  </span>
                </div>
                <div className="text-muted-foreground mt-2">
                  {result.age.months} months, {result.age.days} days
                </div>
                <div className="text-sm text-muted-foreground mt-1">
                  ({toNepaliNumeral(result.age.years)} वर्ष)
                </div>

                <dl className="mt-6 grid grid-cols-2 gap-3 text-sm">
                  <div className="bg-card border rounded-lg p-3">
                    <dt className="text-muted-foreground text-xs">Total days</dt>
                    <dd className="font-semibold text-base">
                      {result.age.totalDays.toLocaleString()}
                    </dd>
                  </div>
                  <div className="bg-card border rounded-lg p-3">
                    <dt className="text-muted-foreground text-xs">Total weeks</dt>
                    <dd className="font-semibold text-base">
                      {result.totalWeeks.toLocaleString()}
                    </dd>
                  </div>
                  <div className="bg-card border rounded-lg p-3">
                    <dt className="text-muted-foreground text-xs">Total hours</dt>
                    <dd className="font-semibold text-base">
                      {result.totalHours.toLocaleString()}
                    </dd>
                  </div>
                  <div className="bg-card border rounded-lg p-3">
                    <dt className="text-muted-foreground text-xs">Next birthday</dt>
                    <dd className="font-semibold text-base">
                      in {result.daysToBirthday} days
                    </dd>
                  </div>
                </dl>
                <p className="text-xs text-muted-foreground mt-4">
                  Born {result.birthFormatted}
                </p>
              </>
            ) : (
              <p className="text-muted-foreground">Enter a valid date.</p>
            )}
          </div>
        </div>

        <section className="mt-14 max-w-3xl prose prose-neutral dark:prose-invert">
          <h2>How the age calculator works</h2>
          <p>
            Enter your date of birth in either Bikram Sambat or Gregorian format. We
            convert your BS date to its exact AD equivalent and calculate the
            difference to today's date in <strong>Asia/Kathmandu</strong> time.
            The result gives you a complete picture: years, months, days, and several
            useful totals — perfect for filling government forms, school applications
            or just satisfying curiosity.
          </p>
          <h2>Why does the BS year matter?</h2>
          <p>
            Many official documents in Nepal (citizenship, passports, school
            transcripts) use Bikram Sambat. Using the right calendar removes the
            common one-year-off mistake when converting birth dates between
            systems.
          </p>
        </section>
      </div>
    </>
  );
}
