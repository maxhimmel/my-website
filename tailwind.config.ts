import type { Config } from "tailwindcss";

export const themes = [
  "valentine",
  "emerald",
  "retro",
  "cupcake",
  "dracula",
  "dim",
  "corporate",
  "fantasy",
  // these are ugly
  // "coffee",
  // "pastel",
  // "luxury",
  // "aqua",
  // "cmyk",
];

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  plugins: [require("daisyui")],

  daisyui: {
    themes: themes,
  },

  theme: {
    extend: {
      spacing: {
        "navbar-h": "5.5rem",
      },

      keyframes: {
        "spin-reverse": {
          "0%": {
            transform: "rotate(0deg)",
          },
          "100%": {
            transform: "rotate(-360deg)",
          },
        }
      },
    },
  }
};
export default config;
