/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3B82F6", // Blue for UI elements and accents
        secondary: "#10B981", // Green for secondary accents
        dark: "#1F2937", // Dark for text and backgrounds
        light: "#F9FAFB", // Light background
        accent: {
          blue: "#60A5FA", // Blue for notes
          green: "#34D399", // Green for notes
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['Roboto Mono', 'monospace'],
      },
    },
  },
  plugins: [],
} 