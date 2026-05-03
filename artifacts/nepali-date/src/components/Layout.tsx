import { useState } from "react";
import { Link, useLocation } from "wouter";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Moon, Sun, Menu, X } from "lucide-react";

const NAV_LINKS = [
  { href: "/bs-to-ad-converter", label: "Converters" },
  { href: "/nepali-calendar", label: "Calendar" },
  { href: "/today-nepali-date", label: "Today" },
  { href: "/festivals", label: "Festivals" },
  { href: "/blog", label: "Blog" },
] as const;

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-[100dvh] flex flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}

function Header() {
  const { theme, setTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const [location] = useLocation();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center mx-auto px-4">
        <Link
          href="/"
          className="flex items-center space-x-2 font-serif font-bold text-xl text-primary"
          onClick={() => setMenuOpen(false)}
        >
          <span>npdates</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex flex-1 items-center space-x-6 ml-6 text-sm font-medium">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`transition-colors hover:text-foreground/80 ${
                location.startsWith(l.href)
                  ? "text-foreground font-semibold"
                  : "text-foreground/60"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex flex-1 items-center justify-end space-x-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            aria-label="Toggle theme"
          >
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          </Button>

          {/* Mobile hamburger */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div className="md:hidden border-t bg-background/98 backdrop-blur">
          <nav className="container mx-auto px-4 py-3 flex flex-col gap-1">
            {NAV_LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className={`py-2.5 px-3 rounded-lg text-sm font-medium transition-colors hover:bg-muted ${
                  location.startsWith(l.href)
                    ? "text-primary bg-primary/5"
                    : "text-foreground/70"
                }`}
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t bg-muted/20">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-serif font-bold mb-4">npdates</h3>
            <p className="text-sm text-muted-foreground">
              Premium Bikram Sambat toolkit for Nepalis everywhere.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-4 text-sm">Converters</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/bs-to-ad-converter" className="hover:text-primary">
                  BS to AD
                </Link>
              </li>
              <li>
                <Link href="/ad-to-bs-converter" className="hover:text-primary">
                  AD to BS
                </Link>
              </li>
              <li>
                <Link href="/age-calculator" className="hover:text-primary">
                  Age Calculator
                </Link>
              </li>
              <li>
                <Link href="/date-difference" className="hover:text-primary">
                  Date Difference
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4 text-sm">Calendar & Info</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/nepali-calendar" className="hover:text-primary">
                  Calendar
                </Link>
              </li>
              <li>
                <Link href="/today-nepali-date" className="hover:text-primary">
                  Today's Date
                </Link>
              </li>
              <li>
                <Link href="/festivals" className="hover:text-primary">
                  Festivals
                </Link>
              </li>
              <li>
                <Link href="/fiscal-year-converter" className="hover:text-primary">
                  Fiscal Year
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4 text-sm">Resources</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/blog" className="hover:text-primary">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/api-docs" className="hover:text-primary">
                  API
                </Link>
              </li>
              <li>
                <Link href="/widget" className="hover:text-primary">
                  Widgets
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-primary">
                  About
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} npdates.app. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
