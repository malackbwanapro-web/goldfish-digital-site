/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: ["class", '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: "var(--bg-primary)",
          surface: "var(--bg-surface)",
          text: "var(--text-core)",
          accent: "var(--accent-gold)",
          accentDark: "#B8962D", // slightly darker gold for high contrast on light backgrounds
        },
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      lineHeight: {
        'tight-hero': '1.1',
      },
      letterSpacing: {
        'tight-heading': '-0.02em',
      },
    },
  },
  plugins: [],
}
