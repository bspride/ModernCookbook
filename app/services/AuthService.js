import when from 'when';
import Parse from 'parse';
import LoginActions from '../actions/LoginActions';

class AuthService {
	login(username, password) {
		return this.handleAuth(when(
			Parse.User.logIn(username, password)
		));
	}
	
	logout() {
		LoginActions.logoutUser();
	}
	
	signup(username, password) {
		return this.handleAuth(when(
			Parse.User.signUp(username, password, null, null)			
		));
	}
	
	handleAuth(loginPromise) {
		return loginPromise
			.then(function(response) {
				LoginActions.loginUser(Parse.User.current());
				return true;
			});
	}
}

export default new AuthService()