import {Injectable} from 'angular2/core';
import {Observable} from 'rxjs/Observable';
import {Recipe} from '../../models/recipe';
import Firebase = require("firebase");

export const FIREBASEURL = "https://sizzling-fire-4278.firebaseio.com/";

@Injectable()
export class Api {
  title: 'Modern Cookbook';
  private _db: Firebase;
  
  constructor() {
  }
  
  getMyRecipes(): Observable<Recipe> {
      return Observable.create(observer => {
          let listener = this._db.on('child_added', snapshot => {
             let data = snapshot.val();
             observer.next(new Recipe(
                 snapshot.key(),
                 "Recipe!"
             ));
          }, observer.error);
          
          return () => {
              this._db.off('child_added', listener);
          }
      })
  }
}
