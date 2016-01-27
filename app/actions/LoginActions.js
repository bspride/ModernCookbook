/**
 * LoginActions
 * Actions for helping with login
 */

import { browserHistory } from 'react-router';
import Parse from 'parse';

import AuthService from '../middleware/api/Authentication';

export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAIL = "LOGIN_FAIL";

export const LOGOUT_REQUEST = "LOGOUT_REQUEST";

export const SIGNUP_USER = "SIGNUP_USER";

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

function signupUser (username) {
    return {
        type: SIGNUP_USER,
        username,
        isLoggedIn: true
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
		AuthService.logout()
    browserHistory.push('/login')
    
    return logoutUser(username)
}

export function signup (username, password) {
    AuthService.signup (username, password)
    browserHistory.push('/home')
    
    return signupUser(username)
}
