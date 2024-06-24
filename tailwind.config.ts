/* eslint-disable quotes */
import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  darkMode: ["class"], // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        // prettier-ignore
        'hero': "url('/src/images/coffee1.jpg')",
      },
      spacing: {
        "88": "22rem",
      },
      animation: {
        heroLoad: "heroLoad 0.7s",
        imageLoad: "imageLoad ease 2s",
      },
      keyframes: {
        heroLoad: {
          "0%": { left: "-8vw" },
        },
        imageLoad: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      brightness: {
        45: ".45",
      },
      grayscale: {
        40: ".40",
      },
      textShadow: {
        md: "2px 2px 0 #000",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".text-shadow-md": {
          "text-shadow": "2px 2px 0 #000",
        },
      });
    }),
  ],
} satisfies Config;

export default config;
