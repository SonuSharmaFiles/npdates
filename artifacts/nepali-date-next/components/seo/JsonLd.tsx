import { SITE_URL, SITE } from "@/lib/site";

type AnyRecord = Record<string, unknown>;

export function JsonLd({ data }: { data: AnyRecord | AnyRecord[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

// ─── Site-wide schemas (rendered globally in root layout) ───────────────────

export const websiteLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  name: SITE.name,
  alternateName: "Nepali Date Converter",
  url: `${SITE_URL}/`,
  description: SITE.description,
  inLanguage: "en",
  publisher: { "@id": `${SITE_URL}/#organization` },
};

export const organizationLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: SITE.name,
  url: `${SITE_URL}/`,
  description:
    "Maintainers of npdates, a free Bikram Sambat ↔ Gregorian date toolkit including a Nepali calendar, festivals and fiscal-year reference.",
  logo: {
    "@type": "ImageObject",
    url: `${SITE_URL}/opengraph.jpg`,
    width: 1200,
    height: 630,
  },
};

export const webApplicationLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "@id": `${SITE_URL}/#webapp`,
  name: "Nepali Date Converter",
  url: `${SITE_URL}/`,
  description:
    "Convert Nepali Bikram Sambat (BS) to AD and back, view today's Nepali date, browse the Nepali calendar, festivals and fiscal year.",
  applicationCategory: "UtilitiesApplication",
  operatingSystem: "Web",
  inLanguage: "en",
  isAccessibleForFree: true,
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  publisher: { "@id": `${SITE_URL}/#organization` },
  featureList: [
    "Bikram Sambat (BS) to Gregorian (AD) date conversion",
    "Gregorian (AD) to Bikram Sambat (BS) date conversion",
    "Today's Nepali date in Kathmandu time",
    "Full Nepali (Bikram Sambat) calendar with festivals",
    "Nepali fiscal year lookup",
    "Age calculator (BS and AD)",
    "Date difference calculator",
    "Public REST API",
  ],
};

// ─── Per-page schema helpers ────────────────────────────────────────────────

export function breadcrumbLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: item.name,
      item: SITE_URL + item.path,
    })),
  };
}

export function faqLd(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}

export function articleLd(article: {
  title: string;
  description: string;
  slug: string;
  publishedIso: string;
  modifiedIso?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    url: `${SITE_URL}/blog/${article.slug}`,
    datePublished: article.publishedIso,
    dateModified: article.modifiedIso ?? article.publishedIso,
    inLanguage: "en",
    author: { "@id": `${SITE_URL}/#organization` },
    publisher: { "@id": `${SITE_URL}/#organization` },
    mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE_URL}/blog/${article.slug}` },
  };
}
