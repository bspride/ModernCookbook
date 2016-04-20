import {Component, OnInit} from 'angular2/core';
import {RouteConfig, Router} from 'angular2/router';

import {Security} from '../security/security';

import {Api} from '../../services/api/api';
import {Create} from '../../services/create/create';

const TITLE = "Title";
const INGREDIENTS = "Ingredients";
const STEPS = "Steps";

@Component({
    selector: 'create-recipe',
    template: require('./createRecipe.html'),
    styles: [require('./createRecipe.scss')],
    providers: [Create],
    directives: [],
    pipes: []
})
export class CreateRecipe {    
    // Recipe specific variables
    isPrivate: boolean;
    title: string;
    ingredientsString: string;
    stepsString: string;
    
    private ingredients: Array<string>;
    private steps: Array<string>;
    
    constructor(
        private _router: Router, 
        private _api: Api,
        private _create: Create
    ) { this.isPrivate = false; }
    
    saveRecipe() {
        let link = ['MyRecipe'];
        
        this.ingredients = this.parseIngredients();
        this.steps = this.parseSteps();

        let recipe = {
            ingredients: this.ingredients,
            steps: this.steps,
            isPrivate: this.isPrivate,
            title: this.title,
        };
        console.log(recipe);
        
        this._api.saveRecipe(recipe)
            .then(() => {
                this._router.navigate(link);
            })
            .catch(err => {
                console.log("Failed")    
            });
    }
    
    parseIngredients() {
        if(this.ingredientsString !== null && this.ingredientsString.length > 0) {
            return this.ingredientsString.split(/\r?\n/);
        }
    }
    
    parseSteps() {
        if(this.stepsString !== null && this.stepsString.length > 0) {
            return this.stepsString.split(/\r?\n/);
        }
    }
}
