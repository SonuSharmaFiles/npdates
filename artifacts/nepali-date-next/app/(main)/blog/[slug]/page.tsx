import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd, articleLd } from "@/components/seo/JsonLd";
import { BLOG_POSTS, getBlogPost } from "@/data/blog-posts";

// Default hero used when a post doesn't supply its own coverImage.
// Matches the OG image used in social-share cards and Article JSON-LD.
const DEFAULT_COVER = "/opengraph.jpg";

type Params = { slug: string };

export const dynamicParams = false;

export function generateStaticParams(): Params[] {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) {
    return buildMetadata({
      title: "Post not found",
      description: "This blog post does not exist.",
      path: `/blog/${slug}`,
      noIndex: true,
    });
  }
  return buildMetadata({
    title: post.title,
    description: post.description,
    path: `/blog/${post.slug}`,
    image: post.coverImage,
    type: "article",
    publishedTime: post.publishedIso,
    modifiedTime: post.modifiedIso ?? post.publishedIso,
  });
}

export default async function BlogPostPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  return (
    <article className="container mx-auto px-4 py-12 md:py-16 max-w-3xl">
      <JsonLd
        data={articleLd({
          title: post.title,
          description: post.description,
          slug: post.slug,
          publishedIso: post.publishedIso,
          modifiedIso: post.modifiedIso,
          image: post.coverImage,
        })}
      />

      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
          { name: post.title, path: `/blog/${post.slug}` },
        ]}
      />

      {/* Hero image. Falls back to the site OG image when a post hasn't
          set its own coverImage, so every article gets visible imagery
          immediately and Article JSON-LD has a real image to point at. */}
      <div className="mt-6 overflow-hidden rounded-2xl border bg-muted">
        <Image
          src={post.coverImage ?? DEFAULT_COVER}
          alt={post.title}
          width={1200}
          height={630}
          priority
          sizes="(max-width: 768px) 100vw, 768px"
          className="w-full h-auto object-cover"
        />
      </div>

      <header className="mt-8">
        <h1 className="text-3xl md:text-5xl font-serif font-bold leading-tight">{post.title}</h1>
        <p className="mt-3 text-muted-foreground">{post.description}</p>
        <p className="mt-4 text-xs text-muted-foreground">
          {new Date(post.publishedIso).toLocaleDateString("en-US", { dateStyle: "long" })} ·{" "}
          {post.readingMinutes} min read
        </p>
      </header>

      <div
        className="prose dark:prose-invert max-w-none mt-10"
        dangerouslySetInnerHTML={{ __html: post.body }}
      />
    </article>
  );
}
