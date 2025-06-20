/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-primary': '#0F0F0F', 
        'dark-secondary': '#1A1A1A', 
        'dark-tertiary': '#262626',

        'accent-green': '#00FF80',
        'accent-green-light': '#33FF99',
        'accent-green-dark': '#00CC66',
        'accent-purple': '#BE29EC',
        'accent-purple-light': '#D665FF',
        'accent-purple-dark': '#9900CC',

        'accent-blue': '#00BFFF', 
        'accent-orange': '#FF8C00',

        'text-light': '#E0E0E0', 
        'text-muted': '#A0A0A0',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
