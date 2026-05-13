import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { FestivalsBrowser } from "@/components/festivals/FestivalsBrowser";
import { festivalsForYear } from "@/data/festivals";
import { bsToAd, getTodayInKathmandu } from "@/lib/converter";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Nepali Festivals & Public Holidays — Full List",
  description:
    "Complete list of major Nepali festivals and public holidays including Dashain, Tihar, Holi, Maha Shivaratri and more — with BS and AD dates.",
  path: "/festivals",
  keywords: ["Nepali festivals", "Nepal public holidays", "Dashain", "Tihar", "BS festival dates"],
});

export default function FestivalsPage() {
  // JSON-LD using current BS year's festivals for SEO. The visible list is interactive.
  const today = getTodayInKathmandu();
  const seoFests = festivalsForYear(today.bs.year);
  const itemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `Nepal festivals ${today.bs.year} BS`,
    url: `${SITE_URL}/festivals`,
    itemListElement: seoFests.map((f, i) => {
      const ad = bsToAd(f.bsYear, f.bsMonth, f.bsDay);
      return {
        "@type": "ListItem",
        position: i + 1,
        name: f.name,
        item: {
          "@type": "Event",
          name: f.name,
          startDate: ad.ad.iso,
          eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
          location: { "@type": "Place", name: "Nepal" },
        },
      };
    }),
  };

  return (
    <>
      <JsonLd data={itemList} />
      <div className="container mx-auto px-4 py-10">
        <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Festivals", path: "/festivals" }]} />

        <header className="mt-6 mb-2">
          <h1 className="font-serif text-4xl md:text-5xl font-bold tracking-tight">
            Nepali Festivals & Public Holidays
          </h1>
        </header>

        <FestivalsBrowser />

        <section className="mt-14 max-w-3xl prose prose-neutral dark:prose-invert">
          <h2>About Nepal's festival calendar</h2>
          <p>
            Nepal observes a rich mix of Hindu, Buddhist, and national festivals. Major celebrations
            include <strong>Dashain</strong> (the longest and most important Hindu festival),{" "}
            <strong>Tihar</strong> (the festival of lights spanning five days),{" "}
            <strong>Holi</strong> (celebrated separately in the hills and Terai),{" "}
            <strong>Maha Shivaratri</strong>, and <strong>Buddha Jayanti</strong>. National
            observances include Republic Day, Constitution Day, Loktantra Diwas and Prajatantra Diwas.
          </p>
          <p>
            Festival dates are determined by lunar position and are confirmed each year by the Nepal
            Calendar Determination Committee. The dates listed above reflect the latest published
            schedule, verified against official Nepal government gazette data and Hamro Patro.
          </p>
        </section>
      </div>
    </>
  );
}
