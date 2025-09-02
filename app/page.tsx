'use client'

import Navigation from '@/components/Navigation'
import HeroSection from '@/components/HeroSection'
import AboutSection from '@/components/AboutSection'
import SkillsSection from '@/components/SkillsSection'
import ProjectsSection from '@/components/ProjectsSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'
import { useActiveSection } from '@/hooks/useActiveSection'
import { scrollToSection } from '@/utils/scrollUtils'

export default function Portfolio() {
  const activeSection = useActiveSection()

  return (
    <div className="min-h-screen w-full bg-slate-900 text-white overflow-x-hidden">
  <div className="max-w-screen-xl mx-auto px-4">
    <Navigation activeSection={activeSection} scrollToSection={scrollToSection} />
    <HeroSection scrollToSection={scrollToSection} />
    <AboutSection />
    <SkillsSection />
    <ProjectsSection />
    <TestimonialsSection />
    <ContactSection />
    <Footer scrollToSection={scrollToSection} />
  </div>
</div>

  )
}