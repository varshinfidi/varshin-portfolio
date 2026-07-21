import { Mail, Linkedin, Github, Instagram, Download, Palette } from 'lucide-react';
import { PERSONAL_INFO } from '../data';

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 px-6 md:px-8 bg-zinc-950 border-t border-zinc-900"
    >
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="space-y-2 max-w-xl mx-auto text-center">
          <span className="text-xs font-mono tracking-widest text-emerald-400 uppercase font-bold">
            Collaboration
          </span>
          <h2 className="text-3xl sm:text-4xl font-sans font-bold tracking-tight text-white">
            Get in Touch
          </h2>
          <p className="text-sm text-zinc-300 font-sans leading-relaxed">
            Interested in hiring, collaborating on an immersive real-time project, or discussing Unreal Engine pipelines? Connect through any of the channels below.
          </p>
        </div>

        {/* Channels Grid */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
          
          {/* Direct Email Card */}
          <a
            id="contact-email-link"
            href={`mailto:${PERSONAL_INFO.email}`}
            className="flex items-start gap-4 p-5 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-emerald-400 transition-all group shadow-sm"
          >
            <div className="w-10 h-10 rounded-lg bg-zinc-800 flex items-center justify-center shrink-0">
              <Mail className="w-5 h-5 text-zinc-300 group-hover:text-emerald-400 transition-colors" />
            </div>
            <div className="space-y-1">
              <span className="block text-[10px] font-mono text-zinc-450 uppercase tracking-wider font-bold">
                Primary Email
              </span>
              <span className="block text-sm font-sans font-bold text-zinc-100 group-hover:text-emerald-400 transition-colors">
                {PERSONAL_INFO.email}
              </span>
              <p className="text-xs text-zinc-350 font-sans leading-relaxed">
                Expect a response within 24 business hours.
              </p>
            </div>
          </a>

          {/* Download Resume Card */}
          <a
            id="contact-download-resume"
            href={PERSONAL_INFO.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start gap-4 p-5 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-emerald-400 transition-all group shadow-sm"
          >
            <div className="w-10 h-10 rounded-lg bg-zinc-800 flex items-center justify-center shrink-0">
              <Download className="w-5 h-5 text-zinc-300 group-hover:text-emerald-400 transition-colors" />
            </div>
            <div className="space-y-1">
              <span className="block text-[10px] font-mono text-zinc-450 uppercase tracking-wider font-bold">
                Curriculum Vitae
              </span>
              <span className="block text-sm font-sans font-bold text-zinc-100 group-hover:text-emerald-400 transition-colors">
                Download Resume
              </span>
              <p className="text-xs text-zinc-350 font-sans leading-relaxed">
                Access PDF version on Google Drive.
              </p>
            </div>
          </a>

        </div>

        {/* Social Channels Card */}
        <div className="max-w-4xl mx-auto p-6 rounded-xl bg-zinc-900 border border-zinc-800 space-y-5">
          <span className="block text-xs font-mono text-emerald-400 uppercase tracking-widest font-bold text-center">
            Professional & Social Platforms
          </span>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            
            {/* LinkedIn */}
            <a
              id="contact-social-linkedin"
              href={PERSONAL_INFO.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center gap-2 p-4 rounded-xl bg-zinc-950 border border-zinc-800 hover:border-blue-500 transition-colors text-center group"
            >
              <Linkedin className="w-5 h-5 text-zinc-300 group-hover:text-blue-500 transition-colors" />
              <span className="text-xs font-sans font-semibold text-zinc-200">LinkedIn</span>
            </a>

            {/* GitHub */}
            <a
              id="contact-social-github"
              href={PERSONAL_INFO.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center gap-2 p-4 rounded-xl bg-zinc-950 border border-zinc-800 hover:border-white transition-colors text-center group"
            >
              <Github className="w-5 h-5 text-zinc-300 group-hover:text-white transition-colors" />
              <span className="text-xs font-sans font-semibold text-zinc-200">GitHub</span>
            </a>

            {/* ArtStation */}
            <a
              id="contact-social-artstation"
              href={PERSONAL_INFO.socials.artstation}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center gap-2 p-4 rounded-xl bg-zinc-950 border border-zinc-800 hover:border-emerald-500 transition-colors text-center group"
            >
              <Palette className="w-5 h-5 text-zinc-300 group-hover:text-emerald-500 transition-colors" />
              <span className="text-xs font-sans font-semibold text-zinc-200">ArtStation</span>
            </a>

            {/* Instagram */}
            <a
              id="contact-social-instagram"
              href={PERSONAL_INFO.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center gap-2 p-4 rounded-xl bg-zinc-950 border border-zinc-800 hover:border-pink-500 transition-colors text-center group col-span-2 sm:col-span-1"
            >
              <Instagram className="w-5 h-5 text-zinc-300 group-hover:text-pink-500 transition-colors" />
              <span className="text-xs font-sans font-semibold text-zinc-200">Instagram</span>
            </a>

          </div>
        </div>

      </div>
    </section>
  );
}
