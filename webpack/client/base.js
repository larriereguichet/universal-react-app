const path = require('path');
const cwd = path.join(__dirname, '..');
const webpack = require('webpack');

module.exports = {
  cache: true,
  devtool: 'eval',
  entry: path.join(cwd, '/src/client/index.js'),
  target: 'web',
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        use: 'eslint-loader',
        include: [
          path.resolve('./src/client/'),
        ],
      },
      {
        test: /\.js$/,
        use: 'babel-loader',
        include: [
          path.resolve('./src/common/'),
          path.resolve('./src/client/'),
        ],
      }
    ]
  },
  output: {
    path: path.join(cwd, '/dist'),
    filename: 'client.js',
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
  ],
};
