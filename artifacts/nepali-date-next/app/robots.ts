import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        // /embed renders the converter for iframe consumers. It's intentionally
        // noindex via meta tag (Google still needs to crawl to see that tag),
        // so we don't disallow it here.
        disallow: ["/404"],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
