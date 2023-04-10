/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {backgroundImage: {
      'vector-1': "url('../assets/All Images/Vector.png.png)",
      'vector-2': "url('../assets/All Images/Vector-1.png')",
    }
  },
  },
  plugins: [require("daisyui")],
}

