/**
 * index.js
 * Contains Root Reducer
 * Add additional reducers in other files, import
 * them here and add them to the combineReducers function
 */
import loginApp from './LoginReducer';
import recipeApp from './RecipeReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    loginApp,
    recipeApp
})

export default rootReducer