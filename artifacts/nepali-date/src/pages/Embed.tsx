import { ConverterCard } from "@/components/ConverterCard";
import { Seo } from "@/components/Seo";

export default function Embed() {
  return (
    <>
      <Seo
        title="Nepali Date Converter — Embedded"
        description="Embeddable Nepali (Bikram Sambat) ↔ AD date converter widget."
        path="/embed"
        noIndex
      />
      <div className="min-h-[100dvh] p-4 md:p-6 bg-transparent">
        <ConverterCard />
        <p className="text-[11px] text-muted-foreground text-center mt-3">
          Powered by{" "}
          <a
            href="https://npdates.app"
            target="_blank"
            rel="noopener"
            className="text-primary hover:underline"
          >
            npdates
          </a>
        </p>
      </div>
    </>
  );
}
