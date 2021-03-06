module.exports = {
  purge: {
    mode: "layers",
    enabled: process.env.NODE_ENV === "production",
    content: [
    'components/**/*.vue',
    'layouts/**/*.vue',
    'pages/**/*.vue',
    'plugins/**/*.js',
    'nuxt.config.js',
    ]
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
