import {Component} from 'angular2/core';
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
export class CreateRecipe {
    ingredients: Array<string>;
    steps: Array<string>;
    materials: Array<string>;
    
    constructor() {}
}
