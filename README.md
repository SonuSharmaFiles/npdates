# npdates

The Nepali Date Toolkit — a fast, accurate Bikram Sambat ↔ Gregorian converter, calendar, festival reference and fiscal-year lookup. Lives at [npdates.org](https://npdates.org).

## Repo layout

This is a pnpm workspace.

| Path | What it is |
|---|---|
| `artifacts/nepali-date-next/` | **The live website.** Next.js 15 App Router, statically exported, deployed to GitHub Pages via the workflow in `.github/workflows/deploy.yml`. |
| `artifacts/api-server/` | Standalone Express API (separate from the website). |
| `artifacts/mockup-sandbox/` | Vite playground for UI prototypes. |
| `lib/*` | Shared workspace packages. |
| `scripts/` | Workspace tooling. |

## Working on the website

```bash
pnpm install
pnpm --filter npdates-next dev    # local dev server
pnpm --filter npdates-next build  # static export to artifacts/nepali-date-next/out
```

## Deployment

Pushes to `main` deploy automatically. The workflow also runs nightly at 00:00 Asia/Kathmandu so `/today-nepali-date` stays accurate.

The custom domain `npdates.org` is configured via `artifacts/nepali-date-next/public/CNAME` + DNS pointing to GitHub Pages.
