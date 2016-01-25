import { Component } from 'react';
import { connect } from 'react-redux';

import { signup } from '../actions/LoginActions';

class Signup extends Component {
	constructor() {
		super(props)
		this.signup = this.signup.bind (this)
	}
	
	signup(e) {
		e.preventDefault();
        const { dispatch } = this.props
        
        let username = this.refs.username
        let password = this.refs.password
        
        dispatch (
            signup (username, password)
        )
	}
	
	render() {
		return (
			<div>
				<form>
					<label htmlFor="username">Username</label>
					<input type="text" ref="username" id="username" />
					<label htmlFor="password">Password</label>
					<input type="password" ref="password" id="password" />
					<button type="submit" onClick={ this.signup }>Submit</button>
				</form>
			</div>
		);
	}
}

export default connect ()(Signup)