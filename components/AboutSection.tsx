"use client";

import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function AboutSection() {
  return (
    <section id="about" className="section border-t border-border">
      <div className="mx-auto max-w-6xl">
        <motion.div
          className="max-w-3xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <motion.p className="section-kicker mb-4" variants={itemVariants}>
            About
          </motion.p>
          <motion.h2 className="section-title mb-6" variants={itemVariants}>
            I care about making complex things feel simple, fast, and reliable.
          </motion.h2>
          <motion.p
            className="text-base leading-relaxed text-muted-foreground"
            variants={itemVariants}
          >
            I work across the stack and try to make every part of the experience
            a little smoother—from the UI and copy to the API and deployment.
            Clear interfaces, sensible backend design, and a collaboration
            style that&apos;s straightforward, kind, and honest about trade-offs.
          </motion.p>
          <motion.p
            className="mt-4 text-base leading-relaxed text-muted-foreground"
            variants={itemVariants}
          >
            I prefer practical tools, clean code, and decisions that make a
            product easier to maintain months after launch—not just on day one.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
