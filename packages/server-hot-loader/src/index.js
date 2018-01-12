/* eslint-disable global-require */
import http from 'http';

export default sourceModule => (app, logger = console) => {
  if (process.env.NODE_ENV !== 'production' && sourceModule.hot) {
    const server = http.createServer(app);

    let currentApp = app;
    sourceModule.hot.accept(() => {
      server.removeListener('request', currentApp);

      const nextApp = app;
      server.on('request', nextApp);
      currentApp = nextApp;
    });

    sourceModule.hot.dispose(() => {
      logger.info('Disposing entry module...');
      server.close();
    });

    return server;
  }

  return app;
};
