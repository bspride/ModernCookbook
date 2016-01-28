import React from 'react'
import { Router, browserHistory, Route} from 'react-router'
import routes from '../routes'
import DevTools from './DevTools'

export default class Root extends React.Component {
    render () {
        return (
				 <div>
					<Router history={browserHistory} routes={routes}/>
					<DevTools />
				 </div>
        );
    }
}