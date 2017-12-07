import webpack from 'webpack';
import { resolve } from 'path';
import ProgressBarPlugin from 'progress-bar-webpack-plugin';
import { getIfUtils, removeEmpty } from 'webpack-config-utils';
import extractPackageConfig from 'extract-npm-package-config';

export default (env = {}) => {
  const { ifProduction, ifNotProduction } = getIfUtils(env);

  return {
    cache: ifNotProduction(),
    devtool: 'cheap-module-eval-source-map',
    entry: resolve('./src/client/index.js'),
    target: 'web',
    watch: false,
    stats: ifProduction('errors-only', 'minimal'),
    module: {
      rules: [
        {
          enforce: 'pre',
          test: /\.js$/,
          use: 'eslint-loader',
          include: [
            resolve('./src/client/'),
            resolve('./webpack.client.babel.js'),
          ],
        },
        {
          test: /\.js$/,
          use: 'babel-loader',
          include: [
            resolve('./src/common/'),
            resolve('./src/client/'),
          ],
        }
      ]
    },
    output: {
      path: resolve('./dist'),
      filename: 'client.js',
    },
    plugins: removeEmpty([
      new ProgressBarPlugin(),
      new webpack.DefinePlugin(extractPackageConfig(env)),
      ifProduction(new webpack.optimize.DedupePlugin()), // deduplicate similar code
      ifProduction(new webpack.optimize.OccurrenceOrderPlugin()),
      ifProduction(new webpack.optimize.AggressiveMergingPlugin()), // merge chunks
      ifNotProduction(new webpack.HotModuleReplacementPlugin()),
      ifNotProduction(new webpack.NoEmitOnErrorsPlugin()),
    ]),
  }
}
