export interface Project {
  id: number;
  title: string;
  type: string;
  tag: string;
  url: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "OUTCOMEX",
    type: "INTELLIGENT NLP SYSTEM",
    tag: "CAPSTONE",
    url: "",
  },
  {
    id: 2,
    title: "EMM LAB",
    type: "EXPERIMENTAL LAB",
    tag: "Playground",
    url: "https://emm-lab.vercel.app/",
  },
  {
    id: 3,
    title: "HUE KAI",
    type: "UI EXPERIMENT",
    tag: "Creative",
    url: "https://hue-kai.vercel.app/#/",
  },
  {
    id: 4,
    title: "SRT GEN EM",
    type: "SUBTITLE TOOL",
    tag: "Utility",
    url: "https://srt-gen-em.vercel.app/",
  },
  {
    id: 5,
    title: "SVG PRINTER",
    type: "SVG UTILITY",
    tag: "Open Source",
    url: "https://github.com/Emmjeyyyy/svg-printer",
  },
  {
    id: 6,
    title: "KANJI TERMINAL",
    type: "TERMINAL UI",
    tag: "Interactive",
    url: "https://kanji-terminal.vercel.app/",
  },
  {
    id: 7,
    title: "KANABLITZ",
    type: "LEARNING EXPERIENCE",
    tag: "Web App",
    url: "https://kanablitz.vercel.app/",
  },
  {
    id: 8,
    title: "GITHUB STATS",
    type: "DASHBOARD",
    tag: "Dev Tool",
    url: "https://emm-github-stats.vercel.app/",
  },
  {
    id: 9,
    title: "ANIME DIRECTORY",
    type: "DATA VISUALIZATION",
    tag: "Web App",
    url: "https://anime-series-directory.vercel.app/",
  },
  {
    id: 10,
    title: "INTERDIMENSIONAL CODEX",
    type: "SCI-FI EXPERIENCE",
    tag: "Creative",
    url: "https://interdimensional-codex.vercel.app/#/",
  },
  {
    id: 11,
    title: "ROR2 SAVE EDITOR",
    type: "DEVELOPER TOOL",
    tag: "Utility",
    url: "https://ror2-save-editor.vercel.app/",
  },
  {
    id: 12,
    title: "TIC TAC TOE",
    type: "MULTIPLAYER GAME",
    tag: "Interactive",
    url: "https://tic-tac-toe-mult.vercel.app/",
  },
  {
    id: 13,
    title: "DUNGEON CRAWLER",
    type: "GAME DEVELOPMENT",
    tag: "Interactive",
    url: "https://dungeon-crawler-game-eosin.vercel.app/",
  },
  {
    id: 14,
    title: "ROGUELIKE SHOOTER GAME",
    type: "GAME PROTOTYPE",
    tag: "Experiment",
    url: "https://test-game-drab.vercel.app/",
  },
];

// Projects intentionally hidden from the public gallery
export const hiddenProjects: Project[] = [
  {
    id: 15,
    title: "DOTA TERMINAL",
    type: "TERMINAL UI",
    tag: "Fan Project",
    url: "https://dota-terminal.vercel.app/",
  },
  {
    id: 16,
    title: "TEKTON",
    type: "DEVELOPER TOOL",
    tag: "Open Source",
    url: "https://github.com/Emmjeyyyy/tekton",
  },
  {
    id: 17,
    title: "BABY Z INVITATION",
    type: "INTERACTIVE INVITE",
    tag: "Creative",
    url: "https://baby-z-invitation.vercel.app/",
  },
];
