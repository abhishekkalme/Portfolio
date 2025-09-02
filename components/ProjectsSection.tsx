'use client'

import { Code, Database, Github, ExternalLink } from 'lucide-react'
import Image from 'next/image'
import { motion, Variants } from 'framer-motion'

const projects = [
  {
    id: 1,
    title: 'LMS-MERN',
    description:
      'A full-stack Learning Management System with secure authentication, role-based access, note management, Cloudinary integration, and syllabus uploads to make learning seamless.',
    image: '/LMS.png',
    tags: ['MERN Stack', 'Authentication', 'Role-Based Access', 'Cloudinary', 'Syllabus Upload'],
    tagColors: ['bg-blue-600', 'bg-green-600', 'bg-red-600', 'bg-purple-600', 'bg-orange-600'],
    codeLink: 'https://github.com/abhishekkalme/LMS-MERN',
    demoLink: 'https://lms-learning-management-system.netlify.app/',
  },
  {
    id: 2,
    title: 'CineVerse',
    description:
      'A modern, responsive web app to explore and discover movies & TV shows using TMDB API, built with React.js and Vite for a smooth and interactive user experience.',
    image: '/cineverse.png',
    tags: ['React.js', 'Vite', 'TMDB API', 'Responsive UI', 'Tailwind CSS'],
    tagColors: ['bg-blue-600', 'bg-green-600', 'bg-purple-600', 'bg-orange-600', 'bg-cyan-600'],
    codeLink: 'https://github.com/abhishekkalme/React.js-MovieApp-and-TMDB-API',
    demoLink: 'https://cineverse25.netlify.app/',
  },
  {
    id: 3,
    title: 'Portfolio Website',
    description:
      'A personal portfolio website showcasing my skills, projects, and tech stack. Built with Next.js and Tailwind CSS for a modern and responsive design.',
    image: '/Portfolio.png',
    tags: ['Next.js', 'Tailwind CSS', 'Responsive Design', 'React.js'],
    tagColors: ['bg-blue-600', 'bg-green-600', 'bg-purple-600', 'bg-orange-600'],
    codeLink: 'https://github.com/abhishekkalme/portfolio-website',
    demoLink: 'https://AbhisheKalme.dev/',
  },
]

// Motion Variants
const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 300 } },
}

const overlayVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  hover: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 300 } },
}

const tagVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.2 } },
}

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-4 bg-slate-900">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.h2
            className="text-4xl font-bold mb-4 flex justify-center items-center gap-2 text-white"
            variants={cardVariants}
          >
            <Code className="w-8 h-8" />
            My <span className="text-blue-400">Projects</span>
            <Database className="w-8 h-8" />
          </motion.h2>
          <motion.p className="text-gray-400 max-w-2xl mx-auto" variants={cardVariants}>
            Each project represents{' '}
            <span className="text-blue-400">real-world solutions</span> crafted with modern
            technologies and <span className="text-green-400">attention to detail</span>.
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="glass-card relative rounded-xl overflow-hidden hover:scale-105 transition-transform duration-300 group"
              variants={cardVariants}
              whileHover="hover"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <motion.div
                  className="relative w-full h-52"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover rounded-t-xl"
                  />
                </motion.div>

                {/* Overlay */}
                <motion.div
                  className="absolute inset-0 bg-black bg-opacity-70 flex flex-col justify-center items-center p-4 text-center"
                  variants={overlayVariants}
                  initial="hidden"
                  whileHover="hover"
                >
                  <h3 className="text-lg font-semibold text-white mb-2">{project.title}</h3>
                  <motion.div
                    className="flex flex-wrap gap-1 justify-center"
                    initial="hidden"
                    animate="visible"
                    variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
                  >
                    {project.tags.map((tag, idx) => (
                      <motion.span
                        key={idx}
                        className={`text-xs px-2 py-1 rounded ${project.tagColors[idx] ?? 'bg-gray-600'}`}
                        variants={tagVariants}
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </motion.div>
                </motion.div>
              </div>

              {/* Description & Buttons */}
              <div className="p-6">
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">{project.description}</p>
                <div className="flex space-x-3">
                  <a
                    href={project.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-1 text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    <Github className="w-4 h-4" />
                    <span className="text-sm">Code</span>
                  </a>
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center space-x-1 hover:scale-105"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
