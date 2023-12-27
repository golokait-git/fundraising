/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}'],
  daisyui: {
    themes: [
      {
        mytheme: {
        
          "primary": "#fed7aa",
          
          "secondary": "#ffedd5",
                   
          "accent": "#fb923c",
                   
          "neutral": "#fb923c",
                   
          "base-100": "#ffffff",
                   
          "info": "#ffedd5",
                   
          "success": "#fdba74",
                   
          "warning": "#ea580c",
                   
          "error": "#ea580c",
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
