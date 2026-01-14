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
        'xs': ['0.875rem', { lineHeight: '1.25rem' }],      // was 0.75rem (12px) → 14px
        'sm': ['1rem', { lineHeight: '1.5rem' }],           // was 0.875rem (14px) → 16px
        'base': ['1.125rem', { lineHeight: '1.75rem' }],    // was 1rem (16px) → 18px
        'lg': ['1.25rem', { lineHeight: '1.875rem' }],      // was 1.125rem (18px) → 20px
        'xl': ['1.375rem', { lineHeight: '2rem' }],         // was 1.25rem (20px) → 22px
        '2xl': ['1.625rem', { lineHeight: '2.25rem' }],     // was 1.5rem (24px) → 26px
        '3xl': ['2rem', { lineHeight: '2.5rem' }],          // was 1.875rem (30px) → 32px
        '4xl': ['2.5rem', { lineHeight: '3rem' }],          // was 2.25rem (36px) → 40px
        '5xl': ['3.25rem', { lineHeight: '1.1' }],          // was 3rem (48px) → 52px
        '6xl': ['4rem', { lineHeight: '1.1' }],             // was 3.75rem (60px) → 64px
      },
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
