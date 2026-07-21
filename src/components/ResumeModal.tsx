import { X, Printer, Mail, MapPin, Linkedin, Github, Award, Briefcase, GraduationCap } from 'lucide-react';
import { PERSONAL_INFO, WORK_EXPERIENCE, EDUCATION_LIST, CERTIFICATIONS, SKILL_CATEGORIES } from '../data';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      id="resume-overlay"
      className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-start justify-center p-4 md:p-10"
    >
      <div
        id="resume-modal-container"
        className="relative bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 rounded-2xl w-full max-w-4xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200"
      >
        
        {/* Modal Actions Bar (hidden during printing) */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-150 dark:border-zinc-900 bg-zinc-50 dark:bg-zinc-900 print:hidden">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs font-mono font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-widest">
              Varshin_N_Resume.pdf
            </span>
          </div>

          <div className="flex items-center gap-2">
            {/* Print Action */}
            <button
              id="resume-print-action"
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-sans font-semibold text-zinc-700 hover:text-zinc-900 dark:text-zinc-350 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors cursor-pointer border border-zinc-250 dark:border-zinc-800"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>

            {/* Close Button */}
            <button
              id="resume-close-action"
              onClick={onClose}
              className="p-1.5 rounded-lg hover:bg-zinc-200 dark:hover:bg-zinc-800 text-zinc-500 hover:text-zinc-950 dark:hover:text-white transition-colors cursor-pointer"
              title="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Content Sheet (Styled like a modern physical A4 letter sheet) */}
        <div
          id="resume-print-sheet"
          className="p-8 md:p-12 space-y-8 bg-white text-zinc-900 selection:bg-zinc-100 print:p-0 print:text-black dark:text-zinc-900 dark:bg-white"
        >
          {/* Header section with Name and contact credentials */}
          <div className="border-b-2 border-zinc-900 pb-6 text-left">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div className="space-y-1">
                <h1 className="text-3xl md:text-4xl font-sans font-bold tracking-tight text-zinc-950">
                  {PERSONAL_INFO.name}
                </h1>
                <p className="text-sm font-semibold tracking-wider font-sans uppercase text-emerald-600">
                  {PERSONAL_INFO.titles.join(' • ')}
                </p>
              </div>

              {/* Contact Metadata Sheet */}
              <div className="space-y-1.5 text-xs font-sans text-zinc-650">
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
                  <span>{PERSONAL_INFO.email}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
                  <span>{PERSONAL_INFO.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Linkedin className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
                  <span className="truncate">linkedin.com/in/varshin-narasimman</span>
                </div>
                <div className="flex items-center gap-2">
                  <Github className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
                  <span>github.com/varshinfidi</span>
                </div>
              </div>
            </div>
          </div>

          {/* Profile Statement */}
          <div className="text-left space-y-2">
            <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-zinc-400 border-b border-zinc-200 pb-1">
              Professional Summary
            </h2>
            <p className="text-sm font-sans leading-relaxed text-zinc-750">
              {PERSONAL_INFO.about}
            </p>
          </div>

          {/* Core Skills section */}
          <div className="text-left space-y-3">
            <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-zinc-400 border-b border-zinc-200 pb-1">
              Core Technical Skills
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-y-3 gap-x-6 text-xs font-sans">
              {SKILL_CATEGORIES.map((cat) => (
                <div key={cat.title} className="space-y-1">
                  <span className="font-semibold text-zinc-850 uppercase tracking-wide text-[10px]">
                    {cat.title}
                  </span>
                  <p className="text-zinc-650 leading-relaxed">
                    {cat.skills.map(s => s.name).join(', ')}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Professional Work Experience */}
          <div className="text-left space-y-4">
            <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-zinc-400 border-b border-zinc-200 pb-1">
              Work History
            </h2>

            {WORK_EXPERIENCE.map((exp, idx) => (
              <div key={idx} className="space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <div className="space-y-0.5">
                    <span className="font-sans font-bold text-sm text-zinc-900 block">
                      {exp.role}
                    </span>
                    <span className="font-sans font-medium text-xs text-zinc-600 block">
                      {exp.company} — {exp.location}
                    </span>
                  </div>
                  <span className="text-xs font-mono text-zinc-500 sm:text-right font-bold shrink-0">
                    {exp.duration}
                  </span>
                </div>

                <p className="text-xs font-sans text-zinc-650 italic">
                  {exp.description}
                </p>

                <ul className="list-disc list-inside space-y-1 pl-1 text-xs font-sans text-zinc-700 leading-relaxed">
                  {exp.responsibilities.map((resp, rIdx) => (
                    <li key={rIdx}>{resp}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Education & Credentials */}
          <div className="text-left space-y-4">
            <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-zinc-400 border-b border-zinc-200 pb-1">
              Education & Specialized Training
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {EDUCATION_LIST.map((edu, idx) => (
                <div key={idx} className="space-y-1">
                  <span className="font-sans font-bold text-xs text-zinc-950 block">
                    {edu.degree}
                  </span>
                  <span className="font-sans text-xs text-zinc-600 block">
                    {edu.institution}
                  </span>
                  <span className="text-[10px] font-mono text-zinc-400 font-bold block">
                    {edu.duration}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications Block */}
          {CERTIFICATIONS.length > 0 && (
            <div className="text-left space-y-2">
              <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-zinc-400 border-b border-zinc-200 pb-1">
                Verified Certifications
              </h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs font-sans text-zinc-700">
                {CERTIFICATIONS.map((cert, idx) => (
                  <li key={idx} className="flex gap-2 items-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                    <span>
                      <strong>{cert.name}</strong> — <span className="text-zinc-500">{cert.issuer}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Resume Footer */}
          <div className="text-center text-[10px] font-mono text-zinc-400 border-t border-zinc-150 pt-4 print:pt-6">
            Self-attested verified resume // Generated dynamically on {new Date().toLocaleDateString()}
          </div>

        </div>

      </div>
    </div>
  );
}
