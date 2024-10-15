import type { Config } from 'tailwindcss'

export default {
  content: [
    "./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#1A1A1B',
        'secondary': '#183D3D',
        'tertiary': '#37AA9C',
        'accent': '#93B1A6',
      }
    },
  },
  plugins: [],
} satisfies Config;

