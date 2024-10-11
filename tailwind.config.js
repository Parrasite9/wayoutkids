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
        deepBlue: '#003FFF',
        softOrange: '#ffddbb',
        softGreen: '#A9C9A4',

        // Vibrant versions
        vLightBlue: '#00AFFF', // More vivid light blue
        vSunnyYellow: '#FFEE00', // Brighter, attention-grabbing yellow
        vAppleGreen: '#7FFF00', // A more electric and vibrant green
        vSoftRed: '#FF5733', // Higher saturation red with orange tones
        vBrightOrange: '#FF8C00', // Brighter, more intense orange
        vMagenta: '#FF1493', // More saturated and vivid magenta
        vDarkGreen: '#28A745', // Brighter green with stronger intensity
        vDeepBlue: '#0047FF',  // More vivid and eye-catching deep blue

        // BACKGROUND COLORS 
        softSkyBlue:'#E0F7FA',
        myWhite: '#f2f2f2',
        myBlack: '#333333',
        paleYellow:'#FFF9C4',
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(56deg, rgba(242,242,242,1) 10%, rgba(255,221,187,1) 50%, rgba(242,242,242,1) 90%)',
      },
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        serif: ['Lora', 'serif'],
        body: ['Roboto', 'sans-serif'], 
      },
    },
  },
  plugins: [],
}
