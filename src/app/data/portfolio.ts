export type Project = {
  name: string;
  desc: string;
  sourceLink?: string;
  referenceLink?: string;
  img: string;
  techStack: string[];
};

export const PROJECTS: Project[] = [
  {
    name: "Scratch Notes",
    desc: "Focused on redesigning a school project to improve developer experience and functionality using production-quality technologies.",
    sourceLink: "https://github.com/maxhimmel/dj-notes-2",
    referenceLink: "https://scratch-notes-539a6e946c42.herokuapp.com/",
    img: "https://i.imgur.com/gezKdM7.png",
    techStack: ["Nx", "tRPC", "Prisma"],
  },
  {
    name: "FEASTMODE",
    desc: "Delivered a Django application serving users party planning with potlucks specifically in mind.",
    sourceLink: "https://github.com/maxhimmel/feastmode/",
    referenceLink: "https://feastmode-c7c27bc8f641.herokuapp.com/",
    img: "https://raw.githubusercontent.com/maxhimmel/feastmode/refs/heads/main/main_app/static/images/banner.png",
    techStack: ["Python", "Django", "PostgreSQL"],
  },
  {
    name: "Minesweeper",
    desc: "Developed native JavaScript frontend web app emulating the original Minesweeper game with highly dynamic CSS selectors.",
    sourceLink: "https://github.com/maxhimmel/minesweeper/",
    referenceLink: "https://maxhimmel.github.io/minesweeper",
    img: "https://i.imgur.com/pyPryv7.gif",
    techStack: ["JavaScript", "HTML5", "CSS"],
  },
  {
    name: "Intellipet Adventures",
    desc: "Launched Intellipet Adventures as part of the core team, developing a new game mode to increase user retention.",
    // sourceLink: undefined,
    referenceLink:
      "https://support.adventureacademy.com/hc/en-us/articles/9378048411031-What-is-Intellipet-Adventures",
    img: "https://i.imgur.com/YgNOxDX.png",
    techStack: ["Docker", "Unity"],
  },
  {
    name: "Adventure Academy",
    desc: "Participated in maintaining a large-scale MMO game catered towards gamifying education for elementary schoolers.",
    // sourceLink: undefined,
    referenceLink: "https://www.adventureacademy.com/",
    img: "https://i.imgur.com/J9rbtSf.jpeg",
    techStack: ["Docker", "Unity"],
  },
  {
    name: "Marble Knights",
    desc: "Launched a 4-player cooperative online game as one of Apple Arcade’s flagship titles.",
    // sourceLink: undefined,
    referenceLink: "https://www.youtube.com/watch?v=Ztq1wiz-jzk",
    img: "https://i.imgur.com/8i7umFS.jpeg",
    techStack: ["Unity"],
  },
  {
    name: "Cinemoi World",
    desc: "Focused on improving build times by expediting and improving art pipelines.",
    // sourceLink: undefined,
    referenceLink: "https://www.youtube.com/watch?v=xlH43SNRwbE",
    img: "https://i.imgur.com/8Zunng0.png",
    techStack: ["Unity"],
  },
  {
    name: "Wizards: Wand of Epicosity",
    desc: "Refactored pre-existing game for a redux with a focus on UI.",
    // sourceLink: undefined,
    referenceLink: "https://store.steampowered.com/app/772750/Wizards_Wand_of_Epicosity/",
    img: "https://i.imgur.com/BGPegqS.jpeg",
    techStack: ["Unity"],
  },
  {
    name: "Deer Hunter: Reloaded",
    desc: "Executed on a tight deadline to deploy Deer Hunter on 3 different platforms.",
    // sourceLink: undefined,
    referenceLink: "https://store.steampowered.com/app/361370/Deer_Hunter_Reloaded/",
    img: "https://i.imgur.com/imuQMPG.jpeg",
    techStack: ["Unity"],
  },
];
