import { gabarito } from '@/app/utils/fonts'
import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        dark: '#1e1e1e',
        'dark-secondary': '#232323',
        light: '#fefefe',
        'light-secondary': '#e9e9e9',
        primary: '#F00C0C',
        secondary: '#580303',
        gold: '#D8B362',
        'green-clear': '#04CF00',
      },
      fontFamily: {
        gabarito: ['var(--font-gabarito)'],
        nosifer: ['var(--font-nosifer)'],
      },
    },
  },
  plugins: [],
}
export default config
