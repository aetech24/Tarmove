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
        black: "#1E1E1E",
        redText: "#CB1130",
        background: "#fdfdfd",
        pink : "#FFCBD4",
        gray: "#CCCCCC",
        white: "#F5F5F5",
        gradientBg: "linear-gradient(90deg, #fdfdfd_10%, #fff4f6_100%)",
      },
    },
  },
  plugins: [daisyui],
} satisfies Config;
