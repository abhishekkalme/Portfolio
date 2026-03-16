"use client";

import { Monitor, Sparkles, ShieldCheck, Cloud } from "lucide-react";
import { motion } from "framer-motion";

const skillCards = [
  {
    icon: Sparkles,
    title: "Clarity-first UI",
    color: "",
    skills: ["Simple flows", "Good copy", "Accessible components", "Responsive layouts"],
  },
  {
    icon: ShieldCheck,
    title: "Reliable engineering",
    color: "",
    skills: ["Type safety", "API design", "Testing mindset", "Performance awareness"],
  },
  {
    icon: Cloud,
    title: "Shipping & deployment",
    color: "",
    skills: ["CI/CD basics", "Vercel/Netlify", "Docker (when needed)", "Logging & monitoring"],
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function AboutSection() {
  return (
    <section id="about" className="section border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 md:flex-row">
        {/* Section Header */}
        <motion.div
          className="md:w-1/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.p className="section-kicker mb-3" variants={itemVariants}>
            About my work
          </motion.p>
          <motion.h2 className="section-title mb-4" variants={itemVariants}>
            I care about making complex things feel simple, fast, and reliable.
          </motion.h2>
          <motion.p
            className="text-sm leading-relaxed text-muted-foreground"
            variants={itemVariants}
          >
            I work across the stack and try to make every part of the experience
            a little smoother—from the UI and copy to the API and deployment.
          </motion.p>
        </motion.div>

        {/* Main Content */}
        <motion.div
          className="grid flex-1 gap-10 md:grid-cols-2 md:items-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          {/* Left Side Text */}
          <motion.div
            className="space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              visible: {
                transition: { staggerChildren: 0.15 },
              },
            }}
          >
            {/* Heading */}
            <motion.h3
              className="text-base font-semibold"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
              }}
            >
              How I like to work
            </motion.h3>

            {/* Paragraphs */}
            <motion.p
              className="text-base leading-relaxed text-muted-foreground"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
              }}
            >
              Clear interfaces, sensible backend design, and a collaboration
              style that’s straightforward, kind, and honest about trade-offs.
            </motion.p>

            <motion.p
              className="text-base leading-relaxed text-muted-foreground"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
              }}
            >
              I prefer practical tools, clean code, and decisions that make a
              product easier to maintain months after launch—not just on day one.
            </motion.p>

            {/* Stats */}
            <motion.div
              className="flex items-baseline gap-4 rounded-md border border-dashed border-border px-4 py-3"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { type: "spring", stiffness: 300 },
                },
              }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-full border border-border">
                <Monitor className="h-5 w-5" />
              </div>
              <div>
                <div className="text-sm font-medium">10+ projects</div>
                <div className="text-xs text-muted-foreground">
                  Shipped end‑to‑end, from idea to production.
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side Skill Cards */}
          <motion.div
          className="grid grid-cols-1 gap-4"
            variants={containerVariants}
          >
            <div className="glass-card p-5">
              <p className="section-kicker mb-3">Core strengths</p>
              <ul className="space-y-2 text-sm">
                <li>
                  <span className="font-medium">Clarity</span>{" "}
                  <span className="text-muted-foreground">
                    — interfaces that feel obvious in the best way.
                  </span>
                </li>
                <li>
                  <span className="font-medium">Performance</span>{" "}
                  <span className="text-muted-foreground">
                    — fast paths, smooth interactions, careful loading.
                  </span>
                </li>
                <li>
                  <span className="font-medium">Craft</span>{" "}
                  <span className="text-muted-foreground">
                    — thoughtful details and maintainable code.
                  </span>
                </li>
              </ul>
            </div>

            {skillCards.map((card, index) => (
              <motion.div
                key={index}
                className="glass-card relative p-5"
                variants={itemVariants}
              >
                {/* Icon */}
                <div
                  className="mb-3 flex h-9 w-9 items-center justify-center rounded-full border border-border"
                >
                  <card.icon className="h-4 w-4" />
                </div>

                {/* Title */}
                <h4 className="mb-3 text-sm font-semibold">{card.title}</h4>

                {/* Skills List */}
                <ul className="text-xs text-muted-foreground space-y-1">
                  <motion.ul
                    className="space-y-1"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={{
                      visible: {
                        transition: { staggerChildren: 0.08 },
                      },
                    }}
                  >
                    {card.skills.map((skill, skillIndex) => (
                      <motion.li
                        key={skillIndex}
                        className="flex items-center gap-2"
                        variants={{
                          hidden: { opacity: 0, x: -20 },
                          visible: {
                            opacity: 1,
                            x: 0,
                            transition: { type: "spring", stiffness: 300 },
                          },
                        }}
                      >
                        <span className="text-xs text-muted-foreground">•</span>
                        <span>{skill}</span>
                      </motion.li>
                    ))}
                  </motion.ul>
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
