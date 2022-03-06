const config = {
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  env: {
    browser: true,
    node: true,
    es6: true
  },
  plugins: ['simple-import-sort'],
  settings: {
    react: {
      version: 'latest'
    }
  },
  extends: ['next', 'next/core-web-vitals', 'eslint:recommended', 'plugin:jsx-a11y/recommended', 'plugin:react/recommended', 'plugin:prettier/recommended', 'plugin:sonarjs/recommended', 'plugin:unicorn/recommended', 'plugin:security/recommended', 'plugin:react-hooks/recommended', 'prettier'],
  rules: {
    'no-console': 'error',
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'simple-import-sort/sort': 'off',
    'unicorn/filename-case': 'off'
  }
};
export default config;
export const extends = ["plugin:storybook/recommended"];