import React from 'react';
import Parse from 'parse';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Root from './containers/Root';
import configureStore from './stores/ConfigureStore';

import ParseConfig from 'json!./stores/ParseConfig.json';

require('./styles/main.css');

// App's keys
Parse.initialize(ParseConfig.APP_ID, ParseConfig.JS_KEY);

var app = document.createElement('div');
app.setAttribute('id', 'app');
document.body.appendChild(app);

// Get store from ConfigureStore
let store = configureStore();

let rootElement = document.getElementById('app');

render(
  <Provider store={store}>
    <Root />
  </Provider>,
  rootElement
)