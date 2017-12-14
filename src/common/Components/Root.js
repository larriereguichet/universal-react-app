import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import MuiThemeProvider from '../Components/MuiThemeProvider';
import { history as historyPropTypes } from '../propTypes';
import routes from '../routes';
import defaultTheme from '../theme';

class Root extends PureComponent {
  static propTypes = {
    // eslint-disable-next-line react/forbid-prop-types
    store: PropTypes.object.isRequired,
    handleMuiThemeProviderDidMount: PropTypes.func,
    theme: PropTypes.oneOfType([PropTypes.objectOf(PropTypes.string), PropTypes.func]),
    sheetsManager: PropTypes.objectOf(PropTypes.string),
    children: PropTypes.element.isRequired,
  };

  static defaultProps = {
    handleMuiThemeProviderDidMount: () => {},
    theme: null,
    sheetsManager: null,
    location: null,
    context: {},
  };

  get theme() {
    return this.props.theme || defaultTheme;
  }

  render() {
    const Router = this.props.router;

    return (
      <MuiThemeProvider
        theme={this.theme}
        handleDidMount={this.props.handleMuiThemeProviderDidMount}
        sheetsManager={this.props.sheetsManager}
      >
        <Provider store={this.props.store}>{this.props.children}</Provider>
      </MuiThemeProvider>
    );
  }
}

export default Root;
