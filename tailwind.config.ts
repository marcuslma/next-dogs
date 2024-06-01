import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "dog-next-first": ["Helvetica", "Arial", "sans-serif"],
        "dog-next-second": ["var(--type-second-spectral)", "Georgia"],
      },
      keyframes: {
        "dog-next-anime-left": {
          to: {
            opacity: "1",
            transform: "initial",
          },
        },
      },
    },
  },
  plugins: [],
};

export default config;
