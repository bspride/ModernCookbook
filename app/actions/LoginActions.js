import AppDispatcher from '../dispatchers/appDispatcher';
import {browserHistory} from 'react-router'

export default {
	loginUser: () => {
		AppDispatcher.dispatch({
			actionType: 'LOGIN_USER'
		});
		
		browserHistory.push('/');
	},
	logoutUser: () => {
		browserHistory.push('/login');
		AppDispatcher.dispatch({
			actionType: 'LOGOUT_USER'
		});
	}
}