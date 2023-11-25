/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#E75325",
        "gray-light": "#414141",
      },
      boxShadow: {
        primary: '0 4px 6px -1px rgba(231, 83, 37, 0.1), 0 2px 4px -1px rgba(231, 83, 37, 0.06)', 
      },
    },
  },
  important: true,
  plugins: [],
};
