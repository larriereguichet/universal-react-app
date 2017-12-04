var webpack = require('webpack');
var base = require('./base');
var createEnv = require('../createEnv');

var config = Object.create(base);
    config.devtool = undefined;

config.plugins = config.plugins.concat([
  new webpack.optimize.DedupePlugin(), // deduplicate similar code
  new webpack.optimize.UglifyJsPlugin({
    compressor: {
      screw_ie8: true,
      warnings: false
    },
    comments: false,
    sourceMap: false
  }),
  new webpack.optimize.AggressiveMergingPlugin(), // merge chunks
  new webpack.DefinePlugin({
    process: {
      env: createEnv('production'),
    }
  }),
]);

module.exports = config;
