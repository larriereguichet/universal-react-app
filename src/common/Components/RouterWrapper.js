import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { renderRoutes } from 'react-router-config';
import { history as historyPropTypes } from '../propTypes';
import routes from '../routes';

class RouterWrapper extends PureComponent {
  static propTypes = {
    router: PropTypes.func.isRequired,
    history: PropTypes.shape(historyPropTypes).isRequired,
  };

  render() {
    const Router = this.props.router;

    return <Router {...this.props}>{renderRoutes(routes)}</Router>;
  }
}

export default RouterWrapper;
