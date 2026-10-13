/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: '#09090b',
        surface: '#121215',
        'surface-elevated': '#18181c',
        border: 'rgba(255, 255, 255, 0.08)',
        'border-strong': 'rgba(255, 255, 255, 0.16)',
        emerald: {
          400: '#34d399',
          500: '#10b981',
          600: '#059669',
        },
      },
      fontFamily: {
        sans: ['Geist Sans', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['Geist Mono', 'JetBrains Mono', 'monospace'],
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
}
