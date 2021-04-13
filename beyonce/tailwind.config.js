module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, 
  theme: {
   extend: {
     animation: {
      'spin-slow': 'spin 10s linear infinite',
     }
   },
  },
  variants: {
   extend: {
   },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
 }