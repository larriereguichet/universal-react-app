# universal-react-app
Yet another Universal React app example.

## Install
```
npm install
```

## Development

In development you can either use your *local environment* or the **docker** version with `docker-compose`.

#### Local environment
```
npm start
```
Then browse http://localhost:3000

#### Docker-compose
```
docker-compose up
```
Then browse http://localhost:3000 

## Production

The `docker-compose.prod.yml` is provided as an example for a docker production usage.
Both the client and server dockerfile present in `docker/` uses [multi-stage build](https://docs.docker.com/engine/userguide/eng-image/multistage-build/#use-multi-stage-builds) 
to keep the `devDependencies` at bay.

### Frontend
The frontend is a `nginx:alpine` with some nginx presets from [h5bp](https://github.com/h5bp/server-configs-nginx).
It serves the built version of the client `dist/client.js` along with the `public/` directory.

### Backend 
The backend is a `node:alpine` that just run the built version of the server `dist/server.js`.

### Usage

`docker-compose -f docker-compose.prod.yml up`

## Presentation

The ES6 syntax is used throughout the project along with some ES7 proposals.
 
### Stack

- [react](https://reactjs.org/) for components
- [redux](https://redux.js.org/) for state management
- [react-router-redux](https://github.com/ReactTraining/react-router/tree/master/packages/react-router-redux) as a router
- [jss](https://github.com/cssinjs/jss) as the CSS in Js solution.
- [material-ui](https://material-ui-next.com/) *React components that implement Google's Material Design.*
- [express](https://github.com/expressjs/express)
- [pino](https://github.com/pinojs/pino) as the logger - similar to Bunyan - with a smoother browser integration.
- [webpack](https://webpack.js.org/) as the module bundle for the client and server.

### Folder structure

The source of this app are available under `src/` and are split between 3 directories, `client`, `common` and `server`:
```
├── client
│   ├── Components
│   ├── index.js
│   ├── store.js
│   └── history.js
├── common
│   ├── actions
│   ├── Components
│   ├── constants
│   ├── Pages
│   ├── reducers
│   ├── styles
│   ├── configureStore.js
│   ├── theme.js
│   └── routes.js
└── server
    ├── handlers
    ├── logger
    ├── middlewares
    ├── renderers
    ├── index.js
    ├── store.js
    └── history.js
```

### Configuration

Application level configuration is available as environment variables, the default are provided by the `config` key in the `package.json`:
```
...
"config": {
    "port": "3000"
},
...
```
> This variable, for example is made available by `npm-scripts` in the package.json and the application itself as `npm_package_config_port`.

#### Webpack

To build things up there are 2 webpack config files that handles both `server` and `client` contexts as well as `production` and `development` environments:
- webpack.client.babel.js
> The client configuration uses [extract-npm-package-config](https://github.com/lutangar/extract-npm-package-config) 
along with the `webpack.EnvironmentPlugin` to replace the `npm_package_config_*` variables with their values. 

- webpack.server.babel.js

## Licence

MIT