import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import { BLOG_POSTS } from "@/data/blog-posts";
import { getDaysInBsMonth } from "@/lib/converter";
import {
  BS_LANDING_YEARS as SHARED_BS,
  AD_LANDING_YEARS as SHARED_AD,
} from "@/lib/pre-render-years";

export const dynamic = "force-static";

// All paths include trailing slashes to match next.config trailingSlash: true.
const STATIC_ROUTES: { path: string; priority: number; changefreq: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
  { path: "/",                        priority: 1.0,  changefreq: "daily"   },
  { path: "/ad-to-bs-converter/",     priority: 0.95, changefreq: "weekly"  },
  { path: "/today-nepali-date/",      priority: 0.9,  changefreq: "daily"   },
  { path: "/age-calculator/",         priority: 0.85, changefreq: "monthly" },
  { path: "/date-difference/",        priority: 0.85, changefreq: "monthly" },
  { path: "/fiscal-year-converter/",  priority: 0.85, changefreq: "monthly" },
  { path: "/api-docs/",               priority: 0.7,  changefreq: "monthly" },
  { path: "/widget/",                 priority: 0.7,  changefreq: "monthly" },
  { path: "/blog/",                   priority: 0.85, changefreq: "weekly"  },
  { path: "/about/",                  priority: 0.5,  changefreq: "yearly"  },
];

const BS_LANDING_YEARS = SHARED_BS;
const AD_LANDING_YEARS = SHARED_AD;

export default function sitemap(): MetadataRoute.Sitemap {
  const today = new Date();
  const entries: MetadataRoute.Sitemap = [];

  for (const r of STATIC_ROUTES) {
    entries.push({ url: `${SITE_URL}${r.path}`, lastModified: today, changeFrequency: r.changefreq, priority: r.priority });
  }

  for (const post of BLOG_POSTS) {
    entries.push({
      url: `${SITE_URL}/blog/${post.slug}/`,
      lastModified: new Date(post.publishedIso),
      changeFrequency: "monthly",
      priority: 0.7,
    });
  }

  for (let y = 2075; y <= 2089; y++) {
    entries.push({ url: `${SITE_URL}/fiscal-year/${y}/`, lastModified: today, changeFrequency: "yearly", priority: 0.75 });
  }

  // High-volume programmatic SEO: every BS↔AD day for nearby years
  for (const y of BS_LANDING_YEARS) {
    for (let m = 1; m <= 12; m++) {
      const days = getDaysInBsMonth(y, m);
      for (let d = 1; d <= days; d++) {
        entries.push({ url: `${SITE_URL}/bs-to-ad/${y}/${m}/${d}/`, lastModified: today, changeFrequency: "yearly", priority: 0.55 });
      }
    }
  }
  for (const y of AD_LANDING_YEARS) {
    const monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if (y % 4 === 0 && (y % 100 !== 0 || y % 400 === 0)) monthDays[1] = 29;
    for (let m = 1; m <= 12; m++) {
      for (let d = 1; d <= monthDays[m - 1]; d++) {
        entries.push({ url: `${SITE_URL}/ad-to-bs/${y}/${m}/${d}/`, lastModified: today, changeFrequency: "yearly", priority: 0.55 });
      }
    }
  }

  return entries;
}
