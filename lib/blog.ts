import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";

const postsDirectory = path.join(process.cwd(), "content/blog");

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  readingTime: string;
  tags: string[];
}

export interface BlogPostContent extends BlogPost {
  content: string;
}

function getFormattedReadingTime(minutes: number): string {
  if (minutes < 1) return "1 min read";
  return `${Math.round(minutes)} min read`;
}

function toDate(value: unknown): Date {
  if (value instanceof Date) return value;
  const parsed = new Date(value as string);
  return Number.isNaN(parsed.getTime()) ? new Date(0) : parsed;
}

export function getAllPosts(): BlogPost[] {
  const fileNames = fs.readdirSync(postsDirectory);

  const posts = fileNames
    .filter((name) => name.endsWith(".mdx"))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, "");
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { content, data } = matter(fileContents);
      const stats = readingTime(content);

      return {
        slug,
        title: data.title as string,
        description: data.description as string,
        date: data.date as string,
        readingTime: getFormattedReadingTime(stats.minutes),
        tags: (data.tags as string[]) || [],
      };
    });

  return posts.sort(
    (a, b) => toDate(b.date).getTime() - toDate(a.date).getTime()
  );
}

export function getPostBySlug(slug: string): BlogPostContent {
  const fullPath = path.join(postsDirectory, `${slug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { content, data } = matter(fileContents);
  const stats = readingTime(content);

  return {
    slug,
    title: data.title as string,
    description: data.description as string,
    date: data.date as string,
    readingTime: getFormattedReadingTime(stats.minutes),
    tags: (data.tags as string[]) || [],
    content,
  };
}

export function getAllPostSlugs(): string[] {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames
    .filter((name) => name.endsWith(".mdx"))
    .map((name) => name.replace(/\.mdx$/, ""));
}
