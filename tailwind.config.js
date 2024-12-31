/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'sage': '#e1e5db',
        'ivory': '#fffff8',
      },
    },
    fontFamily: {
      'title': ['Merriweather', 'serif'],
      'body': ['Montserrat', 'sans-serif'],
    },
  },
  plugins: [],
}

