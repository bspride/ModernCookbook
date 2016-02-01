import React from 'react'
import { connect } from 'react-redux'
import { routeActions } from 'react-router-redux'

export function requireAuth (ComposedComponent) {
	class AuthenticatedComponent extends React.Component {
		componentWillMount() {
			this.checkAuth()
		}
		
		componentWillReceiveProps() {
			this.checkAuth()
		}
		
		checkAuth() {
			if (!this.props.isAuthenticated) {
				let path = '/login?next=' + this.props.pathname + this.props.search
				this.props.dispatch(routeActions.push(path))
			}
		}
		
		render() {
			return (
				<div>
					{this.props.isAuthenticated === true
						? <Component {...this.props}/>
						: null
					}
				</div>
			)
		}
	}
	
	function mapStateToProps (state){
		return {
			isAuthenticated: state.auth.isLoggedIn,
			pathname: state.routing.location.pathname,
			search: state.routing.location.search
		}
	}
	
	return connect(mapStateToProps)(AuthenticatedComponent)
}