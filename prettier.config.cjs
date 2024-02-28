/** @type {import("prettier").Config} */
module.exports = {
  tabWidth: 2,
  trailingComma: 'es5',
  semi: false,
  singleQuote: true,
  ...require('prettier-config-standard'),
  plugins: [require.resolve('prettier-plugin-astro')],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro'
      }
    }
  ]
}
