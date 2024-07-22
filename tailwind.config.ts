import type { Config } from 'tailwindcss';
import daisyui from 'daisyui';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    'node_modules/daisyui/dist/**/*.js',
    'node_modules/react-daisyui/dist/**/*.js',
  ],
  theme: {
    extend: {
      keyframes: {
        popup: {
          '0%': {
            opacity: '0',
            transform: 'translateY(5px) scale(0.95)',
          },
          '100%': {
            opacity: '1',
            transform: 'none',
          },
        },
      },
      animation: {
        popup: 'popup 100ms linear 0s 1 normal none',
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: ['emerald'],
  },
};
export default config;
