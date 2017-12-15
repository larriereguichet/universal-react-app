import path from 'path';
import express from 'express';
import helmet from 'helmet';
import compression from 'compression';
import pinoHttp from 'pino-http';
import logger, { serializers } from './logger';
import appHandler from './handlers/app';
import notFoundHandler from './handlers/notFound';

const { npm_package_config_port: PORT, NODE_ENV } = process.env;
const app = express();

app.use(
  pinoHttp({
    logger,
    serializers,
  })
);
app.use(compression());
app.use(helmet());

app.use(express.static(path.resolve('./public'), { index: false }));

if (NODE_ENV !== 'production') {
  // eslint-disable-next-line global-require
  const devMiddleware = require('./middlewares/dev').default;
  app.use(devMiddleware);
}

app.get('/*', appHandler);

app.use(notFoundHandler);

app.listen(PORT, () => logger.info(`Express server listening on port ${PORT}`));
