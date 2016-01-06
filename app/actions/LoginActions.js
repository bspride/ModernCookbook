import AppDispatcher from '../dispatchers/appDispatcher';
import {browserHistory} from 'react-router'
import Parse from 'parse';

export default {
	loginUser: (parseUser) => {
		AppDispatcher.dispatch({
			actionType: 'LOGIN_USER',
			currentUser: parseUser
		});
		
		browserHistory.push('/home');
	},
	logoutUser: () => {
		Parse.User.logOut();
		browserHistory.push('/login');
		AppDispatcher.dispatch({
			actionType: 'LOGOUT_USER'
		});
	}
}