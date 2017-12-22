/* eslint-disable react/prop-types, react/no-danger */
import React from 'react';
import serializeJavascript from 'serialize-javascript';

export default ({ state }) => (
  <script
    type="text/javascript"
    dangerouslySetInnerHTML={{
      __html: `window.__PRELOADED_STATE__ = ${serializeJavascript(state)}`,
    }}
  />
);
