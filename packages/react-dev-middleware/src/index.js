import webpack from 'webpack';
import isFunction from 'lodash.isfunction';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';

export const createConfig = (config = {}) => (isFunction(config) ? config(process.env) : config);

export default (configCreator = {}) => {
  const config = createConfig(configCreator);
  const compiler = webpack(config);

  return [
    webpackDevMiddleware(compiler, {
      noInfo: true,
      hot: true,
      publicPath: config.output.publicPath,
      stats: 'minimal',
    }),
    webpackHotMiddleware(compiler, {
      // eslint-disable-next-line no-console
      log: console.log,
      reload: true,
    }),
  ];
};
