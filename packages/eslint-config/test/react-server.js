const expect = require('expect');
const CLIEngine = require('eslint').CLIEngine;
const baseConfig = require('../react-server');

describe('react server config', () => {
  const cli = new CLIEngine({
    useEslintrc: false,
    baseConfig,
  });

  describe('should load', () => {
    const { results } = cli.executeOnText('');
    expect(typeof results).toBe('object');
  });
});
