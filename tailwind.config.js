/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors : {
        'primary' : '#381fd1',
        'header-clr'  : '#10284b',
        'primary-hover' : "#381fd121",
        'neutral-900': "#11284b",
        'neutral-400': "#4b4b4e",
        'neutral-100': "#fffff",
        'accent-400': "#f6f6eb",
        'accent-500': "#f3f2fc",
        'clr-yellow': '#fedb63'
      },
      fontFamily :{
        'rubik': ['Rubik', 'sans-serif'],
        'nunito' : ['Nunito', 'sans-serif'],
        'robotomono' : ['Roboto Mono', 'monospace'],
      },
      inset :{
        '18' : "4.5rem"
      },
      fontSize : {
        'header-200' : "0.91rem",
        'header-800' : "48px"
      },
      fontWeight : {
        'header-fw-900' : "900",
      }
    },
  },
  plugins: [],
}
