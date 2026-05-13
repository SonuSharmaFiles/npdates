# Migration: React/Vite SPA → Next.js 15 App Router

This document is the source of truth for migrating `artifacts/nepali-date` (Vite SPA) to `artifacts/nepali-date-next` (Next.js 15 App Router). Both projects coexist during migration so the production site at `npdates.org` keeps serving from GitHub Pages until the cutover.

---

## 1. Migration plan (phases)

### Phase 1 — Foundation (DONE in this commit)
- New Next.js 15 project scaffolded at `artifacts/nepali-date-next/`
- Tailwind v4 + ported theme (light/dark, CSS variables, brand orange)
- Root layout with next-themes provider, fonts via `next/font`
- SEO infrastructure: `lib/seo.ts`, `lib/site.ts`, dynamic Metadata API, JSON-LD helpers (WebApplication, Organization, Breadcrumb, FAQ, Article)
- `app/sitemap.ts` and `app/robots.ts` (Next.js native, no script needed)
- Header / Footer ported (Wouter → `next/link` + `usePathname`)
- Error pages: `not-found.tsx`, `error.tsx`
- Date converter library ported as-is (`lib/converter.ts`)
- Example pages of each rendering pattern:
  - **SSG**: `app/page.tsx` (Home), `app/blog/page.tsx`
  - **ISR**: `app/today-nepali-date/page.tsx` (1-hour revalidation)
  - **SSG + generateStaticParams**: `app/blog/[slug]/page.tsx`

### Phase 2 — Port data + UI primitives (NEXT)
- Copy `src/data/bs-calendar-data.ts` → `data/bs-calendar-data.ts` (verbatim, 130 years of BS data)
- Copy `src/data/blog-posts.ts` → `data/blog-posts.ts`
- Copy `src/data/festivals.ts` → `data/festivals.ts`
- Copy `src/components/ui/*` → `components/ui/*` (Radix-based, work as-is)
- Copy `src/hooks/use-mobile.tsx` and `use-toast.ts` → `hooks/`
- Add `"use client"` directive to any UI component using hooks

### Phase 3 — Migrate static pages (mechanical port)
| Page | Old | New | Rendering |
|---|---|---|---|
| BS → AD Converter | `src/pages/BsToAd.tsx` | `app/bs-to-ad-converter/page.tsx` | SSG |
| AD → BS Converter | `src/pages/AdToBs.tsx` | `app/ad-to-bs-converter/page.tsx` | SSG |
| Nepali Calendar | `src/pages/NepaliCalendar.tsx` | `app/nepali-calendar/page.tsx` | SSG (interactive parts wrapped in `"use client"` component) |
| Age Calculator | `src/pages/AgeCalculator.tsx` | `app/age-calculator/page.tsx` | SSG shell + client form |
| Date Difference | `src/pages/DateDifference.tsx` | `app/date-difference/page.tsx` | SSG shell + client form |
| Fiscal Year Converter | `src/pages/FiscalYearConverter.tsx` | `app/fiscal-year-converter/page.tsx` | SSG |
| Festivals | `src/pages/Festivals.tsx` | `app/festivals/page.tsx` | SSG (festival data is static) |
| API Docs | `src/pages/ApiDocs.tsx` | `app/api-docs/page.tsx` | SSG |
| Widget Builder | `src/pages/Widget.tsx` | `app/widget/page.tsx` | SSG shell + client form |
| About | `src/pages/About.tsx` | `app/about/page.tsx` | SSG |
| Embed | `src/pages/Embed.tsx` | `app/embed/page.tsx` | SSG (note: standalone layout — see below) |

