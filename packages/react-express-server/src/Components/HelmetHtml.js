/* eslint-disable jsx-a11y/html-has-lang, react/no-danger */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Html from './Html';

class HelmetHtml extends PureComponent {
  static propTypes = {
    children: PropTypes.node.isRequired,
    helmet: PropTypes.objectOf(
      PropTypes.shape({
        toComponent: PropTypes.func.isRequired,
        toString: PropTypes.func.isRequired,
      })
    ).isRequired,
  };

  get components() {
    return Object.keys(this.props.helmet).map(key => this.props.helmet[key].toComponent());
  }

  render() {
    return <Html {...this.helmetComponents}>{this.props.children}</Html>;
  }
}

export default HelmetHtml;
