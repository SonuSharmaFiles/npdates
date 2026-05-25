import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Nepali Date Converter API — Public REST Endpoints",
  description:
    "Free public API for Nepali date conversion. Convert BS↔AD programmatically. JSON, no auth required.",
  path: "/api-docs",
  keywords: ["Nepali date API", "BS to AD API", "Bikram Sambat API", "REST converter"],
});

interface Endpoint {
  method: string;
  path: string;
  summary: string;
  example: string;
}

const ENDPOINTS: Endpoint[] = [
  {
    method: "GET",
    path: "/api/convert/bs-to-ad?year=2082&month=1&day=15",
    summary: "Convert a Bikram Sambat date to Gregorian (AD)",
    example: `curl '${SITE_URL}/api/convert/bs-to-ad?year=2082&month=1&day=15'`,
  },
  {
    method: "GET",
    path: "/api/convert/ad-to-bs?year=2025&month=4&day=28",
    summary: "Convert a Gregorian (AD) date to Bikram Sambat",
    example: `curl '${SITE_URL}/api/convert/ad-to-bs?year=2025&month=4&day=28'`,
  },
  {
    method: "GET",
    path: "/api/today",
    summary: "Today's date in BS and AD (Asia/Kathmandu)",
    example: `curl '${SITE_URL}/api/today'`,
  },
];

export default function ApiDocsPage() {
  return (
    <div className="container mx-auto px-4 py-10 max-w-4xl">
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "API Docs", path: "/api-docs" }]} />

      <header className="mt-6 mb-10">
        <h1 className="font-serif text-4xl md:text-5xl font-bold tracking-tight">
          Public Conversion API
        </h1>
        <p className="text-muted-foreground mt-3 text-lg">
          Drop-in REST API for BS↔AD conversion. JSON responses, no API key required.
        </p>
      </header>

      <div className="space-y-6">
        {ENDPOINTS.map((e) => (
          <article key={e.path} className="border rounded-2xl bg-card overflow-hidden">
            <header className="px-5 py-3 border-b bg-muted/30 flex items-center gap-3">
              <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-primary text-primary-foreground">
                {e.method}
              </span>
              <code className="text-sm font-mono">{e.path}</code>
            </header>
            <div className="px-5 py-4">
              <p className="text-sm">{e.summary}</p>
              <pre className="mt-3 text-xs font-mono bg-muted/30 border rounded-lg p-3 overflow-x-auto">
                <code>{e.example}</code>
              </pre>
            </div>
          </article>
        ))}
      </div>

      <section className="mt-12 prose prose-neutral dark:prose-invert max-w-none">
        <h2>Use it from JavaScript</h2>
        <pre><code>{`const r = await fetch(
  "${SITE_URL}/api/convert/bs-to-ad?year=2082&month=1&day=15"
);
const data = await r.json();
console.log(data.ad.formatted);
// => "April 28, 2025"`}</code></pre>
        <h2>Rate limits</h2>
        <p>
          The free public API is rate-limited per IP. For higher-volume use, self-host the open
          spec or contact us for a partnership.
        </p>
        <h2>Stability</h2>
        <p>
          The response shape is versioned via the OpenAPI spec. We will not break existing fields;
          new fields may be added over time.
        </p>
      </section>
    </div>
  );
}
