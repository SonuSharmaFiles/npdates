import { useRoute, Link } from "wouter";
import { Seo, SITE_URL } from "@/components/Seo";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { BLOG_POSTS, getBlogPost } from "@/data/blog-posts";

export default function BlogPost() {
  const [, params] = useRoute("/blog/:slug");
  const post = getBlogPost(params?.slug ?? "");
  if (!post) {
    return (
      <div className="container mx-auto px-4 py-16">
        <h1 className="font-serif text-3xl font-bold">Post not found</h1>
        <Link href="/blog" className="text-primary mt-2 inline-block">
          ← All posts
        </Link>
      </div>
    );
  }

  const others = BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(0, 4);

  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.publishedIso,
    dateModified: post.publishedIso,
    author: { "@type": "Organization", name: "npdates" },
    publisher: {
      "@type": "Organization",
      name: "npdates",
      logo: { "@type": "ImageObject", url: `${SITE_URL}/opengraph.jpg` },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}/blog/${post.slug}`,
    },
  };

  return (
    <>
      <Seo
        title={`${post.title} | npdates`}
        description={post.description}
        path={`/blog/${post.slug}`}
        ogType="article"
        breadcrumb={[
          { name: "Home", url: "/" },
          { name: "Blog", url: "/blog" },
          { name: post.title, url: `/blog/${post.slug}` },
        ]}
        jsonLd={articleLd}
      />
      <div className="container mx-auto px-4 py-10 max-w-3xl">
        <Breadcrumbs
          items={[
            { name: "Home", url: "/" },
            { name: "Blog", url: "/blog" },
            { name: post.title, url: `/blog/${post.slug}` },
          ]}
        />
        <article className="mt-6">
          <header className="mb-8">
            <h1 className="font-serif text-3xl md:text-5xl font-bold tracking-tight leading-tight">
              {post.title}
            </h1>
            <p className="text-muted-foreground mt-4 text-lg">{post.description}</p>
            <div className="text-xs text-muted-foreground mt-4 flex gap-3">
              <time dateTime={post.publishedIso}>
                {new Date(post.publishedIso).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </time>
              <span>·</span>
              <span>{post.readingMinutes} min read</span>
            </div>
          </header>
          <div
            className="prose prose-neutral dark:prose-invert max-w-none prose-headings:font-serif prose-a:text-primary"
            dangerouslySetInnerHTML={{ __html: post.body }}
          />
        </article>

        <section className="mt-16 pt-10 border-t">
          <h2 className="font-serif text-2xl font-bold mb-4">More from the blog</h2>
          <ul className="space-y-3">
            {others.map((p) => (
              <li key={p.slug}>
                <Link
                  href={`/blog/${p.slug}`}
                  className="block p-4 rounded-xl border hover-elevate"
                >
                  <div className="font-medium">{p.title}</div>
                  <div className="text-sm text-muted-foreground mt-1">
                    {p.description}
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </>
  );
}
