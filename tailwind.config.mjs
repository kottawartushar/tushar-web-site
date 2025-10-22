export default {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./content/**/*.{md,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f5fbff",
          100: "#e6f6ff",
          200: "#ccecff",
          300: "#99d9ff",
          400: "#66c6ff",
          500: "#33b3ff",
          600: "#1a9ae6",
          700: "#1377b4",
          800: "#0e4f7a",
          900: "#08283f"
        },
        accent: "#FF6B6B"
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"],
        heading: ["Poppins", "sans-serif"]
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
  ],
};