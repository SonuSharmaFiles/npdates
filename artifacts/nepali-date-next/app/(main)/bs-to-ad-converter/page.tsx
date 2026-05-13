import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { ConverterCard } from "@/components/converter/ConverterCard";

export const metadata: Metadata = buildMetadata({
  title: "BS to AD Converter — Nepali Date to Gregorian",
  description:
    "Convert Bikram Sambat (BS) dates to Gregorian (AD) instantly and accurately. Fast, reliable Nepali date converter with weekday and Nepali numeral support.",
  path: "/bs-to-ad-converter",
  keywords: ["BS to AD", "Nepali to English date", "Bikram Sambat converter", "BS date to AD"],
});

export default function BsToAdConverterPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-20 max-w-4xl">
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "BS to AD Converter", path: "/bs-to-ad-converter" },
        ]}
      />

      <header className="mt-6 mb-10">
        <h1 className="font-serif text-3xl md:text-5xl font-bold mb-4 text-foreground">
          BS to AD Converter
        </h1>
        <p className="text-lg text-muted-foreground">
          Convert Nepali dates (Bikram Sambat) to English dates (Gregorian) with absolute precision.
        </p>
      </header>

      <div className="mb-16">
        <ConverterCard initialDirection="BS_TO_AD" />
      </div>

      <article className="prose prose-slate dark:prose-invert prose-headings:font-serif prose-headings:font-bold max-w-none">
        <h2>How does the Bikram Sambat calendar work?</h2>
        <p>
          Bikram Sambat (BS) is the official calendar of Nepal. It is a solar calendar based on
          ancient Hindu traditions. Unlike the Gregorian calendar which has fixed days per month,
          the number of days in a Bikram Sambat month varies from year to year (typically between
          29 and 32 days).
        </p>
        <p>
          This variability means that converting between BS and AD is not a simple mathematical
          formula. Accurate conversion requires historical lookup tables published annually by the
          government. Our converter uses the official Panjika data to ensure 100% accuracy.
        </p>

        <h3>Common conversions</h3>
        <ul>
          <li><Link href="/bs-to-ad/2082/1/1">Nepali New Year 2082</Link></li>
          <li><Link href="/ad-to-bs-converter">Convert AD to BS instead</Link></li>
        </ul>
      </article>
    </div>
  );
}
