import type { Config } from "tailwindcss";
import daisyui from "daisyui";
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      boxShadow: {
        "custom-1": "linear-gradient(90deg, #fdfdfd 0%, #FFF4F6 100%)",
        "custom-2": "0px 3.9px 3.9px 0px #E31336 inset",
        "custom-3": "-0px -3.9px 3.9px 0px #AE0F29 inset",
      },
    },
  },
  plugins: [daisyui],
} satisfies Config;
