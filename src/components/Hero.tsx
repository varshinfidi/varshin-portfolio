import { Github, Linkedin, Youtube, Instagram, ArrowRight, Download, Mail, ChevronDown, Palette } from 'lucide-react';
import { PERSONAL_INFO } from '../data';

interface HeroProps {
  onNavigate: (sectionId: string) => void;
  onViewResume: () => void;
}

export default function Hero({ onNavigate, onViewResume }: HeroProps) {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-6 md:px-8 bg-zinc-950 overflow-hidden"
    >
      {/* Background Decorative Grid - subtle architectural guidelines */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-60" />

      {/* Tech Accent Lines */}
      <div className="absolute left-12 top-0 bottom-0 w-[1px] bg-zinc-900/50 hidden lg:block" />
      <div className="absolute right-12 top-0 bottom-0 w-[1px] bg-zinc-900/50 hidden lg:block" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Side: Typography and CTAs (Columns 1-7) */}
        <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[11px] font-mono tracking-wider font-bold uppercase text-zinc-200">
              Available for XR & Real-Time Roles
            </span>
          </div>

          {/* Heading */}
          <h1 className="font-sans text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1]">
            Building immersive experiences through{' '}
            <span className="bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent">
              Unreal Engine
            </span>{' '}
            and XR.
          </h1>

          {/* Description */}
          <p className="font-sans text-base sm:text-lg text-zinc-200 max-w-xl leading-relaxed font-medium">
            {PERSONAL_INFO.heroSubheading}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto pt-2">
            {/* CTA 1: View Projects */}
            <button
              id="hero-view-projects"
              onClick={() => onNavigate('projects')}
              className="group flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-zinc-100 text-zinc-950 font-sans font-bold text-sm shadow-md hover:shadow-lg transition-all cursor-pointer"
            >
              <span>Explore My Work</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>

            {/* CTA 2: View Resume */}
            <a
              id="hero-download-resume"
              href={PERSONAL_INFO.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-white border border-zinc-800 font-sans font-semibold text-sm shadow-sm transition-all cursor-pointer"
            >
              <Download className="w-4 h-4 text-zinc-300" />
              <span>Download Resume</span>
            </a>

            {/* CTA 3: Contact */}
            <button
              id="hero-contact"
              onClick={() => onNavigate('contact')}
              className="flex items-center justify-center gap-2 px-6 py-3.5 text-zinc-300 hover:text-white font-sans font-bold text-sm hover:underline transition-all cursor-pointer"
            >
              <span>Contact Me</span>
            </button>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4 pt-6 border-t border-zinc-900 w-full max-w-sm">
            <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-widest mr-2">
              Connect
            </span>
            <a
              id="hero-social-linkedin"
              href={PERSONAL_INFO.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2 rounded-lg text-zinc-300 hover:text-white hover:bg-zinc-900 transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              id="hero-social-github"
              href={PERSONAL_INFO.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2 rounded-lg text-zinc-300 hover:text-white hover:bg-zinc-900 transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              id="hero-social-youtube"
              href={PERSONAL_INFO.socials.youtube}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube Channel"
              className="p-2 rounded-lg text-zinc-300 hover:text-white hover:bg-zinc-900 transition-colors"
            >
              <Youtube className="w-4 h-4" />
            </a>
            <a
              id="hero-social-artstation"
              href={PERSONAL_INFO.socials.artstation}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="ArtStation Portfolio"
              className="p-2 rounded-lg text-zinc-300 hover:text-white hover:bg-zinc-900 transition-colors"
            >
              <Palette className="w-4 h-4" />
            </a>
            <a
              id="hero-social-instagram"
              href={PERSONAL_INFO.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram Profile"
              className="p-2 rounded-lg text-zinc-300 hover:text-white hover:bg-zinc-900 transition-colors"
            >
              <Instagram className="w-4 h-4" />
            </a>
          </div>

        </div>

        {/* Right Side: High-End Avatar Frame (Columns 8-12) */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 group">
            {/* Absolute Ambient Glow */}
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-emerald-500/10 via-zinc-550/5 to-blue-500/10 blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* Technical Border Frame */}
            <div className="absolute inset-0 border border-zinc-800 rounded-2xl p-2 bg-zinc-900/40 backdrop-blur-sm shadow-lg transition-transform duration-500 group-hover:scale-[1.01]">
              
              {/* Inner frame */}
              <div className="relative w-full h-full rounded-xl overflow-hidden bg-zinc-950 border border-zinc-800">
                <img
                  src={PERSONAL_INFO.avatarUrl}
                  alt={PERSONAL_INFO.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-all duration-700 ease-in-out scale-100 hover:scale-[1.04]"
                  />

                {/* technical coordinate markers overlay */}
                
              </div>
            </div>

            {/* Corner Bracket Accents - traditional layout drafting style */}
            <div className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-zinc-700 rounded-tl-sm pointer-events-none" />
            <div className="absolute -top-1 -right-1 w-4 h-4 border-t-2 border-r-2 border-zinc-700 rounded-tr-sm pointer-events-none" />
            <div className="absolute -bottom-1 -left-1 w-4 h-4 border-b-2 border-l-2 border-zinc-700 rounded-bl-sm pointer-events-none" />
            <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-zinc-700 rounded-br-sm pointer-events-none" />
          </div>
        </div>

      </div>

      {/* Down Chevron Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 opacity-65 hover:opacity-100 transition-opacity">
        <span className="text-[10px] font-mono tracking-widest text-zinc-400 uppercase">
          Explore Portfolio
        </span>
        <button
          id="scroll-down-btn"
          onClick={() => onNavigate('projects')}
          className="p-1 rounded-full text-zinc-400 hover:text-white transition-colors cursor-pointer"
        >
          <ChevronDown className="w-5 h-5 animate-bounce" />
        </button>
      </div>

    </section>
  );
}
