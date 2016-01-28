import when from 'when';
import Parse from 'parse';

import { success, userLogout } from '../../actions/LoginActions';

class AuthService {
	login(username, password) {
		return this.handleAuth(
			Parse.User.logIn(username, password)
		);
	}
	
	logout(user) {
		Parse.User.logOut()
	}
	
	signup(username, password) {
		return this.handleAuth(when(
			Parse.User.signUp(username, password, null, null)			
		));
	}
	
	handleAuth(loginPromise) {
		return loginPromise
			.then(function(response) {
				return true;
			});
	}
}

export default new AuthService()