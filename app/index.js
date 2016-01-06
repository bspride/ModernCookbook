import React from 'react';
import Parse from 'parse';
import ReactDOM from 'react-dom';
import {Router, browserHistory, Route, IndexRoute} from 'react-router';

import Login from './components/Login';
import CookbookApp from './components/CookbookApp'
import Signup from './components/Signup';
import Home from './components/Home';
import Index from './components/Index';

import ParseConfig from 'json!./stores/ParseConfig.json';

require('./styles/main.css');

// Insert your app's keys here:
Parse.initialize(ParseConfig.APP_ID, ParseConfig.JS_KEY);

var app = document.createElement('div');
app.setAttribute('id', 'app');
document.body.appendChild(app);

ReactDOM.render((
	<Router history={browserHistory}>
		<Route path="/" component={CookbookApp}>
			<IndexRoute component={Index} />
			<Route path="login" component={Login} />
			<Route path="signup" component={Signup} />
			<Route path="home" path="/home" component={Home} />
		</Route>
	</Router>
), document.getElementById('app'));	

//ReactDOM.render((
//	<Router history={browserHistory}>
//		<Route path="/" component={App}>
//			<Route path="login" component={Login} />
//			<Route path="logout" component={Logout} />
//			<Route path="dashboard" component="Dashboard" onEnter={requireAuth} />
//		</Route>
//	</Router>
//), document.getElementById('app'));