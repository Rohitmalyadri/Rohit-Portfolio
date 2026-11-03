import { useCallback } from 'react';
import { Navbar } from '@/components/Navbar';
import { Chatbot } from '@/components/Chatbot';
import { HeroSection } from '@/components/sections/HeroSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { SkillsSection } from '@/components/sections/SkillsSection';
import { ProjectsSection } from '@/components/sections/ProjectsSection';
import { BlogsSection } from '@/components/sections/BlogsSection';
import { ExperienceSection } from '@/components/sections/ExperienceSection';
import { CertificatesSection } from '@/components/sections/CertificatesSection';
import { ResumeSection } from '@/components/sections/ResumeSection';
import { CodingProfilesSection } from '@/components/sections/CodingProfilesSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { Footer } from '@/components/sections/Footer';
import { useActiveSection } from '@/hooks/useActiveSection';

const SECTION_IDS = [
  'about',
  'skills',
  'projects',
  'blogs',
  'experience',
  'certificates',
  'resume',
  'coding-handles',
  'contact'
];

const Index = () => {
  const activeSection = useActiveSection(SECTION_IDS, 'about');

  const scrollToSection = useCallback((sectionId) => {
    if (sectionId === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Accessible skip-link for keyboard & screen-reader navigation */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-md focus:shadow-lg focus:outline-none"
      >
        Skip to main content
      </a>

      <Navbar activeSection={activeSection} onSectionClick={scrollToSection} />

      <main id="main-content" tabIndex={-1} className="focus:outline-none">
        <HeroSection onScrollToProjects={() => scrollToSection('projects')} />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <BlogsSection />
        <ExperienceSection />
        <CertificatesSection />
        <ResumeSection />
        <CodingProfilesSection />
        <ContactSection />
      </main>

      <Footer />

      {/* Floating Chatbot Assistant */}
      <Chatbot />
    </div>
  );
};

export default Index;
