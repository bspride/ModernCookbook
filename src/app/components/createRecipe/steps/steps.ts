import {Component,EventEmitter,Output,Input} from 'angular2/core';

@Component({
    selector: 'recipe-steps',
    template: require('./steps.html'),
    styles: [require('./steps.scss')]
})
export class Steps {
    @Input() steps: Array<string>;
    @Input() ingredients: Array<string>;
    @Output() addedStep = new EventEmitter<string>();
    
    addStep(newStep) {
        this.addedStep.emit(newStep);
    }
}