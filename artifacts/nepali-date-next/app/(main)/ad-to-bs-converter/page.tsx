import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { ConverterCard } from "@/components/converter/ConverterCard";

export const metadata: Metadata = buildMetadata({
  title: "AD to BS Converter — Convert English (Gregorian) Date to Nepali (Bikram Sambat)",
  description:
    "Convert any Gregorian (AD) date to Nepali Bikram Sambat (BS) instantly — accurate across 1913–2042 AD, with weekday, Devanagari numerals and a one-click reverse lookup.",
  path: "/ad-to-bs-converter",
  keywords: [
    "AD to BS",
    "AD to BS converter",
    "English to Nepali date",
    "Gregorian to Bikram Sambat",
    "Nepali date converter",
    "today AD to BS",
    "convert date to Nepali",
    "miti converter",
  ],
});

export default function AdToBsConverterPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-20 max-w-4xl">
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "AD to BS Converter", path: "/ad-to-bs-converter" },
        ]}
      />

      <header className="mt-6 mb-10">
        <h1 className="font-serif text-3xl md:text-5xl font-bold mb-4 text-foreground">
          AD to BS Converter
        </h1>
        <p className="text-lg text-muted-foreground">
          Convert English dates (Gregorian) to Nepali dates (Bikram Sambat) quickly and accurately.
        </p>
      </header>

      <div className="mb-16">
        <ConverterCard initialDirection="AD_TO_BS" />
      </div>

      <article className="prose prose-slate dark:prose-invert prose-headings:font-serif prose-headings:font-bold max-w-none">
        <h2>Why people convert AD dates to BS</h2>
        <p>
          Most of the world runs on the Gregorian (AD) calendar, but Nepal runs on Bikram Sambat
          (BS). Every government form, school certificate, property deed, court filing and tax
          return uses BS. So when an AD date comes in from outside — a foreign university's
          deadline, a visa appointment, an international payment, a UK or US passport stamp — and
          needs to land on a Nepali form, an accurate AD to BS conversion is the first step.
        </p>
        <p>
          The same goes for Nepalis living in diaspora who need to file paperwork back home, or
          foreigners working with Nepali employers, NGOs and government offices. Knowing that{" "}
          <strong>25 May 2026 AD = Jestha 11, 2083 BS</strong> is not optional once you start
          filling out Nepali forms.
        </p>
        <h2>How accurate is this AD to BS converter?</h2>
        <p>
          The converter is day-accurate across the supported range of 1913 AD through 2042 AD
          (covering BS years 1970 through 2099). It uses a published month-length table for every
          BS year in range, anchored to a verified epoch (1 Baisakh 1970 BS = 13 April 1913 AD).
          That means every result — including weekday — matches the official Nepal patro to the
          day, not an approximation based on average month lengths.
        </p>
        <h2>AD to BS conversion at a glance</h2>
        <p>
          The BS year is roughly 56 years and 8 months ahead of the AD year. Practically, that
          means an AD date from <strong>January through mid-April</strong> falls in the previous
          calendar year by BS reckoning (subtract 57), while an AD date from{" "}
          <strong>mid-April through December</strong> falls in the current BS year (subtract 56).
          The BS new year always begins on 1 Baisakh — around 13 or 14 April. Naive year math
          fails near the boundary, so always use the converter for anything official.
        </p>
        <h2>Related tools</h2>
        <p>
          Need to go the other direction? Use the <Link href="/">BS to AD converter</Link> on the
          homepage. To compute exact age from a BS or AD birth date, see the{" "}
          <Link href="/age-calculator/">age calculator</Link>. For the number of days, weeks or
          months between two dates, try the{" "}
          <Link href="/date-difference/">date difference calculator</Link>.
        </p>
      </article>
    </div>
  );
}
