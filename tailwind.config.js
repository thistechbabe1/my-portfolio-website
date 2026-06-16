/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Dark mode surfaces
        'dark-primary':    '#0D0D0D',
        'dark-secondary':  '#161616',
        'dark-tertiary':   '#1F1F1F',

        // Light mode surfaces
        'light-primary':   '#F9F8F6',
        'light-secondary': '#F1EFE9',
        'light-tertiary':  '#E8E4DB',

        // Gold accent (champagne)
        'gold':            '#C9A84C',
        'gold-light':      '#DFC070',
        'gold-dark':       '#A8852F',
        'gold-subtle':     'rgba(201,168,76,0.12)',

        // Text
        'text-dark':       '#0D0D0D',
        'text-light':      '#F0EDE8',
        'text-muted-dark': '#6B6B6B',
        'text-muted-light':'#A09880',

        // Legacy (keep for compatibility during migration)
        'accent-green':       '#C9A84C',
        'accent-green-light': '#DFC070',
        'accent-green-dark':  '#A8852F',
        'accent-purple':      '#BE29EC',
        'text-muted':         '#A09880',
      },
      fontFamily: {
        'display': ['Cormorant Garamond', 'Georgia', 'serif'],
        'sans':    ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'fade-up': 'fadeUp 0.8s ease-out forwards',
        'cursor-blink': 'cursorBlink 1.1s step-end infinite',
      },
      keyframes: {
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        cursorBlink: {
          '0%, 100%': { opacity: '1' },
          '50%':       { opacity: '0' },
        },
      },
      transitionDuration: {
        '400': '400ms',
      },
    },
  },
  plugins: [],
};
