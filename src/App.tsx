import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProjectShowcase from './components/ProjectShowcase';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';
import ResumeModal from './components/ResumeModal';
import { PERSONAL_INFO } from './data';
import { ArrowUp, Compass } from 'lucide-react';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  // Permanently enable premium dark theme
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  // Scroll Spy for updating active navigation link
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'projects', 'skills', 'experience', 'education', 'contact'];
      const scrollPosition = window.scrollY + 160;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth Navigation Trigger
  const handleNavigate = (sectionId: string) => {
    setSelectedProjectId(null); // Reset detail views when navigating sections
    setTimeout(() => {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 50);
  };

  const handleSelectProject = (projectId: string | null) => {
    setSelectedProjectId(projectId);
    if (projectId) {
      // Auto-scroll to top of showcase section for optimal viewing
      const el = document.getElementById('projects');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="min-h-screen font-sans bg-zinc-950 text-zinc-100 flex flex-col justify-between selection:bg-emerald-500/10 selection:text-emerald-500">
      
      {/* Header Bar */}
      <Header
        activeSection={activeSection}
        onNavigate={handleNavigate}
      />

      {/* Main Core Content Sections */}
      <main className="flex-grow">
        
        {/* Hero Section */}
        <Hero
          onNavigate={handleNavigate}
          onViewResume={() => setIsResumeOpen(true)}
        />

        {/* Featured Projects Grid & Dedicated Showcase View */}
        <ProjectShowcase
          selectedProjectId={selectedProjectId}
          onSelectProject={handleSelectProject}
        />

        {/* Technical Skills Categorized Matrix */}
        <Skills />

        {/* Timeline Work Experience */}
        <Experience />

        {/* Academic Foundations & Certifications */}
        <Education />

        {/* Direct Contact & Social Channels Form */}
        <Contact />

      </main>

      {/* Humble, Premium Footer */}
      <footer className="bg-zinc-950 py-12 px-6 md:px-8 border-t border-zinc-900">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          
          {/* Logo & Info */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-white text-zinc-950 flex items-center justify-center">
              <Compass className="w-4 h-4" />
            </div>
            <div className="text-left">
              <span className="block font-sans font-bold text-xs text-white">
                {PERSONAL_INFO.name}
              </span>
              <span className="block text-[10px] font-mono text-zinc-400">
                AR/VR Developer • Unreal Engine Artist
              </span>
            </div>
          </div>

          {/* Copyrights */}
          <p className="text-xs font-mono text-zinc-400">
            © {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.
          </p>

          {/* Quick Back to Top action */}
          <button
            id="back-to-top-footer"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-1.5 text-xs font-mono text-zinc-400 hover:text-white transition-colors cursor-pointer group"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-0.5" />
          </button>

        </div>
      </footer>

      {/* Interactive Resume CV Modal overlay */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />

    </div>
  );
}
