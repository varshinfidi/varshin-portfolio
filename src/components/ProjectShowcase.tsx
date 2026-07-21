import { useState } from 'react';
import { Project } from '../types';
import { PROJECTS } from '../data';
import { ArrowLeft, Play, ExternalLink, HelpCircle, Layers, Award, ChevronLeft, ChevronRight } from 'lucide-react';

interface ProjectShowcaseProps {
  selectedProjectId: string | null;
  onSelectProject: (projectId: string | null) => void;
}

// Helper to convert youtube share URL to embed URL
function getYoutubeEmbedUrl(url?: string): string | null {
  if (!url) return null;
  try {
    let videoId = '';
    if (url.includes('youtu.be/')) {
      videoId = url.split('youtu.be/')[1].split('?')[0];
    } else if (url.includes('youtube.com/shorts/')) {
      videoId = url.split('youtube.com/shorts/')[1].split('?')[0];
    } else if (url.includes('v=')) {
      videoId = url.split('v=')[1].split('&')[0];
    }
    return videoId ? `https://www.youtube.com/embed/${videoId}` : null;
  } catch (e) {
    return null;
  }
}

export default function ProjectShowcase({ selectedProjectId, onSelectProject }: ProjectShowcaseProps) {
  const selectedProject = PROJECTS.find(p => p.id === selectedProjectId);

  const handleNextProject = () => {
    if (!selectedProject) return;
    const currentIndex = PROJECTS.findIndex(p => p.id === selectedProject.id);
    const nextIndex = (currentIndex + 1) % PROJECTS.length;
    onSelectProject(PROJECTS[nextIndex].id);
  };

  const handlePrevProject = () => {
    if (!selectedProject) return;
    const currentIndex = PROJECTS.findIndex(p => p.id === selectedProject.id);
    const prevIndex = (currentIndex - 1 + PROJECTS.length) % PROJECTS.length;
    onSelectProject(PROJECTS[prevIndex].id);
  };

  // Dedicated full-screen presentation view
  if (selectedProject) {
    const embedUrl = getYoutubeEmbedUrl(selectedProject.youtubeUrl);

    return (
      <div
        id="project-detail-container"
        className="min-h-screen bg-zinc-950 text-zinc-100 pt-24 pb-20 px-6 md:px-8"
      >
        <div className="max-w-5xl mx-auto space-y-12 animate-in fade-in slide-in-from-bottom-6 duration-300">
          
          {/* Top actions */}
          <div className="flex items-center justify-between border-b border-zinc-900 pb-4">
            <button
              id="back-to-projects"
              onClick={() => onSelectProject(null)}
              className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-zinc-400 hover:text-white transition-colors cursor-pointer group"
            >
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              <span>Back to all projects</span>
            </button>

            <div className="flex items-center gap-2">
              <button
                id="prev-project-btn"
                onClick={handlePrevProject}
                className="p-1.5 rounded-lg border border-zinc-800 hover:bg-zinc-900 transition-colors cursor-pointer text-zinc-400 hover:text-white"
                title="Previous Project"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                id="next-project-btn"
                onClick={handleNextProject}
                className="p-1.5 rounded-lg border border-zinc-800 hover:bg-zinc-900 transition-colors cursor-pointer text-zinc-400 hover:text-white"
                title="Next Project"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Hero Banner Area */}
          <div
            id="project-detail-hero"
            className="relative rounded-2xl overflow-hidden h-64 sm:h-80 md:h-96 bg-zinc-900 flex flex-col justify-end p-6 md:p-10 text-white shadow-xl"
          >
            {selectedProject.youtubeThumbnail ? (
              <img
                src={selectedProject.youtubeThumbnail}
                alt={`${selectedProject.title} Banner`}
                referrerPolicy="no-referrer"
                className="absolute inset-0 w-full h-full object-cover"
              />
            ) : (
              <div className={`absolute inset-0 bg-gradient-to-br ${selectedProject.bannerGradient}`} />
            )}
            {/* Ambient vignette */}
            <div className="absolute inset-0 bg-black/50 z-0" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent z-10" />

            <div className="relative z-20 space-y-3.5 max-w-2xl">
              <span className="px-2.5 py-1 rounded bg-white/20 backdrop-blur-md text-[10px] font-mono tracking-widest uppercase font-bold border border-white/20">
                {selectedProject.type}
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-sans font-bold tracking-tight">
                {selectedProject.title}
              </h1>
              <p className="text-zinc-200 text-sm md:text-base leading-relaxed font-sans font-medium">
                {selectedProject.description}
              </p>
            </div>

            {/* Subtle Drafting Accents */}
            <div className="absolute top-4 right-4 text-[9px] font-mono text-white/40 tracking-widest hidden sm:block z-20">
              PROJECT_ID: {selectedProject.id.toUpperCase()} // REV_4
            </div>
          </div>

          {/* Grid Layout: Main content (8 cols) and Sidebar (4 cols) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Left Content (8 cols) */}
            <div className="lg:col-span-8 space-y-10">
              
              {/* Project Overview */}
              <section id="project-overview" className="space-y-4">
                <h2 className="text-lg font-sans font-bold tracking-tight border-b border-zinc-800 pb-2 flex items-center gap-2 text-white">
                  <Layers className="w-4 h-4 text-emerald-400" />
                  <span>Project Overview</span>
                </h2>
                <p className="text-sm text-zinc-200 leading-relaxed font-sans font-medium">
                  {selectedProject.longDescription}
                </p>
              </section>

              {/* Gameplay Video / Walkthrough Embed */}
              {embedUrl ? (
                <section id="project-media" className="space-y-4">
                  <h2 className="text-lg font-sans font-bold tracking-tight border-b border-zinc-800 pb-2 flex items-center gap-2 text-white">
                    <Play className="w-4 h-4 text-emerald-400" />
                    <span>Gameplay Video & Real-Time Walkthrough</span>
                  </h2>
                  <div className="relative rounded-xl overflow-hidden shadow-lg bg-black border border-zinc-800 aspect-video">
                    <iframe
                      src={embedUrl}
                      title={`${selectedProject.title} Gameplay Walkthrough`}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      className="absolute inset-0 w-full h-full border-0"
                    />
                  </div>
                </section>
              ) : (
                <section id="project-media-fallback" className="space-y-4">
                  <h2 className="text-lg font-sans font-bold tracking-tight border-b border-zinc-800 pb-2 flex items-center gap-2 text-white">
                    <Play className="w-4 h-4 text-emerald-400" />
                    <span>Gameplay Walkthrough</span>
                  </h2>
                  <div className="p-8 rounded-xl border border-dashed border-zinc-800 text-center bg-zinc-900/30">
                    <span className="block text-sm font-sans text-zinc-300 font-semibold">
                      In-Engine Showcase Available
                    </span>
                    <span className="block text-xs font-mono text-zinc-450 mt-1">
                      This project features real-time mechanics and physics scripts configured directly in Unreal.
                    </span>
                  </div>
                </section>
              )}

              {/* Challenges */}
              <section id="project-challenges" className="space-y-4">
                <h2 className="text-lg font-sans font-bold tracking-tight border-b border-zinc-800 pb-2 flex items-center gap-2 text-white">
                  <HelpCircle className="w-4 h-4 text-emerald-400" />
                  <span>Technical Challenges & Solutions</span>
                </h2>
                <div className="grid grid-cols-1 gap-4">
                  {selectedProject.challenges.map((challenge, index) => (
                    <div
                      key={index}
                      className="p-5 rounded-xl bg-zinc-900 border border-zinc-800 shadow-sm flex gap-4 items-start"
                    >
                      <div className="w-6 h-6 rounded-full bg-red-950/40 text-red-450 flex items-center justify-center shrink-0 font-mono text-xs font-bold">
                        !
                      </div>
                      <div className="space-y-1.5">
                        <span className="block text-xs font-mono font-bold tracking-wider text-zinc-400 uppercase">
                          Challenge {index + 1}
                        </span>
                        <p className="text-sm text-zinc-200 leading-relaxed font-sans font-medium">
                          {challenge}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Development Process */}
              <section id="project-process" className="space-y-4">
                <h2 className="text-lg font-sans font-bold tracking-tight border-b border-zinc-800 pb-2 flex items-center gap-2 text-white">
                  <Layers className="w-4 h-4 text-emerald-400" />
                  <span>Development Process & Architecture</span>
                </h2>
                <div className="relative pl-6 border-l border-zinc-800 space-y-8 py-2">
                  {selectedProject.process.map((step, index) => (
                    <div key={index} className="relative">
                      {/* Timeline Node dot */}
                      <span className="absolute -left-[30px] top-1.5 w-4 h-4 rounded-full border-2 border-emerald-400 bg-zinc-950" />
                      <div className="space-y-1">
                        <span className="block text-xs font-mono text-zinc-400 font-bold uppercase tracking-wider">
                          Stage {index + 1}
                        </span>
                        <p className="text-sm text-zinc-200 leading-relaxed font-sans font-medium">
                          {step}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

            </div>

            {/* Right Sidebar (4 cols) */}
            <div className="lg:col-span-4 space-y-6">
              
              {/* Tech Stack Box */}
              <div className="p-6 rounded-xl bg-zinc-900 border border-zinc-800 shadow-sm space-y-4">
                <span className="block text-xs font-mono text-emerald-400 uppercase tracking-widest font-bold">
                  Technology Stack
                </span>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-xs font-sans font-bold bg-zinc-850 text-zinc-200 rounded border border-zinc-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Key Learnings Box */}
              <div className="p-6 rounded-xl bg-gradient-to-tr from-emerald-500/5 via-teal-500/5 to-transparent border border-zinc-800 shadow-sm space-y-4">
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-emerald-400" />
                  <span className="block text-xs font-mono text-emerald-400 uppercase tracking-widest font-bold">
                    Key Learnings
                  </span>
                </div>
                <ul className="space-y-3">
                  {selectedProject.learnings.map((learning, index) => (
                    <li key={index} className="flex gap-2.5 items-start">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0" />
                      <span className="text-xs text-zinc-200 font-sans leading-relaxed font-medium">
                        {learning}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Back to Work Action */}
              <button
                id="sidebar-back-to-grid"
                onClick={() => onSelectProject(null)}
                className="w-full py-3.5 rounded-xl border border-zinc-800 text-center font-sans text-xs font-bold tracking-wider uppercase hover:bg-zinc-900 text-white transition-colors cursor-pointer"
              >
                Back to All Work
              </button>

            </div>

          </div>

        </div>
      </div>
    );
  }

  // Otherwise, render grid
  return (
    <section
      id="projects"
      className="py-24 px-6 md:px-8 bg-zinc-950 border-t border-zinc-900"
    >
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 border-b border-zinc-800 pb-4">
          <div className="space-y-2">
            <h2 className="text-3xl sm:text-4xl font-sans font-bold tracking-tight text-white">
              Projects
            </h2>
          </div>
        </div>

        {/* Projects Grid */}
        <div id="projects-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              id={`project-card-${project.id}`}
              onClick={() => onSelectProject(project.id)}
              className="group relative rounded-xl overflow-hidden bg-zinc-900 border border-zinc-800 shadow-sm hover:shadow-md hover:border-zinc-700 transition-all duration-300 flex flex-col justify-between cursor-pointer"
            >
              
              {/* Card visual banner / gradient / thumbnail */}
              <div className="relative h-44 bg-zinc-900 flex flex-col justify-end p-5 text-white overflow-hidden">
                {project.youtubeThumbnail ? (
                  <img
                    src={project.youtubeThumbnail}
                    alt={`${project.title} Thumbnail`}
                    referrerPolicy="no-referrer"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.bannerGradient}`} />
                )}
                <div className="absolute inset-0 bg-black/30 z-0 group-hover:bg-black/15 transition-all duration-300" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent z-10" />
                
                {/* Tech code in card border */}
                <span className="absolute top-4 right-4 text-[8px] font-mono opacity-40 z-20">
                  UE5_BUILD_01
                </span>

                <span className="relative z-20 px-2 py-0.5 rounded bg-white/20 backdrop-blur-xs text-[9px] font-mono tracking-widest uppercase font-semibold w-max border border-white/10">
                  {project.type}
                </span>
              </div>

              {/* Card Content details */}
              <div className="p-5 flex-grow flex flex-col justify-between space-y-4 bg-zinc-900">
                <div className="space-y-1.5">
                  <h3 className="text-base font-sans font-bold tracking-tight text-white group-hover:text-emerald-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-zinc-350 leading-relaxed font-sans font-medium line-clamp-2">
                    {project.description}
                  </p>
                </div>

                <div className="space-y-3 pt-2">
                  {/* Skill micro tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 text-[10px] font-mono text-zinc-300 bg-zinc-800 rounded border border-zinc-850"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-0.5 text-[10px] font-mono text-zinc-450 font-bold">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Read More interactive cue */}
                  <div className="flex items-center gap-1.5 text-xs font-bold text-white group-hover:text-emerald-400 transition-colors pt-1">
                    <span>View Showcase</span>
                    <ExternalLink className="w-3.5 h-3.5 text-zinc-400" />
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
