import {
  Flame, Gamepad, Glasses, Tablet, Cpu, MousePointer, Code, Terminal,
  Coffee, Brain, Mountain, Layers, Sun, Film, Layout, LayoutGrid,
  GitBranch, Settings, Box, User, Smartphone, Compass, Zap, Gauge,
  Share2, Activity, FileText
} from 'lucide-react';
import { SKILL_CATEGORIES } from '../data';

function SkillIcon({ name }: { name?: string }) {
  const iconStyle = "w-4 h-4 text-emerald-500 dark:text-emerald-400 shrink-0";
  switch (name) {
    case 'Flame': return <Flame className={iconStyle} />;
    case 'Gamepad': return <Gamepad className={iconStyle} />;
    case 'Glasses': return <Glasses className={iconStyle} />;
    case 'Tablet': return <Tablet className={iconStyle} />;
    case 'Cpu': return <Cpu className={iconStyle} />;
    case 'Pointer': return <MousePointer className={iconStyle} />;
    case 'Code': return <Code className={iconStyle} />;
    case 'Terminal': return <Terminal className={iconStyle} />;
    case 'Coffee': return <Coffee className={iconStyle} />;
    case 'Brain': return <Brain className={iconStyle} />;
    case 'Mountain': return <Mountain className={iconStyle} />;
    case 'Layers': return <Layers className={iconStyle} />;
    case 'Sun': return <Sun className={iconStyle} />;
    case 'Film': return <Film className={iconStyle} />;
    case 'Layout': return <Layout className={iconStyle} />;
    case 'Figma': return <LayoutGrid className={iconStyle} />;
    case 'GitBranch': return <GitBranch className={iconStyle} />;
    case 'Settings': return <Settings className={iconStyle} />;
    case 'Box': return <Box className={iconStyle} />;
    case 'User': return <User className={iconStyle} />;
    case 'Smartphone': return <Smartphone className={iconStyle} />;
    case 'Compass': return <Compass className={iconStyle} />;
    case 'Zap': return <Zap className={iconStyle} />;
    case 'Gauge': return <Gauge className={iconStyle} />;
    case 'Share2': return <Share2 className={iconStyle} />;
    case 'Activity': return <Activity className={iconStyle} />;
    case 'FileText': return <FileText className={iconStyle} />;
    default: return <Cpu className={iconStyle} />;
  }
}

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-24 px-6 md:px-8 bg-zinc-950 border-t border-zinc-900"
    >
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="space-y-2 max-w-xl">
          <span className="text-xs font-mono tracking-widest text-emerald-400 uppercase font-bold">
            Technical Stack
          </span>
          <h2 className="text-3xl sm:text-4xl font-sans font-bold tracking-tight text-white">
            Professional Skill Matrix
          </h2>
          <p className="text-sm text-zinc-300 font-sans leading-relaxed">
            Bridging technical system development and real-time environment composition with professional-grade engines and workflows.
          </p>
        </div>

        {/* Skills Categories Grid */}
        <div id="skills-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_CATEGORIES.map((category) => (
            <div
              key={category.title}
              id={`skill-category-${category.title.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
              className="p-6 rounded-xl bg-zinc-900 border border-zinc-800 space-y-4 shadow-sm"
            >
              {/* Category Title */}
              <h3 className="font-sans font-bold text-xs tracking-wider text-emerald-400 uppercase border-b border-zinc-800 pb-2.5">
                {category.title}
              </h3>

              {/* Skills List inside Category */}
              <div className="space-y-3.5">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center justify-between gap-4 p-2 rounded-lg"
                  >
                    {/* Left: Icon & Skill Name */}
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-zinc-800 flex items-center justify-center shrink-0">
                        <SkillIcon name={skill.iconName} />
                      </div>
                      <span className="text-sm font-sans font-semibold text-zinc-100">
                        {skill.name}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
