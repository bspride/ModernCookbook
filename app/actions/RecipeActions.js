/**
 * RecipeActions
 * Actions for creating a new recipe
 */

import { browserHistory } from 'react-router';
import RecipesApi from '../middleware/api/RecipesApi';
 
export const ADD_INGREDIENT = "ADD_INGREDIENT";
export const ADD_STEP = "ADD_STEP";

export const SAVE_RECIPE = "SAVE_RECIPE";

let ingredientId = 0;
let stepId = 0;
let stepNum = 1;

let recipeId = 0;

function addIngredient (amount, name) {
    return {
        id: ingredientId++,
        type: ADD_INGREDIENT,
        amount,
        name
    };
}

function addStep (step) {
    return {
        id: stepId++,
        type: ADD_STEP,
        num: stepNum++,
        text: step
    }
}

function saveNewRecipe (recipe, didSave) {
    return {
        id: recipeId,
        type: SAVE_RECIPE,
        ingredients: [],
        steps: [],
        saveSuccessful: didSave
    }
}

export function loadIngredient (amount, name) {
    return addIngredient(amount, name);
}

export function loadStep (step) {
    return addStep(step);
}

export function saveRecipe (overview) {
    return (dispatch, getState) => {
        let state = getState().recipeApp.creation;
        let ingredients = state.ingredients;
        let steps = state.steps;
        
        let recipe = {
            ingredients: ingredients,
            steps: steps
        }
        
        RecipesApi.saveRecipe(recipe)
            .then(function(result, didSave){
                browserHistory.push('/home')
                
                return dispatch(saveNewRecipe(result, didSave));
            })
            .catch(function(result, didSave) {
                return dispatch(saveNewRecipe(result, didSave));
            });    
    };
}