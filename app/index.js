var React = require('react');
var Parse = require('parse');
var ReactDOM = require('react-dom');
var LoginWrapper = require('./components/LoginWrapper');
require('./styles/main.css');

var app = document.createElement('div');
app.setAttribute('id', 'app');
document.body.appendChild(app);

// Insert your app's keys here:
Parse.initialize('Ms0FhXXGq8z1fPL5hGjv7qCnCPxDYET5JRvjuYB7', '2DCYdcdbYhVAjJOVD0OJ6jZp7sucdcQOdtKljDZy');

ReactDOM.render(
  <LoginWrapper />,
  document.getElementById('app')
);