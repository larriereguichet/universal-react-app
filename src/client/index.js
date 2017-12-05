import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Switch } from 'react-router';
import { ConnectedRouter } from 'react-router-redux';
import { renderRoutes } from 'react-router-config';
import store from './store';
import history from './history';
import routes from '../common/routes';
import MuiProvider from './Components/MuiProvider';

ReactDOM.hydrate(
  <Provider store={store}>
    <MuiProvider>
      <ConnectedRouter history={history}>
        <Switch>{renderRoutes(routes)}</Switch>
      </ConnectedRouter>
    </MuiProvider>
  </Provider>,
  document.getElementById('root')
);
