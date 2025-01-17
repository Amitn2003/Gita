/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {extend: {
      animation: {
        rotateSlow: 'rotateSlow 10s linear infinite',
      },
      keyframes: {
        rotateSlow: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
    },
  },
  },
  plugins: [],
}

