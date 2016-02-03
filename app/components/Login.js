/**
 * Login
 * Login component for updating login
 * state and logging in.
 */

import React, { Component } from 'react';
import ReactMixin from 'react-mixin';
import { connect } from 'react-redux';

import { loginRequest } from '../actions/LoginActions';

class Login extends Component {
	constructor(props) {
		super(props)
    this.login = this.login.bind(this)
		this.facebookLogin = this.facebookLogin.bind(this)
	}
	
	login(e) {
		e.preventDefault();  
		const { dispatch } = this.props		
		dispatch(
				loginRequest(this.refs.username.value, this.refs.password.value, this.props.routing.query.next)    
		)
	}
	
	facebookLogin(e) {
		e.preventDefault();
		const { dispatch } = this.props		
		dispatch (
			facebookLoginRequest(this.props.routing.query.next)
		)
	}
	
	render() {
		return (
			<div>
                <form role="form">
                    <label htmlFor='username'>Username</label>
                    <input ref='username' id='username' type='text' />
                    <label htmlFor='password'>Password</label>
                    <input ref='password' id='password' type='password' />
                    <button type='button' id='login' onClick={ this.login }>
                        Submit
                    </button>
                </form>
								<a href="" onClick={this.facebookLogin}>Facebook Login</a>
            </div>
		);
	}
}

function mapStateToProps(state) {
	return {
		routing: state.routing.location
	}
}

export default connect(mapStateToProps)(Login)