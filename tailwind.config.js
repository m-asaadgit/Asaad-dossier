/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      
      backgroundColor:{
// bc:rgb(26,25,54),
      },
      boxShadow: {
        'custom': '3px 3px 10px rgba(0, 0, 0, 1), -1px -1px 6px rgba(255, 255, 255, 0.4)',
      },
      keyframes: {
        typing: {
          '0%': { width: '0' },
          '100%': { width: '100%' },
        },
        blink: {
          '0%': { borderColor: 'transparent' },
          '50%': { borderColor: 'rgb(26,25,54)' },
          '100%': { borderColor: 'transparent' },
        },
      },
      animation: {
        typing: 'typing 4s steps(40, end) 1s 1 normal both',
        blink: 'blink 1s step-end infinite',
      },
      boxShadow: {
        'custom': '3px 3px 10px rgba(0, 0, 0, 1), -1px -1px 6px rgba(255, 255, 255, 0.4)',
      },
    },
  },
  plugins: [],
};


  
  