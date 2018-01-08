import React from 'react';
import { Helmet } from 'react-helmet';

const HelmetDefaults = () => (
  <Helmet>
    <meta charSet="utf-8" />
    <meta name="theme-color" content="#000000" />
    <meta httpEquiv="x-ua-compatible" content="ie=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="msapplication-config" content="browserconfig.xml" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" />
    <link rel="manifest" href="/manifest.json" />
    <link rel="shortcut icon" href="/favicon.ico" />
    <link rel="icon" type="image/png" sizes="16x16" href="/images/16x16.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="/images/32x32.png" />
    <link rel="apple-touch-icon" href="/images/180x180.png" />
  </Helmet>
);

export default HelmetDefaults;
