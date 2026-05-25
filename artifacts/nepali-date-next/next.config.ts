import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // GitHub Pages requires a fully static export.
  // Build outputs to ./out which is what GitHub Actions will publish.
  output: "export",

  // Image optimization needs a server; disabled for static export.
  // Image tags still work, but they're served as-is.
  images: { unoptimized: true },

  // GitHub Pages serves directory-based index.html files natively.
  // With trailing slashes, Next.js generates `/page/index.html` which GitHub Pages
  // resolves correctly for both `/page` and `/page/`. Without trailing slashes,
  // Next.js generates `page.html` which causes 404s when crawlers request `/page/`.
  trailingSlash: true,

  reactStrictMode: true,
  poweredByHeader: false,

  experimental: {
    optimizePackageImports: ["lucide-react", "date-fns"],
  },

  // NOTE: headers() and redirects() are ignored in static export.
  // For www → apex redirect, configure at the DNS/CDN level (Cloudflare or GitHub).
  // For security headers (HSTS, etc.), use a Cloudflare proxy or GitHub Pages defaults.
};

export default nextConfig;
