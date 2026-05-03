import { Helmet } from "react-helmet-async";

export const SITE_URL = "https://npdates.app";

export interface BreadcrumbItem {
  name: string;
  url: string;
}

export interface SeoProps {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
  ogType?: string;
  noIndex?: boolean;
  breadcrumb?: BreadcrumbItem[];
  jsonLd?: object | object[];
}

export function Seo({
  title,
  description,
  path,
  ogImage = "/opengraph.jpg",
  ogType = "website",
  noIndex,
  breadcrumb,
  jsonLd,
}: SeoProps) {
  const canonical = `${SITE_URL}${path}`;
  const ld: object[] = [];
  if (breadcrumb && breadcrumb.length > 0) {
    ld.push({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: breadcrumb.map((b, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: b.name,
        item: `${SITE_URL}${b.url}`,
      })),
    });
  }
  if (jsonLd) {
    if (Array.isArray(jsonLd)) ld.push(...jsonLd);
    else ld.push(jsonLd);
  }

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      {noIndex ? (
        <meta name="robots" content="noindex,follow" />
      ) : (
        <meta name="robots" content="index,follow,max-image-preview:large" />
      )}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={`${SITE_URL}${ogImage}`} />
      <meta property="og:site_name" content="npdates" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${SITE_URL}${ogImage}`} />
      {ld.map((entry, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(entry)}
        </script>
      ))}
    </Helmet>
  );
}
