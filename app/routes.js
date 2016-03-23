import React from 'react'
import { Route , IndexRoute} from 'react-router'

import {requireAuth} from './components/AuthenticatedComponent'

import Login from './components/Login'
import CookbookApp from './containers/Cookbook/CookbookApp'
import Signup from './components/Signup'
import Home from './components/Home'
import Index from './components/Index'
import Create from './containers/Cookbook/Recipes'

export default (
    <Route path="/" component={CookbookApp}>
	    <IndexRoute component={Index} />
		<Route path="login" component={Login} />
		<Route path="signup" component={Signup} />
		<Route path="home" component={requireAuth(Home)} />
				 <Route path="create" component={requireAuth(Create)} />
    </Route>
)