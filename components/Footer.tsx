"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Github,
  Twitter,
  Linkedin,
  Mail,
  Send,
  ArrowUp,
} from "lucide-react";

const socialLinks = [
  { icon: Github, href: "https://github.com/abhishekkalme", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/abhishek-kalme/", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com/Abhishek_kalme", label: "Twitter" },
  { icon: Mail, href: "mailto:abhishekkalme0@gmail.com", label: "Email" },
  { icon: Send, href: "https://t.me/ur_abd", label: "Telegram" },
];

export default function Footer() {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowTopBtn(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <>
      <footer className="section border-t border-border pb-10">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col items-start justify-between gap-10 md:flex-row md:items-end">
            <div>
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-xs font-semibold">
                  AK
                </div>
                <span className="text-sm font-medium">Abhishek Kalme</span>
              </div>
              <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
                Building web apps that are clean, fast, and pleasant to use.
              </p>
            </div>

            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center">
            <div>© {new Date().getFullYear()} Abhishek Kalme.</div>
            <div>Designed &amp; built by Abhishek.</div>
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 hover:text-foreground transition-colors"
            >
              Back to top
              <ArrowUp className="h-3 w-3" />
            </button>
          </div>
        </div>
      </footer>

      <motion.button
        onClick={scrollToTop}
        aria-label="Scroll to top"
        initial={{ opacity: 0, scale: 0 }}
        animate={showTopBtn ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed bottom-6 right-6 z-50 flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background text-xs text-muted-foreground shadow-sm focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background"
      >
        <ArrowUp className="h-3.5 w-3.5" />
      </motion.button>
    </>
  );
}
