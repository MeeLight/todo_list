/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: [
    require('@pandacss/dev/postcss')(),
    require('@csstools/postcss-cascade-layers')()
  ]
}

module.exports = config
