import React from 'react';
import { Router, browserHistory, Route, IndexRoute } from 'react-router';

import Login from '../components/Login';
import CookbookApp from '../components/CookbookApp'
import Signup from '../components/Signup';
import Home from '../components/Home';
import Index from '../components/Index';
import Create from '../containers/Cookbook/Recipes';

export default class Root extends React.Component {
    render () {
        return (
	       <Router history={browserHistory}>
		      <Route path="/" component={CookbookApp}>
			     <IndexRoute component={Index} />
			     <Route path="login" component={Login} />
			     <Route path="signup" component={Signup} />
			     <Route path="home" component={Home} />
                 <Route path="create" component={Create} />
	          </Route>
	       </Router>
        );
    }
}