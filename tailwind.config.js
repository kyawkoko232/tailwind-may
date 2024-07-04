/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/*.{html,js}"],
  theme: {
    extend: {
      colors : {
        "primary" : "#B1AFFF",
        "base" : "#F19ED2",
      },
      fontFamily : {
        "poppins" : "Poppins",
        "padauk" : "Padauk",
        "noto-mm" : "Noto Sans Myanmar",
      },
    },
  },

  plugins: [
    // require('daisyui'),
  ],

  daisyui: {
    // themes: ["light", "dark", "cupcake"],
  },
}

