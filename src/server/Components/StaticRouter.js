import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

const locationPropTypes = {
  pathname: PropTypes.string,
  search: PropTypes.string,
  hash: PropTypes.string,
  state: PropTypes.string,
  key: PropTypes.string,
};

class StaticRouter extends Component {
  static propTypes = {
    history: PropTypes.shape({
      length: PropTypes.number,
      action: PropTypes.string,
      location: PropTypes.shape(locationPropTypes),
      index: PropTypes.number,
      entries: PropTypes.arrayOf(PropTypes.shape(locationPropTypes)),
      createHref: PropTypes.func,
      push: PropTypes.func,
      replace: PropTypes.func,
      go: PropTypes.func,
      goBack: PropTypes.func,
      goForward: PropTypes.func,
      canGo: PropTypes.func,
      block: PropTypes.func,
      listen: PropTypes.func,
    }),
  };

  static defaultProps = {
    history: createMemoryHistory(),
  };

  static childContextTypes = {
    router: PropTypes.shape(Router.propTypes).isRequired,
  };

  getChildContext() {
    return this.childContext;
  }

  get childContext() {
    return {
      router: {
        staticContext: this.props.history,
      },
    };
  }

  render() {
    const { history, ...props } = this.props;

    return <Router {...props} history={history} />;
  }
}

export default StaticRouter;
