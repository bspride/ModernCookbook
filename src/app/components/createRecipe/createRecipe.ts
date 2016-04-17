import {Component, OnInit} from 'angular2/core';
import {RouteConfig, Router} from 'angular2/router';

import {Security} from '../security/security';
import {Title} from './title/title';
import {Ingredients} from './ingredients/ingredients';
import {Steps} from './steps/steps';

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
    directives: [Title, Ingredients, Steps],
    pipes: []
})
export class CreateRecipe {
    // These variables control the steps for creating
    // a recipe
    processId: number = 0;
    allProcesses: Array<string> = [TITLE, INGREDIENTS, STEPS];
    currentProcess: string;
    
    // Recipe specific variables
    isPublic: boolean;
    title: string;
    ingredients: Array<string>;
    steps: Array<string>;
    
    constructor(
        private _router: Router, 
        private _api: Api,
        private _create: Create
    ) {
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
        // this.goToNextProcess();
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
        // this.goToNextProcess();
    }
    
    saveProcess() {
        if(this.processId < this.allProcesses.length) {
            // Check the current process and save if necessary
            switch(this.currentProcess) {
                case TITLE:
                    this._create.saveTitle();
                    break;
                case INGREDIENTS:
                    this._create.saveIngredients();
                    break;
                case STEPS:
                    this._create.saveSteps();
                    break;
                default:
                    // TODO Something weird happened
                    break;
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
    
    triggerNextProcess() {
        this.goToNextProcess();
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
