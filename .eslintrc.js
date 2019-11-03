const path = require('path');

module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 8,
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true,
    },
    sourceType: 'module',
  },

  plugins: ['react'],

  extends: ['airbnb', 'standard-jsx', 'plugin:prettier/recommended'],

  settings: {
    react: {
      pragma: 'h',
    },
    'import/resolver': {
      alias: {
        map: [
          ['@', path.resolve('src')],
          ['components', path.resolve('src/components')],
          ['hooks', path.resolve('src/hooks')],
          ['utils', path.resolve('src/utils')],
        ],
      },
    },
  },

  rules: {
    'react/no-did-update-set-state': 'error',
    'react/react-in-jsx-scope': 'error',
    'import/prefer-default-export': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/jsx-props-no-spreading': 'off',
    'react/require-default-props': 'off',
    'react/forbid-prop-types': 'off',
    'import/no-extraneous-dependencies': 'off',
    'react/no-unused-prop-types': 'off',
    'react/prop-types': 'off',
    'react/no-unknown-property': [2, { ignore: ['class', 'for'] }],
    // TODO: Preact support?
    'jsx-a11y/label-has-associated-control': 'off',
  },

  env: {
    browser: true,
  },
};
