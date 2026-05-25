import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          // 404 page — no value in crawling
          "/404",
          // Embed is noindex; save crawl budget by blocking it
          "/embed",
          // ── BS-to-AD: block years we don't pre-render ──
          // Only years 2080–2085 are pre-rendered; block everything else
          "/bs-to-ad/19",    // 19xx years
          // NOTE: do NOT add "/bs-to-ad/20" — robots.txt uses prefix matching,
          // so that rule would block the pre-rendered /bs-to-ad/2080..2085 pages.
          "/bs-to-ad/200",   // 200x years
          "/bs-to-ad/201",   // 201x years
          "/bs-to-ad/202",   // 202x years
          "/bs-to-ad/203",   // 203x years
          "/bs-to-ad/204",   // 204x years
          "/bs-to-ad/205",   // 205x years
          "/bs-to-ad/206",   // 206x years
          "/bs-to-ad/207",   // 207x years
          // 2070-2079 — not pre-rendered
          "/bs-to-ad/2070/",
          "/bs-to-ad/2071/",
          "/bs-to-ad/2072/",
          "/bs-to-ad/2073/",
          "/bs-to-ad/2074/",
          "/bs-to-ad/2075/",
          "/bs-to-ad/2076/",
          "/bs-to-ad/2077/",
          "/bs-to-ad/2078/",
          "/bs-to-ad/2079/",
          // 2086-2099 — not pre-rendered
          "/bs-to-ad/2086/",
          "/bs-to-ad/2087/",
          "/bs-to-ad/2088/",
          "/bs-to-ad/2089/",
          "/bs-to-ad/2090/",
          "/bs-to-ad/2091/",
          "/bs-to-ad/2092/",
          "/bs-to-ad/2093/",
          "/bs-to-ad/2094/",
          "/bs-to-ad/2095/",
          "/bs-to-ad/2096/",
          "/bs-to-ad/2097/",
          "/bs-to-ad/2098/",
          "/bs-to-ad/2099/",
          // ── AD-to-BS: block years we don't pre-render ──
          // Only years 2023–2029 are pre-rendered; block everything else
          "/ad-to-bs/19",    // 19xx years
          "/ad-to-bs/200",   // 200x years
          "/ad-to-bs/201",   // 201x years
          "/ad-to-bs/2020/",
          "/ad-to-bs/2021/",
          "/ad-to-bs/2022/",
          "/ad-to-bs/2030/",
          "/ad-to-bs/2031/",
          "/ad-to-bs/2032/",
          "/ad-to-bs/2033/",
          "/ad-to-bs/2034/",
          "/ad-to-bs/2035/",
        ],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
