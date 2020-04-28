/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
  theme: {
    extend: {
      colors: {
        backgroundColor: "#111",
        textColor:"#E01A4F"
    },
      width: { 
        '1/8': '12.5%', 
        '2/8': '25%', 
        '3/8': '37.5%',
        '4/8': '50%', 
        '5/8': '62.5%', 
        '6/8': '75%', 
        '7/8': '87.5%'  
      },

    }
  },
  variants: {},
  plugins: []
}
