/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        canvas: '#050505',
        surface: {
          subtle: '#090909',
          card: '#0d0d0d',
          elevated: '#121212',
          hover: '#181818',
          border: 'rgba(255, 255, 255, 0.08)',
          'border-strong': 'rgba(255, 255, 255, 0.15)',
        },
        accent: {
          cyan: '#09090b',
          'cyan-bright': '#27272a',
          blue: '#09090b',
          purple: '#09090b',
          black: '#09090b',
          zinc: '#71717a',
        },
        brand: {
          white: '#ffffff',
          light: '#fafafa',
          muted: '#71717a',
          subtle: '#a1a1aa',
          dark: '#09090b',
        },
      },
      fontFamily: {
        sans: ['var(--font-jakarta)', 'sans-serif'],
        display: ['var(--font-jakarta)', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
    },
  },
  plugins: [],
};

