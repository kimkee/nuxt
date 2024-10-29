/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontSize: {
        'xt': '0.6875rem', // 11px
        'ss': '0.8125rem', // 13px
        'md': '0.9375rem', // 15px
        'xx': '1.375rem', // 22px
      }
    },
  },
  plugins: [],
}

