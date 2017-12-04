module.exports = function (nodeEnv) {
  return Object
    .keys(process.env)
    .filter(key => key.indexOf('npm_package_config') !== -1)
    .map(key => ({ [key.replace('npm_package_config_', '').toUpperCase()]: JSON.stringify(process.env[key]) }))
    .reduce((result, item) => {
      const key = Object.keys(item)[0];
      result[key] = item[key];

      return result;
    }, { NODE_ENV: JSON.stringify(nodeEnv) })
  ;
}