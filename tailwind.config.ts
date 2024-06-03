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
        "dogs-next-body": ["Helvetica", "Arial", "sans-serif"],
        "dogs-next-display": ["var(--dogs-next-font-spectral)", "Georgia"],
      },
      animation: {
        "dogs-next-bark": "dogsNextBark 0.6s infinite",
        "dogs-next-fade-right": "dogsNextFadeRight 0.3s forwards",
        "dogs-next-scale-up": "dogsNextScaleUp 0.3s forwards",
      },
      keyframes: {
        dogsNextBark: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        dogsNextFadeRight: {
          "0%": { opacity: "0", transform: "translateX(-20px)" },
          "100%": { opacity: "1", transform: "translateX(0px)" },
        },
        dogsNextScaleUp: {
          "0%": { opacity: "0", transform: "scale(0.8)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
