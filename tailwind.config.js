// tailwind.config.js
const colors = require('tailwindcss/colors')

module.exports = {
  theme: {
    fontSize: {
      'xs': '.75rem',
      'sm': '.875rem',
      'tiny': '.875rem',
      'base': '1rem', // 16px
      'lg': '1.125rem', // 20px
      '2lg': '1.25rem', // 20px
      'xl': '1.5rem', // 24px
      '2xl': '1.875rem', // 30px
      '3xl': '2.25rem', // 36px
      '4xl': '2.5rem', // 40px
      '5xl': '3.125rem', //50px
      '6xl': '3.75rem',
      '7xl': '5rem',
      '9xl': '5rem',

    },
    colors: {
      primary: '#C30F16',
      black: colors.black,
      white: colors.white,
      red: '#C30F16',
      green: colors.green,
      blue: colors.blue,
      yellow: colors.yellow,
      sky: '#00FFD4'
    },
    fontFamily: {
      'nunito': ['Inter', 'sans-serif'],
      'crafty': ['Inter', 'cursive']
    },
    cursor: {
      auto: 'auto',
      default: 'default',
      pointer: 'pointer',
      wait: 'wait',
      text: 'text',
      move: 'move',
      'not-allowed': 'not-allowed',
      crosshair: 'crosshair',
      'zoom-in': 'zoom-in',
    }
  }
}