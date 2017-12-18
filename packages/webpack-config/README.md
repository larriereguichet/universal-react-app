# webpack-config

Webpack configuration used @larrierguichet
> As the description suggest this package is strongly opinionated

# Install

`npm install --save webpack-config-lag`

# Usage

For a client build in `webpack.client.babel.js` for example:
```
import { client } from 'webpack-config';

export default client;
```

or

```
import config from 'webpack-config';

export default config;
```

For a server build in `webpack.server.babel.js` for example:
```
import { server } from 'webpack-config';

export default server;
```