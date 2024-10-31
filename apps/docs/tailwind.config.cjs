/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./../../packages/ui/src/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  presets: [require("@mono/ui/tailwind.preset")],
};
