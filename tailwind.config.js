/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {


      fontFamily: {
        'nunito': ['nunito', 'sans-serif'],
        'PlusJakartaDisplay': ['Plus Jakarta Display'],
      },

      backgroundOpacity: {
        '10': '0.1',
        '20': '0.2',
        '95': '0.95',
        '5': '0.05',
      },

      colors: {
        'orange-master': '#F6931C',
        'gray-master': '#1B161C'
      }
    },
  },
  plugins: [],
}

