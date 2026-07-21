export interface Project {
  id: string;
  title: string;
  type: string;
  description: string;
  longDescription: string;
  technologies: string[];
  youtubeUrl?: string;
  challenges: string[];
  process: string[];
  learnings: string[];
  category: 'vr' | 'ar' | 'mr' | 'narrative' | 'game' | 'visualization';
  bannerGradient: string; // Tailwind gradient classes for visual card backgrounds
  youtubeThumbnail?: string;
}

export interface SkillCategory {
  title: string;
  skills: { name: string; level?: 'Expert' | 'Advanced' | 'Intermediate' | 'Proficient'; iconName?: string }[];
}

export interface WorkExperience {
  role: string;
  company: string;
  duration: string;
  location: string;
  description: string;
  responsibilities: string[];
  achievements: string[];
}

export interface Education {
  degree: string;
  institution: string;
  duration: string;
  details?: string[];
}

export interface Certification {
  name: string;
  issuer: string;
  year?: string;
}
