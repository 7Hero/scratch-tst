const defaultTheme = require('tailwindcss/defaultConfig')
module.exports = {
  mode: 'jit',
  plugins:[
    require('@tailwindcss/line-clamp'),
  ],
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens:{
      'md': {'max': '850px'},
      'sm': {'max': '540px'},
      'profile': {'max':'885px'}
    },
    colors:{
      'green':'#30BE76',
      'green-20':'rgba(48, 190, 118, 0.2)',
      black:'#030F09',
      'gray-50':'#606060',
      'gray-70': '#a8a8a8',
      'gray-100':'#767676',
      'gray-200':'#CCCCCC',
      'gray-300':'#E6E6E6',
      'gray-400':'#F7F8FA',
      'white':'#FFF'
    },
    fontFamily: {
      sans: ['Nunito']
    },
  },
  extend: {
  },
  plugins: [],
}