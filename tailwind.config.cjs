/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#0B2B51",
          secondary: "#D0CDE1",
          accent: "#FFFFFF",
          neutral: "#2D3744",
          "base-100": "#f3f4f6",
          info: "#0069D9",
          success: "#138496",
          warning: "#F9F871",
          error: "#9D2F47",
          'custom-bg': "#19191A"
        },
      },
    ],
  },
  plugins: [require("daisyui")],
  themes: ["dark"],
};
