import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { JsonLd, breadcrumbLd } from "@/components/seo/JsonLd";
import { HomeConverter } from "@/components/converter/HomeConverter";

export const metadata: Metadata = buildMetadata({
  title: "BS to AD Converter — Nepali Date Converter (Bikram Sambat to Gregorian) — npdates",
  description:
    "Free Nepali date converter — switch between Bikram Sambat (BS) and Gregorian (AD) in seconds, with day-accurate weekday, Devanagari numerals, and full BS 1970–2099 coverage.",
  path: "/",
  keywords: [
    "BS to AD",
    "AD to BS",
    "Nepali date converter",
    "Bikram Sambat converter",
    "BS date to AD",
    "Nepali to English date converter",
    "BS 2082 to AD",
    "Nepali patro converter",
    "BS calendar converter",
    "miti converter",
  ],
});

export default function HomePage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-20 max-w-4xl">
      <JsonLd data={breadcrumbLd([{ name: "Home", path: "/" }])} />

      <HomeConverter />

      <article className="prose prose-slate dark:prose-invert prose-headings:font-serif prose-headings:font-bold max-w-none">
        <h2>What is the Bikram Sambat calendar?</h2>
        <p>
          Bikram Sambat (<span lang="ne">विक्रम सम्बत</span>, abbreviated BS) is the official solar calendar of Nepal. It
          runs roughly 56 years and 8 months ahead of the Gregorian (AD) calendar most of the world
          uses, and the BS new year falls on <strong>1 Baisakh</strong>, around mid-April every
          year. Twelve months — Baisakh, Jestha, Ashadh, Shrawan, Bhadra, Ashwin, Kartik, Mangsir,
          Poush, Magh, Falgun and Chaitra — span the year, but each month's length varies from 29
          to 32 days depending on solar position.
        </p>
        <h2>Why you cannot just subtract 56 from an AD year</h2>
        <p>
          The most common BS↔AD mistake is treating the difference as a flat 56 or 57 years. That
          works only for dates between mid-April and December. For January through mid-April, you
          need to subtract 57 because the BS year hasn't rolled over yet. Because the new year
          falls on 1 Baisakh, the safe approach is to use a real converter rather than year
          arithmetic — that's exactly what the tool above does, sourced from published patro data.
        </p>
        <h2>How our BS to AD converter works</h2>
        <p>
          Pick a Bikram Sambat date — year, month, day — and the converter returns the matching
          Gregorian date along with the weekday in English and Devanagari. The same widget toggles
          to AD to BS conversion with one tap. Every conversion is verified against an internal
          month-length table covering BS 1970 through 2099 (AD 1913 through 2042), with a known
          epoch of 1 Baisakh 1970 BS = 13 April 1913 AD. Numerals can be shown in standard digits
          or in Devanagari (<span lang="ne">०–९</span>) for documents that need them.
        </p>
        <h2>When do Nepalis need a BS to AD converter?</h2>
        <p>
          Citizenship cards, passports, school transcripts, academic certificates, employment
          records, property deeds, court documents, tax filings and the federal budget in Nepal are
          all written in BS. The moment any of those documents needs to interact with the wider
          world — a foreign university, a visa application, a bank in another country, an employer
          abroad — the date has to be converted to AD. A reliable converter is the easiest way to
          avoid off-by-one errors that can stall a passport application or an academic admission.
        </p>
        <h2>Beyond simple date conversion</h2>
        <p>
          npdates also includes an{" "}
          <Link href="/age-calculator/">age calculator</Link> that handles BS or AD birth dates,
          a <Link href="/date-difference/">date difference calculator</Link> for the exact number
          of days between two events, and a live{" "}
          <Link href="/today-nepali-date/">today's Nepali date</Link> page that shows the current
          BS date and weekday in Asia/Kathmandu time. Developers can use the free{" "}
          <Link href="/api-docs/">REST API</Link> to plug BS↔AD conversion into their own apps,
          and anyone can <Link href="/widget/">embed the converter</Link> on their website with a
          single iframe.
        </p>
      </article>
    </div>
  );
}
