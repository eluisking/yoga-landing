/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html", "./src/**/*.{html,js}"],
  theme: {
    colors:{
      'orange-primary': '#ff6e5c',
      'orange-secundary': '',
      'bg-primary': '#f1f5f9',
      'bg-secundary': '#94a3b8',
      'bg-gray': '#1e293b',
      'black': '#020617',
      'white': '#f8fafc',
    },
    fontFamily:{
      'Poppins-r': ['Poppins', 'sans-serif'],
    },
    extend: {
      backgroundImage:{
        'cover-ds': "url('/public/img/cover-desktop.jpg')"
      },
      spacing: {
        '128': '32rem'
      }
    },
  },
  plugins: [],
}

