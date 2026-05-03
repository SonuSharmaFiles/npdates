import { useRoute, Link } from "wouter";
import { Seo } from "@/components/Seo";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import {
  bsToAd,
  BS_MONTHS_EN,
  getDaysInBsMonth,
} from "@/lib/converter";
import { festivalForBsDate } from "@/data/festivals";
import { Button } from "@/components/ui/button";
import { Copy, ChevronLeft, ChevronRight } from "lucide-react";
import { toast } from "sonner";

export default function BsToAdLanding() {
  const [, params] = useRoute("/bs-to-ad/:year/:month/:day");
  const year = Number(params?.year);
  const month = Number(params?.month);
  const day = Number(params?.day);

  let result;
  try {
    result = bsToAd(year, month, day);
  } catch (e) {
    return (
      <div className="container mx-auto px-4 py-16">
        <h1 className="font-serif text-3xl font-bold">Invalid date</h1>
        <p className="text-muted-foreground mt-2">
          {e instanceof Error ? e.message : "Please use a valid BS year, month, and day."}
        </p>
        <Link href="/bs-to-ad-converter" className="text-primary mt-4 inline-block">
          ← Back to converter
        </Link>
      </div>
    );
  }

  const { bs, ad } = result;
  const fest = festivalForBsDate(year, month, day);

  // navigation
  const monthDays = getDaysInBsMonth(year, month);
  const prevDay = day === 1 ? null : { y: year, m: month, d: day - 1 };
  const nextDay = day === monthDays ? null : { y: year, m: month, d: day + 1 };

  const title = `Convert ${bs.formatted} to AD — ${ad.formatted}`;
  const description = `${bs.formatted} converts to ${ad.formatted} (${ad.weekdayName}) in the Gregorian calendar. ${fest ? `This day is ${fest.name}. ` : ""}Free Nepali date converter.`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: title,
    description,
    primaryImageOfPage: { "@type": "ImageObject", url: "https://npdates.app/og-image.png" },
  };

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: `What is ${bs.formatted} in AD?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `${bs.formatted} is equivalent to ${ad.formatted} in the Gregorian (AD) calendar. It is a ${ad.weekdayName}.`,
        },
      },
      {
        "@type": "Question",
        name: `What day of the week is ${bs.formatted}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `${bs.formatted} falls on a ${bs.weekdayName} (${bs.weekdayNameNepali}).`,
        },
      },
    ],
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(`${bs.formatted} = ${ad.formatted}`);
    toast.success("Copied to clipboard");
  };

  return (
    <>
      <Seo
        title={title}
        description={description}
        path={`/bs-to-ad/${year}/${month}/${day}`}
        breadcrumb={[
          { name: "Home", url: "/" },
          { name: "BS to AD", url: "/bs-to-ad-converter" },
          { name: bs.formatted, url: `/bs-to-ad/${year}/${month}/${day}` },
        ]}
        jsonLd={[jsonLd, faqLd]}
      />
      <div className="container mx-auto px-4 py-10 max-w-4xl">
        <Breadcrumbs
          items={[
            { name: "Home", url: "/" },
            { name: "BS to AD", url: "/bs-to-ad-converter" },
            { name: bs.formatted, url: `/bs-to-ad/${year}/${month}/${day}` },
          ]}
        />
        <h1 className="font-serif text-3xl md:text-4xl font-bold mt-6 mb-2">
          Convert {bs.formatted} to AD
        </h1>
        <p className="text-muted-foreground mb-8">
          {bs.formattedNepali} → {ad.formatted}
        </p>

        <article className="bg-card border rounded-2xl p-8 md:p-10">
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div>
              <p className="text-xs uppercase tracking-wider text-muted-foreground">
                Bikram Sambat
              </p>
              <div className="font-serif text-3xl md:text-4xl font-bold mt-1">
                {bs.formatted}
              </div>
              <div className="text-muted-foreground mt-1">
                {bs.formattedNepali} · {bs.weekdayNameNepali}
              </div>
            </div>
            <div className="md:border-l md:pl-6">
              <p className="text-xs uppercase tracking-wider text-muted-foreground">
                Gregorian (AD)
              </p>
              <div className="font-serif text-3xl md:text-4xl font-bold mt-1 text-primary">
                {ad.formatted}
              </div>
              <div className="text-muted-foreground mt-1">
                {ad.weekdayName} · {ad.iso}
              </div>
            </div>
          </div>

          {fest && (
            <div className="mt-6 p-4 bg-destructive/5 border border-destructive/20 rounded-xl">
              <p className="text-xs uppercase tracking-wider text-destructive font-medium">
                Festival
              </p>
              <p className="font-medium mt-1">
                This day is <strong>{fest.name}</strong> ({fest.nameNepali}) —{" "}
                {fest.isPublicHoliday ? "a public holiday in Nepal" : fest.category.toLowerCase()}.
              </p>
            </div>
          )}

          <div className="mt-6 flex gap-3">
            <Button variant="outline" onClick={handleCopy} className="gap-2">
              <Copy className="w-4 h-4" /> Copy
            </Button>
            <Link href={`/calendar/${year}/${month}`}>
              <Button variant="outline">View {BS_MONTHS_EN[month - 1]} calendar</Button>
            </Link>
          </div>
        </article>

        <nav className="mt-6 grid grid-cols-2 gap-3 text-sm">
          {prevDay && (
            <Link
              href={`/bs-to-ad/${prevDay.y}/${prevDay.m}/${prevDay.d}`}
              className="flex items-center gap-2 p-3 rounded-lg border hover-elevate"
            >
              <ChevronLeft className="w-4 h-4" />
              <div>
                <div className="text-xs text-muted-foreground">Previous day</div>
                <div className="font-medium">
                  {BS_MONTHS_EN[prevDay.m - 1]} {prevDay.d}, {prevDay.y}
                </div>
              </div>
            </Link>
          )}
          {nextDay && (
            <Link
              href={`/bs-to-ad/${nextDay.y}/${nextDay.m}/${nextDay.d}`}
              className="flex items-center gap-2 p-3 rounded-lg border hover-elevate justify-end text-right ml-auto"
            >
              <div>
                <div className="text-xs text-muted-foreground">Next day</div>
                <div className="font-medium">
                  {BS_MONTHS_EN[nextDay.m - 1]} {nextDay.d}, {nextDay.y}
                </div>
              </div>
              <ChevronRight className="w-4 h-4" />
            </Link>
          )}
        </nav>

        <section className="mt-12 prose prose-neutral dark:prose-invert max-w-none">
          <h2>About this conversion</h2>
          <p>
            <strong>{bs.formatted}</strong> ({bs.formattedNepali}) in the Bikram
            Sambat calendar corresponds to <strong>{ad.formatted}</strong> in the
            Gregorian calendar — a {ad.weekdayName.toLowerCase()}. The Bikram Sambat
            calendar runs approximately 56 years and 8 months ahead of the
            Gregorian calendar, with months that vary in length between 29 and 32
            days based on solar position.
          </p>
          <h2>Frequently asked questions</h2>
          <h3>What is {bs.formatted} in AD?</h3>
          <p>
            {bs.formatted} is equivalent to <strong>{ad.formatted}</strong> in the
            Gregorian (AD) calendar.
          </p>
          <h3>What day of the week is {bs.formatted}?</h3>
          <p>
            {bs.formatted} falls on a <strong>{bs.weekdayName}</strong> ({bs.weekdayNameNepali}).
          </p>
          <h3>How do I convert other BS dates?</h3>
          <p>
            Use the <Link href="/bs-to-ad-converter">BS to AD converter</Link> for
            any other date, or browse the{" "}
            <Link href={`/nepali-calendar-${year}`}>{year} BS calendar</Link>.
          </p>
        </section>

        <section className="mt-10 grid md:grid-cols-3 gap-3 text-sm">
          <Link
            href={`/calendar/${year}/${month}`}
            className="p-4 rounded-xl border hover-elevate"
          >
            <div className="text-xs text-muted-foreground">View month</div>
            <div className="font-medium mt-1">
              {BS_MONTHS_EN[month - 1]} {year} BS
            </div>
          </Link>
          <Link
            href={`/nepali-calendar-${year}`}
            className="p-4 rounded-xl border hover-elevate"
          >
            <div className="text-xs text-muted-foreground">View year</div>
            <div className="font-medium mt-1">{year} BS calendar</div>
          </Link>
          <Link
            href={`/ad-to-bs/${ad.year}/${ad.month}/${ad.day}`}
            className="p-4 rounded-xl border hover-elevate"
          >
            <div className="text-xs text-muted-foreground">Reverse lookup</div>
            <div className="font-medium mt-1">{ad.formatted} → BS</div>
          </Link>
        </section>
      </div>
    </>
  );
}

