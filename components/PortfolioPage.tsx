"use client";

import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import LmsCaseStudySection from "@/components/LmsCaseStudySection";
import BlogSection from "@/components/BlogSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { useActiveSection } from "@/hooks/useActiveSection";
import { scrollToSection } from "@/utils/scrollUtils";
import { BlogPost } from "@/lib/blog";

interface PortfolioPageProps {
  posts: BlogPost[];
}

export default function PortfolioPage({ posts }: PortfolioPageProps) {
  const activeSection = useActiveSection();

  return (
    <>
      <Navigation activeSection={activeSection} scrollToSection={scrollToSection} />
      <main className="pt-16">
        <HeroSection scrollToSection={scrollToSection} />
        <ProjectsSection />
        <LmsCaseStudySection />
        <AboutSection />
        <SkillsSection />
        <TestimonialsSection />
        <BlogSection posts={posts} />
        <ContactSection />
        <Footer />
      </main>
    </>
  );
}
