// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{html,js}"], // Adjust the path to your project's file structure
  theme: {},
  plugins: [
    require("tailwindcss-animated"),
    require("@tailwindcss/typography"),
  ],
};
