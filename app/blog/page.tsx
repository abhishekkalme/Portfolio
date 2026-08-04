import Link from "next/link";
import type { Metadata } from "next";
import { getAllPosts } from "@/lib/blog";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Blog",
  description: "Technical deep-dives, project write-ups, and things I've learned building web apps.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Blog",
    description: "Technical deep-dives, project write-ups, and things I've learned building web apps.",
    url: "/blog",
    type: "website",
    images: [siteConfig.ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog",
    description: "Technical deep-dives, project write-ups, and things I've learned building web apps.",
    images: [siteConfig.ogImage],
  },
};

function formatDate(date: string): string {
  return new Date(date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export default function BlogPage() {
  const posts = getAllPosts();

  const listSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Abhishek Kalme - Blog",
    url: `${siteConfig.url}/blog`,
    numberOfItems: posts.length,
    itemListElement: posts.map((post, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: post.title,
      description: post.description,
      datePublished: post.date,
      url: `${siteConfig.url}/blog/${post.slug}`,
    })),
  };

  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <div className="site-container">
        <nav className="fixed inset-x-0 top-0 z-40 border-b border-border bg-background/90 backdrop-blur-md">
          <div className="site-container">
            <div className="flex h-14 items-center justify-between gap-4">
              <Link
                href="/"
                className="flex items-baseline gap-2 text-sm font-medium tracking-[0.25em] uppercase text-muted-foreground"
              >
                <span className="h-6 w-[1px] bg-muted" />
                <span>Abhishek&nbsp;Kalme</span>
              </Link>
              <div className="flex items-center gap-6 text-xs font-medium tracking-[0.18em] uppercase">
                <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors pb-1">
                  Home
                </Link>
                <span className="relative pb-1 text-foreground">
                  Blog
                  <span className="absolute inset-x-0 -bottom-0.5 h-[1px] bg-foreground" />
                </span>
              </div>
            </div>
          </div>
        </nav>

        <main className="pt-16">
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(listSchema) }}
          />
          <section className="section">
            <div className="mx-auto max-w-3xl">
              <p className="section-kicker mb-4">Blog</p>
              <h1 className="section-title mb-6">Writing.</h1>
              <p className="text-base leading-relaxed text-muted-foreground mb-16">
                Thoughts on building web apps, project deep-dives, and things
                I&apos;ve learned along the way.
              </p>

              <div className="space-y-6">
                {posts.map((post) => (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="group block"
                  >
                    <article className="subtle-card transition-colors hover:bg-muted">
                      <div className="flex items-center gap-3 text-xs text-muted-foreground">
                        <time dateTime={post.date}>{formatDate(post.date)}</time>
                        <span className="h-0.5 w-0.5 rounded-full bg-muted-foreground" />
                        <span>{post.readingTime}</span>
                      </div>

                      <h2 className="mt-3 text-base font-semibold group-hover:text-foreground">
                        {post.title}
                      </h2>

                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {post.description}
                      </p>

                      <div className="mt-4 flex flex-wrap gap-1.5">
                        {post.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full border border-border px-2 py-0.5 text-xs text-muted-foreground"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </article>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
