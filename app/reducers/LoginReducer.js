import { combineReducers } from 'redux';
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT_REQUEST } from '../actions/LoginActions';
import { loginRequest, success, userLogout } from '../actions/LoginActions';

const initalState = {
    isLoggedIn: false
}

function login (state = initalState, action) {
    switch (action.type) {
        case LOGIN_REQUEST:
            return action
        case LOGIN_SUCCESS:
            return action
        case LOGOUT_REQUEST:
            return action
        default:
            return state;
    }
}

const loginApp = combineReducers({
    login
})

export default loginApp