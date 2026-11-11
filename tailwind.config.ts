import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // GTM Commercial Palette: Titanium Onyx & Solar Horizon Gold
        onyx: {
          DEFAULT: '#080A0E',
          soft: '#0D1117',
          surface: '#121721',
          card: '#0F131C',
          border: '#1E2534',
          subtle: '#161C28',
        },
        titanium: {
          DEFAULT: '#F4F6F8',
          soft: '#E2E6EC',
          muted: '#8A92A2',
          dark: '#525968',
        },
        gtm: {
          gold: '#F59E0B',
          amber: '#FFA928',
          solar: '#FFBE42',
          glow: 'rgba(245, 158, 11, 0.15)',
          ember: '#D97706',
          bronze: '#92400E',
        },
        paper: {
          DEFAULT: '#F4F6F8',
          soft: '#FFFFFF',
        },
        ink: {
          DEFAULT: '#080A0E',
          soft: '#0D1117',
          muted: '#121721',
        },
        graphite: {
          DEFAULT: '#8A92A2',
          light: '#A4ACBC',
          muted: '#636C7E',
          dark: '#3A4252',
        },
        line: {
          DEFAULT: '#1E2534',
          dark: '#161C28',
          light: '#283244',
        },
        signal: {
          DEFAULT: '#F59E0B',
          bright: '#FFA928',
          glow: 'rgba(245, 158, 11, 0.2)',
        },
        focus: '#F59E0B',
      },
      fontFamily: {
        serif: ['var(--font-serif)', 'DM Serif Display', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'Instrument Sans', 'Arial', 'sans-serif'],
      },
      letterSpacing: {
        tighter: '-0.055em',
        tight: '-0.035em',
        wider: '0.12em',
        widest: '0.18em',
      },
    },
  },
  plugins: [],
};

export default config;
