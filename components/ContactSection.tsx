"use client";

import { motion } from "framer-motion";
import {
  MessageCircle,
  Globe,
  Phone,
  Mail,
  MapPin,
  Github,
  Linkedin,
  Twitter,
  Instagram,
  Send,
  ExternalLink,
} from "lucide-react";
import SocialPlatformLink from "./SocialPlatformLink";
import DirectContactMethod from "./DirectContactMethod";

const lucideIcons = {
  Github,
  Linkedin,
  Twitter,
  Instagram,
  Send,
  Mail,
  MessageCircle,
  MapPin,
  ExternalLink,
};

const socialPlatforms = [
  {
    name: "GitHub",
    icon: "Github",
    color: "",
    link: "https://github.com/abhishekkalme",
  },
  {
    name: "LinkedIn",
    icon: "Linkedin",
    color: "",
    link: "https://www.linkedin.com/in/abhishek-kalme/",
  },
  {
    name: "Twitter",
    icon: "Twitter",
    color: "",
    link: "https://twitter.com/Abhishek_kalme",
  },
  {
    name: "Instagram",
    icon: "Instagram",
    color: "",
    link: "https://instagram.com/",
  },
  {
    name: "Telegram",
    icon: "Send",
    color: "",
    link: "https://t.me/ur_abd",
  },
];

const contactMethods = [
  {
    icon: "Mail",
    color: "text-muted-foreground",
    label: "Email Me",
    value: "abhishekkalme0@gmail.com",
    link: "mailto:abhishekkalme0@gmail.com",
  },
  {
    icon: "MessageCircle",
    color: "text-muted-foreground",
    label: "WhatsApp",
    value: "+91 XXXXXXXXXX",
    link: "https://wa.me/91XXXXXXXXXX",
  },
  {
    icon: "MapPin",
    color: "text-muted-foreground",
    label: "Location",
    value: "Indore, Madhya Pradesh, India",
    link: "https://www.google.com/maps?q=Indore,+Madhya Pradesh,+India",
  },
];

export default function ContactSection() {
  // Card animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: i * 0.15 },
    }),
  };

  return (
    <section id="contact" className="section border-t border-border">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
            className="mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-full border border-border"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            viewport={{ once: true }}
          >
            <MessageCircle className="w-6 h-6" />
          </motion.div>

          <motion.h2
            className="section-title mb-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Have a project in mind?
          </motion.h2>

          <motion.p
            className="mx-auto max-w-2xl text-sm leading-relaxed text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            If you want to build something clear, fast, and useful, send a quick
            note. A couple of lines is enough—I’ll reply soon.
          </motion.p>
        </div>

        <div className="subtle-card grid gap-10 px-6 py-8 sm:px-8 sm:py-10 md:grid-cols-2">
          {/* Find Me Online */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="mb-4 flex items-center text-sm font-semibold">
              <Globe className="mr-2 h-4 w-4 text-muted-foreground" />
              Find me online
            </h3>

            <div className="overflow-hidden relative w-full">
              <div className="flex flex-wrap gap-2">
                {socialPlatforms.map((platform, idx) => {
                  const Icon =
                    lucideIcons[platform.icon as keyof typeof lucideIcons];
                  return (
                    <SocialPlatformLink
                      key={idx}
                      name={platform.name}
                      icon={Icon}
                      color={platform.color}
                      link={platform.link}
                      idx={idx}
                    />
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Direct Contact */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="mb-4 flex items-center text-sm font-semibold">
              <Phone className="mr-2 h-4 w-4 text-muted-foreground" />
              Direct contact
            </h3>

            <div className="space-y-4">
              {contactMethods.map((method, idx) => {
                const Icon =
                  lucideIcons[method.icon as keyof typeof lucideIcons];
                return (
                  <DirectContactMethod
                    key={idx}
                    icon={Icon}
                    color={method.color}
                    label={method.label}
                    value={method.value}
                    link={method.link}
                    idx={idx}
                    cardVariants={cardVariants}
                  />
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          className="mt-10 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="mb-3 text-sm text-muted-foreground">
            Email is easiest for me (and I reply quickly).
          </p>
          <a
            href="mailto:abhishekkalme0@gmail.com"
            className="button button-primary mx-auto gap-2"
          >
            <Mail className="h-4 w-4" />
            <span>Send me an email</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
