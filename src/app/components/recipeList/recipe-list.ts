import {Component, OnInit, OnDestroy, Inject} from 'angular2/core';
import {Recipe} from '../../models/recipe';
import {Api} from '../../services/api/api';
import {Subscription} from 'rxjs/Subscription';

@Component({
    selector: 'recipe-list',
    template: require('./recipe-list.html'),
    styles: [require('./recipe-list.scss')],
    providers: [Api],
    directives: [],
    pipes: []
})
export class RecipeList implements OnInit, OnDestroy{
    public recipes: Recipe[] = [];
    public subscription: Subscription;
    
    constructor(
        private _api: Api
    ) { }
    
    ngOnInit() {
        this.subscription = this._api.getMyRecipes().subscribe(recipe => {
            this.recipes.push(recipe);
        });
    }
    
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}