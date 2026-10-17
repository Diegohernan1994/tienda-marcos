/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        wa: {
          light: '#25D366',
          dark: '#075E54',
          teal: '#128C7E',
          bg: '#EFEAE2',
          chat: '#DCF8C6',
          gray: '#F0F2F5',
          header: '#008069'
        }
      },
      fontFamily: {
        sans: ['system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
      }
    },
  },
  plugins: [],
};
