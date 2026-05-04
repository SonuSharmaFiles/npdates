import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const publicDir = path.join(root, "public");
const SITE = process.env.SITE_URL || "https://npdates.org";

const STATIC_ROUTES = [
  "/",
  "/bs-to-ad-converter",
  "/ad-to-bs-converter",
  "/today-nepali-date",
  "/nepali-calendar",
  "/age-calculator",
  "/date-difference",
  "/fiscal-year-converter",
  "/festivals",
  "/api-docs",
  "/widget",
  "/blog",
  "/about",
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

function buildSitemap() {
  const urls = [];

  for (const route of STATIC_ROUTES) {
    urls.push(`${SITE}${route}`);
  }

  for (const slug of BLOG_SLUGS) {
    urls.push(`${SITE}/blog/${slug}`);
  }

  for (const year of [2080, 2081, 2082, 2083, 2084, 2085]) {
    urls.push(`${SITE}/nepali-calendar-${year}`);
    for (let m = 1; m <= 12; m++) {
      urls.push(`${SITE}/calendar/${year}/${m}`);
    }
  }

  for (let y = 2075; y <= 2090; y++) {
    urls.push(`${SITE}/fiscal-year/${y}`);
  }

  const entries = urls.map((u) => `  <url>\n    <loc>${u}</loc>\n  </url>`).join("\n");
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries}\n</urlset>\n`;

  fs.mkdirSync(publicDir, { recursive: true });
  fs.writeFileSync(path.join(publicDir, "sitemap.xml"), xml, "utf8");
  console.log(`Wrote sitemap with ${urls.length} URLs to public/sitemap.xml`);
}

buildSitemap();
