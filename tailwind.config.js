/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins"]
      },
      colors: {
        primary: {
          light: '#4f46e5', // Color principal claro
          DEFAULT: '#3b82f6', // Color principal predeterminado
          dark: '#3730a3', // Color principal oscuro
        },
        secondary: {
          light: '#f97316', // Color secundario claro
          DEFAULT: '#ea580c', // Color secundario predeterminado
          dark: '#c2410c', // Color secundario oscuro
        },
        neutral: {
          light: '#d1d5db', // Color neutral claro
          DEFAULT: '#9ca3af', // Color neutral predeterminado
          dark: '#6b7280', // Color neutral oscuro
        },
      },

      // Configuración de Pantallas/Breakpoints Personalizados
      screens: {
        'sm': '480px',    // Dispositivos pequeños
        'md': '768px',    // Tablets
        'lg': '1024px',   // Laptops
        'xl': '1280px',   // Pantallas grandes
        '2xl': '1536px',  // Pantallas extra grandes
        '3xl': '1920px',  // Resoluciones Full HD y superiores
      },
    },
  },
  plugins: [],
}