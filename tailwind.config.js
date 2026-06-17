/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js, ts, jsx, tsx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: '#6C63FF',
        accent2: '#00D4AA',
        dark: '#0D0D14',
        surface: '#13131F',
        surface2: '#1A1A2E',
        muted: '#8B8AA8',
      },
      fontFamily:{
        sans:['Inter', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

