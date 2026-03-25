import { Header } from "@/components/trionyx/header"
import { HeroSection } from "@/components/trionyx/hero-section"
import { AboutSection } from "@/components/trionyx/about-section"
import { ServicesSection } from "@/components/trionyx/services-section"
import { SkillsSection } from "@/components/trionyx/skills-section"
import { ProjectsSection } from "@/components/trionyx/projects-section"
import { TestimonialsSection } from "@/components/trionyx/testimonials-section"
import { ContactSection } from "@/components/trionyx/contact-section"
import { Footer } from "@/components/trionyx/footer"
import { ParticlesBackground } from "@/components/trionyx/particles-background"

export default function TrionyxPortfolio() {
  return (
    <main className="relative min-h-screen">
      <ParticlesBackground />
      <Header />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <SkillsSection />
      <ProjectsSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
