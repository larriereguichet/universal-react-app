/* eslint-disable jsx-a11y/html-has-lang, react/no-danger */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import PreloadedState from './PreloadedState';
import ServerSideJSS from './ServerSideJSS';

class Html extends PureComponent {
  static propTypes = {
    children: PropTypes.node.isRequired,
    base: PropTypes.node,
    bodyAttributes: PropTypes.objectOf(PropTypes.string),
    htmlAttributes: PropTypes.objectOf(PropTypes.string),
    link: PropTypes.arrayOf(PropTypes.node),
    meta: PropTypes.arrayOf(PropTypes.node),
    noscript: PropTypes.arrayOf(PropTypes.node),
    script: PropTypes.arrayOf(PropTypes.node),
    style: PropTypes.arrayOf(PropTypes.node),
    title: PropTypes.node,
  };

  static defaultProps = {
    base: null,
    htmlAttributes: {},
    bodyAttributes: {},
    meta: [],
    noscript: [],
    link: [],
    style: [],
    script: [],
  };

  render() {
    return (
      <html {...this.props.htmlAttributes}>
        <head>
          {this.props.title}
          {this.props.meta}
          {this.props.link}
          {this.props.base}
        </head>
        <body {...this.props.bodyAttributes}>
          {this.props.children}
          {this.props.style}
          {this.props.script}
        </body>
      </html>
    );
  }
}

export default Html;
