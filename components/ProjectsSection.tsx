"use client";

import { Github, ExternalLink, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "Learnify",
    description:
      "A full-stack LMS with role-based access, secure auth, and a clean flow for notes and learning content across devices.",
    image: "/LMS.png",
    tags: ["MERN Stack", "Authentication", "Role-Based Access", "Cloudinary"],
    codeLink: "https://github.com/abhishekkalme/LMS-MERN",
    demoLink: "https://mylearnify.vercel.app/",
    featured: true,
  },
  {
    id: 2,
    title: "CineVerse",
    description:
      "A movie discovery app using the TMDB API with fast browsing, search, and a mobile-first UI optimised for quick filtering.",
    image: "/cineverse.png",
    tags: ["React.js", "Vite", "TMDB API", "Tailwind CSS"],
    codeLink: "https://github.com/abhishekkalme/React.js-MovieApp-and-TMDB-API",
    demoLink: "https://cineverse25.netlify.app/",
    priority: true,
  },
  {
    id: 3,
    title: "MindCare AI",
    description:
      "A mental wellness platform with AI-guided support, journaling, and holistic self-care built with privacy and user agency in mind.",
    image: "/mw.png",
    tags: ["Next.js", "Vector DB", "LLM", "Caching"],
    codeLink: "https://github.com/abhishekkalme/Mental-Wellness-Support-Agent-",
    demoLink: "https://mental-wellness-support-agent.vercel.app/",
  },
  {
    id: 4,
    title: "Redis Rate Limiter",
    description:
      "A Redis-backed rate limiter to protect APIs from abuse with predictable limits, clear responses, and a small integration surface.",
    image: "/rt.png",
    tags: ["Node.js", "Redis", "API", "Rate Limiting"],
    codeLink: "https://github.com/abhishekkalme/Redis-Based-API-Rate-Limiter",
    demoLink: "https://ratelimiter.up.railway.app/",
    priority: true,
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

function ProjectLinks({ project }: { project: (typeof projects)[number] }) {
  return (
    <div className="flex gap-5 text-xs">
      <a
        href={project.codeLink}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors"
      >
        <Github className="h-3.5 w-3.5" />
        <span>Code</span>
      </a>
      {project.demoLink && (
        <a
          href={project.demoLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors"
        >
          <ExternalLink className="h-3.5 w-3.5" />
          <span>Live</span>
        </a>
      )}
    </div>
  );
}

function ProjectTags({ tags }: { tags: string[] }) {
  return (
    <div className="flex flex-wrap gap-1.5 text-xs text-muted-foreground">
      {tags.map((tag) => (
        <span key={tag} className="rounded-full border border-border px-2 py-0.5">
          {tag}
        </span>
      ))}
    </div>
  );
}

function FeaturedProject({
  project,
  variants,
}: {
  project: (typeof projects)[number];
  variants: Variants;
}) {
  return (
    <motion.article
      variants={variants}
      className="subtle-card group overflow-hidden"
    >
      <div className="grid lg:grid-cols-2">
        <div className="relative aspect-[16/9] overflow-hidden border-b border-border bg-muted lg:aspect-auto lg:border-b-0 lg:border-r">
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(min-width: 1024px) 560px, 100vw"
            className="object-contain p-6 transition-transform duration-500 group-hover:scale-[1.02]"
          />
        </div>
        <div className="flex flex-col gap-4 p-6 lg:p-8">
          <p className="section-kicker">Featured project</p>
          <h3 className="font-serif text-2xl tracking-tight lg:text-3xl">
            {project.title}
          </h3>
          <p className="text-sm leading-relaxed text-muted-foreground lg:text-base">
            {project.description}
          </p>
          <ProjectTags tags={project.tags} />
          <div className="flex flex-wrap items-center gap-4">
            <ProjectLinks project={project} />
            <a
              href={`/blog/building-lms-with-mern`}
              className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              <span>Read the case study</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

function ProjectCard({
  project,
  variants,
}: {
  project: (typeof projects)[number];
  variants: Variants;
}) {
  return (
    <motion.article
      variants={variants}
      className="subtle-card group flex flex-col overflow-hidden"
    >
      <div className="relative aspect-[16/9] overflow-hidden border-b border-border bg-muted">
        <Image
          src={project.image}
          alt={project.title}
          fill
          priority={project.priority}
          sizes="(min-width: 768px) 560px, 100vw"
          className="object-contain p-4 transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </div>

      <div className="flex flex-1 flex-col gap-3 p-6">
        <header>
          <h3 className="text-lg font-serif tracking-tight">{project.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            {project.description}
          </p>
        </header>

        <ProjectTags tags={project.tags} />

        <div className="mt-auto pt-2">
          <ProjectLinks project={project} />
        </div>
      </div>
    </motion.article>
  );
}

export default function ProjectsSection() {
  const featured = projects.find((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="section border-t border-border">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 max-w-3xl">
          <p className="section-kicker mb-4">Selected work</p>
          <h2 className="section-title">
            A few projects I&apos;ve enjoyed building.
          </h2>
        </div>

        <motion.div
          className="space-y-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={containerVariants}
        >
          {featured && (
            <FeaturedProject project={featured} variants={cardVariants} />
          )}

          <div className="grid gap-8 md:grid-cols-2">
            {rest.map((project) => (
              <ProjectCard key={project.id} project={project} variants={cardVariants} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
