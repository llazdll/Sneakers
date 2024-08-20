const { Container } = require("postcss");

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '425px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        primary: {
          orange: 'hsl(26, 100%, 55%)',
          'pale-orange': 'hsl(25, 100%, 94%)',
        },
        neutral: {
          'very-dark-blue': 'hsl(220, 13%, 13%)',
          'dark-grayish-blue': 'hsl(219, 9%, 45%)',
          'grayish-blue': 'hsl(220, 14%, 75%)',
          'light-grayish-blue': 'hsl(223, 64%, 98%)',
          white: 'hsl(0, 0%, 100%)',
          black: 'hsla(0, 0%, 0%, 0.75)', // 75% opacity for lightbox background
        },
      },
      fontFamily: {
        sans: ['Kumbh Sans', 'sans-serif'],
      },
      fontSize: {
        paragraph: '16px',
      },

    },
    // container: {
    //   center: true,
    //   padding: '1rem',
    //   width: '80%',
    //   // screens: {
    //   //   sm: '80%', // 80% width for small screens
    //   //   md: '80%', // 80% width for medium screens
    //   //   lg: '80%', // 80% width for large screens
    //   //   xl: '80%', // 80% width for extra large screens
    //   // },
    // },
  },
  plugins: [],
}
