import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { history as historyPropTypes } from 'history-prop-types';

class StaticRouter extends Component {
  static propTypes = {
    history: PropTypes.shape(historyPropTypes),
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
