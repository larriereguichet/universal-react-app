'use strict'

module.exports = {
  "extends": [
    "./rules",
    "./rules/react"
  ].map(require.resolve),
  "env": {
    "browser": true,
    "node": true
  }
}
