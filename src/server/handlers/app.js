import React from 'react';
import ReactServer from 'react-dom/server';
import { replace } from 'react-router-redux';
import { Provider as StoreProvider } from 'react-redux';
import { SheetsRegistry } from 'react-jss';
import { Helmet } from 'react-helmet';
import MuiThemeProviderWrapper from '../../common/Components/MuiThemeProviderWrapper';
import RouterWrapper from '../../common/Components/RouterWrapper';
import JssProviderWrapper from '../Components/JssProviderWrapper';
import Router from '../Components/StaticRouter';
import routes from '../../common/routes';
import renderHtml from '../renderers/Html';
import store from '../store';
import history from '../history';

export default (req, res, next) => {
  if (!routes.some(({ path }) => req.url === path)) {
    req.log.info(`Request URL ${req.url} is not handled by the App.`);

    return next();
  }

  const sheetsRegistry = new SheetsRegistry();
  const context = {};

  // if (isClientRedirect(ctx.history.action)) {
  //   log('302 redirect to', ctx.history.location.pathname)
  //   ctx.status = 302
  //   ctx.redirect(ctx.history.location.pathname)
  // } else {

  store.dispatch(replace(req.url));

  if (context.url) {
    req.log.info(`While the requested URL was ${req.url} found URL ${context.url} in the context.`);
    // Somewhere a `<Redirect>` was rendered
    res.redirect(context.status || 302, context.url);
    res.end();
  }

  return res.send(
    renderHtml(
      ReactServer.renderToString(
        <JssProviderWrapper registry={sheetsRegistry}>
          <MuiThemeProviderWrapper sheetsManager={new Map()}>
            <StoreProvider store={store}>
              <RouterWrapper
                router={Router}
                history={history}
                context={context}
                location={req.url}
              />
            </StoreProvider>
          </MuiThemeProviderWrapper>
        </JssProviderWrapper>
      ),
      sheetsRegistry.toString(),
      store.getState(),
      Helmet.renderStatic()
    )
  );
};
