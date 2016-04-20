import {Injectable} from 'angular2/core';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class Create {
    private _isComplete: boolean;
    
    private _title: string;
    private _ingredients: Array<string>;
    private _steps: Array<string>;
    
    private _titleSubject = new Subject<string>();
    private _ingredientsSubject = new Subject<Array<string>>();
    private _stepsSubject = new Subject<Array<string>>();
    
    // Observable login check stream (boolean)
    isTitleSaved$ = this._titleSubject.asObservable();
    isIngredientsSaved$ = this._ingredientsSubject.asObservable();
    isStepsSaved$ = this._stepsSubject.asObservable();
    
    constructor() {
        this._isComplete = false;
    }
    /**
     * Add new title and update all subcribers
     */
    saveTitle(newTitle) {
        this._title = newTitle;
        this._titleSubject.next(newTitle);
    }
    /**
     * Add new ingedients to array and update all subcribers
     */
    saveIngredients(newIngredient) {
        this._ingredients.push(newIngredient)
        this._ingredientsSubject.next(this._ingredients);
    }
    /**
     * Add new steps to array and update all subcribers
     */
    saveSteps(newStep) {
        this._steps.push(newStep);
        this._stepsSubject.next(this._steps);
    }
    /**
     * Persist the changes to the database and set 
     * flag if this needs to be updated
     */ 
    saveRecipe(isComplete) {
        if(isComplete) {
            this._title = null;
            this._ingredients = [];
            this._steps = [];
        }
    }
}