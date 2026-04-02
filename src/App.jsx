import { useEffect } from 'react';
import Loader from './components/Loader';
import BackgroundAnimation from './components/BackgroundAnimation';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/SkillsSection';
import ExperienceSection from './components/ExperienceSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function App() {
  // Initialize AOS after mount (AOS is loaded via CDN in index.html)
  useEffect(() => {
    if (window.AOS) {
      window.AOS.init({ duration: 1000, once: true, offset: 100 });
    }
  }, []);

  return (
    <>
      {/* Loading Screen */}
      <Loader />

      {/* Animated Background (fixed, behind everything) */}
      <BackgroundAnimation />

      {/* Fixed Navigation */}
      <Navbar />

      {/* Main Content */}
      <main role="main">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <ExperienceSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}
