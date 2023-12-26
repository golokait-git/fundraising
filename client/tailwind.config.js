/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}'],
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#ffe4e6",
        
"secondary": "#fecdd3",
        
"accent": "#ffdce6",
        
"neutral": "#ffffff",
        
"base-100": "#ffffff",
        
"info": "#ffe4e6",
        
"success": "#ffdce6",
        
"warning": "#fda4af",
        
"error": "#fb7185",
        },
      },
    ],
  },
  theme: {
    extend: {
      backgroundImage: {
        hareKrishna: 'url:("/hare-krishna-bg.png")',
      },
    },
  },
  plugins: [require('daisyui')],
};
