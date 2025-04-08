// yarn add tailwindcss @tailwindcss/vite
// yarn add @tailwindcss/postcss

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('tailwind-scrollbar'),
    require('@tailwindcss/postcss')
  ],
}

