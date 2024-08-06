/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html", "./src/**/*.{html,js}"],
  theme: {
    colors:{
      'orange-primary': '#ff6e5c',
      'orange-secundary': '',
      'bg-primary': '#f1f5f9',
      'bg-secundary': '#e2e8f0',
      'bg-gray': '#1e293b',
      'black': '#020617',
      'white': '#f8fafc',
    },
    fontFamily:{
      'Poppins-r': ['Poppins', 'sans-serif'],
    },
    extend: {
      backgroundImage:{
        'cover-ds': "url('/public/img/cover-desktop.jpg')",
        'cls-1': "url('/public/img/clase-1.jpg')",
        'cls-2': "url('/public/img/clase-2.jpg')",
        'cls-3': "url('/public/img/clase-3.jpg')",
        'cls-4': "url('/public/img/clase-4.jpg')",

      },
      spacing: {
        '128': '32rem'
      }
    },
  },
  plugins: [],
}

