import reset from 'reset-jss';

export default theme => ({
  ...reset,
  root: {
    width: '100%',
    marginTop: 0,
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
});
