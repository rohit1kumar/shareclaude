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
          userChat: '#21201C',
          claudeChat: '#333330',
          codeBox: '#21201C',
          accent: '#D97757',
          backgroundLight: '#393937',
        },
      },
    },
  },
  plugins: [],
}
