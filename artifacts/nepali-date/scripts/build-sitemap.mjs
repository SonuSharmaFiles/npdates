// Generates a comprehensive sitemap.xml at build time covering programmatic
// SEO pages for BS↔AD date combinations.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const publicDir = path.join(root, "public");
const SITE = process.env.SITE_URL || "https://npdates.app";

// BS calendar shape — kept inline so this script has no TypeScript dependencies.
const BS_MONTH_DAYS = {
  2080: [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30],
  2081: [31, 32, 31, 32, 31, 31, 30, 30, 29, 29, 30, 31],
  2082: [31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30],
  2083: [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
  2084: [31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 30],
  2085: [31, 32, 31, 32, 31, 31, 30, 30, 29, 30, 29, 31],
};

const STATIC_ROUTES = [
  { loc: "/", priority: 1.0, changefreq: "daily" },
  { loc: "/bs-to-ad-converter", priority: 0.95, changefreq: "weekly" },
  { loc: "/ad-to-bs-converter", priority: 0.95, changefreq: "weekly" },
  { loc: "/today-nepali-date", priority: 0.9, changefreq: "daily" },
  { loc: "/nepali-calendar", priority: 0.9, changefreq: "weekly" },
  { loc: "/age-calculator", priority: 0.85, changefreq: "monthly" },
  { loc: "/date-difference", priority: 0.85, changefreq: "monthly" },
  { loc: "/fiscal-year-converter", priority: 0.85, changefreq: "monthly" },
  { loc: "/festivals", priority: 0.85, changefreq: "weekly" },
  { loc: "/api-docs", priority: 0.7, changefreq: "monthly" },
  { loc: "/widget", priority: 0.7, changefreq: "monthly" },
  { loc: "/blog", priority: 0.85, changefreq: "weekly" },
  { loc: "/about", priority: 0.5, changefreq: "yearly" },
];

const BLOG_SLUGS = [
  "what-is-bikram-sambat",
  "how-bs-to-ad-conversion-works",
  "difference-between-bs-and-ad",
  "nepali-fiscal-year-explained",
  "dashain-2083-dates",
  "tihar-2083-dates",
  "nepali-calendar-2082-guide",
  "convert-government-form-dates",
  "list-of-public-holidays-nepal",
  "nepali-months-in-order",
  "nepali-new-year-2083",
  "nepali-calendar-2083-guide",
  "maghe-sankranti-explained",
  "how-to-convert-date-of-birth-bs-to-ad",
  "teej-festival-dates-2083",
  "nepali-patro-guide",
  "bs-date-for-visa-application",
  "nepali-date-difference-calculator",
];

function urlEntry(loc, priority = 0.7, changefreq = "monthly", lastmod) {
  const fullLoc = `${SITE}${loc}`;
  return [
    "  <url>",
    `    <loc>${fullLoc}</loc>`,
    lastmod ? `    <lastmod>${lastmod}</lastmod>` : null,
    `    <changefreq>${changefreq}</changefreq>`,
    `    <priority>${priority.toFixed(2)}</priority>`,
    "  </url>",
  ]
    .filter(Boolean)
    .join("\n");
}

function buildSitemap() {
  const today = new Date().toISOString().slice(0, 10);
  const entries = [];

  for (const r of STATIC_ROUTES) {
    entries.push(urlEntry(r.loc, r.priority, r.changefreq, today));
  }

  // Blog posts
  for (const slug of BLOG_SLUGS) {
    entries.push(urlEntry(`/blog/${slug}`, 0.7, "monthly", today));
  }

  // Programmatic SEO: BS year + month landing pages (calendar)
  for (const year of [2080, 2081, 2082, 2083, 2084, 2085]) {
    entries.push(urlEntry(`/nepali-calendar-${year}`, 0.8, "monthly", today));
    for (let m = 1; m <= 12; m++) {
      entries.push(urlEntry(`/calendar/${year}/${m}`, 0.65, "monthly", today));
    }
  }

  // Programmatic SEO: per-day BS->AD pages for the current and next BS year
  for (const year of [2082, 2083]) {
    const months = BS_MONTH_DAYS[year];
    if (!months) continue;
    for (let m = 1; m <= 12; m++) {
      const days = months[m - 1];
      for (let d = 1; d <= days; d++) {
        entries.push(
          urlEntry(`/bs-to-ad/${year}/${m}/${d}`, 0.55, "yearly", today),
        );
      }
    }
  }

  // Programmatic SEO: per-day AD->BS pages for current and next AD year
  for (const year of [2026, 2027]) {
    const monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) monthDays[1] = 29;
    for (let m = 1; m <= 12; m++) {
      for (let d = 1; d <= monthDays[m - 1]; d++) {
        entries.push(
          urlEntry(`/ad-to-bs/${year}/${m}/${d}`, 0.55, "yearly", today),
        );
      }
    }
  }

  // Programmatic SEO: fiscal year landing pages
  for (let y = 2075; y <= 2090; y++) {
    entries.push(urlEntry(`/fiscal-year/${y}`, 0.75, "yearly", today));
  }

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries.join("\n")}\n</urlset>\n`;

  fs.mkdirSync(publicDir, { recursive: true });
  fs.writeFileSync(path.join(publicDir, "sitemap.xml"), xml, "utf8");
  console.log(`Wrote sitemap with ${entries.length} URLs to public/sitemap.xml`);
}

buildSitemap();
