import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import Root from './containers/Root'
import configureStore from './stores/ConfigureStore'
import { browserHistory } from 'react-router'
import Firebase from 'firebase'

require('./styles/main.css');

var myDataRef = new Firebase('https://sizzling-fire-4278.firebaseio.com/');

var app = document.createElement('div');
app.setAttribute('id', 'app');
document.body.appendChild(app);


// Get store from ConfigureStore
let store = configureStore(browserHistory);

let rootElement = document.getElementById('app');

render(
  <Provider store={store}>
    <Root history={browserHistory}/>
  </Provider>,
  rootElement
)