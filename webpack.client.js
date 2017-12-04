var config = (process.env.NODE_ENV === 'production') ?
  require('./webpack/client/prod.js') :
  require('./webpack/client/dev.js')
;

console.info(`Client build launched in ${process.env.NODE_ENV || 'default'} mode.`);

module.exports = config;
