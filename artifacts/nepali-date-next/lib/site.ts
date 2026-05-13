export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ?? "https://npdates.org";

export const SITE = {
  name: "npdates",
  url: SITE_URL,
  title: "Nepali Date Converter — BS ↔ AD, Calendar & Festivals",
  description:
    "Convert Bikram Sambat (BS) ↔ Gregorian (AD) instantly. Today's Nepali date, Nepali calendar, festivals, fiscal year and date difference — fast, accurate and free.",
  locale: "en_US",
  twitterHandle: "@npdates",
  ogImage: `${SITE_URL}/opengraph.jpg`,
  publisher: "npdates",
  themeColor: "#FF6B35",
} as const;

export const NAV_LINKS = [
  { href: "/bs-to-ad-converter", label: "Converters" },
  { href: "/nepali-calendar", label: "Calendar" },
  { href: "/today-nepali-date", label: "Today" },
  { href: "/festivals", label: "Festivals" },
  { href: "/blog", label: "Blog" },
] as const;
