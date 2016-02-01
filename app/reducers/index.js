/**
 * index.js
 * Contains Root Reducer
 * Add additional reducers in other files, import
 * them here and add them to the combineReducers function
 */
import auth from './LoginReducer'
import newRecipe from './RecipeReducer'
import { combineReducers } from 'redux'
import { routeReducer } from 'react-router-redux'

const rootReducer = combineReducers({
    auth,
    newRecipe,
		routing: routeReducer
})

export default rootReducer