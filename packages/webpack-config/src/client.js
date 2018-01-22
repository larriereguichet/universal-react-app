import webpack from 'webpack';
import { resolve } from 'path';
import ProgressBarPlugin from 'progress-bar-webpack-plugin';
import { getIfUtils, removeEmpty } from 'webpack-config-utils';
import UglifyJsPlugin from 'uglifyjs-webpack-plugin';
import extractPackageConfig from 'extract-npm-package-config';
import LodashModuleReplacementPlugin from 'lodash-webpack-plugin';

export default (env = {}) => {
  const { ifProduction, ifNotProduction } = getIfUtils(env);

  return {
    name: 'client',
    cache: ifNotProduction(),
    devtool: ifNotProduction('cheap-module-eval-source-map'),
    entry: [resolve('./src/client/index.js')],
    target: 'web',
    watch: false,
    stats: ifProduction('errors-only', 'minimal'),
    module: {
      rules: [
        {
          enforce: 'pre',
          test: /\.js$/,
          use: 'eslint-loader',
          include: [resolve('./src/client/'), resolve('./webpack.client.babel.js')],
        },
        {
          test: /\.js$/,
          use: 'babel-loader',
          include: [
            resolve('./src/common/'),
            resolve('./src/client/'),
            resolve('./webpack.client.babel.js'),
          ],
        },
      ],
    },
    output: {
      path: resolve('./dist'),
      filename: 'client.js',
    },
    plugins: removeEmpty([
      new ProgressBarPlugin(),
      new webpack.EnvironmentPlugin(extractPackageConfig(env)),
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(ifProduction('production', process.env.NODE_ENV)),
      }),
      ifProduction(
        new UglifyJsPlugin({
          uglifyOptions: {
            ie8: false,
            warnings: false,
            compress: true,
          },
          sourceMap: false,
        })
      ),
      ifProduction(new webpack.optimize.AggressiveMergingPlugin()), // merge chunks
      ifProduction(new webpack.optimize.ModuleConcatenationPlugin()), // scope hoisting
      ifProduction(new webpack.HashedModuleIdsPlugin()), // scope hoisting
      ifProduction(new LodashModuleReplacementPlugin()),
      ifNotProduction(new webpack.HotModuleReplacementPlugin()),
      ifNotProduction(new webpack.NamedModulesPlugin()),
      ifNotProduction(new webpack.NoEmitOnErrorsPlugin()),
    ]),
  };
};
