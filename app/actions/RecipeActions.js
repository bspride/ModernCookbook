/**
 * RecipeActions
 * Actions for creating a new recipe
 */

import { browserHistory } from 'react-router';
import RecipesApi from '../middleware/api/RecipesApi';
 
export const ADD_INGREDIENT = "ADD_INGREDIENT";
export const ADD_STEP = "ADD_STEP";
export const ADD_MATERIAL = "ADD_MATERIAL";

export const SAVE_RECIPE_REQUEST = "SAVE_RECIPE_REQUEST";
export const SAVE_RECIPE_SUCCESS = "SAVE_RECIPE_SUCCESS";
export const SAVE_RECIPE_FAIL = "SAVE_RECIPE_FAIL";

let stepNum = 1;
let ingredientId = 0;
let stepId = 0;
let materialId = 0;

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

function addMaterial (material) {
    return {
        type: ADD_MATERIAL,
        id: materialId++,
        text: material
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
    materialId = 0;
    
    return {
        type: SAVE_RECIPE_SUCCESS,
        ingredients: [],
        steps: [],
        materials: [],
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

export function loadMaterial (material) {
    return addMaterial(material);
}

export function saveRecipe (title) {
    return (dispatch, getState) => {
        let state = getState().newRecipe.creation;
        let ingredients = state.ingredients;
        let steps = state.steps;
        let materials = state.materials;
        
        let recipe = {
            title: title,
            ingredients: ingredients,
            steps: steps,
            materials: materials
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