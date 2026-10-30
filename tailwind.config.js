/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'amazon-dark': '#131921',
        'amazon-nav': '#232F3E',
        'amazon-orange': '#FF9900',
        'amazon-yellow': '#FFD814',
        'amazon-yellow-hover': '#C7A600',
        'amazon-orange-btn': '#FFA41C',
        'amazon-link': '#007185',
        'amazon-text': '#0F1111',
        'amazon-border': '#D5D9D9',
        'amazon-prime': '#00A8CC',
      },
      fontFamily: {
        amazon: ['"Amazon Ember"', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
