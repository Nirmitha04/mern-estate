/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.css",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    // ...
  ],
}