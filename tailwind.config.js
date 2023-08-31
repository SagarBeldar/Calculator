/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      colors: {
        'regal-blue': '#243c5a',
        'bluestrong':'linear-gradient(45deg, #0a0a0a, #3a4452)',
        '100':'-8px -8px 15px rgba(255, 255, 255, 0.1)'
        
      },
      boxShadow: {
        '3xl': '0px 3px 15px rgba(113, 115, 119, 0.5)',
        'inputshadow':'#ea580c'
      },
     
    },
  },
  plugins: [],
}

