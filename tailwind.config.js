module.exports = {
  important: true,
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark': '#1B2937',
        'pearl': '#FFECF2',
        'river-bed': '#485563',
        'eggShell-blue': '#C9FFF8',
        'light-teal': '#81E7D9',
        'rosy-pink': '#FB6695',
        'buttery-white': '#FFFCE5',
        'bright-orange': '#FF5E18',
        'alice-blue': '#EFF6FF',
        'white-lilac': '#FFF5FE',
        'rose-white': '#FFF5F4',
        'alabaster': '#F8FAFC'
      },
      fontFamily: {
        'sans': ['Poppins', "sans-serif"],
      },
      screens: {
        'xs': { 'max': '400px' },
        'bs': { 'min': '401px', 'max': '639px' },
        'mobile': { 'max': '639px' }
      },
      boxShadow: {
        'custom': ' 0px 0px 25px 10px #F6F4FD',
        'custom-2': '0px 1px 2px rgba(0, 0, 0, 0.07)'
      }
    },
  },
  plugins: [],
}
