import when from 'when'
import Firebase from 'firebase'
import FirebaseConstants from '../../constants/FirebaseConstants'

import { success, userLogout } from '../../actions/LoginActions'
var fireRef = new Firebase(FirebaseConstants.FIREBASE);

class AuthService {
	login(username, password) {
		return this.handleAuth(
			fireRef.authWithPassword({
				email: username,
				password: password
			})
		);
	}
	
	logout(user) {
		fireRef.unauth()
	}
	
	signup(username, password) {
		return this.handleAuth(
			fireRef.createUser({
				email: username,
				password: password
			})
		);
	}
	
	handleAuth(loginPromise) {
		return loginPromise
	}
}

export default new AuthService()