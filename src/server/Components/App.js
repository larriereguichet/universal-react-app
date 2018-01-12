import React from 'react';
import PropTypes from 'prop-types';
import { Provider as StoreProvider } from 'react-redux';
import { StaticRouter } from 'react-express-server';
import { JssProvider } from 'react-jss';
import { create } from 'jss';
import preset from 'jss-preset-default';
import { hot } from 'react-hot-loader';
import createGenerateClassName from 'material-ui/styles/createGenerateClassName';
import MuiThemeProviderWrapper from '../../common/Components/MuiThemeProviderWrapper';
import CommonApp from '../../common/Components/App';
import history from '../history';
import store from '../store';

const jss = create({
  ...preset(),
  createGenerateClassName,
});

const App = ({ req, sheetsRegistry }) => (
  <JssProvider jss={jss} registry={sheetsRegistry}>
    <MuiThemeProviderWrapper sheetsManager={new Map()}>
      <StoreProvider store={store}>
        <StaticRouter history={history} context={req.context} location={req.url}>
          <CommonApp />
        </StaticRouter>
      </StoreProvider>
    </MuiThemeProviderWrapper>
  </JssProvider>
);

App.propTypes = {
  req: PropTypes.shape({
    context: PropTypes.objectOf(PropTypes.string),
    url: PropTypes.string,
  }).isRequired,
  sheetsRegistry: PropTypes.shape({
    add: PropTypes.func.isRequired,
    toString: PropTypes.func.isRequired,
  }).isRequired,
};

export default hot(module)(App);
