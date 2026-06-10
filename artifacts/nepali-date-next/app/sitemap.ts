import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import { BLOG_POSTS } from "@/data/blog-posts";

export const dynamic = "force-static";

// All paths include trailing slashes to match next.config trailingSlash: true.
const STATIC_ROUTES: { path: string; priority: number; changefreq: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
  { path: "/",                        priority: 1.0,  changefreq: "daily"   },
  { path: "/ad-to-bs-converter/",     priority: 0.95, changefreq: "weekly"  },
  { path: "/today-nepali-date/",      priority: 0.9,  changefreq: "daily"   },
  { path: "/age-calculator/",         priority: 0.85, changefreq: "monthly" },
  { path: "/date-difference/",        priority: 0.85, changefreq: "monthly" },
  { path: "/api-docs/",               priority: 0.7,  changefreq: "monthly" },
  { path: "/widget/",                 priority: 0.7,  changefreq: "monthly" },
  { path: "/blog/",                   priority: 0.85, changefreq: "weekly"  },
  { path: "/about/",                  priority: 0.5,  changefreq: "yearly"  },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const today = new Date();
  const entries: MetadataRoute.Sitemap = [];

  for (const r of STATIC_ROUTES) {
    entries.push({ url: `${SITE_URL}${r.path}`, lastModified: today, changeFrequency: r.changefreq, priority: r.priority });
  }

  for (const post of BLOG_POSTS) {
    entries.push({
      url: `${SITE_URL}/blog/${post.slug}/`,
      lastModified: new Date(post.modifiedIso ?? post.publishedIso),
      changeFrequency: "monthly",
      priority: 0.7,
    });
  }

  return entries;
}
