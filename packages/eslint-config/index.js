module.exports = {
  extends: ['./rules'].map(require.resolve),
  globals: {
    console: false,
  },
};
