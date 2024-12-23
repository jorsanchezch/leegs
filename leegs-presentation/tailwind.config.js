/** @type {import('tailwindcss').Config} */

import { SCREENS } from './src/constants';

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'sm': SCREENS.SM + 'px',
      'md': SCREENS.MD + 'px',
      'lg': SCREENS.LG + 'px',
      'xl': SCREENS.XL + 'px',
      '2xl': SCREENS.XL2 + 'px',
      '3xl': SCREENS.XL3 + 'px',
    },
    colors: {
      primary: 'var(--primary)',
      secondary: 'var(--secondary)',
      accent: 'var(--accent)',
      accentAlt: 'var(--accent-alt)',
      light: 'var(--text)',
      dark: 'var(--text-dark)',
      black: 'var(--black)',
      transparent: 'transparent',
    },
    extend: {
      gridTemplateColumns: {
        'auto': 'repeat(auto-fit, minmax(350px, 0fr))',
      },
      padding: {
        '15': '3.75rem',
      }
    },
  },
  plugins: [],
};