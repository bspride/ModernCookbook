import React, { Component } from 'react';
import ReactMixin from 'react-mixin';
import { connect } from 'react-redux';

import { loginRequest } from '../actions/LoginActions';

class Login extends Component {
	constructor(props) {
		super(props)
        this.login = this.login.bind(this)
	}
	
	login(e) {
		e.preventDefault();
        
        const { dispatch } = this.props
        
        dispatch(
            loginRequest(this.refs.username.value, this.refs.password.value)    
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
            </div>
		);
	}
}

export default connect()(Login)