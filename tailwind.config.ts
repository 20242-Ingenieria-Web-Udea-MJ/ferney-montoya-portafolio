import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        'xxs': '10px',
        'xxxl': '48px',
        'big-icon': '230px'
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        brand: {
          light: '#0093ff',
          DEFAULT: '#0093ff', // El color por defecto
          dark: '#0093ff',
        },
        normalText: '#767676',
        primaryColor: '#0093ff',
      },
    },
  },
  plugins: [],
};
export default config;
