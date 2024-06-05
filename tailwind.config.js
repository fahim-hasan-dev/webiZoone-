/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: '#b31e79',
      },
    },
    keyframes: {
      expand: {
        '0%': { clipPath: 'circle(0% at 90% 10%)' },
        '100%': { clipPath: 'circle(150% at 90% 10%)' },
      },
      collapse: {
        '0%': { clipPath: 'circle(150% at 90% 10%)' },
        '100%': { clipPath: 'circle(0% at 90% 10%)' },
      },
    },
    animation: {
      expand: 'expand 1s forwards',
      collapse: 'collapse 1s forwards',
    },
  },
  plugins: [],
};
