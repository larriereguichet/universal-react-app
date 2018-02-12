import 'jsdom-global/register';
import React from 'react';
import ReactDOM from 'react-dom';
import App from '../../../src/client/Components/App';

describe('Client-side App', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });
});
