export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ?? "https://npdates.org";

export const SITE = {
  name: "npdates",
  url: SITE_URL,
  title: "Nepali Date Converter — BS ↔ AD",
  description:
    "Convert Bikram Sambat (BS) ↔ Gregorian (AD) instantly. Today's Nepali date, age calculator, date difference and fiscal year — fast, accurate and free.",
  locale: "en_US",
  twitterHandle: "@npdates",
  ogImage: `${SITE_URL}/opengraph.jpg`,
  publisher: "npdates",
  themeColor: "#FF6B35",
} as const;

export const NAV_LINKS = [
  { href: "/bs-to-ad-converter", label: "BS to AD" },
  { href: "/ad-to-bs-converter", label: "AD to BS" },
  { href: "/today-nepali-date", label: "Today" },
  { href: "/age-calculator", label: "Age Calculator" },
  { href: "/date-difference", label: "Date Difference" },
  { href: "/blog", label: "Blog" },
] as const;
