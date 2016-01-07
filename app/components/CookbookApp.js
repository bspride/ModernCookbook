import React from 'react';
import LoginStore from '../stores/LoginStore'
import { Route, RouterHandler, Link } from 'react-router';
import AuthService from '../services/AuthService'

export default class CookbookApp extends React.Component {
	constructor() {
		super()
		this.state = this._getLoginState();
	}
	
	_getLoginState() {
		return {
			userLoggedIn: LoginStore.isLoggedIn()
		};
	}
	
	componentDidMount() {
		this.changeListener = this._onChange.bind(this);
		LoginStore.addChangeListener(this.changeListener);
	}
	
	_onChange() {
		this.setState(this._getLoginState());
	}
	
	componentWillUnmount() {
		LoginStore.removeChangeListener(this.changeListener);
	}
	
	render() {
		return (
			<div>
				<h1>
					Modern Cookbook
				</h1>
				{this.headerItems}
					{this.props.children}
			</div>
		);
	}
	
	logout(e) {
		e.preventDefault();
		AuthService.logout();
	}
	
	get headerItems() {
		if(!this.state.userLoggedIn) {
			return (
				<div>
					<Link to="login">Login</Link>
					<Link to="signup">Signup</Link>
				</div>
			)
		} else {
			return (
				<div>
					<Link to="home">Home</Link>
                    <Link to="create">Create Recipe</Link>
					<a href="" onClick={this.logout}>Logout</a>
				</div>
			)			
		}
	}
}