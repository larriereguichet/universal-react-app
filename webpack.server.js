var webpack = require('webpack');
var path = require('path');
var nodeExternals = require('webpack-node-externals');
var NodemonPlugin = require( 'nodemon-webpack-plugin' );
var createEnv = require( './webpack/createEnv' );

module.exports = {
  devtool: 'sourcemap',
  entry: path.resolve('./src/server/index.js'),
  target: 'node',
  node: {
    __dirname: false,
    __filename: false,
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        use: 'eslint-loader',
        include: [
          path.resolve('./src/common/'),
          path.resolve('./src/server/'),
        ],
      },
      {
        test: /\.js$/,
        use: 'babel-loader',
        include: [
          path.resolve('./src/common/'),
          path.resolve('./src/server/'),
        ],
      },
    ]
  },
  output: {
    path: path.resolve('./dist'),
    filename: 'server.js',
  },
  externals: [nodeExternals()],
  plugins: [
    new webpack.IgnorePlugin(/\.(scss|css|less)$/),
    new webpack.DefinePlugin({
      process: {
        env: createEnv('development'),
      }
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new NodemonPlugin({
      // What to watch
      watch: path.resolve('./dist'),

      // Files to ignore
      ignore: ['*.js.map'],

      // Detailed log
      verbose: true,
    }),
  ],
};
