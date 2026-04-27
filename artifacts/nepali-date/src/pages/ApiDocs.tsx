import { Seo } from "@/components/Seo";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { useHealthCheck } from "@workspace/api-client-react";

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
    example: `curl 'https://npdates.app/api/convert/bs-to-ad?year=2082&month=1&day=15'`,
  },
  {
    method: "GET",
    path: "/api/convert/ad-to-bs?year=2025&month=4&day=28",
    summary: "Convert a Gregorian (AD) date to Bikram Sambat",
    example: `curl 'https://npdates.app/api/convert/ad-to-bs?year=2025&month=4&day=28'`,
  },
  {
    method: "GET",
    path: "/api/today",
    summary: "Today's date in BS and AD (Asia/Kathmandu)",
    example: `curl 'https://npdates.app/api/today'`,
  },
  {
    method: "GET",
    path: "/api/calendar/{year}/{month}",
    summary: "Full BS month grid with festivals and AD mappings",
    example: `curl 'https://npdates.app/api/calendar/2082/6'`,
  },
  {
    method: "GET",
    path: "/api/festivals/{year}",
    summary: "Festivals and public holidays for a BS year",
    example: `curl 'https://npdates.app/api/festivals/2082'`,
  },
  {
    method: "GET",
    path: "/api/fiscal-year/{year}",
    summary: "Nepal fiscal year window for a starting BS year",
    example: `curl 'https://npdates.app/api/fiscal-year/2082'`,
  },
];

export default function ApiDocs() {
  const health = useHealthCheck();

  return (
    <>
      <Seo
        title="Nepali Date Converter API — Public REST endpoints | npdates"
        description="Free public API for Nepali date conversion. Convert BS↔AD, fetch the calendar, festivals and Nepal fiscal year programmatically. JSON, no auth required."
        path="/api-docs"
        breadcrumb={[
          { name: "Home", url: "/" },
          { name: "API Docs", url: "/api-docs" },
        ]}
      />
      <div className="container mx-auto px-4 py-10 max-w-4xl">
        <Breadcrumbs
          items={[
            { name: "Home", url: "/" },
            { name: "API Docs", url: "/api-docs" },
          ]}
        />
        <header className="mt-6 mb-10">
          <h1 className="font-serif text-4xl md:text-5xl font-bold tracking-tight">
            Public Conversion API
          </h1>
          <p className="text-muted-foreground mt-3 text-lg">
            Drop-in REST API for BS↔AD conversion, calendar grids, festivals and
            fiscal year. JSON responses, no API key required.
          </p>
          <div className="mt-4 inline-flex items-center gap-2 text-xs">
            <span
              className={`inline-block h-2 w-2 rounded-full ${
                health.data?.status === "ok" ? "bg-green-500" : "bg-muted-foreground"
              }`}
            />
            <span className="text-muted-foreground">
              {health.data?.status === "ok" ? "API is online" : "Checking status…"}
            </span>
          </div>
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
  "https://npdates.app/api/convert/bs-to-ad?year=2082&month=1&day=15"
);
const data = await r.json();
console.log(data.ad.formatted);
// => "April 28, 2025"`}</code></pre>
          <h2>Rate limits</h2>
          <p>
            The free public API is rate-limited per IP. For higher-volume use,
            self-host the open spec or contact us for a partnership.
          </p>
          <h2>Stability</h2>
          <p>
            The response shape is versioned via the OpenAPI spec. We will not
            break existing fields; new fields may be added over time.
          </p>
        </section>
      </div>
    </>
  );
}
