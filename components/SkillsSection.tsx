"use client";

import { motion, Variants } from "framer-motion";

const groups = [
  { title: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"] },
  { title: "Backend", items: ["Node.js", "Express", "MongoDB", "PostgreSQL", "REST APIs"] },
  { title: "DevOps", items: ["Docker", "GitHub Actions", "Nginx", "Vercel", "AWS"] },
  { title: "Tools", items: ["Git", "Postman", "Figma", "Linux"] },
];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};
const groupVariants: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

export default function SkillsSection() {
  return (
    <section id="skills" className="section border-t border-border">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <p className="section-kicker mb-4">Capabilities</p>
          <h2 className="section-title">Tools I use to build and ship.</h2>
        </div>

        <motion.div
          className="space-y-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {groups.map((group) => (
            <motion.div key={group.title} className="text-center" variants={groupVariants}>
              <p className="section-kicker mb-3">{group.title}</p>
              <div className="flex flex-wrap justify-center gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-border px-3 py-1 text-sm text-muted-foreground"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
