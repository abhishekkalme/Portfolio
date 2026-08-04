import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getPostBySlug, getAllPostSlugs } from "@/lib/blog";
import { siteConfig } from "@/lib/site";
import rehypePrettyCode from "rehype-pretty-code";
import remarkGfm from "remark-gfm";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  try {
    const post = getPostBySlug(slug);
    const url = `${siteConfig.url}/blog/${post.slug}`;
    return {
      title: post.title,
      description: post.description,
      alternates: {
        canonical: url,
      },
      openGraph: {
        title: post.title,
        description: post.description,
        url,
        type: "article",
        publishedTime: post.date,
        modifiedTime: post.date,
        authors: [siteConfig.url],
        tags: post.tags,
        images: [siteConfig.ogImage],
      },
      twitter: {
        card: "summary_large_image",
        title: post.title,
        description: post.description,
        images: [siteConfig.ogImage],
      },
    };
  } catch {
    return { title: "Not Found" };
  }
}

function formatDate(date: string): string {
  return new Date(date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;

  let post;
  try {
    post = getPostBySlug(slug);
  } catch {
    notFound();
  }

  const url = `${siteConfig.url}/blog/${post.slug}`;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    keywords: post.tags.join(", "),
    image: `${siteConfig.url}${siteConfig.ogImage}`,
    author: {
      "@type": "Person",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    publisher: {
      "@type": "Person",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    inLanguage: "en",
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
                <Link href="/blog" className="text-muted-foreground hover:text-foreground transition-colors pb-1">
                  Blog
                </Link>
              </div>
            </div>
          </div>
        </nav>

        <main className="pt-16">
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
          />
          <article className="section">
            <div className="mx-auto max-w-3xl">
              <Link
                href="/blog"
                className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors mb-8"
              >
                ← All posts
              </Link>

              <header className="mb-12">
                <div className="flex items-center gap-3 text-xs text-muted-foreground mb-4">
                  <time dateTime={post.date}>{formatDate(post.date)}</time>
                  <span className="h-0.5 w-0.5 rounded-full bg-muted-foreground" />
                  <span>{post.readingTime}</span>
                </div>
                <h1 className="section-title">{post.title}</h1>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
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
              </header>

              <div className="prose">
                <MDXRemote
                  source={post.content}
                  options={{
                    mdxOptions: {
                      remarkPlugins: [remarkGfm],
                      rehypePlugins: [
                        [
                          rehypePrettyCode,
                          {
                            theme: "github-light",
                            keepBackground: false,
                          },
                        ],
                      ],
                    },
                  }}
                />
              </div>

              <div className="mt-16 border-t border-border pt-8">
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  ← Back to all posts
                </Link>
              </div>
            </div>
          </article>
        </main>
      </div>
    </div>
  );
}
