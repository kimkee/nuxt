/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontSize: {
        '10': ['0.625rem', '1.4'], // 10px
        'xt': ['0.6875rem', '1.4'], // 11px
        'ss': ['0.8125rem', '1.4'], // 13px
        'md': ['0.9375rem', '1.4'], // 15px
        'xx': ['1.375rem', '1.4'], // 22px
      }
    },
  },
  plugins: [],
}

