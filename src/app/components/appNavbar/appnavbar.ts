import {Component} from 'angular2/core';

@Component({
    selector: 'app-navbar',
    template: require('./appnavbar.html'),
    styles: [require('./appNavbar.scss')],
    providers:[],
    directives: [],
    pipes: []
})
export class AppNavbar {
    constructor() {
        //Do important stuff here
    }
}