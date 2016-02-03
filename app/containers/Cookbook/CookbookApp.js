/**
 * CookbookApp
 * Main container for the app
 */

import React, { Component } from 'react';
import { Route, RouterHandler, Link } from 'react-router';
import { connect } from 'react-redux';

import { userLogout, facebookLoginRequest } from '../../actions/LoginActions';

class CookbookApp extends Component {
    constructor (props) {
        super (props)
        this.logout = this.logout.bind(this)
    }
    
    logout(e) {
	   e.preventDefault();
	   const { dispatch } = this.props
       
       dispatch (
           userLogout()
       )
		}
	
	get headerItems() {
        const { isLoggedIn } = this.props
        
		if(!isLoggedIn) {
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
}

function mapStateToProps (state) {
    return {
        isLoggedIn: state.auth.isLoggedIn
    }
}

export default connect (mapStateToProps)(CookbookApp)