/* eslint-disable react/no-danger */
import React from 'react';
import PropTypes from 'prop-types';
import sqwish from 'sqwish';

const ServerSideJSS = ({ id, sheetsRegistry, ...rest }) => (
  <style
    {...rest}
    id={id}
    dangerouslySetInnerHTML={{ __html: sqwish(sheetsRegistry.toString()) }}
  />
);

ServerSideJSS.propTypes = {
  id: PropTypes.string,
  sheetsRegistry: PropTypes.shape({
    toString: PropTypes.func.isRequired,
  }).isRequired,
};

ServerSideJSS.defaultProps = {
  id: 'jss-server-side',
};

export default ServerSideJSS;
