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
      },
      boxShadow: {
        soft: "0 24px 70px -35px rgba(12, 41, 69, 0.22)",
      },
    },
  },
  plugins: [],
};

export default config;
