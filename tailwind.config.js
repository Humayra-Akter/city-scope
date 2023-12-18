/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#5A029B",
          secondary: "#AD24AF",
          accent: "#b83280",
          neutral: "#00acdf",
          "base-100": "#ffffff",
        },
      },
    ],
  },
};
