import { SITE_URL } from "@/lib/site";

type AnyRecord = Record<string, unknown>;

export function JsonLd({ data }: { data: AnyRecord | AnyRecord[] }) {
  return (
    <script
      type="application/ld+json"
      // Schema.org payloads from internal data — safe to inline.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export const webApplicationLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Nepali Date Converter",
  url: SITE_URL + "/",
  description:
    "Convert Nepali Bikram Sambat (BS) to AD and back, view today's Nepali date, browse the Nepali calendar, festivals and fiscal year.",
  applicationCategory: "UtilitiesApplication",
  operatingSystem: "Web",
  browserRequirements: "Requires JavaScript",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  publisher: { "@type": "Organization", name: "npdates", url: SITE_URL + "/" },
};

export const organizationLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "npdates",
  url: SITE_URL + "/",
  logo: SITE_URL + "/opengraph.jpg",
  sameAs: [],
};

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
    author: { "@type": "Organization", name: "npdates" },
    publisher: {
      "@type": "Organization",
      name: "npdates",
      logo: { "@type": "ImageObject", url: SITE_URL + "/opengraph.jpg" },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE_URL}/blog/${article.slug}` },
  };
}
