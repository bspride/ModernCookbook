import { combineReducers } from 'redux';
import { ADD_INGREDIENT, ADD_STEP } from '../actions/RecipeActions';
import { loadIngredient, loadStep } from '../actions/RecipeActions';

// Reducer specific to ingredients
function ingredients (state = [], action) {
    switch (action.type) {
        case ADD_INGREDIENT:
            return [
                ...state,
                action
            ]
        default:
            return state;
    }
}

function steps (state = [], action) {
    switch (action.type) {
        case ADD_STEP:
            return [
                ...state,
                action
            ]
        default:
            return state;
    }
}

const recipeApp = combineReducers({
    ingredients,
    steps
})

export default recipeApp