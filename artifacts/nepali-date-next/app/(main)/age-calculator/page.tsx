import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { AgeCalculatorForm } from "@/components/converter/AgeCalculatorForm";

export const metadata: Metadata = buildMetadata({
  title: "Nepali Age Calculator — Calculate Exact Age from BS or AD Date of Birth",
  description:
    "Free Nepali age calculator. Enter a Bikram Sambat (BS) or Gregorian (AD) birth date and get exact age in years, months, days, total weeks and next birthday countdown.",
  path: "/age-calculator",
  keywords: [
    "Nepali age calculator",
    "age calculator BS",
    "umer hisab",
    "age in years months days",
    "BS date of birth",
    "age calculator Nepal",
    "umer calculator",
    "Bikram Sambat age",
  ],
});

export default function AgeCalculatorPage() {
  return (
    <div className="container mx-auto px-4 py-10 max-w-5xl">
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Age Calculator", path: "/age-calculator" }]} />

      <header className="mt-6 mb-8">
        <h1 className="font-serif text-4xl md:text-5xl font-bold tracking-tight">Nepali Age Calculator</h1>
        <p className="text-muted-foreground mt-3 text-lg">
          Calculate your exact age from any Bikram Sambat or Gregorian date of birth — in years,
          months, days, total weeks and next birthday countdown.
        </p>
      </header>

      <AgeCalculatorForm />

      <section className="mt-14 max-w-3xl prose prose-neutral dark:prose-invert">
        <h2>How the Nepali age calculator works</h2>
        <p>
          Enter your date of birth in either Bikram Sambat (BS) or Gregorian (AD) format. If you
          enter a BS date, the calculator first converts it to its exact AD equivalent using the
          official Nepali patro (calendar) data, then subtracts from today's date in{" "}
          <strong>Asia/Kathmandu</strong> time. The result is a complete breakdown — years, full
          months, remaining days, total days lived, total weeks, and how many days until your next
          birthday — accurate to the day, not an estimate.
        </p>
        <h2>Why a Nepali-aware age calculator matters</h2>
        <p>
          Most age calculators on the web only accept Gregorian dates. That is a problem in Nepal,
          where citizenship cards, passports, school transcripts, employment records and most
          government IDs print the date of birth in BS. A typical mistake is to assume "BS year
          minus 57" equals the AD year. That is right for births between January and mid-April,
          and wrong for the rest of the year — the BS new year falls on 1 Baisakh (mid-April), so
          the offset between calendars shifts mid-year. This calculator handles that boundary
          correctly so your age never comes out a year off.
        </p>
        <h2>Common uses for this calculator</h2>
        <ul>
          <li><strong>Government forms</strong> — passport applications, visa interviews, civil service exams and SSF/EPF enrolments often ask for age in completed years on a specific date.</li>
          <li><strong>School and university admissions</strong> — many Nepali schools require minimum-age cutoffs by date, and overseas universities convert your BS DOB to AD for verification.</li>
          <li><strong>Insurance, banking and pension</strong> — premium and benefit calculations depend on exact age, not approximations.</li>
          <li><strong>Birthday planning</strong> — the next-birthday countdown is useful both for personal celebrations and for documents that mature on a birthday.</li>
        </ul>
        <h2>How accurate is it?</h2>
        <p>
          The age calculator inherits the same day-accurate conversion engine as the rest of
          npdates. BS↔AD conversion is verified against the published patro for every BS year from
          1970 to 2099 (AD 1913 to 2042). Day arithmetic happens in UTC to avoid any
          daylight-saving or timezone drift. The "today" used for the subtraction is always the
          current date in Asia/Kathmandu (UTC+5:45) — so a result calculated at 11 PM in New York
          still reflects the same Nepali day as someone in Kathmandu sees on their phone.
        </p>
        <h2>Frequently asked questions</h2>
        <h3>Can I enter a future date of birth?</h3>
        <p>
          The calculator accepts any date in the supported range, but if the entered DOB is in the
          future the result will be zero or negative — useful only for testing.
        </p>
        <h3>Why does the age sometimes show "0 years"?</h3>
        <p>
          If the date of birth is less than one full year before today (for example a baby born
          three months ago), the calculator shows 0 years, 3 months, with the exact day count.
          That is the standard way to express age for someone under one.
        </p>
        <h3>Does it work for very old or very young dates?</h3>
        <p>
          BS 1970 through 2099 (AD 1913 through 2042) are fully supported. Outside that range,
          conversion is not reliable because the published patro data does not cover it.
        </p>
        <h2>Related tools</h2>
        <p>
          To convert a single BS or AD date without an age calculation, use the{" "}
          <Link href="/">BS to AD converter</Link> on the homepage or the{" "}
          <Link href="/ad-to-bs-converter/">AD to BS converter</Link>. For the gap between any two
          dates (anniversaries, project durations), use the{" "}
          <Link href="/date-difference/">date difference calculator</Link>. To check today's BS
          date in Kathmandu time, see <Link href="/today-nepali-date/">today's Nepali date</Link>.
        </p>
      </section>
    </div>
  );
}
