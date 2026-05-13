import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import { BLOG_POSTS } from "@/data/blog-posts";
import { getDaysInBsMonth } from "@/lib/converter";

export const dynamic = "force-static";

const STATIC_ROUTES: { path: string; priority: number; changefreq: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
  { path: "/",                       priority: 1.0,  changefreq: "daily"   },
  { path: "/bs-to-ad-converter",     priority: 0.95, changefreq: "weekly"  },
  { path: "/ad-to-bs-converter",     priority: 0.95, changefreq: "weekly"  },
  { path: "/today-nepali-date",      priority: 0.9,  changefreq: "daily"   },
  { path: "/nepali-calendar",        priority: 0.9,  changefreq: "weekly"  },
  { path: "/age-calculator",         priority: 0.85, changefreq: "monthly" },
  { path: "/date-difference",        priority: 0.85, changefreq: "monthly" },
  { path: "/fiscal-year-converter",  priority: 0.85, changefreq: "monthly" },
  { path: "/festivals",              priority: 0.85, changefreq: "weekly"  },
  { path: "/api-docs",               priority: 0.7,  changefreq: "monthly" },
  { path: "/widget",                 priority: 0.7,  changefreq: "monthly" },
  { path: "/blog",                   priority: 0.85, changefreq: "weekly"  },
  { path: "/about",                  priority: 0.5,  changefreq: "yearly"  },
];

const BS_LANDING_YEARS = [2082, 2083];
const AD_LANDING_YEARS = [2026, 2027];
const CALENDAR_YEARS = [2080, 2081, 2082, 2083, 2084, 2085];

export default function sitemap(): MetadataRoute.Sitemap {
  const today = new Date();
  const entries: MetadataRoute.Sitemap = [];

  for (const r of STATIC_ROUTES) {
    entries.push({ url: `${SITE_URL}${r.path}`, lastModified: today, changeFrequency: r.changefreq, priority: r.priority });
  }

  for (const post of BLOG_POSTS) {
    entries.push({
      url: `${SITE_URL}/blog/${post.slug}`,
      lastModified: new Date(post.publishedIso),
      changeFrequency: "monthly",
      priority: 0.7,
    });
  }

  for (const y of CALENDAR_YEARS) {
    entries.push({ url: `${SITE_URL}/nepali-calendar-${y}`, lastModified: today, changeFrequency: "monthly", priority: 0.8 });
    for (let m = 1; m <= 12; m++) {
      entries.push({ url: `${SITE_URL}/calendar/${y}/${m}`, lastModified: today, changeFrequency: "monthly", priority: 0.65 });
    }
  }

  for (let y = 2075; y <= 2089; y++) {
    entries.push({ url: `${SITE_URL}/fiscal-year/${y}`, lastModified: today, changeFrequency: "yearly", priority: 0.75 });
  }

  // High-volume programmatic SEO: every BS↔AD day for nearby years
  for (const y of BS_LANDING_YEARS) {
    for (let m = 1; m <= 12; m++) {
      const days = getDaysInBsMonth(y, m);
      for (let d = 1; d <= days; d++) {
        entries.push({ url: `${SITE_URL}/bs-to-ad/${y}/${m}/${d}`, lastModified: today, changeFrequency: "yearly", priority: 0.55 });
      }
    }
  }
  for (const y of AD_LANDING_YEARS) {
    const monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if (y % 4 === 0 && (y % 100 !== 0 || y % 400 === 0)) monthDays[1] = 29;
    for (let m = 1; m <= 12; m++) {
      for (let d = 1; d <= monthDays[m - 1]; d++) {
        entries.push({ url: `${SITE_URL}/ad-to-bs/${y}/${m}/${d}`, lastModified: today, changeFrequency: "yearly", priority: 0.55 });
      }
    }
  }

  return entries;
}
