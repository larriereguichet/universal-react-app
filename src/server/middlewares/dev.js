/* eslint-disable import/no-extraneous-dependencies */
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import createWebpackConfig from '../../../webpack.client.babel';

const config = createWebpackConfig(process.env);
const compiler = webpack(config);

export default [
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
