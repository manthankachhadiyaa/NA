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
          cyan: '#3fa8b8',
          'cyan-bright': '#5bbfce',
          blue: '#2563eb',
          purple: '#8b5cf6',
        },
        brand: {
          white: '#ffffff',
          light: '#f8fafc',
          muted: '#94a3b8',
          subtle: '#64748b',
          dark: '#050505',
        },
      },
      fontFamily: {
        display: ['var(--font-geist)', 'var(--font-jakarta)', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
        serif: ['var(--font-serif)', 'serif'],
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
    },
  },
  plugins: [],
};

