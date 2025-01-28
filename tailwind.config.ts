import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "main-bg": "#F2F4F6",
        "sec-blue": "#377DFF",
        "sec-green": "#38CB89",
        "sec-orange": "#FFAB00",
        "sec-red": "#FF5630",
      },
    },
  },
  plugins: [],
} satisfies Config;
