import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "custom-x": "url('/X.png')",
      },
      fontFamily: {
        clash: ['Clash Display', 'sans-serif'],
      }, 
    },
  },
  plugins: [],
};
export default config;
