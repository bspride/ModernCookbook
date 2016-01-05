var React = require('react');
var Parse = require('parse');
var ReactDOM = require('react-dom');
var LoginWrapper = require('./components/LoginWrapper');
var ParseConfig = require('json!./stores/ParseConfig.json');
require('./styles/main.css');

var app = document.createElement('div');
app.setAttribute('id', 'app');
document.body.appendChild(app);

// Insert your app's keys here:
Parse.initialize(ParseConfig.APP_ID, ParseConfig.JS_KEY);

ReactDOM.render(
  <LoginWrapper />,
  document.getElementById('app')
);