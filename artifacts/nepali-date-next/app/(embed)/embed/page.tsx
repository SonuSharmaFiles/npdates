import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { ConverterCard } from "@/components/converter/ConverterCard";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Nepali Date Converter — Embedded Widget",
  description: "Embeddable Nepali (Bikram Sambat) ↔ Gregorian (AD) date converter widget for iframe use.",
  path: "/embed",
  noIndex: true,
});

export default function EmbedPage() {
  return (
    <div className="min-h-[100dvh] p-4 md:p-6 bg-transparent">
      {/* Visually hidden but present for screen readers and crawlers — every
          page should have exactly one h1 even when the page is noindex. */}
      <h1 className="sr-only">Nepali Date Converter — embeddable widget</h1>
      <ConverterCard />
      <p className="text-[11px] text-muted-foreground text-center mt-3">
        Powered by{" "}
        <a
          href={SITE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:underline"
        >
          npdates
        </a>
      </p>
    </div>
  );
}
