import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { FiscalYearConverterForm } from "@/components/converter/FiscalYearConverterForm";
import { BS_MONTHS_EN } from "@/lib/converter";

export const metadata: Metadata = buildMetadata({
  title: "Nepali Fiscal Year Converter — Find FY for Any Date",
  description:
    "Look up Nepal's fiscal year (FY) for any Bikram Sambat or Gregorian date. The Nepali fiscal year runs from 1 Shrawan to end of Ashadh.",
  path: "/fiscal-year-converter",
  keywords: ["Nepal fiscal year", "Nepali FY", "aarthik barsha", "Nepal budget year"],
});

export default function FiscalYearConverterPage() {
  return (
    <div className="container mx-auto px-4 py-10 max-w-5xl">
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Fiscal Year Converter", path: "/fiscal-year-converter" }]} />

      <header className="mt-6 mb-8">
        <h1 className="font-serif text-4xl md:text-5xl font-bold tracking-tight">
          Nepali Fiscal Year Converter
        </h1>
        <p className="text-muted-foreground mt-3 text-lg">
          Find the Nepal fiscal year (FY) for any date. The Nepali FY runs{" "}
          <strong>1 Shrawan – end of Ashadh</strong> (roughly mid-July to mid-July).
        </p>
      </header>

      <FiscalYearConverterForm />

      <section className="mt-14 max-w-3xl prose prose-neutral dark:prose-invert">
        <h2>About the Nepali fiscal year</h2>
        <p>
          Nepal's government and businesses operate on a fiscal year that begins on{" "}
          <strong>1 Shrawan</strong> ({BS_MONTHS_EN[3]}) and ends on the last day of{" "}
          <strong>Ashadh</strong> ({BS_MONTHS_EN[2]}) the following Bikram Sambat year. In the
          Gregorian calendar, this corresponds roughly to mid-July through mid-July, making it
          about three months ahead of the Indian fiscal year and six months ahead of the standard
          calendar year.
        </p>
        <h2>Common fiscal years</h2>
        <ul>
          <li><Link href="/fiscal-year/2080">FY 2080/81</Link></li>
          <li><Link href="/fiscal-year/2081">FY 2081/82</Link></li>
          <li><Link href="/fiscal-year/2082">FY 2082/83</Link></li>
          <li><Link href="/fiscal-year/2083">FY 2083/84</Link></li>
          <li><Link href="/fiscal-year/2084">FY 2084/85</Link></li>
        </ul>
      </section>
    </div>
  );
}
