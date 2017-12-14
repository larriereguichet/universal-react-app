import React from 'react';
import ReactDOM from 'react-dom';
import { Provider as StoreProvider } from 'react-redux';
import { ConnectedRouter as Router } from 'react-router-redux';
import MuiThemeProviderWrapper from '../common/Components/MuiThemeProviderWrapper';
import RouterWrapper from '../common/Components/RouterWrapper';
import store from './store';
import history from './history';

const removeServiceSideJss = () => {
  const jssStyles = document.getElementById('jss-server-side');
  if (jssStyles && jssStyles.parentNode) {
    jssStyles.parentNode.removeChild(jssStyles);
  }
};

ReactDOM.hydrate(
  <MuiThemeProviderWrapper handleDidMount={removeServiceSideJss}>
    <StoreProvider store={store}>
      <RouterWrapper router={Router} history={history} />
    </StoreProvider>
  </MuiThemeProviderWrapper>,
  document.getElementById('root')
);
