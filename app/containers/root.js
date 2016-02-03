import React from 'react'
import { Router, Route} from 'react-router'
import { connect } from 'react-redux'
import { checkLoginRequest } from '../actions/LoginActions'
import routes from '../routes'
import DevTools from './DevTools'

class Root extends React.Component {
		
		componentDidMount() {
			const { dispatch } = this.props
			dispatch(
				checkLoginRequest()
			)
		}	
    render () {
        return (
				 <div>
					<Router history={this.props.history} routes={routes}/>
					<DevTools />
				 </div>
        );
    }
}

export default  connect()(Root)