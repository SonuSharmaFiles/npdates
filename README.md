# 🇳🇵 npdates — Nepali Date Converter & Calendar

A comprehensive Nepali (Bikram Sambat) date conversion platform with a modern React frontend and a RESTful API server. Convert between BS and AD dates, browse the full Nepali calendar, explore festivals, and much more.

---

## ✨ Features

| Feature | Description |
| --- | --- |
| **BS ↔ AD Converter** | Accurate Bikram Sambat to Gregorian date conversion and vice versa |
| **Nepali Calendar** | Full monthly calendar view with AD mappings and festival highlights |
| **Festival Directory** | Browse Nepal's public holidays and festivals by year and month |
| **Age Calculator** | Calculate age in both BS and AD systems |
| **Date Difference** | Find the difference between two Nepali dates |
| **Fiscal Year Converter** | Map Nepali fiscal years to their Gregorian equivalents |
| **Embeddable Widget** | Drop a mini calendar widget into any website |
| **REST API** | Programmatic access to all conversion and calendar data |

## 🏗️ Project Structure

```
npdates/
├── artifacts/
│   ├── nepali-date/          # React + Vite frontend (SPA)
│   │   ├── src/
│   │   │   ├── components/   # Reusable UI components
│   │   │   ├── pages/        # Route-level page components
│   │   │   ├── data/         # Festival data & blog posts
│   │   │   └── lib/          # Core conversion logic
│   │   └── public/           # Static assets & PWA manifest
│   └── api-server/           # Express API server
│       └── src/
│           ├── routes/       # API route handlers
│           └── lib/          # Shared Nepali date logic
├── lib/                      # Shared libraries (API client, Zod schemas, DB)
│   ├── api-client-react/
│   ├── api-spec/
│   ├── api-zod/
│   └── db/
├── scripts/                  # Build & utility scripts
└── package.json              # pnpm workspace root
```

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript, Vite, Wouter (routing), Tailwind CSS
- **Backend**: Express.js, TypeScript
- **Package Manager**: pnpm (workspace monorepo)
- **Build**: Vite (frontend), custom ESBuild script (API server)
- **Styling**: Tailwind CSS v4 with a custom design system

## 🚀 Getting Started

### Prerequisites

- **Node.js** ≥ 18
- **pnpm** ≥ 9

### Installation

```bash
# Clone the repository
git clone https://github.com/<your-username>/npdates.git
cd npdates

# Install dependencies
pnpm install
```

### Development

```bash
# Start the full-stack dev server (frontend + API)
pnpm run dev

# Or run individually:
# Frontend only
cd artifacts/nepali-date && pnpm run dev

# API server only
cd artifacts/api-server && pnpm run dev
```

### Build

```bash
# Type-check and build all packages
pnpm run build
```

## 📡 API Endpoints

The API server provides the following endpoints:

| Method | Endpoint | Description |
| --- | --- | --- |
| `GET` | `/api/calendar/:year/:month` | Get calendar data for a BS month |
| `GET` | `/api/convert/bs-to-ad` | Convert BS date → AD date |
| `GET` | `/api/convert/ad-to-bs` | Convert AD date → BS date |
| `GET` | `/api/today` | Get today's date in both systems |

## 📄 License

MIT

---

<p align="center">
  Built with ❤️ for the Nepali community
</p>
