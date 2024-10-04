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
        background: "var(--background)",
        foreground: "var(--foreground)",
        borderLight: "#ffffff20",
        textGrey: "#ffffffcc",
        borderTwo: "#644aee99",
        textDark: "#6c6c6c",
      },
    },
  },
  plugins: [],
};
