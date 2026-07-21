import { Project, SkillCategory, WorkExperience, Education, Certification } from './types';

export const PERSONAL_INFO = {
  name: "Varshin Narasimman",
  titles: ["AR/VR Developer", "Unreal Engine Artist", "XR Developer"],
  location: "India",
  experienceYears: "1+",
  about: "I am an AR/VR Developer specializing in Unreal Engine, immersive experiences, cinematic storytelling, and real-time interactive applications. My expertise includes VR, AR, mixed reality, environment creation, Blueprint scripting, gameplay systems, UI implementation, and real-time visualization. I enjoy building immersive worlds, designing interactive experiences, and transforming ideas into polished products using modern XR technologies.",
  heroHeading: "Building immersive experiences through Unreal Engine, XR technologies, and cinematic storytelling.",
  heroSubheading: "I create AR, VR, and real-time interactive applications using Unreal Engine, combining technical development with visual design to deliver engaging experiences.",
  avatarUrl: "/varshin_avatar.jpg",
  email: "varshinnarasimman@gmail.com",
  socials: {
    linkedin: "https://www.linkedin.com/in/varshin-narasimman",
    github: "https://github.com/varshinfidi",
    youtube: "https://www.youtube.com/@varshinnarasimman4149",
    instagram: "https://www.instagram.com/unreal.fidi",
    artstation: "https://www.artstation.com/varshin_fidi"
  },
  resumeUrl: "https://drive.google.com/file/d/1LtDJvVBaYC9BJRZqyTGvMdUh59UKWP7F/view?usp=sharing"
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Game Engines",
    skills: [
      { name: "Unreal Engine 5", level: "Expert", iconName: "Flame" },
      { name: "Unity", level: "Advanced", iconName: "Gamepad" }
    ]
  },
  {
    title: "XR Technologies",
    skills: [
      { name: "Virtual Reality (VR)", level: "Expert", iconName: "Glasses" },
      { name: "Augmented Reality (AR)", level: "Expert", iconName: "Tablet" },
      { name: "Mixed Reality (MR)", level: "Advanced", iconName: "Cpu" },
      { name: "XR Interaction Design", level: "Expert", iconName: "Pointer" }
    ]
  },
  {
    title: "Programming & Scripting",
    skills: [
      { name: "Blueprint Scripting", level: "Expert", iconName: "Code" },
      { name: "C#", level: "Advanced", iconName: "Terminal" },
      { name: "Basic Java", level: "Intermediate", iconName: "Coffee" },
      { name: "Problem Solving", level: "Advanced", iconName: "Brain" }
    ]
  },
  {
    title: "3D & Design",
    skills: [
      { name: "Environment Design", level: "Expert", iconName: "Mountain" },
      { name: "Level Design", level: "Expert", iconName: "Layers" },
      { name: "Lighting", level: "Expert", iconName: "Sun" },
      { name: "Cinematic Creation", level: "Expert", iconName: "Film" },
      { name: "UI Design", level: "Advanced", iconName: "Layout" },
      { name: "Figma", level: "Advanced", iconName: "Figma" }
    ]
  },
  {
    title: "Tools & SDKs",
    skills: [
      { name: "Git", level: "Advanced", iconName: "GitBranch" },
      { name: "Visual Studio Code", level: "Advanced", iconName: "Settings" },
      { name: "Quixel Bridge", level: "Expert", iconName: "Box" },
      { name: "MetaHuman", level: "Expert", iconName: "User" },
      { name: "ARCore", level: "Expert", iconName: "Smartphone" },
      { name: "ARKit", level: "Advanced", iconName: "Compass" }
    ]
  },
  {
    title: "Other Skills",
    skills: [
      { name: "Real-time Rendering", level: "Expert", iconName: "Zap" },
      { name: "Optimization", level: "Advanced", iconName: "Gauge" },
      { name: "Interactive Systems", level: "Expert", iconName: "Share2" },
      { name: "Gameplay Mechanics", level: "Expert", iconName: "Activity" },
      { name: "Technical Documentation", level: "Advanced", iconName: "FileText" }
    ]
  }
];

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    role: "Technical Engineer",
    company: "Enthu Technology Solutions India Pvt Ltd",
    duration: "2025 - 2026",
    location: "India",
    description: "Specializing in the development of real-time immersive applications and spatial visualizations using Unreal Engine.",
    responsibilities: [
      "Developed AR and VR applications using Unreal Engine for various enterprise clients.",
      "Designed highly immersive learning experiences and real-time interactive environments.",
      "Created stunning cinematic walkthroughs and photorealistic real-time visualizations.",
      "Built reliable, optimized gameplay and interaction systems using Blueprint visual scripting.",
      "Delivered clean 2D layouts and custom interactive experiences for educational institutions.",
      "Collaborated closely with multidisciplinary teams for rapid prototyping, demos, client presentations, and technical implementation."
    ],
    achievements: [
      "Contributed to the successful completion and deployment of 30+ custom educational layouts.",
      "Directly supported and satisfied 25+ specific enterprise client requirements.",
      "Developed and delivered multiple high-impact AR/VR demonstrations that secured business opportunities.",
      "Successfully built and optimized interactive learning simulations for specialized training applications."
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "mahabharatham",
    title: "Mahabharatham: The Forgotten Warrior",
    type: "VR Experience",
    description: "An immersive VR combat experience inspired by the Mahabharata, featuring bow-and-arrow gameplay and cinematic storytelling.",
    longDescription: "Mahabharatham: The Forgotten Warrior is a premium Virtual Reality combat experience designed to bring ancient Indian mythology to life. Built using Unreal Engine 5, the project features a fully physics-driven bow and arrow interaction system, lifelike character performances powered by MetaHuman, and cinematic sequences that engulf the user in mythical warfare.",
    technologies: ["Unreal Engine 5", "Virtual Reality", "Blueprint Scripting", "MetaHuman Creator", "Quixel Megascans", "Chaos Physics"],
    youtubeUrl: "https://youtu.be/3XmUOb1eJl8",
    challenges: [
      "Tuning the VR interaction and haptics to deliver a realistic bow-and-arrow feeling (draw-weight, release tension).",
      "Optimizing complex mythological level geometry and detailed particle effects (arrows, magic fire) to maintain a rock-solid 90 FPS.",
      "Scripting dynamic, high-fidelity boss fights that respond organically to physical arrow impacts."
    ],
    process: [
      "Designed a physics-based projectile blueprint that calculates gravity, air resistance, and penetration depth on collision.",
      "Sculpted a dramatic, historically inspired battlefield environment using Quixel assets and optimized custom shaders.",
      "Configured advanced Lumen lighting and atmospheric fog to convey a high-tension, epic mood.",
      "Synchronized spatial audio triggers for combat vocals, environmental hums, and arrow releases."
    ],
    learnings: [
      "Acquired deep mastery over VR physics controllers and customized physical interactions in UE5.",
      "Understood critical optimization workflows like asset profiling, draw call reduction, and custom LOD creation for spatial platforms."
    ],
    category: "vr",
    bannerGradient: "from-amber-600 via-orange-800 to-stone-900",
    youtubeThumbnail: "https://img.youtube.com/vi/3XmUOb1eJl8/hqdefault.jpg"
  },
  {
    id: "echo-silence",
    title: "Echo of Silence",
    type: "Narrative Experience",
    description: "A cinematic first-person experience focused on atmosphere, storytelling, and environmental design.",
    longDescription: "Echo of Silence is an atmospheric first-person storytelling experience. The project emphasizes the emotional capability of virtual spaces, leveraging monumental brutalist architecture, intricate shadows, and physical environment triggers. It operates as an exploration of isolation, scale, and quiet retrospection.",
    technologies: ["Unreal Engine 5", "Lumen Global Illumination", "Level Design", "Cinematic Sequences", "Custom Post-Processing"],
    youtubeUrl: "https://youtu.be/3kDGiA5Uzzo",
    challenges: [
      "Conveying a deep narrative arc entirely without dialogue, relying purely on visual cues, pacing, and spatial layout.",
      "Achieving stable performance while using Lumen global illumination across vast, reflective architectural indoor scenes.",
      "Creating seamless trigger zones that guide the player's camera to key narrative points without taking control away from them."
    ],
    process: [
      "Sketched level layouts in grey-box form to study scale and ensure player movement felt appropriately heavy.",
      "Assembled the environment with textured materials focusing on raw concrete, light-filtering grids, and still water pools.",
      "Integrated complex post-processing volumes featuring subtle chromatic aberration, specific look-up-tables (LUTs) for color grading, and localized fog.",
      "Created dynamic Blueprint triggers that subtly morph the environment's state or lighting color as the player progresses."
    ],
    learnings: [
      "Developed a robust understanding of visual storytelling techniques and cinematic composition.",
      "Learned advanced Lumen optimization techniques, including virtual shadow maps configuration and light channel isolation."
    ],
    category: "narrative",
    bannerGradient: "from-blue-900 via-indigo-950 to-slate-900",
    youtubeThumbnail: "https://img.youtube.com/vi/3kDGiA5Uzzo/hqdefault.jpg"
  },
  {
    id: "cinematic-recreation",
    title: "Cinematic Recreation (Batman Project)",
    type: "Cinematic Sequence",
    description: "A high-fidelity atmospheric rendering of the Dark Knight built in Unreal Engine 5.",
    longDescription: "Cinematic Recreation (Batman Project) is an ultra-high-fidelity cinematic sequence and atmospheric environment layout constructed entirely within Unreal Engine 5. It incorporates cinematic framing, photorealistic textures, and moody volumetric lighting to capture a dramatic, high-tension Gotham-inspired aesthetic.",
    technologies: ["Unreal Engine 5", "Lumen Real-Time GI", "Level Sequencer", "Movie Render Queue", "Volumetric Fog", "Post-Processing"],
    youtubeUrl: "https://youtu.be/Ewxz8f2MCS4",
    challenges: [
      "Achieving photorealistic cinematic lighting in a dark, atmospheric Gotham-like setting without losing detail in the shadows.",
      "Working with the Level Sequencer to handle complex camera transitions and character asset synchronizations seamlessly.",
      "Optimizing ultra-high-resolution textured assets and volumetric fog to maintain smooth real-time viewport playback."
    ],
    process: [
      "Assembled a detailed gothic street environment using custom assets and Quixel Megascans.",
      "Configured realistic volumetric lighting and dense atmospheric height fog to emulate a classic cinematic film look.",
      "Choreographed dramatic multi-camera tracks and post-processing color grading profiles to direct the viewer's focus.",
      "Utilized the Movie Render Queue with temporal anti-aliasing (TAA) to capture pristine production frames."
    ],
    learnings: [
      "Gained advanced level-design skills and specialized knowledge of real-time virtual production pipelines in UE5.",
      "Mastered post-production color grading, lens settings, and camera-rig setups for cinematic storytelling."
    ],
    category: "narrative",
    bannerGradient: "from-slate-800 via-zinc-900 to-black",
    youtubeThumbnail: "https://img.youtube.com/vi/Ewxz8f2MCS4/hqdefault.jpg"
  },
  {
    id: "green-void",
    title: "Green Void",
    type: "First-Person Exploration",
    description: "A story-driven environmental experience exploring themes of routine, isolation, and escape.",
    longDescription: "Green Void is a striking, surreal first-person exploration game that visualizes the psychological constraints of repetitive routines and the desire for escape. Players find themselves trapped in an office complex that slowly unravels, giving way to a bizarre, overgrown forest dimension.",
    technologies: ["Unreal Engine", "Procedural Shaders", "Volumetric Materials", "Sound Design", "State-Machine Scripting"],
    youtubeUrl: "https://youtu.be/R2dUhEGAgqs",
    challenges: [
      "Constructing a smooth visual transition between the sterile corporate environment and the organic, overgrown void.",
      "Developing procedural foliage shaders that react physically and stylistically as the player walks past them.",
      "Ensuring the soundscape transitions seamlessly from artificial hums to ambient forest sounds based on player navigation."
    ],
    process: [
      "Designed custom transition materials that blend office carpet and wallpaper into moss and wood via distance-to-nearest-player nodes.",
      "Created dynamic level streaming workflows that load the surreal forest components as the corporate office elements fade.",
      "Engineered atmospheric lighting setpieces with bright lime and emerald volumetric sunbeams.",
      "Scripted interactive audio nodes that trigger spatial whispers and wind noises depending on exploration depth."
    ],
    learnings: [
      "Learned complex material scripting and material parameter collections inside Unreal's Material Editor.",
      "Acquired expertise in level-streaming, memory optimization, and procedural atmospheric cues."
    ],
    category: "narrative",
    bannerGradient: "from-green-700 via-emerald-950 to-neutral-905",
    youtubeThumbnail: "https://img.youtube.com/vi/R2dUhEGAgqs/hqdefault.jpg"
  },
  {
    id: "classland",
    title: "ClassLand",
    type: "Interactive Experience",
    description: "A real-time educational visualization project developed using Unreal Engine.",
    longDescription: "ClassLand is a full-scale real-time visualization application built in Unreal Engine to revolutionize educational workspace planning. Users can configure desks, technology equipment, boards, and decorative assets inside a 3D environment, allowing institutional planners to test different layouts instantly before physical construction.",
    technologies: ["Unreal Engine", "UMG UI Framework", "Blueprint System Architecture", "Data Asset Serialization", "Dynamic Spawning"],
    youtubeUrl: "https://youtu.be/RG54rRYhiKQ",
    challenges: [
      "Designing a flexible grid alignment and drag-and-drop system that is intuitive for non-technical clients.",
      "Ensuring real-time soft shadows and realistic lighting remain high-quality as furniture items are continuously spawned and moved.",
      "Managing furniture categories and custom parameters cleanly inside a unified runtime system."
    ],
    process: [
      "Programmed a modular grid snapping system in Blueprint to align actors on custom grid sizes.",
      "Built a elegant, responsive client interface using Unreal's UMG widgets, including searchable catalogs and interactive detail panels.",
      "Developed a local save/load system using serialized Data Assets to allow users to store their custom classroom configurations.",
      "Set up dynamic lighting profiles that update dynamically when the user switches between 'Daylight' and 'Night Class' mode."
    ],
    learnings: [
      "Mastered full UI/UX design patterns inside game engines (UMG).",
      "Gained deep knowledge of modular asset structuring and dynamic scene-building mechanics."
    ],
    category: "visualization",
    bannerGradient: "from-emerald-700 via-teal-900 to-zinc-900",
    youtubeThumbnail: "https://img.youtube.com/vi/RG54rRYhiKQ/hqdefault.jpg"
  },
  {
    id: "ducky-duck-chess",
    title: "Ducky Duck Chess",
    type: "2D Game",
    description: "A fun chess game developed in Unity.",
    longDescription: "Ducky Duck Chess is an incredibly charming, stylized 2D reimagination of the traditional game of chess. Designed with custom rubber duck characters and vibrant water-themed boards, it simplifies piece representation to attract younger audiences while maintaining classic, full-depth chess regulations.",
    technologies: ["Unity Engine", "C# Programming", "Unity UI Layouts", "2D Sprite Animation", "Sound Effects Mixer"],
    youtubeUrl: "https://youtube.com/shorts/nVV2wB_ZyYM",
    challenges: [
      "Translating complex traditional chess rule validation (including castling, en passant, check/checkmate loops) into efficient, clean C# code.",
      "Creating fluid movement and capture animations that give the ducks a highly responsive, whimsical feel.",
      "Supporting a responsive mobile visual interface that scales beautifully across varying aspect ratios."
    ],
    process: [
      "Programmed a clean, abstract 8x8 matrix game manager to handle rules independently of visual sprites.",
      "Coded dynamic movement interpolations (Lerp) to smoothly float pieces across tiles during player turns.",
      "Collaborated with graphic assets to slice and animate cartoon duck states (idle, jumping, splashed).",
      "Created an adaptive layout anchor script to preserve board integrity on standard tablet and mobile screens."
    ],
    learnings: [
      "Greatly strengthened object-oriented architecture and logical algorithms in C#.",
      "Gained complete mastery over Unity UI Canvas, anchors, and device resolution adaptation systems."
    ],
    category: "game",
    bannerGradient: "from-cyan-500 via-sky-700 to-blue-950",
    youtubeThumbnail: "https://img.youtube.com/vi/nVV2wB_ZyYM/hqdefault.jpg"
  }
];

export const EDUCATION_LIST: Education[] = [
  {
    degree: "Bachelor of Engineering",
    institution: "KPR Institute of Engineering and Technology",
    duration: "2021 - 2025",
    details: ["Focused on computer graphics, object-oriented programming, and interactive software development."]
  },
  {
    degree: "Master Certification in AR/VR",
    institution: "Monolith Research and Training Labs",
    duration: "Professional Specialization",
    details: ["Extensive specialization in Unreal Engine development, VR/AR interaction frameworks, asset pipelines, and performance optimization."]
  }
];

export const CERTIFICATIONS: Certification[] = [];
