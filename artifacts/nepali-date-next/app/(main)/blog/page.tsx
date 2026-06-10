import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { BLOG_POSTS } from "@/data/blog-posts";

// Same fallback used on the per-post page — keeps the index visually
// consistent for posts that haven't supplied their own coverImage yet.
const DEFAULT_COVER = "/opengraph.jpg";

export const metadata: Metadata = buildMetadata({
  title: "Nepali Date Blog — BS ↔ AD Conversion Guides, Patro Explainers & Tips",
  description:
    "In-depth guides on Bikram Sambat: BS↔AD conversion, the Nepali patro, fiscal year, festivals, age calculation and practical tips for forms, visas and admissions.",
  path: "/blog",
  keywords: ["Nepali date blog", "Bikram Sambat guide", "BS to AD guide", "Nepali patro"],
});

export default function BlogIndex() {
  const posts = [...BLOG_POSTS].sort(
    (a, b) => new Date(b.publishedIso).getTime() - new Date(a.publishedIso).getTime(),
  );

  return (
    <section className="container mx-auto px-4 py-12 md:py-16 max-w-4xl">
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Blog", path: "/blog" }]} />

      <header className="mt-6">
        <h1 className="text-4xl md:text-5xl font-serif font-bold">Blog</h1>
        <p className="mt-3 text-muted-foreground max-w-2xl">
          Guides and explainers on Nepali dates and date conversion.
        </p>
      </header>

      <ul className="mt-12 space-y-6">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link
              href={`/blog/${post.slug}`}
              className="group grid grid-cols-1 sm:grid-cols-[160px_1fr] gap-5 rounded-xl border bg-card p-4 sm:p-5 hover-elevate card-shadow overflow-hidden"
            >
              {/* Thumbnail. Decorative for screen readers — the link text
                  carries the article title — so alt="" is correct here. */}
              <div className="aspect-[1200/630] sm:aspect-square overflow-hidden rounded-lg bg-muted">
                <Image
                  src={post.coverImage ?? DEFAULT_COVER}
                  alt=""
                  width={400}
                  height={400}
                  sizes="(max-width: 640px) 100vw, 160px"
                  className="w-full h-full object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div>
                <h2 className="text-xl font-semibold">{post.title}</h2>
                <p className="mt-2 text-muted-foreground">{post.description}</p>
                <p className="mt-3 text-xs text-muted-foreground">
                  {new Date(post.publishedIso).toLocaleDateString("en-US", { dateStyle: "long" })} ·{" "}
                  {post.readingMinutes} min read
                </p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
