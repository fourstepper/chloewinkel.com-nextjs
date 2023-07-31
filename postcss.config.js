module.exports = {
  plugins: {
    autoprefixer: {},
    'postcss-import': {},
    tailwindcss: {},
    'tailwindcss/nesting': {},
    ...(process.env.NODE_ENV === 'production' ? { cssnano: {} } : {}),
  },
};
