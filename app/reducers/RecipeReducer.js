import { combineReducers } from 'redux';
import { ADD_INGREDIENT, ADD_STEP, 
        SAVE_RECIPE_REQUEST, SAVE_RECIPE_SUCCESS, 
        SAVE_RECIPE_FAIL } from '../actions/RecipeActions';
import { loadIngredient, loadStep } from '../actions/RecipeActions';

const initialState = {
    ingredients: [],
    steps: [],
    isFetching: false,
    saveSuccessful: false
}

// Reducer specific to ingredients
function creation (state = initialState, action) {
    switch (action.type) {
        case ADD_INGREDIENT:
            return Object.assign({}, state, {
                        ingredients: [
                            ...(state.ingredients), {
                                id: action.id,
                                amount: action.amount,
                                name: action.name    
                            }
                        ]
                    });
        case ADD_STEP:
            return Object.assign({}, state, {
                        steps: [
                            ...(state.steps), {
                                id: action.id,
                                num: action.num,
                                text: action.text  
                            }
                        ]
                    });
        case SAVE_RECIPE_REQUEST:
            return Object.assign({}, state, {
                        isFetching: action.isFetching,
                        saveSuccessful: action.saveSuccessful
                    });
        case SAVE_RECIPE_SUCCESS:
            return Object.assign({}, state, {
                        ingredients: action.ingredients,
                        steps: action.steps,
                        isFetching: action.isFetching,
                        saveSuccessful: action.saveSuccessful
                    });
        case SAVE_RECIPE_FAIL:
            return Object.assign({}, state, {
                        isFetching: action.isFetching,
                        saveSuccessful: action.saveSuccessful
                    });
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

const newRecipe = combineReducers({
    creation
})

export default newRecipe