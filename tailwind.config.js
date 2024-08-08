/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'short': { 'raw': '(min-height: 780px)' },
        // => @media (min-height: 780px) { ... }
        "mtl": { 'raw': '(min-width: 900px)' },
        // => @media (min-width: 900px) { ... }
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('daisyui'),
  ],
}
