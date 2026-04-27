# npdates — Nepali Date Toolkit

A premium SEO-first Nepali date converter and calendar suite. Built as a pnpm monorepo with a Vite + React frontend and an Express 5 API.

## Artifacts

- `artifacts/nepali-date` — `web`, mounted at `/`. The customer-facing site.
- `artifacts/api-server` — `api`, mounted at `/api`, port 8080. Public conversion API.
- `artifacts/mockup-sandbox` — design playground.

## What's built

### Frontend (`artifacts/nepali-date`)
React 18 + Vite + Tailwind v4, wouter routing, react-helmet-async for SEO, next-themes for dark/light, framer-motion + sonner for polish.

Routes:
- `/` Home — hero, live converter, features grid, FAQ (FAQ JSON-LD)
- `/bs-to-ad-converter`, `/ad-to-bs-converter`, `/today-nepali-date`
- `/nepali-calendar`, `/nepali-calendar-:year`, `/calendar/:year/:month`
- `/age-calculator`, `/date-difference`
- `/fiscal-year-converter`, `/fiscal-year/:year`
- `/festivals`
- `/bs-to-ad/:y/:m/:d`, `/ad-to-bs/:y/:m/:d` (programmatic SEO landings with FAQ + WebPage JSON-LD)
- `/blog`, `/blog/:slug` (10 long-form posts, Article JSON-LD)
- `/api-docs`, `/widget`, `/embed` (no-chrome embed for iframes), `/about`

Shared components: `Layout`, `Seo`, `Breadcrumbs`, `CalendarGrid`, `ConverterCard`, `BsDateSelector`, `AdDateSelector`.

Data: `lib/converter.ts` (BS↔AD math, BS year range 1970-2099, fiscal year, age, day-difference), `data/festivals.ts`, `data/blog-posts.ts`.

Sitemap: `scripts/build-sitemap.mjs` writes `public/sitemap.xml` (1577 URLs) at dev/build start.

### Backend (`artifacts/api-server`)
Express 5 + Pino. `lib/nepali/{bs-calendar-data,converter,festivals}.ts` mirror the frontend math.

Endpoints:
- `GET /api/healthz`
- `GET /api/convert/bs-to-ad?year&month&day`
- `GET /api/convert/ad-to-bs?year&month&day`
- `GET /api/today` — current date in Asia/Kathmandu
- `GET /api/calendar/:year/:month` — month grid with festivals
- `GET /api/festivals/:year`
- `GET /api/fiscal-year/:year`

All endpoints verified working; today (Apr 27 2026 AD) → Chaitra 26, 2082 BS.

## Conventions

- Theme: crimson `--primary: 0 100% 27%` (light) / `0 80% 45%` (dark). Serif: Fraunces. Sans: Inter.
- Path-based routing via wouter `base` from `import.meta.env.BASE_URL`.
- The `/embed` route opts out of the global Layout in `App.tsx` so it can be iframed cleanly.

## Local dev

The web workflow runs `node ./scripts/build-sitemap.mjs && vite ...` so the sitemap regenerates on every restart.
