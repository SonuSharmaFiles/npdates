import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd, articleLd } from "@/components/seo/JsonLd";
import { BLOG_POSTS, getBlogPost } from "@/data/blog-posts";

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

      <header className="mt-6">
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
