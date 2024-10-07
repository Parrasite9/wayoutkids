// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Ensures Tailwind scans all files in src
  ],
  theme: {
    extend: {
      // Add custom breakpoints
      // screens: {
      //   'sm': { 'max': '764px' },
      //   'md': { 'max': '1024px' },
      //   'lg': { 'max': '1440px' },
      //   'xl': { 'min': '1441px' },
      // },
      colors: {
        lightBlue: '#4FC3F7',  // Light Blue
        sunnyYellow: '#FFEB3B',  // Sunny Yellow
        appleGreen: '#8BC34A',  // Apple Green
        softRed: '#FF7043',  // Soft Red
        brightOrange: '#FF5722',  // Bright Orange
        magenta: '#E91E63',  // Magenta
      },
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
      },
      // NOTE: Update your color palette here
      colors: {
        // Add custom colors when decided
      },
    },
  },
  plugins: [],
}
