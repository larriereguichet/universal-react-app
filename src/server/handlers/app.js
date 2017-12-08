import React from 'react';
import { Provider } from 'react-redux';
import { renderToString } from 'react-dom/server';
import { renderRoutes } from 'react-router-config';
import { replace } from 'react-router-redux';
import { JssProvider, SheetsRegistry } from 'react-jss';
import { create } from 'jss';
import preset from 'jss-preset-default';
import { MuiThemeProvider } from 'material-ui/styles';
import createGenerateClassName from 'material-ui/styles/createGenerateClassName';
import { Helmet } from 'react-helmet';
import theme from '../../common/theme';
import routes from '../../common/routes';
import StaticRouter from '../Components/StaticRouter';
import renderHtml from '../renderers/Html';
import store from '../store';
import history from '../history';

export default logger => (req, res, next) => {
  if (!routes.some(({ path }) => req.url === path)) {
    logger.info(`Request URL ${req.url} is not handled by the App.`);

    return next();
  }

  logger.info(`Request URL ${req.url} is handled by the App.`);

  // Create a sheetsRegistry instance.
  const sheetsRegistry = new SheetsRegistry();

  // Configure JSS
  const jss = create(preset());
  // const jss = create({ plugins: [...preset().plugins, rtl()] }); // in-case you're supporting rtl

  jss.options.createGenerateClassName = createGenerateClassName;

  const context = {};

  // if (isClientRedirect(ctx.history.action)) {
  //   log('302 redirect to', ctx.history.location.pathname)
  //   ctx.status = 302
  //   ctx.redirect(ctx.history.location.pathname)
  // } else {

  store.dispatch(replace(req.url));

  if (context.url) {
    logger.info(`While the requested URL was ${req.url} found URL ${context.url} in the context.`);
    // Somewhere a `<Redirect>` was rendered
    res.redirect(context.status || 302, context.url);
    res.end();
  }

  logger.info(`Res is going to be sent`);

  return res.send(
    renderHtml(
      renderToString(
        <JssProvider registry={sheetsRegistry} jss={jss}>
          <MuiThemeProvider theme={theme} sheetsManager={new Map()}>
            <Provider store={store}>
              <StaticRouter location={req.url} context={context} history={history}>
                {renderRoutes(routes)}
              </StaticRouter>
            </Provider>
          </MuiThemeProvider>
        </JssProvider>
      ),
      sheetsRegistry.toString(),
      store.getState(),
      Helmet.renderStatic()
    )
  );
};
