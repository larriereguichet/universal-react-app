'use strict';
var webpack = require('webpack');
var base = require('./base');
var createEnv = require('../createEnv');
var config = Object.create(base);

config.plugins = config.plugins.concat([
  new webpack.DefinePlugin({
    process: {
      env: createEnv('development'),
    }
  }),
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoEmitOnErrorsPlugin(),
]);

module.exports = config;
