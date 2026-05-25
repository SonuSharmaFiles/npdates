import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Page not found",
  description: "The page you're looking for doesn't exist on npdates.org.",
  path: "/404",
  noIndex: true,
});

export default function NotFound() {
  return (
    <section className="container mx-auto px-4 py-24 text-center">
      <p className="text-sm font-medium text-primary tracking-widest uppercase">404</p>
      <h1 className="mt-3 text-4xl font-serif font-bold md:text-5xl">Page not found</h1>
      <p className="mt-4 text-muted-foreground max-w-md mx-auto">
        The page you were looking for could not be found. Try the links below or head back to the home page.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link
          href="/"
          className="inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground px-5 py-2.5 text-sm font-medium hover:opacity-90 transition-opacity"
        >
          Go home
        </Link>
        <Link
          href="/ad-to-bs-converter"
          className="inline-flex items-center justify-center rounded-md border border-input px-5 py-2.5 text-sm font-medium hover:bg-accent transition-colors"
        >
          AD to BS Converter
        </Link>
      </div>

      {/* Additional links to help crawlers discover valid pages */}
      <nav className="mt-12 max-w-lg mx-auto">
        <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">
          Popular pages
        </h2>
        <div className="grid grid-cols-2 gap-2 text-sm">
          <Link href="/today-nepali-date" className="p-3 rounded-lg border hover:bg-accent transition-colors">
            Today&apos;s Nepali Date
          </Link>
          <Link href="/age-calculator" className="p-3 rounded-lg border hover:bg-accent transition-colors">
            Age Calculator
          </Link>
          <Link href="/date-difference" className="p-3 rounded-lg border hover:bg-accent transition-colors">
            Date Difference
          </Link>
          <Link href="/fiscal-year-converter" className="p-3 rounded-lg border hover:bg-accent transition-colors">
            Fiscal Year Converter
          </Link>
          <Link href="/blog" className="p-3 rounded-lg border hover:bg-accent transition-colors">
            Blog
          </Link>
          <Link href="/about" className="p-3 rounded-lg border hover:bg-accent transition-colors">
            About
          </Link>
        </div>
      </nav>
    </section>
  );
}
