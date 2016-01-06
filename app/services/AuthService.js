import when from 'when';
import LoginActions from '../actions/LoginActions';

class AuthService {
	login(username, password) {
		return this.handleAuth(when(
			//call Parse
		));
	}
	
	logout() {
		LoginActions.logoutUser();
	}
	
	signup(username, password) {
		return this.handleAuth(when(
			//call Parse
		));
	}
	
	handleAuth(loginPromise) {
		return loginPromise
			.then(function(response) {
				LoginActions.loginUser();
				return true;
			});
	}
}

export default new AuthService()