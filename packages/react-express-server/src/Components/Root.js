/* eslint-disable react/no-danger */
import React from 'react';
import PropTypes from 'prop-types';

const Root = ({ id, html }) => <div id={id} dangerouslySetInnerHTML={{ __html: html }} />;

Root.propTypes = {
  id: PropTypes.string,
  html: PropTypes.string.isRequired,
};

Root.defaultProps = {
  id: 'root',
};

export default Root;
