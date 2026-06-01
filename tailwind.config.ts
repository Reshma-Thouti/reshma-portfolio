import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ["'Courier New'", "Courier", "monospace"],
        sans: ["'Arial'", "sans-serif"],
        black: ["Impact", "Arial Black", "sans-serif"],
      },
      colors: {
        bg: "#f0f0f0",
        fg: "#0a0a0a",
        muted: "#999999",
        border: "#d4d4d4",
        dark: "#0a0a0a",
      },
      letterSpacing: {
        widest2: "0.2em",
        widest3: "0.3em",
      },
    },
  },
  plugins: [],
};
export default config;
