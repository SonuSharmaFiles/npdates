import Link from "next/link";

const FOOTER_GROUPS = [
  {
    title: "Converters",
    links: [
      { href: "/", label: "BS to AD" },
      { href: "/ad-to-bs-converter", label: "AD to BS" },
      { href: "/age-calculator", label: "Age Calculator" },
      { href: "/date-difference", label: "Date Difference" },
    ],
  },
  {
    title: "Tools",
    links: [
      { href: "/today-nepali-date", label: "Today's Date" },
      { href: "/widget", label: "Widgets" },
      { href: "/api-docs", label: "API" },
    ],
  },
  {
    title: "Resources",
    links: [
      { href: "/blog", label: "Blog" },
      { href: "/about", label: "About" },
    ],
  },
] as const;

export function Footer() {
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
          {FOOTER_GROUPS.map((g) => (
            <div key={g.title}>
              <h3 className="font-semibold mb-4 text-sm">{g.title}</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {g.links.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="hover:text-primary transition-colors">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} npdates.org. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
