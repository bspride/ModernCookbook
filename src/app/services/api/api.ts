import {Injectable} from 'angular2/core';
import {Observable} from 'rxjs/Observable';
import {Recipe} from '../../models/recipe';
import {AuthApi} from '../auth-api/authentication';
import Firebase = require("firebase");

export const FIREBASEURL = "https://sizzling-fire-4278.firebaseio.com/";

@Injectable()
export class Api {
  title: string = 'Modern Cookbook';
  
  constructor(private _userService: AuthApi) {
      
    }
  
  getMyRecipes(): Observable<Recipe> {
      let firebaseRef = new Firebase(FIREBASEURL + 'recipes');
      return Observable.create(observer => {
          let listener = firebaseRef.orderByChild("creator").equalTo(this._userService.getUserId()).on('child_added', snapshot => {
             let data = snapshot.val();
             observer.next(new Recipe(
                 snapshot.key(),
                 data.title
             ));
          }, observer.error);
          
          return () => {
              firebaseRef.off('child_added', listener);
          }
      })
  }
  
  saveRecipe(recipe: any) {
      console.log(recipe);
      let firebaseRef = new Firebase(FIREBASEURL + 'recipes');
      let newRecipeRef = firebaseRef.push({
          title: recipe.title,
          creator: this._userService.getUserId()
      });
      
      //Need to then save id to users recipe array
      console.log(newRecipeRef);
  }
}
