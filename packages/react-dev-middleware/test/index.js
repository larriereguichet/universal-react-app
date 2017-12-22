import expect from 'expect';
import createDevMiddleware, { createConfig } from '../lib';

const defaultConfig = { entry: './index.js' };
const configCreator = () => defaultConfig;

describe('react-dev-middleware', () => {
  describe('create config', () => {
    describe('should returns an object', () => {
      it('when fed with a function', () => {
        const config = createConfig(configCreator);
        expect(typeof config).toBe('object');
      });

      it('when fed with an object', () => {
        const config = createConfig(defaultConfig);
        expect(typeof config).toBe('object');
      });
    });
  });

  describe('create dev middleware', () => {
    it('should returns an array of middlewares', () => {
      const middleware = createDevMiddleware(configCreator);
      expect(middleware).toHaveLength(2);
    });
  });
});
