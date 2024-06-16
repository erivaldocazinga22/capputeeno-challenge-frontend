/** @type {import("tailwindcss").Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        "4.5xl": "2.5rem",
      },
      colors: {
        capputeeno : {
          100: "#737380",
          200: "#5D5D6D",
          300: "#41414D",
          "Orange-Low": "#FFA585"
        }
      },
      fontFamily: {
        "Saira-Stencil-One": ["'Saira Stencil One'", "sans-serif"],
      },
    },
  },
  plugins: [
    import("@tailwindcss/line-clamp")
  ],
}

