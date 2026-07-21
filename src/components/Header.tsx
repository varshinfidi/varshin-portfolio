import { useState, useEffect } from 'react';
import { Menu, X, Compass, MessageSquare } from 'lucide-react';
import { PERSONAL_INFO } from '../data';

interface HeaderProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export default function Header({ activeSection, onNavigate }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Projects', id: 'projects' },
    { label: 'Technical Skills', id: 'skills' },
    { label: 'Work Experience', id: 'experience' },
    { label: 'Education', id: 'education' },
  ];

  const handleItemClick = (id: string) => {
    onNavigate(id);
    setIsOpen(false);
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-zinc-950/90 backdrop-blur-md border-b border-zinc-900 py-3 shadow-md'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8 flex items-center justify-between">
        {/* Logo/Brand */}
        <button
          id="logo-button"
          onClick={() => handleItemClick('hero')}
          className="flex items-center gap-2 group cursor-pointer focus:outline-none"
        >
          <div className="w-9 h-9 rounded-lg bg-white flex items-center justify-center transition-transform group-hover:scale-105">
            <Compass className="w-5 h-5 text-zinc-950" />
          </div>
          <div className="text-left">
            <span className="block font-sans font-semibold text-sm tracking-tight text-white">
              {PERSONAL_INFO.name}
            </span>
            <span className="block text-[10px] font-mono tracking-wider text-zinc-350 uppercase">
              Technical Portfolio
            </span>
          </div>
        </button>

        {/* Desktop Navigation */}
        <nav id="desktop-nav" className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              id={`nav-${item.id}`}
              onClick={() => handleItemClick(item.id)}
              className={`px-4 py-2 rounded-md font-sans text-xs font-semibold transition-colors cursor-pointer ${
                activeSection === item.id
                  ? 'text-white bg-zinc-900 border border-zinc-800'
                  : 'text-zinc-300 hover:text-white'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Extra Actions */}
        <div className="flex items-center gap-3">
          {/* Contact CTA */}
          <button
            id="header-contact-button"
            onClick={() => handleItemClick('contact')}
            className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-lg bg-white hover:bg-zinc-100 text-zinc-950 text-xs font-sans font-semibold shadow-sm transition-all hover:shadow cursor-pointer"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Contact</span>
          </button>

          {/* Mobile Menu Toggle */}
          <button
            id="mobile-menu-toggle"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation menu"
            className="md:hidden p-2.5 rounded-lg border border-zinc-850 text-zinc-300 hover:text-white bg-zinc-900/80 transition-all cursor-pointer"
          >
            {isOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div
          id="mobile-drawer"
          className="md:hidden absolute top-full left-0 right-0 bg-zinc-950 border-b border-zinc-900 shadow-xl overflow-hidden py-4 px-6 space-y-2 animate-in fade-in slide-in-from-top-4 duration-250"
        >
          {navItems.map((item) => (
            <button
              key={item.id}
              id={`mob-nav-${item.id}`}
              onClick={() => handleItemClick(item.id)}
              className={`w-full text-left px-4 py-3 rounded-lg font-sans text-sm font-medium transition-colors ${
                activeSection === item.id
                  ? 'text-white bg-zinc-900'
                  : 'text-zinc-300 hover:text-white'
              }`}
            >
              {item.label}
            </button>
          ))}
          <button
            id="mob-nav-contact"
            onClick={() => handleItemClick('contact')}
            className="w-full text-left px-4 py-3 rounded-lg font-sans text-sm font-medium text-zinc-950 bg-white flex items-center justify-between"
          >
            <span>Get in Touch</span>
            <MessageSquare className="w-4 h-4" />
          </button>
        </div>
      )}
    </header>
  );
}
