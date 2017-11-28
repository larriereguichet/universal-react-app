'use strict'

module.exports = {
  'extends': [
    'eslint-config-prettier/react',
  ].map(require.resolve),
  'parser': 'babel-eslint',
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true
    }
  },
  'plugins': [
    'react',
    'prettier'
  ],
  'rules': {
    'react/jsx-boolean-value': ['warn'],
    'react/jsx-filename-extension': ['warn', { 'extensions': ['.js', '.jsx'] }],
    'react/prefer-stateless-function': ['error', { 'ignorePureComponents': true }]
  }
}
