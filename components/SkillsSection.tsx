'use client'

import { useState } from 'react'
import { motion, Variants } from 'framer-motion'
import { 
  FaReact, FaNodeJs, FaJava, FaGithub, FaGitAlt, FaDocker, 
  FaPython, FaFigma 
} from "react-icons/fa"
import { 
  SiNextdotjs, SiTailwindcss, SiFramer, SiSpringboot, SiMongodb, 
  SiPostgresql, SiKubernetes, SiAmazon, SiTypescript, SiExpress, 
  SiNginx, SiPostman, SiCplusplus, SiMysql, 
  SiTensorflow, SiPytorch, SiOpenai, SiLangchain, 
} from "react-icons/si"
import { VscVscode } from "react-icons/vsc"
import { RiJavascriptFill } from "react-icons/ri"

interface Skill {
  name: string
  category: string
  icon: any
  color: string
  description: string
}

const categories = [
  { id: 'frontend', label: 'Frontend' },
  { id: 'backend', label: 'Backend' },
  { id: 'devops', label: 'DevOps' },
  { id: 'tools', label: 'Tools' },
  { id: 'languages', label: 'Languages' },
  { id: 'ai', label: 'AI & GenAI' }
]

const skills: Skill[] = [
  // Frontend
  { name: 'React.js', category: 'frontend', icon: FaReact, color: 'bg-blue-500', description: 'UI Development' },
  { name: 'Next.js', category: 'frontend', icon: SiNextdotjs, color: 'bg-gray-800', description: 'Full-stack Apps' },
  { name: 'JavaScript', category: 'frontend', icon: RiJavascriptFill, color: 'bg-yellow-500', description: 'Dynamic Web Apps' },
  { name: 'TypeScript', category: 'frontend', icon: SiTypescript, color: 'bg-sky-600', description: 'Typed JavaScript' },
  { name: 'Tailwind CSS', category: 'frontend', icon: SiTailwindcss, color: 'bg-cyan-500', description: 'Utility-first CSS' },
  { name: 'Framer Motion', category: 'frontend', icon: SiFramer, color: 'bg-pink-500', description: 'UI Animations' },

  // Backend
  { name: 'Java', category: 'backend', icon: FaJava, color: 'bg-orange-600', description: 'Backend Logic' },
  { name: 'Spring Boot', category: 'backend', icon: SiSpringboot, color: 'bg-green-600', description: 'Java Framework' },
  { name: 'Node.js', category: 'backend', icon: FaNodeJs, color: 'bg-lime-600', description: 'Server-side Runtime' },
  { name: 'Express.js', category: 'backend', icon: SiExpress, color: 'bg-gray-700', description: 'Backend Framework' },
  { name: 'MongoDB', category: 'backend', icon: SiMongodb, color: 'bg-green-500', description: 'NoSQL Database' },
  { name: 'PostgreSQL', category: 'backend', icon: SiPostgresql, color: 'bg-blue-700', description: 'Relational DB' },

  // DevOps
  { name: 'Docker', category: 'devops', icon: FaDocker, color: 'bg-sky-500', description: 'Containerization' },
  { name: 'Kubernetes', category: 'devops', icon: SiKubernetes, color: 'bg-blue-600', description: 'Container Orchestration' },
  { name: 'GitHub Actions', category: 'devops', icon: FaGithub, color: 'bg-gray-700', description: 'CI/CD Pipelines' },
  { name: 'Nginx', category: 'devops', icon: SiNginx, color: 'bg-green-700', description: 'Web Server & Proxy' },
  { name: 'AWS', category: 'devops', icon: SiAmazon, color: 'bg-yellow-600', description: 'Cloud Services' },

  // Tools
  { name: 'Git', category: 'tools', icon: FaGitAlt, color: 'bg-red-600', description: 'Version Control' },
  { name: 'VS Code', category: 'tools', icon: VscVscode, color: 'bg-blue-400', description: 'Code Editor' },
  { name: 'Postman', category: 'tools', icon: SiPostman, color: 'bg-orange-500', description: 'API Testing' },
  { name: 'Figma', category: 'tools', icon: FaFigma, color: 'bg-purple-500', description: 'UI/UX Design' },

  // Languages
  { name: 'Python', category: 'languages', icon: FaPython, color: 'bg-green-400', description: 'General-purpose' },
  { name: 'C++', category: 'languages', icon: SiCplusplus, color: 'bg-indigo-600', description: 'High-performance' },
  { name: 'SQL', category: 'languages', icon: SiMysql, color: 'bg-teal-500', description: 'Database Queries' },

  // AI & GenAI
  { name: 'OpenAI API', category: 'ai', icon: SiOpenai, color: 'bg-purple-600', description: 'LLMs & Chatbots' },
  { name: 'LangChain', category: 'ai', icon: SiLangchain, color: 'bg-pink-600', description: 'AI App Framework' },
  { name: 'Pinecone', category: 'ai', icon: null, color: 'bg-yellow-600', description: 'Vector Database' },
  { name: 'TensorFlow', category: 'ai', icon: SiTensorflow, color: 'bg-orange-400', description: 'ML Framework' },
  { name: 'PyTorch', category: 'ai', icon: SiPytorch, color: 'bg-red-500', description: 'Deep Learning' },
]

// Framer Motion Variants
const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 300 } },
}

const skillVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 300 } },
}

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState('frontend')
  const filteredSkills = skills.filter(skill => skill.category === activeCategory)

  return (
    <section id="skills" className="py-20 px-4 bg-slate-900">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.h2 className="text-4xl font-bold mb-4 text-white" variants={cardVariants}>
            My <span className="text-blue-400">Tech Stack</span>
          </motion.h2>
          <motion.p className="text-gray-300" variants={cardVariants}>
            Technologies and languages I work with to build digital experiences
          </motion.p>
        </motion.div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeCategory === cat.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-slate-700 text-gray-200 hover:bg-slate-600'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skill Cards */}
        <motion.div
          key={activeCategory} // important: remount on category change
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {filteredSkills.map((skill, index) => {
            const Icon = skill.icon
            return (
              <motion.div
                key={index}
                className="glass-card p-6 rounded-xl text-center relative hover:scale-105 transition-transform duration-300 group"
                variants={cardVariants}
              >
                {/* Glow behind card */}
                <div className="absolute inset-0 rounded-xl pointer-events-none 
                                bg-gradient-to-tr from-blue-400 via-purple-400 to-pink-400 
                                opacity-0 group-hover:opacity-20 blur-3xl transition-opacity duration-500"></div>

                {/* Icon */}
                <div className={`w-12 h-12 ${skill.color} rounded-lg mx-auto mb-4 flex items-center justify-center
                                 transition-transform duration-300 group-hover:rotate-12 group-hover:shadow-lg`}>
                  {Icon ? <Icon className="w-6 h-6 text-white" /> : <span className="text-xs">No Icon</span>}
                </div>

                {/* Name & Description */}
                <motion.div
                  className="flex flex-col space-y-1"
                  initial="hidden"
                  animate="visible"
                  variants={containerVariants}
                >
                  <motion.h4 className="font-semibold text-white" variants={skillVariants}>
                    {skill.name}
                  </motion.h4>
                  <motion.p className="text-sm text-gray-400" variants={skillVariants}>
                    {skill.description}
                  </motion.p>
                </motion.div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
