import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  MuiThemeProvider as BaseMuiThemeProvider,
  MuiThemeProviderProps,
} from 'material-ui/styles';
import defaultTheme from '../theme';

class MuiThemeProviderWapper extends Component {
  static propTypes = {
    ...MuiThemeProviderProps,
    theme: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
    handleDidMount: PropTypes.func,
    children: PropTypes.element.isRequired,
  };

  static defaultProps = {
    handleDidMount: () => {},
    theme: null,
  };

  componentDidMount() {
    this.props.handleDidMount();
  }

  get theme() {
    return this.props.theme || defaultTheme;
  }

  render() {
    const { children, handleDidMount, ...props } = this.props;

    return (
      <BaseMuiThemeProvider {...props} theme={this.theme}>
        {children}
      </BaseMuiThemeProvider>
    );
  }
}

export default MuiThemeProviderWapper;
