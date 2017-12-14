import React from 'react';
import { Helmet } from 'react-helmet';

// sheetsRegistry, store (via redux??? or only whats needed)
const Html = (props) => {
  return (
    <!doctype html>
    <html lang="en" dir="ltr">
    <head>
    <head>
      <title>App</title>
    </head>
    <body>
    <div id="app">{props.children}</div>
      <script id="initial-data" type="text/plain" data-json={props.initialData}></script>
      <script src="/static/bundle.js"></script>
    </body>
    </html>

    <!doctype html>
    <html lang="en" dir="ltr">
    <head>
    ${helmet.title.toString()}
    ${helmet.meta.toString()}
    <meta charset="utf-8">
    <meta name="theme-color" content="#000000">
    <meta http-equiv="x-ua-compatible" content="ie=edge"/>
    <meta name="viewport" content="width=device-width, initial-scale=1"/>
    <meta name="msapplication-config" content="browserconfig.xml"/>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"/>
    <link rel="manifest" href="/manifest.json">
    <link rel="shortcut icon" href="/favicon.ico">
    <link rel="icon" type="image/png" sizes="16x16" href="/images/16x16.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/images/32x32.png">
    <link rel="apple-touch-icon" href="/images/180x180.png"/>
    ${helmet.link.toString()}
    </head>
  <body>
  <div id="root">${html}</div>
  <style id="jss-server-side">${sqwish.minify(css)}</style>
  <script type="text/javascript">
    window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\\u003c')}
  </script>
  <script id="preloaded-state" type="text/plain" data-json={props.initialData}></script>
  <script type="text/javascript" src="client.js"></script>
  </body>
  </html>
  );
};

export default Html;