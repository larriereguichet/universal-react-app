/* eslint-disable global-require, import/no-extraneous-dependencies */
import path from 'path';
import reactExpress, { logger, staticHandler, notFoundHandler } from 'react-express-server';
import appHandler from './appHandler';
import { getPaths } from '../common/routes';
import hot from './hot';

const app = reactExpress();

app.use(staticHandler(path.resolve('./public'), { index: false }));

if (NODE_ENV !== 'production') {
  const createMiddleware = require('react-dev-middleware').default;
  const webpackClientConfig = require('../../webpack.client.babel').default;
  const webpackServerConfig = require('../../webpack.server.babel').default;

  app.use(createMiddleware(webpackServerConfig, webpackClientConfig));
}

app.use('/caca', (req, res) => res.send('<p>cacap</p>'));
app.use(getPaths, appHandler);
app.use(notFoundHandler);

export default app;
