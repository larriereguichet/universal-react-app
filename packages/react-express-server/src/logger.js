import pino from 'pino';

export default pino({
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
