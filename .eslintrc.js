// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  env: {
    es6: true,
    node: true,
  },
  extends: 'eslint:recommended',
  globals: {
    read: true,
    readln: true,
    write: true,
    writeln: true,
  },
  rules: {
    'comma-dangle': [1, 'always-multiline'],
    'no-console': [1, { allow: ['warn', 'error'] }],
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'no-empty': 0,
    'no-unused-vars': [1, { argsIgnorePattern: '^h$' }],
    'no-var': 1,
    'prefer-const': 1,
    'quotes': [1, 'single', { avoidEscape: true }],
    'semi': 1,
  },
}
