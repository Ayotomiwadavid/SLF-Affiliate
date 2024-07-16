/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      height: {
        'lvh': '100vh',
      },
      screens: {
        'sm': '640px',   // Small screens (mobile)
        'md': '768px',   // Medium screens (tablet)
        'lg': '1024px',  // Large screens (desktop)
      },
    },
  },
  plugins: [],
}