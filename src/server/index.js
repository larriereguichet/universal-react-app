import express from 'express';
import helmet from 'helmet';
import appHandler from './handlers/app';
import notFoundHandler from './handlers/notFound';
import devMiddleware from './middlewares/dev';

const { PORT, NODE_ENV } = process.env;
const app = express();

app.use(helmet());

if (NODE_ENV !== 'production') {
  app.use(devMiddleware);
}

app.get('/*', appHandler);

app.use(notFoundHandler);

app.listen(PORT, () => console.info(`Express server listening on port ${PORT}`));
