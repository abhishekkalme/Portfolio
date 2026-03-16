"use client";

import { motion, Variants } from "framer-motion";
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

export default function ContributionsSection() {
  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.1 },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.35, ease: "easeOut" },
    },
  };

  return (
    <section id="contributions" className="section border-t border-border">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="section-kicker mb-3">Proof of work</p>
            <h2 className="section-title">Open source work.</h2>
          </div>
          <p className="max-w-sm text-xs leading-relaxed text-muted-foreground md:text-sm">
            Real frontend contributions across public projects, including
            theming, UI consistency, and React bug fixes.
          </p>
        </div>

        <motion.div
          className="grid gap-4 md:grid-cols-2 xl:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
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
                <Card className="flex h-full flex-col">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-xs uppercase tracking-wide text-muted-foreground">
                        {project}
                      </p>
                      <h3 className="mt-1 text-base font-semibold text-foreground">
                        {title}
                      </h3>
                    </div>

                    <span className="rounded-full border border-border px-2.5 py-1 text-[11px] text-muted-foreground">
                      {type}
                    </span>
                  </div>

                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    {description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {stack.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-border px-2.5 py-1 text-xs text-muted-foreground"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2">
                    <a
                      href={liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center rounded-full border border-border px-3 py-1.5 text-sm text-foreground transition hover:bg-muted"
                    >
                      Live site
                    </a>
                    <a
                      href={issueUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center rounded-full border border-border px-3 py-1.5 text-sm text-foreground transition hover:bg-muted"
                    >
                      View issue
                    </a>
                  </div>
                </Card>
              </motion.div>
            )
          )}
        </motion.div>
        <div className="mt-6">
          <a
            href="https://github.com/abhishekkalme?tab=repositories&q=&type=fork&language="
            target="_blank"
            rel="noreferrer"
            className="text-sm text-muted-foreground underline underline-offset-4 transition hover:text-foreground"
          >
            View more contributions on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
