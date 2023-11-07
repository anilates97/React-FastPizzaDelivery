module.exports = {
  root: true,
  env: { browser: true, es2021: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'prettier',
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    // General

    // Javascript
    'no-unused-vars': 'warn',

    // React
    'react/jsx-boolean-value': 'warn',
    'react/jsx-curly-brace-presence': 'warn',
    'react/jsx-fragments': 'warn',
    'react/jsx-no-useless-fragment': 'warn',
    'react/jsx-uses-react': 'off',
    'react/prefer-stateless-function': 'warn',
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    // Functional

    'react/react-in-jsx-scope': 'off',
    'linebreak-style': ['error', 'unix'],
    eqeqeq: ['error', 'always', { null: 'ignore' }],
    camelcase: ['error', { properties: 'never' }],
    quotes: ['error', 'single', { avoidEscape: true }],
  },
};
