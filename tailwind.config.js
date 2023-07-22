/** @type {import('tailwindcss').Config} */
module.exports = {
  // TODO: pick font to use
  theme: {
    fontFamily: {
      sans: ['"Syne"', 'sans-serif']
    },
  },
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  plugins: [],
}
