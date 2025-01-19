import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#f1ede9",
        primary: "#4f4639",
        secondary: "#c9ab7b"
      },
      fontSize: {
        '6xl': '7rem',
        '7xl': '8rem',
        '8xl': '9rem',
      }
    },
  },
  plugins: [],
} satisfies Config;
