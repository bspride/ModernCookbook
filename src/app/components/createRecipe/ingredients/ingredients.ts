import {Component,EventEmitter,Input,Output} from 'angular2/core';

import {Create} from '../../../services/create/create';

@Component({
    selector: 'recipe-ingredients',
    template: require('./ingredients.html'),
    styles: [require('./ingredients.scss')]
})
export class Ingredients {
    @Input() ingredients: Array<string>;
    @Output() addedIngredient = new EventEmitter<string>();
    @Output() triggerNextProcess = new EventEmitter();
    
    ingredient: string;
    
    constructor(private _create: Create) {
        this._create.isIngredientsSaved$.subscribe(ingredients => {
            if(ingredients) {
                // this.addIngredient(this.ingredient);
                this.triggerNext();
            }
        });
    }
    
    addIngredient(newIngredient) {
        this.addedIngredient.emit(newIngredient);
    }
    
    triggerNext() {
        this.triggerNextProcess.emit({});
    }
}