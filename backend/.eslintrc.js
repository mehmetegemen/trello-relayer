module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 12,
  },
  rules: {
    'global-require': 0,
    'import/no-dynamic-require': 0,
    'implicit-arrow-linebreak': 0,
    'operator-linebreak': 0,
    'prefer-template': 0,
  },
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
        extensions: ['.js'],
      },
    },
  },
};
