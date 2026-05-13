import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { EmbedSnippet } from "@/components/widget/EmbedSnippet";

export const metadata: Metadata = buildMetadata({
  title: "Embed the Nepali Date Converter on your site",
  description:
    "Paste a single iframe snippet to embed the npdates Nepali date converter on your website, blog or intranet. Free, lightweight and accurate.",
  path: "/widget",
  keywords: ["embed Nepali date converter", "BS AD widget", "iframe Nepali calendar"],
});

export default function WidgetPage() {
  return (
    <div className="container mx-auto px-4 py-10 max-w-4xl">
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Widget", path: "/widget" }]} />

      <header className="mt-6 mb-10">
        <h1 className="font-serif text-4xl md:text-5xl font-bold tracking-tight">Embed the converter</h1>
        <p className="text-muted-foreground mt-3 text-lg">
          One iframe. Zero dependencies. Drop the npdates Nepali date converter anywhere your
          audience needs it.
        </p>
      </header>

      <div className="grid md:grid-cols-2 gap-8 items-start">
        <div>
          <h2 className="font-semibold mb-3">Copy this snippet</h2>
          <EmbedSnippet />
        </div>
        <div>
          <h2 className="font-semibold mb-3">Live preview</h2>
          <iframe
            src="/embed"
            title="Nepali date converter preview"
            className="w-full h-[540px] border rounded-2xl bg-card"
            loading="lazy"
          />
        </div>
      </div>

      <section className="mt-14 prose prose-neutral dark:prose-invert max-w-none">
        <h2>Why embed?</h2>
        <p>
          If your audience is Nepali — students, freelancers, government workers, travel agencies,
          or remittance services — having a built-in BS to AD converter on your site removes a
          friction point and keeps users on your page longer.
        </p>
        <h2>Customization</h2>
        <p>
          Adjust width, height, border, and corner radius via the iframe style attribute. The
          widget automatically adapts to its container.
        </p>
        <h2>Attribution</h2>
        <p>
          The embedded widget shows a small "powered by npdates" link. If you'd prefer a clean,
          white-label version for your product, get in touch.
        </p>
      </section>
    </div>
  );
}
