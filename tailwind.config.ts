import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      borderWidth: {
        "1": "1px",
      },
      borderColor: {
        "gradient-border": "transparent",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: {
          50: "#FFFAF2",
          100: "#FFF6E5",
          200: "#FFE4B2",
          300: "#FFD384",
          400: "#E5BE77",
          500: "#CAAD75",
          600: "#CCA052",
          700: "#AB8E63",
          800: "#B2893E",
          900: "#8C641C",
          950: "#4C3408",
        },
        secondary: {
          50: "#FEFFF2",
          100: "#FDFFE5",
          200: "#F9FFB2",
          300: "#F5FF84",
          400: "#DCE577",
          500: "#CAD26D",
          600: "#C2CC52",
          700: "#B6BF4C",
          800: "#A9B23E",
          900: "#838C1C",
          950: "#474C08",
        },
      },
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
        inter: ["Inter", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
