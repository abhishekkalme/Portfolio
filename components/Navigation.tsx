'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Github, Linkedin, Twitter, Mail, Sun, Moon } from 'lucide-react'

interface NavigationProps {
  activeSection: string
  scrollToSection: (sectionId: string) => void
}

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'testimonials', label: 'Testimonials' },
  { id: 'contact', label: 'Contact' },
]

const socialLinks = [
  { href: 'https://github.com/abhishekkalme/', icon: Github, color: 'rgba(255,255,255,0.8)', label: 'GitHub' },
  { href: 'https://www.linkedin.com/in/abhishek-kalme/', icon: Linkedin, color: '#0A66C2', label: 'LinkedIn' },
  { href: 'https://twitter.com/Abhishek_kalme', icon: Twitter, color: '#1DA1F2', label: 'Twitter' },
  { href: 'mailto:abhishekkalme0@gmail.com', icon: Mail, color: '#FACC15', label: 'Email' },
]

export default function Navigation({ activeSection, scrollToSection }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDark, setIsDark] = useState(true)
  const menuRef = useRef<HTMLDivElement | null>(null)

  const handleNavClick = (sectionId: string) => {
    scrollToSection(sectionId)
    setIsMenuOpen(false)
  }

  // ✅ Close menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false)
      }
    }
    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isMenuOpen])

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-transparent backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-xl font-bold text-blue-400"
          >
            Abhishek
          </motion.div>

          {/* Desktop Navigation (centered) */}
          <div className="hidden md:flex flex-1 justify-center space-x-8">
            {navItems.map((item, index) => (
              <motion.button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08, duration: 0.35 }}
                aria-current={activeSection === item.id ? 'page' : undefined}
                className={`relative px-3 py-2 text-sm font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded
                  ${
                    activeSection === item.id
                      ? 'text-blue-400'
                      : 'text-gray-300 hover:text-white'
                  }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <motion.span
                    layoutId="underline"
                    className="absolute left-0 right-0 -bottom-1 h-[2px] bg-blue-400 rounded-full"
                  />
                )}
              </motion.button>
            ))}
          </div>

          {/* Social Icons (Desktop only) */}
          <div className="hidden md:flex items-center space-x-3">
            {socialLinks.map(({ href, icon: Icon, color, label }, index) => (
              <motion.a
                key={index}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: 0.1 + index * 0.08 }}
                whileHover={{
                  boxShadow: `0px 0px 8px ${color}`,
                  color: color,
                }}
                className="w-8 h-8 bg-slate-800 rounded-md flex items-center justify-center transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <Icon className="w-4 h-4" />
              </motion.a>
            ))}
          </div>

          {/* Mobile Menu Button */}
<button
  onClick={() => setIsMenuOpen(!isMenuOpen)}
  className="md:hidden p-2 rounded-lg hover:bg-slate-800/40 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
  aria-label="Toggle menu"
>
  {isMenuOpen ? (
    <X className="w-6 h-6 text-gray-300" />
  ) : (
    <Menu className="w-6 h-6 text-gray-300" />
  )}
</button>
</div>
</div>

{/* Mobile Dropdown */}
<AnimatePresence>
  {isMenuOpen && (
    <>
      {/* Click-outside overlay */}
      <motion.div
        key="overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.15 }}
        className="fixed inset-0 bg-black/20 backdrop-blur-sm md:hidden z-40"
        onClick={() => setIsMenuOpen(false)}
      />

      {/* Dropdown */}
      <motion.div
        ref={menuRef}
        key="menu"
        initial={{ opacity: 0, y: -10, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -10, scale: 0.97 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        className="absolute top-16 left-4 right-4 md:hidden rounded-xl bg-slate-900/90 border border-white/10 shadow-lg z-50"
      >
        {/* Nav Links */}
        <div className="px-3 py-4 space-y-1">
          {navItems.map((item, index) => (
            <motion.button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -15 }}
              transition={{ delay: index * 0.05, duration: 0.2 }}
              className={`block w-full text-left px-4 py-2 rounded-lg text-base font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 transition
                ${
                  activeSection === item.id
                    ? "text-blue-400 bg-slate-800"
                    : "text-gray-300 hover:text-white hover:bg-slate-700"
                }`}
            >
              {item.label}
            </motion.button>
          ))}
        </div>

        {/* Socials + Theme toggle */}
        <div className="px-6 py-4 border-t border-slate-800 flex flex-col items-center gap-4">
          <div className="flex gap-6">
            {socialLinks.map(({ href, icon: Icon, label }, idx) => (
              <a
                key={idx}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-gray-300 hover:text-blue-400 transition"
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>

        </div>
      </motion.div>
    </>
  )}
</AnimatePresence>

    </nav>
  )
}
