import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";

export const metadata: Metadata = buildMetadata({
  title: "About npdates — The Nepali Date Toolkit",
  description:
    "npdates is a fast, accurate Nepali date converter and calendar toolkit. Learn what powers it and our commitment to data quality.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-10 max-w-3xl">
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "About", path: "/about" }]} />

      <header className="mt-6 mb-10">
        <h1 className="font-serif text-4xl md:text-5xl font-bold tracking-tight">About npdates</h1>
        <p className="text-muted-foreground mt-3 text-lg">
          A premium toolkit for working with the Nepali (Bikram Sambat) calendar.
        </p>
      </header>

      <div className="prose prose-neutral dark:prose-invert max-w-none">
        <h2>Why we built this</h2>
        <p>
          Existing Nepali date converters on the web feel dated, slow, or full of ads. We thought
          millions of Nepalis deserve a tool that's as polished as the best Western utilities —
          fast, accurate, and free of clutter.
        </p>
        <h2>How we ensure accuracy</h2>
        <p>
          Our calendar data comes from the published patro (Bikram Sambat calendar) for years
          1970 BS through 2099 BS. Each conversion is performed by counting days from a verified
          epoch (1 Baisakh 1970 BS = 13 April 1913 AD), so a Nepali date and its Gregorian
          equivalent are always correct to the day, including weekday.
        </p>
        <h2>What you can do here</h2>
        <ul>
          <li><Link href="/bs-to-ad-converter">Convert BS to AD</Link></li>
          <li><Link href="/ad-to-bs-converter">Convert AD to BS</Link></li>
          <li><Link href="/today-nepali-date">See today's Nepali date</Link></li>
          <li><Link href="/nepali-calendar">Browse the Nepali calendar</Link></li>
          <li><Link href="/age-calculator">Calculate age from a BS or AD birth date</Link></li>
          <li><Link href="/date-difference">Find the difference between two dates</Link></li>
          <li><Link href="/fiscal-year-converter">Look up Nepal's fiscal year</Link></li>
          <li><Link href="/festivals">Browse festivals and public holidays</Link></li>
          <li><Link href="/api-docs">Use the public conversion API</Link></li>
          <li><Link href="/widget">Embed the converter on your site</Link></li>
        </ul>
        <h2>Get in touch</h2>
        <p>
          Spotted an inaccuracy or want to suggest a feature? Open an issue on our public tracker
          or reach out by email.
        </p>
      </div>
    </div>
  );
}
