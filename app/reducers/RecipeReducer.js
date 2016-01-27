import { combineReducers } from 'redux';
import { ADD_INGREDIENT, ADD_STEP, SAVE_RECIPE } from '../actions/RecipeActions';
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

function createRecipe (state = {}, action) {
    switch (action.type) {
        case SAVE_RECIPE:
            return action;
        default:
            return state;
    }
}

const recipeApp = combineReducers({
    ingredients,
    steps,
    createRecipe
})

export default recipeApp