import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { MuiThemeProvider } from 'material-ui/styles';
import theme from '../../common/theme';

class MuiProvider extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired,
  };

  // Remove the server-side injected CSS.
  componentDidMount() {
    const jssStyles = document.getElementById('jss-server-side');
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }

  render() {
    return <MuiThemeProvider theme={theme}>{this.props.children}</MuiThemeProvider>;
  }
}

export default MuiProvider;
