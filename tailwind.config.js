/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html",
            "./assets/images",
  ],
  theme: {
    extend: {
      screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
      },
      extend: {
        colors: {
          primaryColor: '#16174F',
          secondaryColor: '#F9373F',
        }

       },

    },
  },
  plugins: [],
}

