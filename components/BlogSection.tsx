"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { BlogPost } from "@/lib/blog";

function formatDate(date: string): string {
  return new Date(date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link href={`/blog/${post.slug}`} className="group block">
      <article className="subtle-card transition-colors hover:bg-muted">
        <div className="flex items-center gap-3 text-xs text-muted-foreground">
          <time dateTime={post.date}>{formatDate(post.date)}</time>
          <span className="h-0.5 w-0.5 rounded-full bg-muted-foreground" />
          <span>{post.readingTime}</span>
        </div>

        <h3 className="mt-3 text-base font-semibold group-hover:text-foreground">
          {post.title}
        </h3>

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

        <div className="mt-4 inline-flex items-center gap-1 text-xs text-muted-foreground group-hover:text-foreground transition-colors">
          <span>Read</span>
          <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
        </div>
      </article>
    </Link>
  );
}

interface BlogSectionProps {
  posts: BlogPost[];
}

export default function BlogSection({ posts }: BlogSectionProps) {
  if (posts.length === 0) return null;

  return (
    <section id="blog" className="section border-t border-border">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-3xl">
            <p className="section-kicker mb-4">Writing</p>
            <h2 className="section-title">From the blog.</h2>
          </div>
          <Link
            href="/blog"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            View all posts
          </Link>
        </div>

        <motion.div
          className="grid gap-5 md:grid-cols-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
