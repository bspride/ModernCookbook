import {Component} from 'angular2/core';
import {Router} from 'angular2/router';

@Component({
    selector: 'app-navbar',
    template: require('./appnavbar.html'),
    styles: [require('./appNavbar.scss')],
    providers: [],
    directives: [],
    pipes: []
})
export class AppNavbar {
    constructor(private _router: Router) {
        //Do important stuff here
    }
    
    onLogout() {
        
    }
    
    myRecipes() {
        let link = ['MyRecipe'];
        this._router.navigate(link);
    }
    
    createRecipe() {
        let link = ['CreateRecipe'];
        this._router.navigate(link);
    }
}
