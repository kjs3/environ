module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'prettier/@typescript-eslint',
  ],
  plugins: ['@typescript-eslint'],
  env: {
    node: true,
  },
  rules: {
    '@typescript-eslint/no-explicit-any': 'off',
  },
}
