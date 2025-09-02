'use client'

import { motion } from 'framer-motion'
import {
  MessageCircle,
  Globe,
  Phone,
  Github,
  Linkedin,
  Twitter,
  Instagram,
  Send,
  Mail,
  ExternalLink,
  MapPin,
} from 'lucide-react'

const socialPlatforms = [
  {
    name: 'GitHub',
    icon: Github,
    color: 'bg-slate-800 hover:bg-slate-700',
    link: 'https://github.com/abhishekkalme',
  },
  {
    name: 'LinkedIn',
    icon: Linkedin,
    color: 'bg-blue-600 hover:bg-blue-700',
    link: 'https://www.linkedin.com/in/abhishek-kalme/',
  },
  {
    name: 'Twitter',
    icon: Twitter,
    color: 'bg-cyan-500 hover:bg-cyan-600',
    link: 'https://twitter.com/Abhishek_kalme',
  },
  {
    name: 'Instagram',
    icon: Instagram,
    color: 'bg-pink-600 hover:bg-pink-700',
    link: 'https://instagram.com/',
  },
  {
    name: 'Telegram',
    icon: Send,
    color: 'bg-blue-500 hover:bg-blue-600',
    link: 'https://t.me/ur_abd',
  },
]

const contactMethods = [
  {
    icon: Mail,
    color: 'text-blue-400',
    label: 'Email Me',
    value: 'abhishekkalme0@gmail.com',
    link: 'mailto:abhishekkalme0@gmail.com',
  },
  {
    icon: MessageCircle,
    color: 'text-green-400',
    label: 'WhatsApp',
    value: '+91 XXXXXXXXXX',
    link: 'https://wa.me/91XXXXXXXXXX',
  },
  {
    icon: MapPin,
    color: 'text-orange-400',
    label: 'Location',
    value: 'Indore, Madhya Pradesh, India',
    link: 'https://www.google.com/maps?q=Indore,+Madhya Pradesh,+India',
  },
]

export default function ContactSection() {
  // Card animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: i * 0.15 },
    }),
  }

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            className="w-16 h-16 bg-blue-600 rounded-full mx-auto mb-6 flex items-center justify-center"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 200, damping: 15 }}
            viewport={{ once: true }}
          >
            <MessageCircle className="w-8 h-8 text-white" />
          </motion.div>

          <motion.h2
            className="text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Let&apos;s <span className="text-blue-400">Connect</span>
          </motion.h2>

          <motion.p
            className="text-gray-400 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Whether you have a project in mind or just want to chat tech, I&apos;d
            love to hear from you!
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Find Me Online */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-6 flex items-center">
              <Globe className="w-5 h-5 mr-2 text-blue-400" />
              Find Me Online
            </h3>

            <div className="overflow-hidden relative w-full">
              <motion.div
                className="flex whitespace-nowrap gap-6"
                animate={{ x: ['0%', '-50%'] }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              >
                {[...socialPlatforms, ...socialPlatforms].map((platform, idx) => (
                  <a
                    key={idx}
                    href={platform.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit my ${platform.name}`}
                    className={`${platform.color} p-4 rounded-xl text-center cursor-pointer flex-shrink-0 hover:scale-105 transition-all duration-300`}
                  >
                    <platform.icon className="w-8 h-8 mx-auto mb-2" />
                    <div className="font-medium">{platform.name}</div>
                  </a>
                ))}
              </motion.div>
            </div>
          </motion.div>

          {/* Direct Contact */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-6 flex items-center">
              <Phone className="w-5 h-5 mr-2 text-green-400" />
              Direct Contact
            </h3>

            <div className="space-y-4">
              {contactMethods.map((method, idx) => (
                <motion.a
                  key={idx}
                  href={method.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${method.label}: ${method.value}`}
                  className="glass-card p-4 rounded-xl flex items-center justify-between hover:bg-slate-700/50 transition-all duration-200 cursor-pointer group"
                  custom={idx}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <div className="flex items-center space-x-3">
                    <method.icon className={`w-5 h-5 ${method.color}`} />
                    <div>
                      <div className="text-sm text-gray-400">{method.label}</div>
                      <div className="font-medium break-words">
                        {method.value}
                      </div>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors duration-200" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-400 mb-6">Ready to start your project?</p>
          <a
            href="mailto:abhishekkalme0@gmail.com"
            className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 flex items-center space-x-2 mx-auto hover:scale-105"
          >
            <Mail className="w-4 h-4" />
            <span>Send Me An Email</span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
