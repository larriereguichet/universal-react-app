/* eslint-disable global-require, import/no-extraneous-dependencies */
import path from 'path';
import reactExpress, { logger, staticHandler, notFoundHandler } from 'react-express-server';
import appHandler from './';
import { getPaths } from '../common/routes';

const { npm_package_config_port: PORT, NODE_ENV } = process.env;
const app = reactExpress();

app.use(staticHandler(path.resolve('./public'), { index: false }));

if (NODE_ENV !== 'production') {
  const createMiddleware = require('react-dev-middleware').default;
  const webpackConfig = require('../../webpack.client.babel').default;

  app.use(createMiddleware(webpackConfig));
}

app.use(getPaths, appHandler);
app.use(notFoundHandler);

app.listen(PORT, () => logger.info(`Express server listening on port ${PORT}`));
