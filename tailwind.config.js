/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors:{
        "weather-primary": "#00668A",
        "weather-secondary": "#004E71",
        "blak-trade" : '#1e2025',
        "black-555": '#161a1e',
        "raisinBlack": 'rgb(30 32 37)',
        'redSell' : '#FA6B82',
        'greentBuy': ' #01C233',
        'higthlighshow' : '#161a1e',
        'yellowPrev' : '#FFC64B',
        'headerTextLightGray' : '#AFB4BD',
        'grayTxt' : '#CDCDCD',
        'darkGreent': '#16241F',
        'borderGray': 'rgb(95 102 114)',
        'darkGreenbgBar' : 'rgb(22 36 31)',
        'darkBar' : '#1E2025',
        'darkredbgBar' : '#292026',
        'darkpurplebgBar' : '#4B0342',
        'darkbluebgBar' : '#FA6B82',
        'blueCeiling' : '#558BED',
        'purpleFloor' : '#D964D7',
        'bluetextfooter' : '#558BED'

        
      },
    },
    fontFamily: {
      Roboto: ["Roboto", "sans-serit"],
      tuffy: ["Tuffy"],

    },
    container:{
      
    },
    width:{
      "33": '33%',
      "25": '25%',
      "100": '100%',
      
    }
    
  },
  plugins: [],
}

