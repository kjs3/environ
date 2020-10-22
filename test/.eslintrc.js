module.exports = {
  extends: [
    '../.eslintrc.js',
    'plugin:jest/recommended',
    'plugin:jest/style',
  ],
  env: {
    node: true,
    'jest/globals': true,
  },
}
