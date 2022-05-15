module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,ks,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
    },

    colors: {
      'blue'       : "#395B9C",
      'light-blue' : "#6E8EFF",
      'lime-green' : "#5BB13C",
      'green'      : "#3CAC6F",
      'pink'       : "#FF3364",
      'yellow'     : "#FFD233",

      'white'      : "#FFFFFF",
      'off-white'  : "#F7F3F1",
      'light'      : "#EDEDED",
      'gray'       : "#C4C4C4",
      'dark'       : "#616161",
      'darker'     : "#222222",
      'black'      : "#161616",

    },

    fontFamily: {
      'p2'  :    ['Press Start 2P'],
      'source' : ['Source Code Pro'],
      
    }
  },
  plugins: [],
}
