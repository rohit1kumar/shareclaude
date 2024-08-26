/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'shareClaude': {
          background: '#2C2B28',
          userChat: '#201F1B',
          claudeChat: '#383735',
          codeBox: '#21201C',
          accent: '#A3512B',
        },
      },
    },
  },
  plugins: [],
}
