/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        surface: '#1d1d1f',
        'surface-hover': '#2a2a2d',
      },
      fontFamily: {
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"SF Pro Display"',
          '"SF Pro Text"',
          'Inter',
          'system-ui',
          'sans-serif',
        ],
      },
      backgroundImage: {
        'radial-glow':
          'radial-gradient(ellipse 60% 50% at 50% 40%, rgba(120,119,198,0.25), rgba(0,0,0,0) 70%)',
      },
    },
  },
  plugins: [],
}
