/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        '119': '26rem',
        '120': '28rem',
        '124': '30rem',
        '128': '32rem', // equivalent to 512px
        '130': '34rem',
        '144': '36rem', // equivalent to 576px
        '160': '40rem', // equivalent to 640px
        '176': '44rem', // equivalent to 704px
        '192': '48rem', // equivalent to 768px
        'full-screen': '100vh', // full viewport height
      },
      colors: {
        golden:"#977124",
        brandGreen:"#163029",
        gray: "#2d2e29",
        gray1: "#141414",
        gray2: "#fcfcfc",
        gray3: "#f2f2f2",
        lightgray:"#656661",
        offwhite: "#f0edea",
        primary: "#FFF0CC",
        brandOrange: "#f48243",
        textColor: "#545454",
        orange:"#faa073",
        blue:"#5ea9db"
        
      },
      fontFamily: {
        'PlaywriteES-Regular': ['PlaywriteES-Regular', 'sans-serif'],
        'AntoniaH1-BlackItalic': ['AntoniaH1-BlackItalic'],
        'Poppins-SemiBoldItalic': ['Poppins-SemiBoldItalic'],
        'Bevas': ['Bevas'],
        'Boilover-Regular' : ['Boilover-Regular'],
        'against-regular' : ['against-regular'],
        'Aceh-Light' : ['Aceh-Light'],

    },
    },
  },
  plugins: [],
}
