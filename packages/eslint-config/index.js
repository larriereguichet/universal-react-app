'use strict'

module.exports = {
  'extends': [
    './rules'
  ].map(require.resolve),
  'globals': {
    'console': false
  },
  'rules': {
    'prettier/prettier': ['warn'],
    'no-console': ['warn']
  }
}
