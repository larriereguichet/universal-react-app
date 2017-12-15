import pino from 'pino';

export default pino({
  name: 'universal-react-app',
  context: 'server',
  nodeEnv: process.env.NODE_ENV,
});

export const serializers = {
  req: ({ method, url }) => ({
    method,
    url,
  }),
  res: ({ statusCode }) => ({
    statusCode,
  }),
};
