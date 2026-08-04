"use client";

import { motion } from "framer-motion";
import { Download, ChevronDown } from "lucide-react";
import { track } from "@vercel/analytics";

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
      <div className="mx-auto flex w-full max-w-4xl flex-col gap-12">
        <div className="space-y-8">
          <p className="section-kicker">Hi, I&apos;m Abhishek</p>

          <h1
            id="hero-heading"
            className="font-serif text-4xl tracking-tight sm:text-5xl lg:text-6xl"
          >
            I turn product ideas
            <br />
            into polished web apps.
          </h1>

          <p className="max-w-xl text-base leading-relaxed text-muted-foreground">
            I&apos;m a full-stack developer focused on clear interfaces, reliable
            systems, and web apps that feel polished from end to end.
          </p>

          <div className="flex flex-wrap gap-2 text-xs text-muted-foreground">
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

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="/Abhishek_Resume.pdf"
              download
              aria-label="Download resume"
              className="button button-primary gap-2"
              onClick={() => track("resume_download")}
            >
              <Download className="h-4 w-4" />
              <span>Download resume</span>
            </a>
            <button
              type="button"
              onClick={() => scrollToSection("projects")}
              className="button button-ghost gap-2"
            >
              <span>See my work</span>
              <ChevronDown className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>

        <p className="text-sm text-muted-foreground">
          Open to freelance work, collaborations, and full-time roles.
        </p>
      </div>
    </section>
  );
}
