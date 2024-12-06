/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FFD700', // Golden Yellow
        secondary: '#1A365D', // Deep Navy
        accent: '#FFA07A', // Soft Orange
        neutral: '#F5DEB3', // Warm Beige
        highlight: '#4B0082', // Deep Purple
      }
    },
  },
  plugins: [],
};
