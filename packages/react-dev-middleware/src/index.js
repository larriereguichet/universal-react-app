import webpack from 'webpack';
import isFunction from 'lodash.isfunction';
import webpackHotClient from 'webpack-hot-client';
import webpackDevMiddleware from 'webpack-dev-middleware';

export const createConfig = (config = {}) => (isFunction(config) ? config(process.env) : config);

export default (configCreator = {}) => {
  const config = createConfig(configCreator);
  const compiler = webpack(config);

  webpackHotClient(compiler);

  return [
    webpackDevMiddleware(compiler, {
      noInfo: true,
      hot: true,
      publicPath: '/',
      stats: 'minimal',
    }),
  ];
};
