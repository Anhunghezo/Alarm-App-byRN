module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      modules: true,
    },
  },
  plugins: ['@typescript-eslint'],
  extends: [
    'react-app',
    'eslint:recommended',
    'plugin:react/recommended',
    'prettier',
    'plugin:prettier/recommended',
  ],
};
