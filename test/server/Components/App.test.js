import React from 'react';
import ReactServer from 'react-dom/server';
import { SheetsRegistry } from 'jss';
import App from '../../../src/server/Components/App';

describe('Server-side App', () => {
  it('renders without crashing', () => {
    const req = {};
    const sheetsRegistry = new SheetsRegistry();

    ReactServer.renderToStaticMarkup(<App req={req} sheetsRegistry={sheetsRegistry} />);
  });
});
