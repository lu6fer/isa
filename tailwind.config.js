/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    fontFamily: {
      cooper: ['Cooper', 'Arial Black']
    },
    extend: {
      colors: {
        accent: "#85A35D",
        backdrop: "#110B16"
      }
    },
  },
  plugins: [],
}