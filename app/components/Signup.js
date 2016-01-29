import React, { Component } from 'react';
import { connect } from 'react-redux';

import { signup } from '../actions/LoginActions';

class Signup extends Component {
	constructor(props) {
		super(props)
		this.signup = this.signup.bind(this)
	}
	
	signup(e) {
		e.preventDefault();
        const { dispatch } = this.props;
				
        let username = this.refs.username.value
        let password = this.refs.password.value
				let name = this.refs.name.value
        
        dispatch (
            signup (name, username, password)
        )
	}
	
	render() {
		return (
			<div>
				<form>
					<label htmlFor="name">Name</label>
					<input type="text" ref="name" id="name" />
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