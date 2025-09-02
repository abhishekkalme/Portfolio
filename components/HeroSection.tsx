"use client";

import { motion, Variants } from "framer-motion";
import {
  Download,
  ChevronDown,
  Github,
  Linkedin,
  Twitter,
  MessageCircle,
  Send,
} from "lucide-react";
import { Typewriter } from "react-simple-typewriter";

interface HeroSectionProps {
  scrollToSection: (sectionId: string) => void;
}

const SOCIAL_LINKS = [
  { icon: Github, href: "https://github.com/abhishekkalme", label: "GitHub" },
  {
    icon: Linkedin,
    href: "https://linkedin.com/in/abhishek-kalme",
    label: "LinkedIn",
  },
  { icon: Twitter, href: "https://x.com/Abhishek_kalme", label: "Twitter" },
  {
    icon: MessageCircle,
    href: "mailto:abhishekkalme0@gmail.com",
    label: "Email",
  },
  { icon: Send, href: "https://t.me/ur_abd", label: "Telegram" },
];

// Container + children animation
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.2 },
  },
};

const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

// Animated Heading Component
const AnimatedHeading = () => {
  const headingContainer: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.25 },
    },
  };

  const headingItem: Variants = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <motion.div
      className="mb-6 leading-tight"
      variants={headingContainer}
      initial="hidden"
      animate="show"
    >
      <motion.h1
        className="text-5xl md:text-7xl font-bold"
        variants={headingItem}
      >
        Elevating
      </motion.h1>
      <motion.h1
        className="text-5xl md:text-7xl font-bold gradient-text"
        variants={headingItem}
      >
        Digital Experiences
      </motion.h1>
    </motion.div>
  );
};

export default function HeroSection({ scrollToSection }: HeroSectionProps) {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 pt-16"
    >
      <motion.div
        className="text-center max-w-4xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Status Indicator */}
        <motion.div
          className="flex items-center justify-center mb-8"
          variants={fadeUpVariants}
        >
          <div className="flex items-center space-x-2 text-sm text-gray-400">
            <span
              className="w-2 h-2 bg-green-400 rounded-full animate-pulse"
              aria-hidden="true"
            ></span>
            <span>Currently available for select projects</span>
          </div>
        </motion.div>

        {/* Animated Heading */}
        <AnimatedHeading />

        {/* Typewriter Effect with Custom Caret */}
        <motion.p
          className="text-xl text-gray-300 mb-2 flex items-center justify-center"
          variants={fadeUpVariants}
        >
          <Typewriter
            words={[
              // Professional / Core identity
              "Full-Stack Developer",
              "Frontend Enthusiast",
              "Backend Architect",

              // Technical specialties
              "MERN Enthusiast",
              "React Craftsman",
              "API Builder",
              "JavaScript Ninja",

              // Personal style / problem-solving
              "Problem Solver",
              "Tech Explorer",
              "UI/UX Improviser",
              "Cloud Learner",

              // Fun / quirky / human touch
              "Open-Source Contributor",
              "AI Curious",
              "Always Learning 🚀",
            ]}
            loop={true}
            cursor={false} 
            typeSpeed={80}
            deleteSpeed={50}
            delaySpeed={1500}
          />
          {/* Gradient glowing caret */}
          <span
            className="ml-1 w-[3px] h-[1.4em] rounded-sm 
                       bg-gradient-to-b from-blue-400 via-purple-500 to-pink-500 
                       shadow-[0_0_8px_rgba(59,130,246,0.8)] 
                       animate-blink"
          />
        </motion.p>

        <motion.p
          className="text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed"
          variants={fadeUpVariants}
        >
          Building end-to-end digital products with clean code, smart design,
          and measurable results.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          variants={fadeUpVariants}
        >
          <a
            href="/Abhishek_Resume.pdf"
            download
            aria-label="Download Resume"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium 
                       transition-all duration-200 flex items-center justify-center space-x-2 
                       hover:scale-105 pulse-glow"
          >
            <Download className="w-4 h-4" />
            <span>Download Resume</span>
          </a>

          <button
            onClick={() => scrollToSection("projects")}
            aria-label="Scroll to projects section"
            className="border border-gray-600 hover:border-gray-500 text-gray-300 hover:text-white 
                       px-8 py-3 rounded-lg font-medium transition-all duration-200 flex items-center 
                       justify-center space-x-2 hover:scale-105"
          >
            <span>Explore Work</span>
            <ChevronDown className="w-4 h-4" />
          </button>
        </motion.div>

        {/* Social Links */}
        <motion.div
          className="flex justify-center space-x-6"
          variants={containerVariants}
        >
          {SOCIAL_LINKS.map(({ icon: Icon, href, label }, index) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center 
                 hover:bg-slate-700 transition-all duration-200 cursor-pointer shadow-lg"
              variants={fadeUpVariants}
              whileHover={{ scale: 1.25, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              animate={{
                y: [0, -6, 0],
                rotate: [0, 4, 0],
                boxShadow: [
                  "0px 0px 8px rgba(59,130,246,0.6)",
                  "0px 0px 16px rgba(59,130,246,0.8)",
                  "0px 0px 8px rgba(59,130,246,0.6)",
                ],
              }}
              transition={{
                duration: 2.4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.3,
              }}
            >
              <Icon className="w-5 h-5 text-blue-400" />
            </motion.a>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
