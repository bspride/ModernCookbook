import React from 'react/addons';
import ReactMixin from 'react-mixin';
import Auth from '../services/AuthService'

export default class Login extends React.Component {
	
	constructor() {
		super()
		this.state = {
			user: '',
			password: ''
		}
	}
	
	login(e) {
		e.preventDefault();
		Auth.login(this.state.user, this.state.password)
			.catch(function(err) {
				console.log("Error logging in", err);
			});
	}
	
	render() {
		return (
			<div>
					<form role="form">
						<label htmlFor='username'>Username</label>
						<input ref='username' id='username' type='text' valueLink={this.linkState('user')} />
						<label htmlFor='password'>Password</label>
						<input ref='password' id='password' type='password' valueLink={this.linkState('password')} />
						<button type='button' id='login' onClick={this.login.bind(this)}>
							Submit
						</button>
					</form>
				</div>
		);
	}
}

ReactMixin(Login.prototype, React.addons.LinkedStateMixin);