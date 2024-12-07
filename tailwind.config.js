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
        primary: '#FFD700', // Golden Yellow Use it sparingly for accents and call-to-action buttons to draw attention.
        secondary: '#1A365D', // Deep Navy Perfect for headers, footers, and text to ensure readability.
        accent: '#FFA07A', // Soft Orange Use for secondary elements, hover states, or background accents.
        neutral: '#F5DEB3', // Warm Beige Ideal for backgrounds and large content areas.
        highlight: '#4B0082', // Deep Purple
      }
    },
  },
  plugins: [],
};
