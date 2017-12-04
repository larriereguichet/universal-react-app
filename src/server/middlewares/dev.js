import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import devWebpackConfig from '../../../webpack.client';

const compiler = webpack(devWebpackConfig);

export default [
  webpackDevMiddleware(compiler, {
    noInfo: true,
    hot: true,
    publicPath: devWebpackConfig.output.publicPath,
  }),
  webpackHotMiddleware(compiler, {
    log: console.log,
    reload: true,
  }),
];