### Phase 4 — Migrate dynamic-route pages (with generateStaticParams)
| Page | Old | New | Pre-render |
|---|---|---|---|
| BS → AD landing | `BsToAdLanding.tsx` | `app/bs-to-ad/[year]/[month]/[day]/page.tsx` | Years 2082, 2083 → ~730 pages |
| AD → BS landing | `AdToBsLanding.tsx` | `app/ad-to-bs/[year]/[month]/[day]/page.tsx` | Years 2026, 2027 → ~730 pages |
| Calendar Year | `CalendarYear.tsx` | `app/nepali-calendar-[year]/page.tsx` | BS 2080–2085 → 6 pages |
| Calendar Month | `CalendarMonth.tsx` | `app/calendar/[year]/[month]/page.tsx` | 6 × 12 = 72 pages |
| Fiscal Year | `FiscalYearLanding.tsx` | `app/fiscal-year/[year]/page.tsx` | BS 2075–2090 → 16 pages |
| Blog post | `BlogPost.tsx` | `app/blog/[slug]/page.tsx` | ~18 posts |

All use:
```ts
export function generateStaticParams() { /* return param combinations */ }
export const dynamicParams = false; // 404 for any not pre-built
```

### Phase 5 — Embed page (special layout)
The current `/embed` route renders without `<Layout>`. In Next.js App Router this maps to a **route group with its own layout**:

```
app/(embed)/embed/layout.tsx   ← no header/footer, just <html><body>{children}</body></html>
app/(embed)/embed/page.tsx
```

Or move the embed page to a dedicated `/embed/` path with `layout.tsx` that doesn't render Header/Footer. The current root layout is global, so prefer a route group.

### Phase 6 — Port interactive client components
These all need `"use client"`:
- `ConverterCard.tsx` → uses `useState`, `localStorage`
- `BsDateSelector.tsx`, `AdDateSelector.tsx` → form state
- `CalendarGrid.tsx` → interactive
- `use-mobile`, `use-toast` hooks
- Any select / dialog / popover usage

Server components can pass static props to client components. The page wrapper should remain a server component to keep SEO-friendly HTML in the initial response.

### Phase 7 — QA + deployment
- `pnpm build` produces 0 errors
- Lighthouse: LCP < 2.5s, CLS ≈ 0, TBT < 200ms
- View Source on any page → see real HTML content, not just `<div id="root">`
- Run all pages on local production build (`pnpm start`)
- Deploy to Vercel; configure `npdates.org` custom domain
- Decommission GitHub Pages deployment

---

## 2. Folder structure

```
artifacts/nepali-date-next/
├── app/
│   ├── globals.css                       ← Tailwind v4 + theme
│   ├── layout.tsx                        ← Root layout, providers, fonts
│   ├── page.tsx                          ← Home (SSG)
│   ├── not-found.tsx                     ← 404
│   ├── error.tsx                         ← Runtime error
│   ├── robots.ts                         ← Generates /robots.txt
│   ├── sitemap.ts                        ← Generates /sitemap.xml
│   ├── bs-to-ad-converter/page.tsx
│   ├── ad-to-bs-converter/page.tsx
│   ├── today-nepali-date/page.tsx        ← ISR (revalidate: 3600)
│   ├── nepali-calendar/page.tsx
│   ├── nepali-calendar-[year]/page.tsx
│   ├── calendar/[year]/[month]/page.tsx
│   ├── age-calculator/page.tsx
│   ├── date-difference/page.tsx
│   ├── fiscal-year-converter/page.tsx
│   ├── fiscal-year/[year]/page.tsx
│   ├── festivals/page.tsx
│   ├── bs-to-ad/[year]/[month]/[day]/page.tsx
│   ├── ad-to-bs/[year]/[month]/[day]/page.tsx
│   ├── blog/
│   │   ├── page.tsx                      ← Blog index
│   │   └── [slug]/page.tsx               ← Dynamic post (SSG)
│   ├── api-docs/page.tsx
│   ├── widget/page.tsx
│   ├── about/page.tsx
│   └── (embed)/
│       └── embed/
│           ├── layout.tsx                ← Bare layout, no Header/Footer
│           └── page.tsx
├── components/
│   ├── layout/
│   │   ├── Header.tsx                    ← "use client" (theme toggle + mobile menu)
│   │   └── Footer.tsx
│   ├── theme/
│   │   └── ThemeProvider.tsx             ← "use client" (next-themes wrapper)
│   ├── seo/
│   │   ├── JsonLd.tsx                    ← Schema.org payloads
│   │   └── Breadcrumbs.tsx               ← Visible + BreadcrumbList JSON-LD
│   ├── converter/
│   │   ├── ConverterCard.tsx             ← "use client"
│   │   ├── BsDateSelector.tsx            ← "use client"
│   │   └── AdDateSelector.tsx            ← "use client"
│   ├── calendar/
│   │   └── CalendarGrid.tsx              ← "use client"
│   └── ui/                               ← Ported Radix components
├── data/
│   ├── bs-calendar-data.ts               ← BS 1970–2099 month-day table
│   ├── blog-posts.ts
│   └── festivals.ts
├── hooks/
│   ├── use-mobile.tsx                    ← "use client"
│   └── use-toast.ts                      ← "use client"
├── lib/
│   ├── site.ts                           ← SITE_URL, brand constants, nav
│   ├── seo.ts                            ← buildMetadata, ROOT_METADATA
│   ├── converter.ts                      ← Pure date logic (server-safe)
│   └── utils.ts                          ← cn() helper
├── public/
│   ├── favicon.svg                       ← copy from current public/
│   ├── opengraph.jpg                     ← copy from current public/
│   └── manifest.webmanifest               ← copy from current public/
├── next.config.ts                        ← Security headers, redirects, images
├── tsconfig.json
├── postcss.config.mjs
├── package.json
├── .env.example
├── .gitignore
└── MIGRATION.md                          ← this file
```

