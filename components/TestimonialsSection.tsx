"use client";

import { motion, Variants } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Card } from "./ui/Card";

const contributions = [
  {
    id: 1,
    project: "RecodeHive",
    title: "Fixed dark mode inconsistencies across key pages",
    description:
      "Improved theme behavior across homepage, sponsors, and blog pages to make the interface feel more consistent and reliable.",
    stack: ["React", "Vite", "Theme UI"],
    liveUrl: "https://www.recodehive.com/",
    issueUrl:
      "https://github.com/recodehive/recode-website/issues?q=is%3Aissue%20state%3Aclosed%20author%3Aabhishekkalme",
    type: "Open Source",
  },
  {
    id: 2,
    project: "LearnHub",
    title: "Added dark mode toggle and fixed a build-breaking JSX issue",
    description:
      "Implemented theme switching and resolved a JSX mismatch in TopNav that was causing the Vite build to fail.",
    stack: ["React", "Vite", "Frontend"],
    liveUrl: "https://learnhubb.vercel.app/",
    issueUrl:
      "https://github.com/souvikpramanikgit/LearnHub/issues?q=is%3Aissue%20state%3Aclosed%20author%3Aabhishekkalme",
    type: "Contribution",
  },
  {
    id: 3,
    project: "TravelGrid",
    title: "Improved navigation layout and added theme switching",
    description:
      "Resolved navbar alignment issues and added a dark mode toggle to improve clarity and consistency across the interface.",
    stack: ["React", "CSS", "Responsive UI"],
    liveUrl: "https://travel-grid.vercel.app",
    issueUrl:
      "https://github.com/Adarsh-Chaubey03/TravelGrid/issues?q=is%3Aissue%20state%3Aclosed%20author%3Aabhishekkalme",
    type: "Contribution",
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: "easeOut" } },
};

export default function TestimonialsSection() {
  return (
    <section id="contributions" className="section border-t border-border">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 max-w-3xl">
          <p className="section-kicker mb-4">Proof of work</p>
          <h2 className="section-title">Open source contributions.</h2>
        </div>

        <motion.div
          className="grid gap-5 md:grid-cols-2 xl:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={containerVariants}
        >
          {contributions.map(
            ({
              id,
              project,
              title,
              description,
              stack,
              liveUrl,
              issueUrl,
              type,
            }) => (
              <motion.div key={id} variants={cardVariants}>
                <Card className="group flex h-full flex-col transition-colors hover:bg-muted">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-[11px] uppercase tracking-wide text-muted-foreground">
                        {project}
                      </p>
                      <h3 className="mt-1.5 font-serif text-lg leading-snug tracking-tight">
                        {title}
                      </h3>
                    </div>
                    <span className="shrink-0 rounded-full border border-border px-2.5 py-1 text-[11px] text-muted-foreground">
                      {type}
                    </span>
                  </div>

                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {stack.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-border px-2 py-0.5 text-xs text-muted-foreground"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  <div className="mt-5 flex flex-wrap items-center gap-4 border-t border-border pt-4">
                    <a
                      href={liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 text-sm transition hover:text-foreground"
                    >
                      Live site
                    </a>
                    <a
                      href={issueUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 text-sm transition hover:text-foreground"
                    >
                      View issue
                      <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                  </div>
                </Card>
              </motion.div>
            )
          )}
        </motion.div>
      </div>
    </section>
  );
}
