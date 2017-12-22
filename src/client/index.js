import React from 'react';
import ReactDOM from 'react-dom';
import { Provider as StoreProvider } from 'react-redux';
import { ConnectedRouter as Router } from 'react-router-redux';
import MuiThemeProviderWrapper from '../common/Components/MuiThemeProviderWrapper';
import RouterWrapper from '../common/Components/RouterWrapper';
import store from './store';
import history from './history';

const removeElement = element => {
  if (element && element.parentNode) {
    element.parentNode.removeChild(element);
  }
};

ReactDOM.hydrate(
  <MuiThemeProviderWrapper
    handleDidMount={removeElement(document.getElementById('jss-server-side'))}
  >
    <StoreProvider store={store}>
      <RouterWrapper router={Router} history={history} />
    </StoreProvider>
  </MuiThemeProviderWrapper>,
  document.getElementById('root')
);
