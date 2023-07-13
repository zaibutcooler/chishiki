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
        primary: "#E2EFF3",
        secondary: "#BBCDD7",
        title_black: "#4F4A53",
        bkg: "#FEFFF9",
      },
      fontSize: {
        "2xs": "0.5rem", // 8px
        xs: "0.625rem", // 10px
        sm: "0.75rem", // 12px
        base: "0.875rem", // 14px
        lg: "1rem", // 16px
        xl: "1.125rem", // 18px
        "2xl": "1.25rem", // 20px
        "3xl": "1.5rem", // 24px
        "4xl": "1.875rem", // 30px
      },
    },
  },
  plugins: [],
};
