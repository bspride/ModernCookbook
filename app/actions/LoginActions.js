import { browserHistory } from 'react-router';
import Parse from 'parse';
import AuthService from '../middleware/api/Authentication';

export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAIL = "LOGIN_FAIL";

export const LOGOUT_REQUEST = "LOGOUT_REQUEST";

function requestLogin (username) {
    return {
        type: LOGIN_REQUEST,
        username,
        isLoggedIn: true
    }
}

function loginSuccess (username) {
    return {
        type: LOGIN_SUCCESS,
        username,
        isLoggedIn: true
    }
}

function logoutUser (username) {
    return {
        type: LOGOUT_REQUEST,
        username,
        isLoggedIn: false
    }
}

export function loginRequest (username, password) {
    AuthService.login(username, password)
    
    return requestLogin(username)
}

export function success (username) {
    browserHistory.push('/home')
    return loginSuccess(username)
}

export function userLogout () {
    let username = Parse.User.current()
    browserHistory.push('/login')
    
    return logoutUser(username)
}

// export default {
// 	loginUser: (parseUser) => {
// 		AppDispatcher.dispatch({
// 			actionType: 'LOGIN_USER',
// 			currentUser: parseUser
// 		});
// 		
// 		browserHistory.push('/home');
// 	},
// 	logoutUser: () => {
// 		Parse.User.logOut();
// 		browserHistory.push('/login');
// 		AppDispatcher.dispatch({
// 			actionType: 'LOGOUT_USER'
// 		});
// 	}
// }