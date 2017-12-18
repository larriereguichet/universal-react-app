'use strict'

module.exports = {
  "extends": [
    "./rules",
    "./rules/react"
  ].map(require.resolve),
  "env": {
    "node": true
  }
}
