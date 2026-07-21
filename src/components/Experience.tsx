import { Calendar, MapPin, Briefcase, CheckCircle2, Award } from 'lucide-react';
import { WORK_EXPERIENCE } from '../data';

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-24 px-6 md:px-8 bg-zinc-950 border-t border-zinc-900"
    >
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="space-y-2 max-w-xl">
          <span className="text-xs font-mono tracking-widest text-emerald-400 uppercase font-bold">
            Tenure & Growth
          </span>
          <h2 className="text-3xl sm:text-4xl font-sans font-bold tracking-tight text-white">
            Professional Experience
          </h2>
          <p className="text-sm text-zinc-300 font-sans leading-relaxed">
            Leading real-time design implementations, delivering enterprise-level products, and managing hardware-software calibrations.
          </p>
        </div>

        {/* Experience Timeline */}
        <div id="experience-list" className="space-y-8">
          {WORK_EXPERIENCE.map((exp, expIdx) => (
            <div
              key={`${exp.company}-${expIdx}`}
              id={`experience-block-${expIdx}`}
              className="relative p-6 md:p-8 rounded-xl bg-zinc-900 border border-zinc-800 shadow-md"
            >
              
              {/* Top Summary Row */}
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 border-b border-zinc-800 pb-6 mb-6">
                
                {/* Role & Company */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-lg bg-white text-zinc-950 flex items-center justify-center">
                      <Briefcase className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="font-sans font-bold text-lg text-white">
                        {exp.role}
                      </h3>
                      <span className="block text-sm font-sans font-semibold text-zinc-300">
                        {exp.company}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Duration & Location Metadata */}
                <div className="flex flex-wrap gap-3 text-xs font-mono text-zinc-300">
                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-950 border border-zinc-800">
                    <Calendar className="w-3.5 h-3.5 text-zinc-450" />
                    <span>{exp.duration}</span>
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-950 border border-zinc-800">
                    <MapPin className="w-3.5 h-3.5 text-zinc-450" />
                    <span>{exp.location}</span>
                  </div>
                </div>

              </div>

              {/* Grid: Responsibilities and Achievements */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                
                {/* Column 1: Key Responsibilities */}
                <div className="space-y-4">
                  <h4 className="font-sans font-bold text-xs tracking-wider text-emerald-400 uppercase flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>Key Responsibilities</span>
                  </h4>

                  <ul className="space-y-3">
                    {exp.responsibilities.map((resp, index) => (
                      <li key={index} className="flex gap-3 items-start group">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0 transition-transform group-hover:scale-125" />
                        <span className="text-sm font-sans text-zinc-200 font-medium leading-relaxed">
                          {resp}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Column 2: Key Milestones & Achievements */}
                <div className="space-y-4">
                  <h4 className="font-sans font-bold text-xs tracking-wider text-emerald-400 uppercase flex items-center gap-2">
                    <Award className="w-4 h-4 text-emerald-400" />
                    <span>Key Achievements & Impact</span>
                  </h4>

                  <div className="grid grid-cols-1 gap-3.5">
                    {exp.achievements.map((achieve, index) => (
                      <div
                        key={index}
                        className="p-4 rounded-lg bg-zinc-950 border border-zinc-800 flex gap-3 items-start"
                      >
                        <span className="text-xs font-mono font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded shrink-0 border border-emerald-500/20">
                          +{index + 1}
                        </span>
                        <p className="text-sm font-sans text-zinc-200 font-semibold leading-relaxed">
                          {achieve}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
