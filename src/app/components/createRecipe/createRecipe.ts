import {Component, OnInit} from 'angular2/core';
import {RouteConfig, Router} from 'angular2/router';

import {Security} from '../security/security';

@Component({
    selector: 'create-recipe',
    template: require('./createRecipe.html'),
    styles: [require('./createRecipe.scss')],
    providers: [],
    directives: [],
    pipes: []
})
export class CreateRecipe implements OnInit {
    processId: number;
    process: string;
    processes: Array<string>;
    isPublic: boolean;
    ingredients: Array<string>;
    steps: Array<string>;
    materials: Array<string>;
    
    constructor() {}
    
    ngOnInit() {
        this.processId = 0;
        this.processes = [
            "Ingredients",
            "Steps",
            "Materials"
        ];
        this.process = "Ingredients"
        this.ingredients = [];
        this.steps = [];
        this.materials = [];
        
        this.ingredients.push('');
        this.steps.push('');
        this.materials.push('');
    }
    
    addIngredients(ingredient) {
        // Parse ingredient for name and amount
        this.ingredients.push(ingredient);
    }
    
    addSteps(step) {
        // Do additional processing for steps
        this.steps.push(step);
    }
    
    addMaterials(material) {
        // Do additional processing for materials
        this.materials.push(material);
    }
    
    goToNextProcess() {
        if(this.processId < this.processes.length) {
            this.processId++;
            this.process = this.processes[this.processId];    
        }
    }
    
    goToPreviousProcess() {
        if(this.processId > 0) {
            this.processId--;
            this.process = this.processes[this.processId];
        }
    }
    
    saveRecipe(isPublic) {
        this.isPublic = isPublic;
        
        let recipe = {
            ingredients: this.ingredients,
            steps: this.steps,
            materials: this.materials,
            isPublic: this.isPublic
        };
    }
}
