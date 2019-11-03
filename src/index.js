/* eslint-disable import/first */
// Must be the first import
if (process.env.NODE_ENV === 'development') {
  // Must use require here as import statements are only allowed
  // to exist at the top of a file.
  // eslint-disable-next-line global-require
  require('preact/debug');
}

import { h, render } from 'preact';
import fastClick from 'fastclick';
import 'unfetch/polyfill';

import './sass/main.scss';
import App from './App';

if ('addEventListener' in document) {
  document.addEventListener(
    'DOMContentLoaded',
    function handleFastClick() {
      fastClick.attach(document.body);
    },
    false,
  );
}

// root holds our app's root DOM Element:
let root;

function init() {
  root = render(<App />, document.getElementById('app'), root);
}
init();

// example: Re-render on Webpack HMR update:
if (module.hot) module.hot.accept('./App', init);
