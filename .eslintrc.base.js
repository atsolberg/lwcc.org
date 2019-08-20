module.exports = {
  parser: 'babel-eslint',
  env: {
    browser: true,
  },
  globals: {
    $: true,
    jQuery: true,
    FB: true,
    google: true,
    Modernizr: true,
    lwcc: true,
  },
  extends: ['airbnb', 'prettier'],
  plugins: ['react-hooks', 'jest'],
  rules: {
    // React recommends using JSX only in .jsx files.
    // This allows it in .js files
    'react/jsx-filename-extension': ['error', { extensions: ['.js'] }],

    // Let prettier manage jsx styling
    'react/jsx-closing-tag-location': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'react/jsx-wrap-multilines': ['error', { prop: 'ignore' }],

    'react/require-default-props': 'off',

    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],

    'jsx-a11y/label-has-for': 'off',
    'arrow-body-style': 'off',
    'react/no-danger': 'off',
    'react/no-multi-comp': 'off',
    'no-return-assign': ['error', 'except-parens'],
    'lines-between-class-members': 'off',
    'no-param-reassign': 'off',
    'no-shadow': 'off',

    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/forbid-prop-types': ['warn', { forbid: ['object', 'array'] }],
  },
  overrides: [
    {
      files: ['src/scripts/__tests__/**'],
      env: { 'jest/globals': true },
      rules: {
        'jest/no-disabled-tests': 'warn',
        'jest/no-focused-tests': 'error',
        'jest/no-identical-title': 'error',
        'jest/prefer-to-have-length': 'warn',
        'jest/valid-expect': 'error',
      },
      globals: { fail: true },
    },
    {
      files: ['cypress/integration/**'],
      env: { mocha: true },
      globals: { Cypress: true, cy: true, expect: true },
    },
  ],
};
