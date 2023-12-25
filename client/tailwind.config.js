/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}'],
  daisyui: {
    themes: [
      "retro",
    ],
  },
  plugins: [require('daisyui')],
};
