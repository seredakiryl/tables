import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/helpers/**/*.{js,ts,jsx,tsx,mdx}',
    './src/shared/**/*.{js,ts,jsx,tsx,mdx,css}',
  ],
  theme: {
    extend: {
      colors: {
        canvasDark: '#212121',
        canvasLight: '#FAFBFC',
        background: '#212121',
        blockBackground: '#2B2B2B',
        strokeDark: '#3D3D3D',
        strokeLight: '#EAEBF0',
        message: '#595959',
        greyMessage: '#E6E7EC',
        layer: {
          DEFAULT: '#2B2B2B',
          dark: '#2B2B2B',
          light: '#FFF'
        },
        transparenceBase: {
          5: '#2525250d',
          10: '#ffffff1a',
          30: '#ffffff4d',
          50: '#ffffff80',
          51: '#25252580',
          60: '#00000080',
          70: '#25252599'
        },
        brand: {
          600: '#EF4444',
          700: '#E23823'
        },
        addition: {
          1: '#67B7DC',
          2: '#67b7dc33',
          4: '#8067DC',
          8: '#DC6788',
          9: '#dc678833',
          10: '#67b7dc1a',
          30: '#6771dc',
          31: '#67b7dc4d',
          830: '#DC67AB'
        },
        transparence: {
          10: '#ef44441a',
          30: '#ef44444d'
        },
        transparenceGreen: {
          1: '#1CCA4C',
          30: ' #1cca4c4d'
        },
        pureBase: '#252525',
        pureBaseRow: {
          light: 'var(--color-transparence-base-3, rgba(37, 37, 37, 0.02))',
          dark: 'var(--color-transparence-base-3, rgba(255, 255, 255, 0.03))'
        },
        hoverRow: {
          light: 'var(--color-background-stroke, #EAEBF0)',
          dark: 'var(--color-background-stroke, #3D3D3D)',
        },
        informationOrange: '#FF8A00',
        transparenceOrange: '#ff8a004d',
        informationGreen: '#1CCA4C',
        informationRed: '#FF0000',

        dark: {
          0: '#ffffff',
          50: '#f6f6f6',
          75: '#EDEDED',
          100: '#e7e7e7',
          200: '#d1d1d1',
          300: '#b0b0b0',
          400: '#888888',
          500: '#6d6d6d',
          600: '#5d5d5d',
          700: '#4f4f4f',
          800: '#454545',
          900: '#3d3d3d',
          950: '#000000',
        },
      },
      backgroundImage: {
        'gradient-login-layout': 'url("../../public/login-layout-gradient.svg")',

        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
