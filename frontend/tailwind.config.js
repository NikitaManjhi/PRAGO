import { Height } from '@mui/icons-material';

/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
export default withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        offWhite : '#f5f5f5',
        color1: '#b98a7a',
        orange: '#F3D7CA',
        brown: '#DEAC80',
        beige: '#FFF7F1',
        text: '#252525',
      },

      height: {
        400 : "400 px",
      },

      flex: {
        '3': '3 3 0%',
        '2': '2 2 0%',
      }
    },
  },
  plugins: [],
})

