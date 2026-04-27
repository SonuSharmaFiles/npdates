import { Link } from "wouter";
import { Seo } from "@/components/Seo";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { BLOG_POSTS } from "@/data/blog-posts";

export default function Blog() {
  return (
    <>
      <Seo
        title="Blog — Articles on Nepali calendar, BS to AD, festivals & fiscal year"
        description="Long-form articles on the Bikram Sambat calendar: how conversion works, fiscal year explained, festival dates, government form tips and more."
        path="/blog"
        breadcrumb={[
          { name: "Home", url: "/" },
          { name: "Blog", url: "/blog" },
        ]}
      />
      <div className="container mx-auto px-4 py-10 max-w-4xl">
        <Breadcrumbs
          items={[
            { name: "Home", url: "/" },
            { name: "Blog", url: "/blog" },
          ]}
        />
        <header className="mt-6 mb-10">
          <h1 className="font-serif text-4xl md:text-5xl font-bold tracking-tight">
            Blog
          </h1>
          <p className="text-muted-foreground mt-3 text-lg">
            Practical, reliable articles on the Nepali calendar, festivals and date math.
          </p>
        </header>

        <div className="space-y-6">
          {BLOG_POSTS.map((p) => (
            <article
              key={p.slug}
              className="border rounded-2xl p-6 bg-card hover-elevate"
            >
              <Link href={`/blog/${p.slug}`}>
                <h2 className="font-serif text-2xl font-bold hover:text-primary transition-colors">
                  {p.title}
                </h2>
              </Link>
              <p className="text-muted-foreground mt-2">{p.description}</p>
              <div className="text-xs text-muted-foreground mt-3 flex gap-3">
                <span>{p.readingMinutes} min read</span>
                <span>·</span>
                <time dateTime={p.publishedIso}>
                  {new Date(p.publishedIso).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </time>
              </div>
            </article>
          ))}
        </div>
      </div>
    </>
  );
}
