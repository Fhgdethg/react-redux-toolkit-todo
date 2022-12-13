module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  important: true,
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        logoColor: '#000000e9',
        bodyBg: '#FFF',
        textColor: 'rgb(0, 0, 0)',
        bgHead: '#39e063d4',
        logoColorDark: '#e5e5e5e9',
        bodyBgDark: '#10122e',
        textColorDark: 'rgb(249, 245, 245)',
        bgHeadDark: '#70a5a2'
      },
      fontFamily: {
        openSans: ['"Open Sans"', 'Arial', 'sans-serif']
      }
    },
  },
  plugins: [],
}