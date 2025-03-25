export type Project = {
  name: string;
  desc: string;
  sourceLink?: string;
  referenceLink?: string;
  img: string;
};

export const PROJECTS: Project[] = [
  {
    name: "Scratch Notes",
    desc: "",
    sourceLink: "https://github.com/maxhimmel/dj-notes-2", // TODO: Setup github README
    referenceLink: "https://dj-notes-2.onrender.com/",
    img: "https://i.imgur.com/gezKdM7.png",
  },
  {
    name: "FEASTMODE",
    desc: "",
    sourceLink: "https://github.com/maxhimmel/feastmode/",
    referenceLink: "https://feastmode-c7c27bc8f641.herokuapp.com/",
    img: "https://raw.githubusercontent.com/maxhimmel/feastmode/refs/heads/main/main_app/static/images/banner.png",
  },
  {
    name: "Minesweeper",
    desc: "",
    sourceLink: "https://github.com/maxhimmel/minesweeper/",
    referenceLink: "https://maxhimmel.github.io/minesweeper",
    img: "https://i.imgur.com/pyPryv7.gif",
  },
  {
    name: "Intellipet Adventures",
    desc: "",
    // sourceLink: undefined,
    referenceLink:
      "https://support.adventureacademy.com/hc/en-us/articles/9378048411031-What-is-Intellipet-Adventures",
    img: "https://i.imgur.com/YgNOxDX.png",
  },
  {
    name: "Adventure Academy",
    desc: "",
    // sourceLink: undefined,
    referenceLink: "https://www.adventureacademy.com/",
    img: "https://i.imgur.com/J9rbtSf.jpeg",
  },
  {
    name: "Marble Knights",
    desc: "",
    // sourceLink: undefined,
    referenceLink: "https://www.youtube.com/watch?v=Ztq1wiz-jzk",
    img: "https://i.imgur.com/8i7umFS.jpeg",
  },
  {
    name: "Cinemoi World",
    desc: "",
    // sourceLink: undefined,
    referenceLink: "https://www.youtube.com/watch?v=xlH43SNRwbE",
    img: "https://i.imgur.com/8Zunng0.png",
  },
  {
    name: "Wizards: Wand of Epicosity",
    desc: "",
    // sourceLink: undefined,
    referenceLink: "https://store.steampowered.com/app/772750/Wizards_Wand_of_Epicosity/",
    img: "https://i.imgur.com/BGPegqS.jpeg",
  },
  {
    name: "Deer Hunter: Reloaded",
    desc: "",
    // sourceLink: undefined,
    referenceLink: "https://store.steampowered.com/app/361370/Deer_Hunter_Reloaded/",
    img: "https://i.imgur.com/imuQMPG.jpeg",
  },
];
