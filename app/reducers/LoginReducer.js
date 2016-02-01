import { combineReducers } from 'redux';
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT_REQUEST } from '../actions/LoginActions';
import { loginRequest, success, userLogout } from '../actions/LoginActions';

const initalState = {
		isFetching: false,
    isLoggedIn: false
}

function auth (state = initalState, action) {
    switch (action.type) {
        case LOGIN_REQUEST:
            return Object.assign({}, state, {
							isFetching: action.isFetching,
							isLoggedIn: action.isLoggedIn
						})
        case LOGIN_SUCCESS:
            return Object.assign({}, state, {
							isFetching: action.isFetching,
							isLoggedIn: action.isLoggedIn
						})
        case LOGOUT_REQUEST:
            return action
        default:
            return state;
    }
}


export default auth