import when from 'when'
import Firebase from 'firebase'
import FirebaseConstants from '../../constants/FirebaseConstants'

import { success, userLogout } from '../../actions/LoginActions'
var fireRef = new Firebase(FirebaseConstants.FIREBASE);

class AuthService {
	login(username, password) {
		return fireRef.authWithPassword({
			email: username,
			password: password
		})
	}
	
	checkLogin() {
		return fireRef.getAuth()
	}
	
	facebookLogin() {
		return fireRef.authWithOAuthPopup("facebook")
	}
	
	logout(user) {
		fireRef.unauth()
	}
	
	signup(username, password) {
		return fireRef.createUser({
			email: username,
			password: password
		})
	}
	
	setupUserProfile(uid, name) {
		return fireRef.child('users').child(uid).set({
				"name": name
		})
	}
}

export default new AuthService()