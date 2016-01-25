/**
 * Action Types
 */
export const ADD_INGREDIENT = "ADD_INGREDIENT";
export const ADD_STEP = "ADD_STEP";

let ingredientId = 0;
let stepId = 0;
let stepNum = 1;

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

export function loadIngredient (amount, name) {
    return addIngredient(amount, name);
}

export function loadStep (step) {
    return addStep(step);
}