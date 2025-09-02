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
      <footer className="bg-slate-800 border rounded-lg mb-12  py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Brand */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0}
            >
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="font-bold text-sm">AK</span>
                </div>
                <span className="font-bold text-lg">Abhishek Kalme</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                Crafting exceptional digital experiences with cutting-edge technology
                and innovative design solutions that drive real business results.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="text-gray-400 hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
                  >
                    <social.icon className="w-5 h-5" />
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
              <h4 className="font-semibold mb-4">• Navigation</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                {navLinks.map((link) => (
                  <li key={link.id}>
                    <button
                      onClick={() => scrollToSection(link.id)}
                      aria-label={`Go to ${link.label}`}
                      className="hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
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
              <h4 className="font-semibold mb-4">• Stay Updated</h4>
              <p className="text-sm text-gray-400 mb-4">
                Join my newsletter for exclusive content, latest projects, and tech
                insights delivered straight to your inbox.
              </p>
              <form
                onSubmit={(e) => {
                  e.preventDefault()
                  alert('Subscribed! 🚀')
                }}
                className="flex"
              >
                <input
                  type="email"
                  placeholder="Your email address"
                  required
                  aria-label="Email address"
                  className="flex-1 bg-slate-700 border border-slate-600 rounded-l-lg px-4 py-2 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-colors duration-200"
                />
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-r-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  Subscribe
                </button>
              </form>
              <p className="text-xs text-gray-500 mt-2">
                No spam ever. Unsubscribe anytime.
              </p>
            </motion.div>
          </div>

          {/* Footer Bottom */}
          <motion.div
            className="border-t border-slate-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div>© 2025 Abhishek Kalme. All rights reserved.</div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              {footerLinks.map((link, index) => (
                <span
                  key={index}
                  className="hover:text-white cursor-pointer transition-colors duration-200"
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
        className="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg z-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <ArrowUp className="w-5 h-5" />
      </motion.button>
    </>
  )
}
