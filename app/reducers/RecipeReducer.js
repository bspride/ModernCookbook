import { combineReducers } from 'redux';
import { ADD_INGREDIENT, ADD_STEP, SAVE_RECIPE } from '../actions/RecipeActions';
import { loadIngredient, loadStep } from '../actions/RecipeActions';

const initialState = {
    ingredients: [],
    steps: [],
    saveSuccessful: false
}

// Reducer specific to ingredients
function creation (state = initialState, action) {
    switch (action.type) {
        case ADD_INGREDIENT:
            let newIngredients = [...(state.ingredients), action];
            return Object.assign(
                {},
                {
                    ingredients: newIngredients,
                    steps: state.steps,
                    saveSuccessful: false
                }
            );
        case ADD_STEP:
            let newSteps = [...(state.steps), action];
            return Object.assign(
                {},
                {
                    ingredients: state.ingredients,
                    steps: newSteps,
                    saveSuccessful: false
                }
            );
        case SAVE_RECIPE:
            return action;
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
    creation
})

export default recipeApp