---

## 3. SEO implementation summary

| Concern | Implementation |
|---|---|
| Page titles | `generateMetadata` per page via `buildMetadata({ title, description, path })` in `lib/seo.ts` |
| Meta descriptions | Same helper; required field |
| Canonical | `alternates: { canonical: url }` set automatically by `buildMetadata` |
| Open Graph | Auto-set by `buildMetadata` — absolute image URL via `${SITE_URL}/opengraph.jpg` |
| Twitter Cards | Auto-set; `summary_large_image` |
| JSON-LD (WebApp + Org) | Rendered globally in `app/layout.tsx` via `<JsonLd data={[webApplicationLd, organizationLd]} />` |
| JSON-LD (Breadcrumbs) | Rendered by `<Breadcrumbs>` component (visible + structured) |
| JSON-LD (FAQ) | `faqLd()` helper on Home and other FAQ-bearing pages |
| JSON-LD (Article) | `articleLd()` helper on blog posts |
| `robots.txt` | `app/robots.ts` — Next.js generates `/robots.txt` |
| `sitemap.xml` | `app/sitemap.ts` — Next.js generates `/sitemap.xml` |
| `www` → apex redirect | `next.config.ts` `redirects()` with `host` match |
| Trailing-slash policy | Next default: no trailing slash; consistent |
| HTTPS / HSTS | `Strict-Transport-Security` in `next.config.ts` headers |
| `index, follow` | Default in `ROOT_METADATA`; per-page `noIndex` opt-out |

---

## 4. Deployment instructions (Vercel — recommended)

### One-time setup
1. **Install Vercel CLI** (optional, for previews): `npm i -g vercel`
2. **Create Vercel account** at https://vercel.com (free Hobby plan is fine for SSG/ISR)
3. **Push `nepali-date-next/` to a Git branch** (or its own repo)

### Connect repository
1. Vercel dashboard → **Add New Project** → import the GitHub repo
2. **Root Directory**: `artifacts/nepali-date-next`
3. **Framework Preset**: Next.js (auto-detected)
4. **Build Command**: `next build` (default)
5. **Output Directory**: `.next` (default)
6. **Environment Variables**:
   - `NEXT_PUBLIC_SITE_URL` = `https://npdates.org`
7. Click **Deploy**

