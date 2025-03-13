import type { Config } from "tailwindcss";
import defaultTheme from 'tailwindcss/defaultTheme'
import fonts from './src/app/config/fonts';

const config: Config = {
  darkMode: "class",
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      enkel: ["Enkel", ...defaultTheme.fontFamily.sans],
    },
    fontSize: {
      ...defaultTheme.fontSize,
      ...fonts,
    },
    extend: {
      backgroundImage: {
        "gradient-header": "linear-gradient(#121212 73%, #12121200)",
      },
      colors: {
        "black-01": "#121212",
        "black-02": "#0F0F0F",
        "black-03": "#232323",
        "white-01": "#F1F1F1",
        "white-02": "#FDFDFD",
        "white-03": "#DDDDDD",
        "white-04": "#D6D6D6",
        "gray-01": "#E7E7E7",
        "gray-02": "#7B7B7B",
        "gray-03": "#606060",
        "gray-04": "#B9B9B9",
        "gray-05": "#7E7E7E",
        "gray-06": "#E0E0E0",
        "gray-07": "#262626",
        "gold-01": "#AC8745",
        "gold-02": "#C4A56A",
        "red-01": "#B22E2E",
        "green-01": "#3F825A",
      },
      spacing: {
        25: "6.25rem",
        28: "7rem",
      },
      letterSpacing: {
        tighter: "-.04em",
      },
      boxShadow: {
        sm: "0 5px 10px rgba(0, 0, 0, 0.12)",
        md: "0 8px 30px rgba(0, 0, 0, 0.12)",
      },
    },
  },
  plugins: [],
};
export default config;