'use client'

import Navigation from '@/components/Navigation'
import HeroSection from '@/components/HeroSection'
import AboutSection from '@/components/AboutSection'
import SkillsSection from '@/components/SkillsSection'
import ProjectsSection from '@/components/ProjectsSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import LmsCaseStudySection from '@/components/LmsCaseStudySection'
import ProcessSection from '@/components/ProcessSection'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'
import { useActiveSection } from '@/hooks/useActiveSection'
import { scrollToSection } from '@/utils/scrollUtils'

export default function Portfolio() {
  const activeSection = useActiveSection()

  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <div className="site-container">
        <Navigation activeSection={activeSection} scrollToSection={scrollToSection} />
        <main className="pt-16">
          <HeroSection scrollToSection={scrollToSection} />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <LmsCaseStudySection />
          <ProcessSection />
          <TestimonialsSection />
          <ContactSection />
          <Footer scrollToSection={scrollToSection} />
        </main>
      </div>
    </div>
  )
}