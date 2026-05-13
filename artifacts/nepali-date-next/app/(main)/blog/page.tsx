import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { BLOG_POSTS } from "@/data/blog-posts";

export const metadata: Metadata = buildMetadata({
  title: "Blog — Guides, conversion tips and Nepali calendar explainers",
  description:
    "In-depth guides on Bikram Sambat, Nepali calendar, fiscal year, festivals and date conversion best practices.",
  path: "/blog",
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
          Guides and explainers on Nepali dates, calendar, fiscal year and festivals.
        </p>
      </header>

      <ul className="mt-12 space-y-6">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link
              href={`/blog/${post.slug}`}
              className="block rounded-xl border bg-card p-6 hover-elevate card-shadow"
            >
              <h2 className="text-xl font-semibold">{post.title}</h2>
              <p className="mt-2 text-muted-foreground">{post.description}</p>
              <p className="mt-3 text-xs text-muted-foreground">
                {new Date(post.publishedIso).toLocaleDateString("en-US", { dateStyle: "long" })} ·{" "}
                {post.readingMinutes} min read
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
