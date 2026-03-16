'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import {
  Github,
  Twitter,
  Linkedin,
  Instagram,
  Mail,
  MessageCircle,
  ArrowUp,
} from 'lucide-react'

interface FooterProps {
  scrollToSection: (sectionId: string) => void
}

const socialLinks = [
  { icon: Github, href: 'https://github.com/abhishekkalme', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/abhishek-kalme/', label: 'LinkedIn' },
  { icon: Twitter, href: 'https://twitter.com/Abhishek_kalme', label: 'Twitter' },
  { icon: Instagram, href: 'https://instagram.com/', label: 'Instagram' },
  { icon: Mail, href: 'mailto:abhishekkalme0@gmail.com', label: 'Email' },
  { icon: MessageCircle, href: 'https://t.me/ur_abd', label: 'Telegram' },
]

const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]

const footerLinks = ['Privacy Policy', 'Terms of Service', 'Cookie Policy']

export default function Footer({ scrollToSection }: FooterProps) {
  const [showTopBtn, setShowTopBtn] = useState(false)

  useEffect(() => {
    const handleScroll = () => setShowTopBtn(window.scrollY > 300)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: i * 0.15 },
    }),
  }

  return (
    <>
      <footer className="section border-t border-border pb-10">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 md:grid-cols-3">
            {/* Brand */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0}
            >
              <div className="mb-4 flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full border border-border text-xs font-semibold">
                  AK
                </div>
                <span className="text-sm font-medium">Abhishek Kalme</span>
              </div>
              <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                Building web apps that are clean, fast, and pleasant to use.
              </p>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="text-muted-foreground hover:text-foreground transition-colors duration-150"
                  >
                    <social.icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Navigation */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={1}
            >
              <h4 className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                Navigation
              </h4>
              <ul className="space-y-1 text-sm text-muted-foreground">
                {navLinks.map((link) => (
                  <li key={link.id}>
                    <button
                      onClick={() => scrollToSection(link.id)}
                      aria-label={`Go to ${link.label}`}
                      className="hover:text-foreground transition-colors duration-150"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Newsletter */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={2}
            >
              <h4 className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                Availability
              </h4>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Open to freelance projects and collaborations. If you have an
                idea in mind, send me a message—I’m friendly, I promise.
              </p>
            </motion.div>
          </div>

          {/* Footer Bottom */}
          <motion.div
            className="mt-8 flex flex-col items-start justify-between gap-3 border-t border-border pt-6 text-sm text-muted-foreground md:flex-row md:items-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div>© {new Date().getFullYear()} Abhishek Kalme.</div>
            <div className="mt-1 flex gap-4 md:mt-0">
              {footerLinks.map((link, index) => (
                <span
                  key={index}
                  className="cursor-default hover:text-foreground transition-colors duration-150"
                >
                  {link}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        aria-label="Scroll to top"
        initial={{ opacity: 0, scale: 0 }}
        animate={
          showTopBtn
            ? { opacity: 1, scale: 1 }
            : { opacity: 0, scale: 0 }
        }
        transition={{ duration: 0.3 }}
        className="fixed bottom-6 right-6 z-50 flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background text-xs text-muted-foreground shadow-sm focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background"
      >
        <ArrowUp className="h-3.5 w-3.5" />
      </motion.button>
    </>
  )
}
