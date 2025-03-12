module.exports = {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      fontFamily:{
        'lexend-black': 'LexendBlack',
        'lexend-extraBold': 'LexendExtraBold',
        'lexend-bold': 'LexendBold',
        'lexend-semiBold' : 'LexendSemiBold',
        'lexend-medium': 'LexendMedium',
        'lexend-regular': 'LexendRegular',
        'lexend-light': 'LexendLight',
        'lexend-extra-light': 'LexendExtraLight',
        'lexend-thin': 'LexendThin'
      },
      colors: {
        abcd: '#fff000',
        efg: 'var(--bg-color)'
      },
    },
  },
  plugins: [],
}
