import { Link } from "wouter";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";

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

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center mx-auto px-4">
        <Link href="/" className="flex items-center space-x-2 font-serif font-bold text-xl text-primary">
          <span>npdates</span>
        </Link>
        <nav className="hidden md:flex flex-1 items-center space-x-6 ml-6 text-sm font-medium">
          <Link href="/bs-to-ad-converter" className="transition-colors hover:text-foreground/80 text-foreground/60">Converters</Link>
          <Link href="/nepali-calendar" className="transition-colors hover:text-foreground/80 text-foreground/60">Calendar</Link>
          <Link href="/today-nepali-date" className="transition-colors hover:text-foreground/80 text-foreground/60">Today</Link>
          <Link href="/festivals" className="transition-colors hover:text-foreground/80 text-foreground/60">Festivals</Link>
          <Link href="/blog" className="transition-colors hover:text-foreground/80 text-foreground/60">Blog</Link>
        </nav>
        <div className="flex flex-1 items-center justify-end space-x-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          >
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </div>
      </div>
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
              <li><Link href="/bs-to-ad-converter" className="hover:text-primary">BS to AD</Link></li>
              <li><Link href="/ad-to-bs-converter" className="hover:text-primary">AD to BS</Link></li>
              <li><Link href="/age-calculator" className="hover:text-primary">Age Calculator</Link></li>
              <li><Link href="/date-difference" className="hover:text-primary">Date Difference</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4 text-sm">Calendar & Info</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/nepali-calendar" className="hover:text-primary">Calendar</Link></li>
              <li><Link href="/today-nepali-date" className="hover:text-primary">Today's Date</Link></li>
              <li><Link href="/festivals" className="hover:text-primary">Festivals</Link></li>
              <li><Link href="/fiscal-year-converter" className="hover:text-primary">Fiscal Year</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4 text-sm">Resources</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/blog" className="hover:text-primary">Blog</Link></li>
              <li><Link href="/api-docs" className="hover:text-primary">API</Link></li>
              <li><Link href="/widget" className="hover:text-primary">Widgets</Link></li>
              <li><Link href="/about" className="hover:text-primary">About</Link></li>
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
