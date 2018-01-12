import React from 'react';
import { SheetsRegistry } from 'jss';
import ReactServer from 'react-dom/server';
import { replace } from 'react-router-redux';
import { Helmet } from 'react-helmet';
import {
  HelmetHtml,
  redirectHandler,
  AppContainer,
  ServerSideJSS,
  PreloadedState,
} from 'react-express-server';

import App from './app';
import store from './store';

export default (req, res, next) => {
  store.dispatch(replace(req.url));

  const sheetsRegistry = new SheetsRegistry();
  const html = ReactServer.renderToString(<App req={req} sheetsRegistry={sheetsRegistry} />);

  redirectHandler(req, res, next);

  return res.send(
    ReactServer.renderToStaticMarkup(
      <HelmetHtml helmet={Helmet.renderStatic()}>
        <AppContainer html={html} />
        <PreloadedState state={store.getState()} />
        <ServerSideJSS sheetsRegistry={sheetsRegistry} />
        <script type="text/javascript" src="client.js" />
      </HelmetHtml>
    )
  );
};
