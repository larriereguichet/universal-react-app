import webpack from 'webpack';
import { resolve } from 'path';
import ProgressBarPlugin from 'progress-bar-webpack-plugin';
import { getIfUtils, removeEmpty } from 'webpack-config-utils';
import nodeExternals from 'webpack-node-externals';
import NodemonPlugin from 'nodemon-webpack-plugin';

export default (env = {}) => {
  const { ifProduction, ifNotProduction } = getIfUtils(env);

  return {
    cache: ifNotProduction(),
    devtool: ifProduction('hidden-source-map', 'cheap-module-eval-source-map'),
    entry: resolve('./src/server/index.js'),
    target: 'node',
    watch: ifNotProduction(),
    stats: ifProduction('errors-only', 'minimal'),
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
            resolve('./src/common/'),
            resolve('./src/server/'),
            resolve('./webpack.server.babel.js'),
          ],
        },
        {
          test: /\.js$/,
          use: 'babel-loader',
          include: [
            resolve('./src/common/'),
            resolve('./src/server/'),
            resolve('./webpack.client.babel.js')
          ],
        },
      ]
    },
    output: {
      path: resolve('./dist'),
      filename: 'server.js',
    },
    externals: [nodeExternals()],
    plugins: removeEmpty([
      new ProgressBarPlugin(),
      new webpack.IgnorePlugin(/\.(scss|css|less)$/),
      ifProduction(new webpack.optimize.DedupePlugin()),
      ifProduction(new webpack.optimize.OccurrenceOrderPlugin()),
      ifNotProduction(new webpack.HotModuleReplacementPlugin()),
      ifNotProduction(new webpack.NoEmitOnErrorsPlugin()),
      ifNotProduction(new NodemonPlugin({
        watch: resolve('./dist'),
        ignore: ['*.js.map'],
        verbose: false,
      })),
    ]),
  }
}
