/**
 * LoginActions
 * Actions for helping with login
 */

import { browserHistory } from 'react-router'
import { routeActions } from 'react-router-redux'

import AuthService from '../middleware/api/Authentication'
import RecipesApi from '../middleware/api/RecipesApi'

export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAIL = "LOGIN_FAIL";
export const LOGOUT_REQUEST = "LOGOUT_REQUEST";
export const SIGNUP_USER = "SIGNUP_USER";

function requestLogin () {
    return {
        type: LOGIN_REQUEST,
				isFetching: true,
        isLoggedIn: false
    }
}

function loginSuccess () {
    return {
        type: LOGIN_SUCCESS,
        isFetching: false,
        isLoggedIn: true
    }
}

function loginFailure () {
	return {
		
	}
}

function logoutUser () {
    return {
        type: LOGOUT_REQUEST,
        isFetching: false,
        isLoggedIn: false,
				recipes: []
    }
}

function signupUser (username) {
    return {
        type: SIGNUP_USER,
        username,
        isLoggedIn: true
    }
}

function success (path = '/home') {
		browserHistory.push(path)
		//dispatch(routeActions.push(path))
}

function checkLogin() {
	return dispatch => {
		var user = AuthService.checkLogin()
		if (user != null) {				
			dispatch(loginSuccess())
			success()
		}
	}
}

function recipesCallback(data) {
	console.log(data.val())
}

function startListeningToRecipes(uid) {
	return function(dispatch, getState) {
			var x = RecipesApi.getUserRecipes(uid, recipesCallback)
			console.log(x)
	}
}

function loginUser(username, password, redirect) {
	return dispatch => {
			dispatch(requestLogin())
			AuthService.login(username, password).then((value) => {
				dispatch(loginSuccess())
				dispatch(startListeningToRecipes(value.uid))
				success(redirect)
			}, (error) => {
				console.log(error)
				dispatch(loginFailure())
			})
		}
}

function facebookLoginUser(redirect) {
	return dispatch => {
		dispatch(requestLogin())
		AuthService.facebookLogin().then((value) => {
			dispatch(loginSuccess())
			success(redirect)
		}, (error) => {
			dispatch(loginFailure())
		})
	}
}

export function checkLoginRequest() {
	return (dispatch, getState) => {
		return dispatch(checkLogin())
	}
}

export function loginRequest (username, password, redirect) {
    return (dispatch, getState) => {
			return dispatch(loginUser(username, password, redirect))
		}	
}

export function facebookLoginRequest(redirect) {
	return (dispatch, getState) => {
		return dispatch(facebookLoginUser(redirect))
	}
}

export function userLogout () {
		//stop listening
		RecipesApi.stopListeningToRecipes(recipesCallback)
		AuthService.logout()
    browserHistory.push('/login')
    
    return logoutUser()
}

export function signup (name, username, password) {
    AuthService.signup (username, password).then((userData) => {
			AuthService.setupUserProfile(userData.uid, name)
		}, (error) => {
			console.log(error)
		})
    browserHistory.push('/home')
    
    return signupUser(username)
}
