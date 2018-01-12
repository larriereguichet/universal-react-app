import webpack from 'webpack';
import { resolve } from 'path';
import ProgressBarPlugin from 'progress-bar-webpack-plugin';
import { getIfUtils, removeEmpty } from 'webpack-config-utils';
import nodeExternals from 'webpack-node-externals';
import StartServerPlugin from 'start-server-webpack-plugin';
import CleanPlugin from 'clean-webpack-plugin';

export default (env = {}) => {
  const { ifProduction, ifNotProduction } = getIfUtils(env);

  return {
    name: 'server',
    cache: ifNotProduction(),
    devtool: ifProduction('hidden-source-map', 'cheap-module-eval-source-map'),
    entry: removeEmpty([
      ifNotProduction('webpack/hot/poll?1000'),
      resolve('./src/server/index.js'),
    ]),
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
            resolve('./webpack.client.babel.js'),
          ],
        },
      ],
    },
    output: {
      path: resolve('./dist'),
      filename: 'server.js',
    },
    externals: [
      nodeExternals({
        whitelist: ['webpack/hot/poll?1000'],
      }),
    ],
    plugins: removeEmpty([
      new ProgressBarPlugin(),
      new webpack.IgnorePlugin(/\.(scss|css|less)$/),
      new webpack.NamedModulesPlugin(),
      ifNotProduction(new CleanPlugin('./dist/')),
      ifNotProduction(new StartServerPlugin('server.js')),
      ifNotProduction(new webpack.HotModuleReplacementPlugin()),
      ifNotProduction(new webpack.NoEmitOnErrorsPlugin()),
      ifProduction(new webpack.optimize.DedupePlugin()),
    ]),
  };
};
