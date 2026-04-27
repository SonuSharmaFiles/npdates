import { useRoute, Link } from "wouter";
import { Seo } from "@/components/Seo";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { adToBs, BS_MONTHS_EN, AD_MONTHS_EN } from "@/lib/converter";
import { Button } from "@/components/ui/button";
import { Copy, ChevronLeft, ChevronRight } from "lucide-react";
import { toast } from "sonner";

export default function AdToBsLanding() {
  const [, params] = useRoute("/ad-to-bs/:year/:month/:day");
  const year = Number(params?.year);
  const month = Number(params?.month);
  const day = Number(params?.day);

  let result;
  try {
    result = adToBs(year, month, day);
  } catch (e) {
    return (
      <div className="container mx-auto px-4 py-16">
        <h1 className="font-serif text-3xl font-bold">Invalid date</h1>
        <p className="text-muted-foreground mt-2">
          {e instanceof Error ? e.message : "Please use a valid AD year, month, and day."}
        </p>
        <Link href="/ad-to-bs-converter" className="text-primary mt-4 inline-block">
          ← Back to converter
        </Link>
      </div>
    );
  }

  const { bs, ad } = result;

  const monthDaysAd = new Date(year, month, 0).getDate();
  const prevDay =
    day === 1 ? null : { y: year, m: month, d: day - 1 };
  const nextDay =
    day === monthDaysAd ? null : { y: year, m: month, d: day + 1 };

  const title = `${ad.formatted} in Nepali (BS) — ${bs.formatted}`;
  const description = `${ad.formatted} converts to ${bs.formatted} (${bs.weekdayNameNepali}) in the Bikram Sambat calendar.`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: title,
    description,
  };
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: `What is ${ad.formatted} in Nepali date?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `${ad.formatted} is equivalent to ${bs.formatted} in the Bikram Sambat calendar. It is a ${bs.weekdayName} (${bs.weekdayNameNepali}).`,
        },
      },
      {
        "@type": "Question",
        name: `What day of the week is ${ad.formatted}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `${ad.formatted} falls on a ${ad.weekdayName}.`,
        },
      },
    ],
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(`${ad.formatted} = ${bs.formatted}`);
    toast.success("Copied to clipboard");
  };

  return (
    <>
      <Seo
        title={title}
        description={description}
        path={`/ad-to-bs/${year}/${month}/${day}`}
        breadcrumb={[
          { name: "Home", url: "/" },
          { name: "AD to BS", url: "/ad-to-bs-converter" },
          { name: ad.formatted, url: `/ad-to-bs/${year}/${month}/${day}` },
        ]}
        jsonLd={[jsonLd, faqLd]}
      />
      <div className="container mx-auto px-4 py-10 max-w-4xl">
        <Breadcrumbs
          items={[
            { name: "Home", url: "/" },
            { name: "AD to BS", url: "/ad-to-bs-converter" },
            { name: ad.formatted, url: `/ad-to-bs/${year}/${month}/${day}` },
          ]}
        />
        <h1 className="font-serif text-3xl md:text-4xl font-bold mt-6 mb-2">
          {ad.formatted} in Nepali Date
        </h1>
        <p className="text-muted-foreground mb-8">
          AD → Bikram Sambat conversion
        </p>

        <article className="bg-card border rounded-2xl p-8 md:p-10">
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div>
              <p className="text-xs uppercase tracking-wider text-muted-foreground">
                Gregorian (AD)
              </p>
              <div className="font-serif text-3xl md:text-4xl font-bold mt-1">
                {ad.formatted}
              </div>
              <div className="text-muted-foreground mt-1">
                {ad.weekdayName} · {ad.iso}
              </div>
            </div>
            <div className="md:border-l md:pl-6">
              <p className="text-xs uppercase tracking-wider text-muted-foreground">
                Bikram Sambat
              </p>
              <div className="font-serif text-3xl md:text-4xl font-bold mt-1 text-primary">
                {bs.formatted}
              </div>
              <div className="text-muted-foreground mt-1">
                {bs.formattedNepali} · {bs.weekdayNameNepali}
              </div>
            </div>
          </div>

          <div className="mt-6 flex gap-3">
            <Button variant="outline" onClick={handleCopy} className="gap-2">
              <Copy className="w-4 h-4" /> Copy
            </Button>
            <Link href={`/calendar/${bs.year}/${bs.month}`}>
              <Button variant="outline">
                View {BS_MONTHS_EN[bs.month - 1]} {bs.year} BS calendar
              </Button>
            </Link>
          </div>
        </article>

        <nav className="mt-6 grid grid-cols-2 gap-3 text-sm">
          {prevDay && (
            <Link
              href={`/ad-to-bs/${prevDay.y}/${prevDay.m}/${prevDay.d}`}
              className="flex items-center gap-2 p-3 rounded-lg border hover-elevate"
            >
              <ChevronLeft className="w-4 h-4" />
              <div>
                <div className="text-xs text-muted-foreground">Previous day</div>
                <div className="font-medium">
                  {AD_MONTHS_EN[prevDay.m - 1]} {prevDay.d}, {prevDay.y}
                </div>
              </div>
            </Link>
          )}
          {nextDay && (
            <Link
              href={`/ad-to-bs/${nextDay.y}/${nextDay.m}/${nextDay.d}`}
              className="flex items-center gap-2 p-3 rounded-lg border hover-elevate justify-end text-right ml-auto"
            >
              <div>
                <div className="text-xs text-muted-foreground">Next day</div>
                <div className="font-medium">
                  {AD_MONTHS_EN[nextDay.m - 1]} {nextDay.d}, {nextDay.y}
                </div>
              </div>
              <ChevronRight className="w-4 h-4" />
            </Link>
          )}
        </nav>

        <section className="mt-12 prose prose-neutral dark:prose-invert max-w-none">
          <h2>About this conversion</h2>
          <p>
            <strong>{ad.formatted}</strong> in the Gregorian (AD) calendar
            corresponds to <strong>{bs.formatted}</strong> in the Bikram Sambat
            calendar used officially in Nepal. It is a{" "}
            {ad.weekdayName.toLowerCase()} ({bs.weekdayNameNepali}).
          </p>
          <h2>Frequently asked questions</h2>
          <h3>What is {ad.formatted} in Nepali date?</h3>
          <p>
            {ad.formatted} is <strong>{bs.formatted}</strong> ({bs.formattedNepali})
            in the Bikram Sambat calendar.
          </p>
          <h3>How do I convert other AD dates?</h3>
          <p>
            Try the <Link href="/ad-to-bs-converter">AD to BS converter</Link> for
            any other date, or jump to a{" "}
            <Link href={`/calendar/${bs.year}/${bs.month}`}>specific BS month</Link>.
          </p>
        </section>

        <section className="mt-10 grid md:grid-cols-3 gap-3 text-sm">
          <Link
            href={`/calendar/${bs.year}/${bs.month}`}
            className="p-4 rounded-xl border hover-elevate"
          >
            <div className="text-xs text-muted-foreground">View month</div>
            <div className="font-medium mt-1">
              {BS_MONTHS_EN[bs.month - 1]} {bs.year} BS
            </div>
          </Link>
          <Link
            href={`/nepali-calendar-${bs.year}`}
            className="p-4 rounded-xl border hover-elevate"
          >
            <div className="text-xs text-muted-foreground">View year</div>
            <div className="font-medium mt-1">{bs.year} BS calendar</div>
          </Link>
          <Link
            href={`/bs-to-ad/${bs.year}/${bs.month}/${bs.day}`}
            className="p-4 rounded-xl border hover-elevate"
          >
            <div className="text-xs text-muted-foreground">Reverse lookup</div>
            <div className="font-medium mt-1">{bs.formatted} → AD</div>
          </Link>
        </section>
      </div>
    </>
  );
}
