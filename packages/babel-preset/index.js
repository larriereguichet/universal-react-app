module.exports = function() {
  return {
    presets: [
      [
        require("@babel/preset-env"),
        {
          "targets": {
            "node": "current"
          },
          "debug": false
        }
      ],
      require("@babel/preset-react")
    ],
    plugins: [
      require("@babel/plugin-proposal-class-properties"),
      require("@babel/plugin-proposal-object-rest-spread"),
      require("@babel/plugin-proposal-export-default-from")
    ]
  }
}
