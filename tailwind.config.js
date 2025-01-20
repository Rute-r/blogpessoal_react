/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'dark-blue': '#2f4858',
        'gray-blue': '#536178',
        'gray-purple': '#7c7995',
        'light-purple': '#a892ae',
        'pink-purple': '#d5adc3',
        'light-pink': '#ffcad4',
      },
      fontFamily: {
        montserrat: ['Montserrat', 'serif'],
        quicksand: ['Quicksand', 'serif'],
      },
      saturate: {
        25: '.25',
        75: '.75',
      },
    },
  },
  plugins: [],
};
