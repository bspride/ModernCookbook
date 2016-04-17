import {Component, OnInit} from 'angular2/core';
import {RouteConfig, Router} from 'angular2/router';

import {Security} from '../security/security';
import {Title} from './title/title';
import {Ingredients} from './ingredients/ingredients';
import {Steps} from './steps/steps';

import {Api} from '../../services/api/api';

@Component({
    selector: 'create-recipe',
    template: require('./createRecipe.html'),
    styles: [require('./createRecipe.scss')],
    providers: [],
    directives: [Title, Ingredients, Steps],
    pipes: []
})
export class CreateRecipe {
    // These variables control the steps for creating
    // a recipe
    processId: number = 0;
    allProcesses: Array<string> = ["Title", "Ingredients", "Steps"];
    currentProcess: string;
    
    // Recipe specific variables
    isPublic: boolean;
    title: string;
    ingredients: Array<string>;
    steps: Array<string>;
    
    constructor(private _router: Router, private _api: Api) {
        this.currentProcess = this.allProcesses[0];
        this.ingredients = [];
        this.steps = [];
    }
    
    addedTitle(newTitle) {
        this.title = newTitle;
        console.log(this.title);
        // Navigate to next process after adding title
        this.goToNextProcess();
    }
    
    addedIngredient(ingredient) {
        // Parse ingredient for name and amount
        if(ingredient !== null) {
            if(this.ingredients[0] === '') {
                this.ingredients[0] = ingredient;
            } else {
                this.ingredients.push(ingredient);    
            }
        }
    }
    
    addedStep(step) {
        // Do additional processing for steps
        if(step !== null) {
            if(this.steps[0] === '') {
                this.steps[0] = step;
            } else {
                this.steps.push(step);
            }
        }
    }
    
    goToNextProcess() {
        if(this.processId < this.allProcesses.length) {
            this.processId++;
            this.currentProcess = this.allProcesses[this.processId];
        }
    }
    
    goToPreviousProcess() {
        if(this.processId > 0) {
            this.processId--;
            this.currentProcess = this.allProcesses[this.processId];
        }
    }
    
    saveRecipe(isPublic) {
        let link = ['MyRecipe'];
        this.isPublic = isPublic;
        
        let recipe = {
            ingredients: this.ingredients,
            steps: this.steps,
            isPublic: this.isPublic,
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
}
