import type { Metadata } from "next";
import { SITE, SITE_URL } from "./site";

type PageMetaInput = {
  title: string;
  description: string;
  path?: string;
  image?: string;
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
  noIndex?: boolean;
  keywords?: string[];
};

export function buildMetadata(input: PageMetaInput): Metadata {
  const path = input.path ?? "/";
  // Ensure canonical URLs always have trailing slashes (matching next.config trailingSlash: true).
  // The root "/" already ends with a slash; all other paths get one appended.
  const normalizedPath = path === "/" ? path : path.replace(/\/$/, "") + "/";
  const url = `${SITE_URL}${normalizedPath}`;
  const image = input.image ?? SITE.ogImage;
  const fullTitle =
    path === "/" ? input.title : `${input.title} — ${SITE.name}`;

  return {
    // Use absolute title — bypasses ROOT_METADATA's template so the site name
    // isn't appended twice (e.g. "About npdates — The Nepali Date Toolkit — npdates").
    title: { absolute: fullTitle },
    description: input.description,
    keywords: input.keywords,
    alternates: { canonical: url },
    robots: input.noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true, "max-image-preview": "large" },
    openGraph: {
      type: input.type ?? "website",
      url,
      siteName: SITE.name,
      title: fullTitle,
      description: input.description,
      images: [{ url: image, width: 1200, height: 630, alt: input.title }],
      locale: SITE.locale,
      publishedTime: input.publishedTime,
      modifiedTime: input.modifiedTime,
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: input.description,
      images: [image],
    },
  };
}

export const ROOT_METADATA: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE.title,
    template: `%s — ${SITE.name}`,
  },
  description: SITE.description,
  applicationName: SITE.name,
  generator: "Next.js",
  authors: [{ name: SITE.publisher, url: SITE_URL }],
  publisher: SITE.publisher,
  formatDetection: { telephone: false, email: false, address: false },
  alternates: { canonical: SITE_URL },
  robots: { index: true, follow: true, "max-image-preview": "large" },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: SITE.name,
    title: SITE.title,
    description: SITE.description,
    locale: SITE.locale,
    images: [{ url: SITE.ogImage, width: 1200, height: 630, alt: SITE.title }],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.title,
    description: SITE.description,
    images: [SITE.ogImage],
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
  manifest: "/manifest.webmanifest",
};
