/**
 * RecipeActions
 * Actions for creating a new recipe
 */

import { browserHistory } from 'react-router';
import RecipesApi from '../middleware/api/RecipesApi';
 
export const ADD_INGREDIENT = "ADD_INGREDIENT";
export const ADD_STEP = "ADD_STEP";

export const SAVE_RECIPE_REQUEST = "SAVE_RECIPE_REQUEST";
export const SAVE_RECIPE_SUCCESS = "SAVE_RECIPE_SUCCESS";
export const SAVE_RECIPE_FAIL = "SAVE_RECIPE_FAIL";

let stepNum = 1;
let ingredientId = 0;
let stepId = 0;

function addIngredient (amount, name) {
    return {
        type: ADD_INGREDIENT,
        id: ingredientId++,
        amount,
        name
    };
}

function addStep (step) {
    return {
        type: ADD_STEP,
        id: stepId++,
        num: stepNum++,
        text: step
    }
}

function saveRecipeRequest () {
    return {
        type: SAVE_RECIPE_REQUEST,
        isFetching: true,
        saveSuccessful: false
    }
}

function saveRecipeSuccess () {
    ingredientId = 0;
    stepId = 0;
    stepNum = 1;
    
    return {
        type: SAVE_RECIPE_SUCCESS,
        ingredients: [],
        steps: [],
        isFetching: false,
        saveSuccessful: true
    }
}

function saveRecipeFail () {
    return {
        type: SAVE_RECIPE_FAIL,
        isFetching: false,
        saveSuccessful: false
    }
}

function success () {
    browserHistory.push('/home')
}

function fail () {
    
}

export function loadIngredient (amount, name) {
    return addIngredient(amount, name);
}

export function loadStep (step) {
    return addStep(step);
}

export function saveRecipe (title) {
    return (dispatch, getState) => {
        let state = getState().newRecipe.creation;
        let ingredients = state.ingredients;
        let steps = state.steps;
        
        let recipe = {
            title: title,
            ingredients: ingredients,
            steps: steps
        }
        
        dispatch(saveRecipeRequest())
        
        RecipesApi.saveRecipe(recipe)
            .then(() => {
                dispatch(saveRecipeSuccess());
                success()
            })
            .catch((result, didSave) => {
                dispatch(saveRecipeFail())
                //fail()
            });    
    };
}