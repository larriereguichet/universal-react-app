import PropTypes from 'prop-types';

export const location = {
  pathname: PropTypes.string,
  search: PropTypes.string,
  hash: PropTypes.string,
  state: PropTypes.string,
  key: PropTypes.string,
};

export const history = {
  length: PropTypes.number,
  action: PropTypes.string,
  location: PropTypes.shape(location),
  index: PropTypes.number,
  entries: PropTypes.arrayOf(PropTypes.shape(location)),
  createHref: PropTypes.func,
  push: PropTypes.func,
  replace: PropTypes.func,
  go: PropTypes.func,
  goBack: PropTypes.func,
  goForward: PropTypes.func,
  canGo: PropTypes.func,
  block: PropTypes.func,
  listen: PropTypes.func,
};
