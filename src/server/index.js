/* eslint-disable global-require, import/no-extraneous-dependencies */
import path from 'path';
import reactExpress, { logger, staticHandler, notFoundHandler } from 'react-express-server';
import hot from 'server-hot-loader';
import appHandler from './appHandler';
import { getPaths } from '../common/routes';

const { npm_package_config_port: PORT, NODE_ENV } = process.env;
const app = reactExpress();

app.use(staticHandler(path.resolve('./public'), { index: false }));

if (NODE_ENV !== 'production' && NODE_ENV !== 'test') {
  const createMiddleware = require('react-dev-middleware').default;

  app.use(createMiddleware(require('../../webpack.client.babel').default));
}

app.use(getPaths, appHandler);
app.use(notFoundHandler);

hot(module)(app, logger).listen(PORT, () =>
  logger.info(`Express server listening on port ${PORT}`)
);
