import {Component, OnInit, OnDestroy, Inject} from 'angular2/core';
import {Recipe} from '../../models/recipe';
import {Api} from '../../services/api/api';
import {Subscription} from 'rxjs/Subscription';
import {Router} from 'angular2/router';

@Component({
    selector: 'recipe-list',
    template: require('./recipe-list.html'),
    styles: [require('./recipe-list.scss')],
    providers: [],
    directives: [],
    pipes: []
})
export class RecipeList implements OnInit, OnDestroy{
    public recipes: Recipe[] = [];
    public subscription: Subscription;
    
    constructor(
        private _api: Api, private _router: Router
    ) { }
    
    ngOnInit() {
        this.subscription = this._api.getMyRecipes().subscribe(recipe => {
            this.recipes.push(recipe);
        });
    }
    
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    
    addRecipe() {
        let link=['CreateRecipe'];        
        this._router.navigate(link);   
    }
}