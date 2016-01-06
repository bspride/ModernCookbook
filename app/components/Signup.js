import React from 'react/addons';
import ReactMixin from 'react-mixin';
import Auth from '../services/AuthService'

export default class Signup extends React.Component {
	constructor() {
		super()
		this.state = {
			username: '',
			password: ''
		};
	}
	
	signup(e) {
		e.preventDefault();
		Auth.signup(this.state.username, this.state.password)
			.catch(function(err) {
				console.log("error logging in", err);
			});
	}
	
	render() {
		return (
			<div>
				<form>
					<label htmlFor="username">Username</label>
					<input type="text" valueLink={this.linkState('username')} id="username" />
					<label htmlFor="password">Password</label>
					<input type="password" valueLink={this.linkState('password')} id="password" />
					<button type="submit" onClick={this.signup.bind(this)}>Submit</button>
				</form>
			</div>
		);
	}
}

ReactMixin(Signup.prototype, React.addons.LinkedStateMixin);