### Configure custom domain
1. Vercel project → **Settings** → **Domains** → add `npdates.org`
2. Add `www.npdates.org` as well (we redirect `www` → apex in `next.config.ts`)
3. Update DNS at your registrar:
   - `A` record: `npdates.org` → `76.76.21.21`
   - `CNAME`: `www.npdates.org` → `cname.vercel-dns.com`
4. Wait for SSL provisioning (Vercel handles Let's Encrypt automatically)

### Decommission GitHub Pages
After Vercel is serving traffic:
1. GitHub repo → Settings → Pages → set source to "None" (or leave the old branch deployed but DNS now points to Vercel)
2. Remove `CNAME` file from `artifacts/nepali-date/public/` if applicable
3. Keep the old `artifacts/nepali-date/` directory in the repo for a couple of weeks as rollback safety

### Alternative: Cloudflare Pages
- Build command: `pnpm build`
- Output: `.next` (using Cloudflare Pages' Next.js adapter)
- Set environment variables identically
- Note: ISR works via Edge functions; less mature than Vercel for App Router

### Alternative: Static export to GitHub Pages
Not recommended (loses ISR), but possible:
- Add `output: "export"` to `next.config.ts`
- Drop ISR (`revalidate`) from pages
- `next build` outputs static HTML to `out/`
- All dynamic pages must be in `generateStaticParams`
- No `next/image` optimization (use `unoptimized: true`)

---

## 5. Post-migration checklist

### Code
- [ ] Every page exports `metadata` or `generateMetadata`
- [ ] Every dynamic route exports `generateStaticParams` with `dynamicParams = false`
- [ ] No `<a href>` to internal routes — only `<Link href>`
- [ ] All images use `next/image` (`Image` component); absolute URLs in metadata
- [ ] No `window`, `document`, `localStorage` in server components
- [ ] `pnpm typecheck` passes
- [ ] `pnpm lint` passes
- [ ] `pnpm build` succeeds with no warnings

### SEO sanity
- [ ] `view-source:` on every page type shows real content (not blank shell)
- [ ] `https://npdates.org/sitemap.xml` returns XML
- [ ] `https://npdates.org/robots.txt` returns rules + sitemap line
- [ ] Open Graph debugger renders correctly (https://www.opengraph.xyz)
- [ ] Twitter card validator shows correct preview
- [ ] Google Rich Results test passes for: WebApplication, Article, FAQPage, BreadcrumbList
- [ ] Lighthouse SEO score 100 on home, today, calendar, a blog post, a dynamic landing page

### Performance
- [ ] LCP < 2.5s (Lighthouse mobile)
- [ ] CLS < 0.1
- [ ] First Load JS < 200KB (per page report)
- [ ] Largest image < 200KB
- [ ] Fonts use `display: swap` (next/font does this by default)

### Domain / DNS
- [ ] `https://npdates.org` resolves to Vercel
- [ ] `http://npdates.org` → 301 → `https://npdates.org`
- [ ] `www.npdates.org` → 301 → `https://npdates.org`
- [ ] SSL valid, HSTS preload header present

---

## 6. Google Search Console submission checklist

### One-time
- [ ] Verify ownership of `npdates.org` (DNS TXT or HTML file via Vercel)
- [ ] **Sitemaps** → submit `sitemap.xml`
- [ ] **URL inspection** → "Request indexing" for `/`, top 5 converters, top 3 blog posts
- [ ] **Settings → Crawl rate** → leave default

### Ongoing (weekly for first month)
- [ ] **Coverage** report — confirm pages move from "Discovered" to "Indexed"
- [ ] **Performance** — track impressions and average position
- [ ] **Enhancements** — check for breadcrumb, FAQ, sitelinks rich results
- [ ] **Mobile Usability** — should be zero issues

### Migration-specific (one-time)
- [ ] If site was previously indexed at `npdates.org`, no URL changes — Google will recrawl naturally
- [ ] Use **Change of Address** tool only if changing domains (not needed here)

### External
- [ ] Submit to Bing Webmaster Tools (mirrors Google submission)
- [ ] Update internal social media bios to point at `npdates.org`
