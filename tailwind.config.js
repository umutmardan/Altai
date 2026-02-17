/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#1a3636', // Deep Green/Blue
          DEFAULT: '#40534c', // Muted Green
          light: '#677d6a', // Sage
          beige: '#d6bd98', // Sand/Beige
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
