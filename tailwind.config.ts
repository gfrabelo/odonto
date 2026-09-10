import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#102A43",
        navy: "#0C2945",
        primary: "#1769AA",
        ice: "#EAF4FB",
        muted: "#64748B",
        line: "#DCE7EF",
        canvas: "#F8FAFC",
        espresso: "#2B211D",
        copper: "#9A6853",
        ivory: "#FAF7F2",
        sand: "#E9DED3",
        blush: "#F3DFE3",
        rose: "#DFAFBA",
      },
      boxShadow: {
        soft: "0 24px 70px -35px rgba(12, 41, 69, 0.22)",
        editorial: "0 30px 80px -42px rgba(43, 33, 29, 0.32)",
      },
    },
  },
  plugins: [],
};

export default config;
