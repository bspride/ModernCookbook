import AppDispatcher from '../dispatchers/appDispatcher';
import RouterContainer from '../services/RouterContainer';

export default {
	loginUser: () => {
		AppDispatcher.dispatch({
			actionType: 'LOGIN_USER'
		});
		
		RouterContainer.get().transitionTo('/');
	},
	logoutUser: () => {
		RouterContainer.get().transitionTo('/login');
		AppDispatcher.dispatch({
			actionType: 'LOGOUT_USER'
		});
	}
}