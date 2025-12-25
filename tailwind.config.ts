import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: "#4A5568",
      },
      fontFamily: {
        // Single font: Be Vietnam Pro for everything
        sans: ["var(--font-be-vietnam-pro)", "system-ui", "sans-serif"],
        display: ["var(--font-be-vietnam-pro)", "system-ui", "sans-serif"],
        // Logo serif: System fonts
        serif: ["Georgia", "Cambria", "Times New Roman", "serif"],
      },
      spacing: {
        "18": "4.5rem",
        "22": "5.5rem",
      },
    },
  },
  plugins: [],
};

export default config;
