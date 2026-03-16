"use client";

import { motion, Variants } from "framer-motion";
import { Card } from "./ui/Card";

type SkillGroup = {
  title: string;
  items: string[];
};

const groups: SkillGroup[] = [
  {
    title: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express", "MongoDB", "PostgreSQL", "REST APIs"],
  },
  {
    title: "DevOps",
    items: ["Docker", "GitHub Actions", "Nginx", "Vercel", "AWS (basics)"],
  },
  {
    title: "Tools & craft",
    items: ["Git", "Postman", "Figma", "Accessibility", "Performance tuning"],
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: "easeOut" } },
};

export default function SkillsSection() {
  return (
    <section id="skills" className="section border-t border-border">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="section-kicker mb-3">Capabilities</p>
            <h2 className="section-title">Tools I use to build and ship.</h2>
          </div>
          <p className="max-w-sm text-xs leading-relaxed text-muted-foreground md:text-sm">
            I lean on practical tools, good engineering habits, and details that
            make a product feel reliable day after day.
          </p>
        </div>

        <motion.div
          className="grid gap-4 sm:grid-cols-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {groups.map((group) => (
            <motion.div key={group.title} variants={cardVariants}>
              <Card>
                <h3 className="text-sm font-semibold">{group.title}</h3>
                <ul className="mt-3 flex flex-wrap gap-2 text-sm text-muted-foreground">
                  {group.items.map((item) => (
                    <li key={item} className="rounded-full border border-border px-2 py-0.5">
                      {item}
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
