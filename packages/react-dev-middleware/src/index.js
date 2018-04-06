import webpack from 'webpack';
import isFunction from 'lodash.isfunction';
import hotdevMiddleware from 'koa-webpack';

export const createConfig = (config = {}) => (isFunction(config) ? config(process.env) : config);

export default (configCreator = {}) => {
  const config = createConfig(configCreator);
  const compiler = webpack(config);

  return [
    hotdevMiddleware({
      compiler,
      dev: {
        publicPath: '/',
      },
    }),
  ];
};
