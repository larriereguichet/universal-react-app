import webpack from 'webpack';
import { resolve } from 'path';
import ProgressBarPlugin from 'progress-bar-webpack-plugin';
import { getIfUtils, removeEmpty } from 'webpack-config-utils';
import extractPackageConfig from 'export-npm-package-config';

export default (env = {}) => {
  const { ifProduction, ifNotProduction } = getIfUtils(env);

  return {
    cache: ifNotProduction(),
    devtool: ifNotProduction('cheap-module-eval-source-map'),
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
      new webpack.DefinePlugin({
        process: { env: extractPackageConfig(env) }
      }),
      ifProduction(new webpack.optimize.DedupePlugin()), // deduplicate similar code
      ifProduction(new webpack.optimize.OccurrenceOrderPlugin()),
      ifProduction(new webpack.optimize.AggressiveMergingPlugin()), // merge chunks
      ifProduction(new webpack.optimize.UglifyJsPlugin({
        compressor: {
          screw_ie8: true,
          warnings: false
        },
        comments: false,
        sourceMap: false
      })),
      ifNotProduction(new webpack.HotModuleReplacementPlugin()),
      ifNotProduction(new webpack.NoEmitOnErrorsPlugin()),
    ]),
  }
}
