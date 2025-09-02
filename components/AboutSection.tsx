"use client";

import { Monitor, Database, Cloud, Bot, Layers } from "lucide-react";
import { motion } from "framer-motion";

const skillCards = [
  {
    icon: Monitor,
    title: "Frontend Development",
    color: "bg-blue-600",
    skills: [
      "React",
      "Next.js",
      "JavaScript/TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Vite",
      "Axios",
      "React Context",
      "React Router",
      "UI/UX Best Practices",
    ],
  },
  {
    icon: Database,
    title: "Backend Development",
    color: "bg-green-600",
    skills: [
      "Node.js & Express.js",
      "MongoDB & Mongoose",
      "REST APIs & GraphQL",
      "Authentication & Authorization (JWT, Passport.js)",
      "Cloudinary & File Storage",
      "Database Design & ORM Concepts",
    ],
  },
  {
    icon: Cloud,
    title: "DevOps & Cloud",
    color: "bg-purple-600",
    skills: [
      "Git & GitHub",
      "CI/CD Pipelines",
      "Vercel & Netlify",
      "Docker & Containerization",
      "Cloud Deployment (AWS/GCP basics)",
      "Domain & SSL Management",
      "Monitoring & Logging",
    ],
  },
  {
    icon: Bot,
    title: "Generative AI & LLMs",
    color: "bg-pink-600",
    skills: [
      "LangChain & LLMs",
      "OpenAI GPT/ChatGPT Integration",
      "Prompt Engineering",
      "FastAPI for AI APIs",
      "Data Visualization & Dashboards",
      "Generative AI Workflows",
    ],
  },
  {
    icon: Layers,
    title: "System Design & Architecture",
    color: "bg-orange-600",
    skills: [
      "Scalable Web Architecture",
      "REST & Microservices Design",
      "Database Schema Design",
      "Load Balancing & Caching Strategies",
      "High Availability & Fault Tolerance",
      "Design Patterns & Best Practices",
    ],
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 bg-gray-900">
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
            className="text-4xl font-bold mb-4 text-white"
            variants={itemVariants}
          >
            About <span className="text-blue-400">Me</span>
          </motion.h2>
          <motion.div
            className="w-16 h-1 bg-blue-400 mx-auto mb-6"
            variants={itemVariants}
          />
          <motion.p
            className="text-gray-300 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            Full-stack developer with a passion for creating exceptional digital
            experiences and sharing knowledge through content creation.
          </motion.p>
        </motion.div>

        {/* Main Content */}
        <motion.div
          className="grid md:grid-cols-2 gap-12 items-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          {/* Left Side Text */}
          <motion.div
            className="space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              visible: {
                transition: { staggerChildren: 0.15 },
              },
            }}
          >
            {/* Heading */}
            <motion.h3
              className="text-2xl font-bold text-white"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
              }}
            >
              Crafting Digital Excellence
            </motion.h3>

            {/* Paragraphs */}
            <motion.p
              className="text-gray-300 leading-relaxed"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
              }}
            >
              I'm a passionate full-stack developer with expertise in both
              frontend and backend technologies. I specialize in building
              performant, accessible, and visually stunning web applications.
            </motion.p>

            <motion.p
              className="text-gray-300 leading-relaxed"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
              }}
            >
              My DevOps skills ensure seamless deployment and hosting solutions
              using platforms like Vercel, Netlify, and custom domain
              configurations. I'm also an active content creator, sharing my
              knowledge through tutorials, articles, and open-source
              contributions.
            </motion.p>

            {/* Stats */}
            <motion.div
              className="flex items-center space-x-4"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { type: "spring", stiffness: 300 },
                },
              }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center shadow-lg">
                <Monitor className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-2xl font-bold text-white">10+</div>
                <div className="text-sm text-gray-400">Projects</div>
                <div className="text-xs text-gray-500">
                  Delivered successfully
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side Skill Cards */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-6"
            variants={containerVariants}
          >
            {skillCards.map((card, index) => (
              <motion.div
                key={index}
                className="glass-card p-6 rounded-xl bg-gray-800 hover:scale-105 hover:shadow-xl transition-transform duration-300 group relative"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
              >
                {/* Glow effect behind card */}
                <div
                  className="absolute inset-0 rounded-xl pointer-events-none 
                      bg-gradient-to-tr from-blue-400 via-purple-400 to-pink-400 
                      opacity-0 group-hover:opacity-20 blur-3xl transition-opacity duration-500"
                ></div>

                {/* Icon */}
                <div
                  className={`w-12 h-12 ${card.color} rounded-lg flex items-center justify-center mb-4 transition-transform duration-300 group-hover:rotate-12 group-hover:shadow-lg group-hover:shadow-${card.color}-500`}
                >
                  <card.icon className="w-6 h-6 text-white" />
                </div>

                {/* Title */}
                <h4 className="font-semibold mb-3 text-white">{card.title}</h4>

                {/* Skills List */}
                <ul className="text-sm text-gray-300 space-y-2">
                  <motion.ul
                    className="text-sm text-gray-300 space-y-2"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={{
                      visible: {
                        transition: { staggerChildren: 0.08 },
                      },
                    }}
                  >
                    {card.skills.map((skill, skillIndex) => (
                      <motion.li
                        key={skillIndex}
                        className="flex items-center space-x-2 cursor-pointer group-hover:text-blue-400 transition-colors duration-200"
                        variants={{
                          hidden: { opacity: 0, x: -20 },
                          visible: {
                            opacity: 1,
                            x: 0,
                            transition: { type: "spring", stiffness: 300 },
                          },
                        }}
                        whileHover={{ scale: 1.05, x: 5 }}
                      >
                        <span className="text-blue-400 font-bold">•</span>
                        <span>{skill}</span>
                      </motion.li>
                    ))}
                  </motion.ul>
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
