import {Component,EventEmitter,Output} from 'angular2/core';

import {Create} from '../../../services/create/create';

@Component({
    selector: 'recipe-title',
    template: require('./title.html'),
    styles: [require('./title.scss')]
})
export class Title {
    @Output() addedTitle = new EventEmitter<string>();
    
    newTitle: string;
    
    // This is 1 of 2 ways to save the title
    constructor(private _create: Create) {
        this._create.isTitleSaved$.subscribe(title => {
            if(title) {
                this.addTitle(this.newTitle);
            }
        });         
    }
    
    addTitle(newTitle) {
        this.addedTitle.emit(newTitle);
    }
}