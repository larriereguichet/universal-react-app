import pino from 'pino';
import req from './reqSerializer';

const rootLogger = pino({
  name: 'universal-react-app',
  serializers: { req },
});

export default rootLogger.child({ context: 'server', nodeEnv: process.env.NODE_ENV });
