var webpack = require('webpack');
var path = require('path');
var nodeExternals = require('webpack-node-externals');

module.exports = {
  devtool: 'sourcemap',
  entry: path.join(__dirname, './src/server/index.js'),
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
        include: ['./node_modules/', './src/js/client/'],
      },
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: ['./node_modules/'],
      },
    ]
  },
  output: {
    path: path.join(__dirname, './dist'),
    filename: 'server.js',
  },
  externals: [nodeExternals()],
  plugins: [
    new webpack.IgnorePlugin(/\.(scss|css)$/),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ],
};
