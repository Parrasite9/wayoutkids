module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Ensures Tailwind scans all files in src
  ],
  theme: {
    extend: {
      colors: {
        lightBlue: '#008CFF', // Background color for navbar
        sunnyYellow: '#FFEB3B',
        appleGreen: '#8BC34A',
        softRed: '#FF7043',
        brightOrange: '#D37A07', // Logo color for button
        magenta: '#E91E63',
        darkGreen: '#236313', // Footer background
        deepBlue: '#003FFF',  // Link hover color
      },
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
      },
    },
  },
  plugins: [],
}
