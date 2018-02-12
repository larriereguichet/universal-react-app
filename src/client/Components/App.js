import React from 'react';
import { Provider as StoreProvider } from 'react-redux';
import { ConnectedRouter as Router } from 'react-router-redux';
import { hot } from 'react-hot-loader';
import remove from 'remove-element';
import MuiThemeProviderWrapper from '../../common/Components/MuiThemeProviderWrapper';
import CommonApp from '../../common/Components/App';
import store from '../store';
import history from '../history';

const App = () => (
  <MuiThemeProviderWrapper
    handleDidMount={() => remove(document.getElementById('jss-server-side'))}
  >
    <StoreProvider store={store}>
      <Router history={history}>
        <CommonApp />
      </Router>
    </StoreProvider>
  </MuiThemeProviderWrapper>
);

export default hot(module)(App);
