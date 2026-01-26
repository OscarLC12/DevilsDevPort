/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        dd: {
          bg: "#070817",
          panel: "#0E1030",
          navy: "#1B1F3B",
          text: "#E9ECFF",
          muted: "#A7ABCF",
          red: "#CE3347",
          teal: "#3AB2C5",
          tealDark: "#3096B0",
        },
      },
      boxShadow: {
        glow: "0 0 40px rgba(58,178,197,.35)",
        glowRed: "0 0 40px rgba(206,51,71,.35)",
      },
    },
  },
  plugins: [],
};
