import { GraduationCap, Calendar } from 'lucide-react';
import { EDUCATION_LIST } from '../data';

export default function Education() {
  return (
    <section
      id="education"
      className="py-24 px-6 md:px-8 bg-zinc-950 border-t border-zinc-900"
    >
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="space-y-2 max-w-xl">
          <span className="text-xs font-mono tracking-widest text-emerald-400 uppercase font-bold">
            Credentials
          </span>
          <h2 className="text-3xl sm:text-4xl font-sans font-bold tracking-tight text-white">
            Education
          </h2>
          <p className="text-sm text-zinc-300 font-sans leading-relaxed">
            Strong academic base combined with specialized immersive-industry master training.
          </p>
        </div>

        {/* 2-Column Grid Layout for Education Items */}
        <div className="space-y-6">
          <h3 className="font-sans font-bold text-xs tracking-wider text-emerald-400 uppercase flex items-center gap-2">
            <GraduationCap className="w-4 h-4 text-emerald-400" />
            <span>Academic Foundation</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {EDUCATION_LIST.map((edu, idx) => (
              <div
                key={`${edu.degree}-${idx}`}
                id={`education-card-${idx}`}
                className="p-6 rounded-xl bg-zinc-900 border border-zinc-800 shadow-md flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border-b border-zinc-800 pb-3">
                    <div>
                      <h4 className="font-sans font-bold text-base text-white">
                        {edu.degree}
                      </h4>
                      <span className="block text-xs font-sans font-semibold text-zinc-300">
                        {edu.institution}
                      </span>
                    </div>
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[10px] font-mono text-zinc-300 bg-zinc-950 rounded-md border border-zinc-800 self-start sm:self-center shrink-0">
                      <Calendar className="w-3 h-3 text-emerald-400" />
                      <span>{edu.duration}</span>
                    </span>
                  </div>

                  {edu.details && edu.details.map((detail, dIdx) => (
                    <p
                      key={dIdx}
                      className="text-xs text-zinc-300 leading-relaxed font-sans font-medium"
                    >
                      {detail}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
