// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Ensures Tailwind scans all files in src
  ],
  theme: {
    extend: {
      // Add custom breakpoints
      screens: {
        'sm': { 'max': '764px' },
        'md': { 'max': '1024px' },
        'lg': { 'max': '1440px' },
        'xl': { 'min': '1441px' },
      },
      // NOTE: Update your color palette here
      colors: {
        // Add custom colors when decided
      },
    },
  },
  plugins: [],
}
