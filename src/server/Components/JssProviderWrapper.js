import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { JssProvider } from 'react-jss';
import { create } from 'jss';
import preset from 'jss-preset-default';
import createGenerateClassName from 'material-ui/styles/createGenerateClassName';

const jss = create({
  ...preset(),
  createGenerateClassName,
});
// const jss = create({ plugins: [...preset().plugins, rtl()] }); // in-case you're supporting rtl

class JssProviderWrapper extends Component {
  static propTypes = {
    ...JssProvider.propTypes,
    jss: PropTypes.object(),
  };

  static defaultProps = {
    jss,
  };

  render() {
    return <JssProvider {...props} />;
  }
}

export default JssProviderWrapper;
