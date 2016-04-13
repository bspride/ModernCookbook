import {Component,EventEmitter,Input,Output} from 'angular2/core';

@Component({
    selector: 'recipe-ingredients',
    template: require('./ingredients.html'),
    styles: [require('./ingredients.scss')]
})
export class Ingredients {
    @Input() ingredients: Array<string>;
    @Output() addedIngredient = new EventEmitter<string>();
    
    addIngredient(newIngredient) {
        this.addedIngredient.emit(newIngredient);
    }
}