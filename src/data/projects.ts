export interface Project {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  type: string;
  tag: string;
  url: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "OUTCOMEX",
    description:
      "An NLP-powered desktop application that analyzes the alignment between BSIT course outlines and current industry technical competency requirements.",
    techStack: [
      "Python",
      "PyQt6",
      "Sentence-Transformers",
      "PyTorch",
      "HuggingFace Transformers",
      "Firebase",
      "Qt-Material",
      "QtAwesome",
      "Pandas",
      "Python-Docx",
      "PyPDF2",
      "Matplotlib",
      "Seaborn",
      "ReportLab",
    ],
    type: "INTELLIGENT NLP SYSTEM",
    tag: "CAPSTONE",
    url: "",
  },
  {
    id: 2,
    title: "EMM LAB",
    description:
      "A high-performance UI laboratory and documentation system engineered for the synthesis, real-time previewing, and distribution of futuristic React components.",
    techStack: [
      "Next.js 14",
      "TypeScript",
      "Contentlayer",
      "Framer Motion",
      "Shiki",
      "Tailwind CSS",
      "Fuse.js",
      "Lucide React",
      "Jotai",
      "Lenis",
    ],
    type: "EXPERIMENTAL LAB",
    tag: "Playground",
    url: "https://emm-lab.vercel.app/",
  },
  {
    id: 3,
    title: "HUE KAI",
    description:
      "A color management tool for generating, analyzing, and exporting harmonic color palettes.",
    techStack: [
      "Vite",
      "React",
      "TypeScript",
      "Lucide React",
      "Culori",
      "jsPDF",
      "React Router",
      "Tailwind CSS",
    ],
    type: "COLOR TOOL",
    tag: "Creative",
    url: "https://hue-kai.vercel.app/#/",
  },
  {
    id: 4,
    title: "SRT GEN EM",
    description:
      "AI-powered video transcription and subtitle generation tool.",
    techStack: [
      "Vite",
      "React",
      "TypeScript",
      "Gemini AI",
      "Tailwind CSS",
      "JSZip",
      "Lucide React",
    ],
    type: "SUBTITLE TOOL",
    tag: "Utility",
    url: "https://srt-gen-em.vercel.app/",
  },
  {
    id: 5,
    title: "SVG PRINTER",
    description:
      "Generates custom SVG graphics from natural language prompts using the Google Gemini AI.",
    techStack: [
      "React",
      "Google Gemini API",
      "Tailwind CSS",
      "TypeScript",
      "Vite",
      "Lucide React",
    ],
    type: "SVG UTILITY",
    tag: "Open Source",
    url: "https://github.com/Emmjeyyyy/svg-printer",
  },
  {
    id: 6,
    title: "KANJI TERMINAL",
    description:
      "A terminal-themed application for learning Japanese Kanji through spaced repetition and proficiency exam simulations.",
    techStack: ["React", "TypeScript", "Vite", "Framer Motion", "Tailwind CSS"],
    type: "TERMINAL UI",
    tag: "Interactive",
    url: "https://kanji-terminal.vercel.app/",
  },
  {
    id: 7,
    title: "KANABLITZ",
    description:
      "A fast-paced web application for learning and practicing Japanese Hiragana and Katakana.",
    techStack: ["React", "TypeScript", "Tailwind CSS"],
    type: "LEARNING EXPERIENCE",
    tag: "Web App",
    url: "https://kanablitz.vercel.app/",
  },
  {
    id: 8,
    title: "GITHUB STATS",
    description:
      "A statistics generator that provides dynamic and customizable SVG cards for GitHub profile READMEs.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
    type: "DASHBOARD",
    tag: "Dev Tool",
    url: "https://emm-github-stats.vercel.app/",
  },
  {
    id: 9,
    title: "ANIME DIRECTORY",
    description:
      "A platform for browsing anime series and managing personal watchlists with real-time data synchronization.",
    techStack: [
      "React",
      "Firebase",
      "TypeScript",
      "AniList API",
      "Jikan API",
    ],
    type: "DATA VISUALIZATION",
    tag: "Web App",
    url: "https://anime-series-directory.vercel.app/",
  },
  {
    id: 10,
    title: "INTERDIMENSIONAL CODEX",
    description:
      "A comprehensive web encyclopedia for exploring characters, locations, and episodes from the Rick and Morty universe.",
    techStack: ["TypeScript", "React", "Vite"],
    type: "SCI-FI EXPERIENCE",
    tag: "Creative",
    url: "https://interdimensional-codex.vercel.app/#/",
  },
  {
    id: 11,
    title: "DOTA TERMINAL",
    description:
      "A terminal-themed web application for viewing Dota 2 player statistics and match history.",
    techStack: ["TypeScript", "React", "Vite"],
    type: "TERMINAL UI",
    tag: "Fan Project",
    url: "https://dota-terminal.vercel.app/",
  },
  {
    id: 12,
    title: "ROR2 SAVE EDITOR",
    description:
      "Web-based save editor for Risk of Rain 2, allowing quick unlocks for survivors and loadouts, with support for all DLCs (Alloyed Collective).",
    techStack: ["TypeScript", "React", "Tailwind CSS"],
    type: "DEVELOPER TOOL",
    tag: "Utility",
    url: "https://ror2-save-editor.vercel.app/",
  },
  {
    id: 13,
    title: "TIC TAC TOE",
    description:
      "A real-time multiplayer Tic-Tac-Toe game using web sockets for synchronized gameplay.",
    techStack: ["React", "Node.js", "Socket.io"],
    type: "GAME",
    tag: "Interactive",
    url: "https://tic-tac-toe-mult.vercel.app/",
  },
  {
    id: 14,
    title: "BLOOD ECHOES:DUNGEON CRAWLER",
    description:
      "A roguelite dungeon crawler game featuring procedural progression and combat mechanics.",
    techStack: ["TypeScript", "React", "Vite", "Tailwind CSS"],
    type: "GAME",
    tag: "Interactive",
    url: "https://dungeon-crawler-game-eosin.vercel.app/",
  },
  {
    id: 15,
    title: "ROGUELIKE SHOOTER GAME",
    description: "",
    techStack: [],
    type: "GAME",
    tag: "Experiment",
    url: "https://test-game-drab.vercel.app/",
  },
  {
    id: 16,
    title: "DODGE MASTER",
    description:
      "A Java-based 2D arcade game focused on wave-based survival and dodging enemy patterns, developed during my second year of college.",
    techStack: ["Java AWT", "Swing"],
    type: "GAME",
    tag: "Interactive",
    url: "",
  },
];

// Projects intentionally hidden from the public gallery
export const hiddenProjects: Project[] = [
  {
    id: 17,
    title: "TEKTON",
    description:
      "An AI-powered interface for generating high-fidelity user interface components and conceptual design variations based on natural language prompts.",
    techStack: ["TypeScript", "React", "Google Gemini", "Vite"],
    type: "DEVELOPER TOOL",
    tag: "Open Source",
    url: "https://github.com/Emmjeyyyy/tekton",
  },
  {
    id: 18,
    title: "BABY Z INVITATION",
    description:
      "A digital invitation system for managing event guests and real-time RSVP responses.",
    techStack: ["React", "Firebase", "Tailwind CSS", "Vite", "Framer Motion"],
    type: "INTERACTIVE INVITE",
    tag: "Creative",
    url: "https://baby-z-invitation.vercel.app/",
  },
];
