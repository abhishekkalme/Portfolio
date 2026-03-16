"use client";

import { motion } from "framer-motion";
import { Download, ChevronDown } from "lucide-react";

interface HeroSectionProps {
  scrollToSection: (sectionId: string) => void;
}

export default function HeroSection({ scrollToSection }: HeroSectionProps) {
  return (
    <section
      id="home"
      className="section flex items-center"
      aria-labelledby="hero-heading"
    >
      <div className="mx-auto flex w-full max-w-4xl flex-col gap-10 md:flex-row md:items-end">
        <div className="flex-1 space-y-6">
          <p className="section-kicker">Hi, I’m Abhishek</p>

          <h1
            id="hero-heading"
            className="font-serif text-4xl tracking-tight sm:text-5xl md:text-6xl"
          >
            I turn product ideas
            <br />
            into polished web apps.
          </h1>

          <p className="max-w-xl text-base leading-relaxed text-muted-foreground">
            I’m a full-stack developer focused on clear interfaces, reliable
            systems, and web apps that feel polished from end to end.
          </p>

          <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
            <span className="rounded-full border border-border px-3 py-1">
              Next.js &amp; React
            </span>
            <span className="rounded-full border border-border px-3 py-1">
              TypeScript
            </span>
            <span className="rounded-full border border-border px-3 py-1">
              APIs &amp; backend systems
            </span>
          </div>

          <div className="mt-4 flex flex-wrap gap-3">
            <a
              href="/Abhishek_Resume.pdf"
              download
              aria-label="Download resume"
              className="button button-primary gap-2"
            >
              <Download className="h-4 w-4" />
              <span>Download resume</span>
            </a>
            <button
              type="button"
              onClick={() => scrollToSection("projects")}
              className="button button-ghost gap-2 text-xs uppercase tracking-[0.18em]"
            >
              <span>See my work</span>
              <ChevronDown className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>

        <div className="flex-1 md:max-w-xs">
          <div className="subtle-card px-5 py-5 text-sm leading-relaxed">
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
              Currently
            </p>
            <p className="mb-3">
              Open to freelance work, collaborations, and full-time roles.
            </p>
            <p className="text-xs text-muted-foreground">
              If you’re building something and want a reliable developer who’s
              easy to work with, I’d love to hear about it.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
