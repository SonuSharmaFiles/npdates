import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { DateDifferenceForm } from "@/components/converter/DateDifferenceForm";

export const metadata: Metadata = buildMetadata({
  title: "Date Difference Calculator — Days Between Two BS or AD Dates",
  description:
    "Calculate the exact number of days, weeks, months and years between any two Bikram Sambat (BS) or Gregorian (AD) dates — accurate, day-level precision in either calendar.",
  path: "/date-difference",
  keywords: [
    "date difference calculator",
    "days between dates",
    "BS date difference",
    "duration calculator Nepal",
    "days between two BS dates",
    "Nepali date difference",
    "miti antar",
  ],
});

export default function DateDifferencePage() {
  return (
    <div className="container mx-auto px-4 py-10 max-w-5xl">
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Date Difference", path: "/date-difference" }]} />

      <header className="mt-6 mb-8">
        <h1 className="font-serif text-4xl md:text-5xl font-bold tracking-tight">Date Difference Calculator</h1>
        <p className="text-muted-foreground mt-3 text-lg">
          Find the exact number of days, weeks, months and years between any two Bikram Sambat or
          Gregorian dates.
        </p>
      </header>

      <DateDifferenceForm />

      <section className="mt-14 max-w-3xl prose prose-neutral dark:prose-invert">
        <h2>How the date difference is calculated</h2>
        <p>
          The calculator accepts either Bikram Sambat or Gregorian dates on each side. When a date
          is in BS, it is first converted to its exact AD equivalent using the published Nepali
          patro tables, then both endpoints are subtracted in UTC to avoid any timezone or
          daylight-saving drift. The result is the exact day count between the two dates — not an
          estimate based on average month lengths.
        </p>
        <p>
          The week count is the total days divided by seven. The years/months/days breakdown
          walks the calendar from the start date forward, counting full calendar months and years
          before reporting the remaining days. That is the standard way ages, tenures and
          anniversaries are expressed in Nepal and elsewhere.
        </p>
        <h2>When this calculator helps</h2>
        <ul>
          <li><strong>Service tenure</strong> — calculate exact years and days of service for gratuity, pension or PF, especially when employment records carry BS dates.</li>
          <li><strong>Notice periods and contracts</strong> — rental agreements, service contracts and government tenders in Nepal often run for a fixed number of days from a BS date.</li>
          <li><strong>Project planning</strong> — count working days between a project start and a deadline, even when the start date is given in BS and the deadline in AD.</li>
          <li><strong>Anniversaries and milestones</strong> — find the exact number of days married, between two family events, or to a target date.</li>
          <li><strong>Visa and legal documents</strong> — many visa and immigration forms ask for duration of stay or gap between two events in days.</li>
        </ul>
        <h2>Why a Nepali-aware calculator matters</h2>
        <p>
          Generic date calculators only accept Gregorian input. If you have one date in BS and one
          in AD — common in Nepal — you would otherwise have to convert each manually before
          subtracting, doubling the chance of an error. This calculator handles the mixed-calendar
          case in one step and stays day-accurate across BS 1970 to 2099 (AD 1913 to 2042).
        </p>
        <h2>Related tools</h2>
        <p>
          To convert a single date, use the <Link href="/">BS to AD converter</Link> on the
          homepage or the <Link href="/ad-to-bs-converter/">AD to BS converter</Link>. To compute
          age from a date of birth, see the <Link href="/age-calculator/">age calculator</Link>.
          For today's Nepali date in Kathmandu, see{" "}
          <Link href="/today-nepali-date/">today's Nepali date</Link>.
        </p>
      </section>
    </div>
  );
}
