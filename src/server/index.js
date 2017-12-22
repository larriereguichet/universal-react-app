import React from 'react';
import { Provider as StoreProvider } from 'react-redux';
import ReactServer from 'react-dom/server';
import { replace } from 'react-router-redux';
import { Helmet } from 'react-helmet';
import {
  HelmetHtml,
  StaticRouter,
  redirectHandler,
  Root,
  ServerSideJSS,
  PreloadedState,
} from 'react-express-server';
import { JssProvider } from 'react-jss';
import { create, SheetsRegistry } from 'jss';
import preset from 'jss-preset-default';
import createGenerateClassName from 'material-ui/styles/createGenerateClassName';
import RouterWrapper from '../common/Components/RouterWrapper';
import MuiThemeProviderWrapper from '../common/Components/MuiThemeProviderWrapper';
import store from './store';
import history from './history';

export default (req, res, next) => {
  const jss = create({
    ...preset(),
    createGenerateClassName,
  });
  const sheetsRegistry = new SheetsRegistry();

  store.dispatch(replace(req.url));

  const html = ReactServer.renderToString(
    <JssProvider jss={jss} registry={sheetsRegistry}>
      <MuiThemeProviderWrapper sheetsManager={new Map()}>
        <StoreProvider store={store}>
          <RouterWrapper
            router={StaticRouter}
            history={history}
            context={req.context}
            location={req.url}
          />
        </StoreProvider>
      </MuiThemeProviderWrapper>
    </JssProvider>
  );

  redirectHandler(req, res, next);

  return res.send(
    ReactServer.renderToStaticMarkup(
      <HelmetHtml helmet={Helmet.renderStatic()}>
        <Root html={html} />
        <PreloadedState state={store.getState()} />
        <ServerSideJSS sheetsRegistry={sheetsRegistry} />
        <script type="text/javascript" src="client.js" />
      </HelmetHtml>
    )
  );
};
