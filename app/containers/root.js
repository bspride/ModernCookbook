import React from 'react'
import { Router, Route} from 'react-router'
import routes from '../routes'
import DevTools from './DevTools'

export default class Root extends React.Component {
    render () {
        return (
				 <div>
					<Router history={this.props.history} routes={routes}/>
					<DevTools />
				 </div>
        );
    }
}