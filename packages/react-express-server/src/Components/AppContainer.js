/* eslint-disable react/no-danger */
import React from 'react';
import PropTypes from 'prop-types';

const AppContainer = ({ id, html }) => <div id={id} dangerouslySetInnerHTML={{ __html: html }} />;

AppContainer.propTypes = {
  id: PropTypes.string,
  html: PropTypes.string.isRequired,
};

AppContainer.defaultProps = {
  id: 'root',
};

export default AppContainer;
