/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fadeLeft: {
          "0%": { opacity: "0", transform: "translateX(100px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        lengthLeft: {
          "0%": { width: "0" },
          "100%": { width: "100%" },
        },
      },
      animation: {
        fadeLeft: "fadeLeft 1s ease-out forwards",
        lengthLeft: "lengthLeft 2s ease-out forwards",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        borderLight: "#ffffff20",
        textGrey: "#ffffffcc",
        borderTwo: "#644aee99",
        textDark: "#6c6c6c",
        purpleBg: "#7e6cff",
      },
    },
  },
  plugins: [],
};
