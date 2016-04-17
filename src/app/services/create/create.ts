import {Injectable} from 'angular2/core';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class Create {
    private _title = new Subject<boolean>();
    private _ingredients = new Subject<boolean>();
    private _steps = new Subject<boolean>();
    
    // Observable login check stream (boolean)
    isTitleSaved$ = this._title.asObservable();
    isIngredientsSaved$ = this._ingredients.asObservable();
    isStepsSaved$ = this._steps.asObservable();
    
    constructor() {}
    
    saveTitle() {
        this._title.next(true);
    }
    saveIngredients() {
        this._ingredients.next(true);
    }
    saveSteps() {
        this._steps.next(true);
    }
}