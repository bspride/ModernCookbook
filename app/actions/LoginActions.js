import AppDispatcher from '../dispatchers/appDispatcher';
import {browserHistory} from 'react-router'
import Parse from 'parse';
import LoginConstants from '../constants/LoginConstants';

export default {
	loginUser: (parseUser) => {
		AppDispatcher.dispatch({
			actionType: LoginConstants.LOGIN_USER,
			currentUser: parseUser
		});
		
		browserHistory.push('/home');
	},
	logoutUser: () => {
		Parse.User.logOut();
		browserHistory.push('/login');
		AppDispatcher.dispatch({
			actionType: LoginConstants.LOGOUT_USER
		});
	}
}