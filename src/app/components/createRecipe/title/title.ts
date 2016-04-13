import {Component,EventEmitter,Output} from 'angular2/core';

@Component({
    selector: 'recipe-title',
    template: require('./title.html'),
    styles: [require('./title.scss')]
})
export class Title {
    @Output() addedTitle = new EventEmitter<string>();
    
    addTitle(newTitle) {
        this.addedTitle.emit(newTitle);
    }
}