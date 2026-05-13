import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { DateDifferenceForm } from "@/components/converter/DateDifferenceForm";

export const metadata: Metadata = buildMetadata({
  title: "Date Difference Calculator (BS & AD)",
  description:
    "Calculate the number of days, weeks, months and years between any two Bikram Sambat or Gregorian dates.",
  path: "/date-difference",
  keywords: ["date difference", "days between dates", "BS date difference", "duration calculator"],
});

export default function DateDifferencePage() {
  return (
    <div className="container mx-auto px-4 py-10 max-w-5xl">
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Date Difference", path: "/date-difference" }]} />

      <header className="mt-6 mb-8">
        <h1 className="font-serif text-4xl md:text-5xl font-bold tracking-tight">Date Difference</h1>
        <p className="text-muted-foreground mt-3 text-lg">
          Find how many days, weeks, months or years are between any two dates.
        </p>
      </header>

      <DateDifferenceForm />

      <section className="mt-14 max-w-3xl prose prose-neutral dark:prose-invert">
        <h2>How the date difference is calculated</h2>
        <p>
          For BS dates, each date is first converted to its exact Gregorian equivalent using the
          official Nepali patro (calendar) data. The number of days between the two AD dates is then
          computed in UTC to avoid any daylight-saving or timezone errors. The week, month and year
          totals shown are useful approximations based on the average year length.
        </p>
      </section>
    </div>
  );
}
