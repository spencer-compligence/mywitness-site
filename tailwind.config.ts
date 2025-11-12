import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        sage: {
          50: '#f6f8f6',
          100: '#e8ede8',
          200: '#d1dbd1',
          300: '#b3c4b3',
          400: '#8fa98f',
          500: '#6b8e6b',
          600: '#577557',
          700: '#435943',
          800: '#2f3f2f',
          900: '#1b241b',
        },
        gold: {
          DEFAULT: '#d4af37',
          light: '#e5c966',
          dark: '#b8941f',
        },
        'warm-white': '#fdfdf8',
        'warm-gray': '#f5f5f0',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-crimson)', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
};

export default config;
