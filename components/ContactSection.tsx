"use client";

import { Mail, MapPin, Github, Linkedin, Twitter, Instagram, Send } from "lucide-react";
import SocialPlatformLink from "./SocialPlatformLink";

const socialPlatforms = [
  {
    name: "GitHub",
    icon: Github,
    link: "https://github.com/abhishekkalme",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    link: "https://www.linkedin.com/in/abhishek-kalme/",
  },
  {
    name: "Twitter",
    icon: Twitter,
    link: "https://twitter.com/Abhishek_kalme",
  },
  {
    name: "Telegram",
    icon: Send,
    link: "https://t.me/ur_abd",
  },
];

export default function ContactSection() {
  return (
    <section id="contact" className="section border-t border-border">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <p className="section-kicker mb-4">Contact</p>
          <h2 className="section-title mb-6">
            Have a project in mind?
          </h2>
          <p className="text-base leading-relaxed text-muted-foreground mb-10">
            If you want to build something clear, fast, and useful, send a quick
            note. A couple of lines is enough—I&apos;ll reply soon.
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-2">
          <div className="space-y-6">
            <a
              href="mailto:abhishekkalme0@gmail.com"
              className="subtle-card flex items-center gap-4 transition-colors hover:bg-muted"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border">
                <Mail className="h-4 w-4" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Email</p>
                <p className="text-sm font-medium">abhishekkalme0@gmail.com</p>
              </div>
            </a>

            <div className="subtle-card flex items-center gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border">
                <MapPin className="h-4 w-4" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Location</p>
                <p className="text-sm font-medium">Khargone, Madhya Pradesh, India</p>
              </div>
            </div>
          </div>

          <div>
            <p className="section-kicker mb-4">Find me online</p>
            <div className="flex flex-wrap gap-2">
              {socialPlatforms.map((platform) => (
                <SocialPlatformLink
                  key={platform.name}
                  name={platform.name}
                  icon={platform.icon}
                  link={platform.link}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
