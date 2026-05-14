// Single source of truth for what year ranges we pre-render at build time.
// Used by:
//  - app/(main)/bs-to-ad/[year]/[month]/[day]/page.tsx — generateStaticParams
//  - app/(main)/ad-to-bs/[year]/[month]/[day]/page.tsx — generateStaticParams
//  - app/sitemap.ts — to emit only URLs that actually resolve
//  - Cross-link guards on landing pages — to avoid 404s when a reverse-lookup
//    or "view month" link would target a year outside our pre-render window.

export const BS_LANDING_YEARS = [2080, 2081, 2082, 2083, 2084, 2085] as const;
export const AD_LANDING_YEARS = [2023, 2024, 2025, 2026, 2027, 2028, 2029] as const;
export const CALENDAR_YEARS = [2080, 2081, 2082, 2083, 2084, 2085] as const;

export function isBsLandingPreRendered(year: number) {
  return (BS_LANDING_YEARS as readonly number[]).includes(year);
}
export function isAdLandingPreRendered(year: number) {
  return (AD_LANDING_YEARS as readonly number[]).includes(year);
}
export function isCalendarPreRendered(year: number) {
  return (CALENDAR_YEARS as readonly number[]).includes(year);
}
