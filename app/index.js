import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import Root from './containers/Root'
import configureStore from './stores/ConfigureStore'
import Firebase from 'firebase'

import ParseConfig from 'json!./stores/ParseConfig.json'

require('./styles/main.css');

var myDataRef = new Firebase('https://sizzling-fire-4278.firebaseio.com/');

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