/**
 * index.js
 * Contains Root Reducer
 * Add additional reducers in other files, import
 * them here and add them to the combineReducers function
 */
import auth from './LoginReducer';
import newRecipe from './RecipeReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    auth,
    newRecipe
})

export default rootReducer