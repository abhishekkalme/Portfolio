"use client";

import { Github, ExternalLink } from "lucide-react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

const projects = [
  {
    id: 1,
    title: 'Learnify',
    description:
      'Built a full-stack LMS with role-based access, secure auth, and a clean flow for notes and learning content.',
    highlight:
      'Kept learning workflows smooth across devices with fast pages, predictable permissions, and efficient media uploads.',
    image: '/LMS.png',
    tags: ['MERN Stack', 'Authentication', 'Role-Based Access', 'Cloudinary', 'Syllabus Upload'],
    tagColors: ['bg-blue-600', 'bg-green-600', 'bg-red-600', 'bg-purple-600', 'bg-orange-600'],
    codeLink: 'https://github.com/abhishekkalme/LMS-MERN',
    demoLink: 'https://mylearnify.vercel.app/',
  },
  {
    id: 2,
    title: 'CineVerse',
    description:
      'Built a movie discovery app using the TMDB API with fast browsing, search, and a mobile-first UI.',
    highlight:
      'Optimised for quick search and filtering so people can find something to watch without fighting the interface.',
    image: '/cineverse.png',
    tags: ['React.js', 'Vite', 'TMDB API', 'Responsive UI', 'Tailwind CSS'],
    tagColors: ['bg-blue-600', 'bg-green-600', 'bg-purple-600', 'bg-orange-600', 'bg-cyan-600'],
    codeLink: 'https://github.com/abhishekkalme/React.js-MovieApp-and-TMDB-API',
    demoLink: 'https://cineverse25.netlify.app/',
  },
  {
    id: 3,
    title: 'Portfolio Website',
    description:
      'Designed and built this portfolio with intentional typography, spacing, and a clear story.',
    highlight:
      'Focused on a calm reading experience, strong hierarchy, and a layout that works just as well on smaller screens.',
    image: '/Portfolio.png',
    tags: ['Next.js', 'Tailwind CSS', 'Responsive Design', 'React.js'],
    tagColors: ['bg-blue-600', 'bg-green-600', 'bg-purple-600', 'bg-orange-600'],
    codeLink: 'https://github.com/abhishekkalme/Portfolio',
    demoLink: 'https://abhishek-portfolio25.vercel.app',
  },
  {
    id: 4,
    title: 'Redis-Based-API-Rate-Limiter',
    description:
      'Built a Redis-backed rate limiter to protect APIs from abuse while keeping latency low.',
    highlight:
      'Designed predictable limits, clear responses, and a small integration surface so it can drop into existing Node services easily.',
    image: '/rt.png',
    tags: ['Node.js', 'Redis', 'API', 'Rate Limiting'],
    tagColors: ['bg-blue-600', 'bg-green-600', 'bg-purple-600', 'bg-orange-600'],
    codeLink: 'https://github.com/abhishekkalme/Redis-Based-API-Rate-Limiter',
    demoLink: '',
  },
];

// Motion Variants
const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

export default function ProjectsSection() {
  return (
    <section id="projects" className="section border-t border-border">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="section-kicker mb-3">Selected work</p>
            <h2 className="section-title">A few projects I’ve enjoyed building.</h2>
          </div>
          <p className="max-w-sm text-xs leading-relaxed text-muted-foreground md:text-sm">
            A mix of product work and small experiments. If you’d like details
            on any project, I’m happy to share what I learned.
          </p>
        </div>

        <motion.div
          className="grid gap-6 md:grid-cols-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {projects.map((project) => (
            <motion.article
              key={project.id}
              className="glass-card flex flex-col overflow-hidden"
              variants={cardVariants}
            >
              <div className="relative aspect-[16/9] overflow-hidden border-b border-border bg-muted">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-contain"
                />
              </div>

              <div className="flex flex-1 flex-col gap-3 px-4 py-4">
                <header>
                  <h3 className="text-sm font-semibold md:text-base">
                    {project.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {project.highlight}
                  </p>
                </header>

                <div className="flex flex-wrap gap-1.5 text-xs text-muted-foreground">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="rounded-full border border-border px-2 py-0.5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-2 flex gap-3 text-xs">
                  <a
                    href={project.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-muted-foreground hover:text-foreground"
                  >
                    <Github className="h-3.5 w-3.5" />
                    <span>Code</span>
                  </a>
                  {project.demoLink && (
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-muted-foreground hover:text-foreground"
                    >
                      <ExternalLink className="h-3.5 w-3.5" />
                      <span>Live</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
