import {Injectable} from 'angular2/core';
import {Subject} from 'rxjs/Subject';
import Firebase = require('firebase');
// Will probably move constant to a different file
export const FIREBASEURL = "https://sizzling-fire-4278.firebaseio.com/";

@Injectable()
export class AuthApi {
    // Firebase reference
    private _ref: Firebase;
    // Observable login check
    private _login = new Subject<boolean>();
    private _error = new Subject<string>();
    // Observable login check stream (boolean)
    isLoggedIn$ = this._login.asObservable();
    loginError$ = this._error.asObservable();
    
    constructor() {
        this._ref = new Firebase(FIREBASEURL);
    }
    
    registerUser(email: string, password: string) {
        // Return promise to the initial caller
        // return this.ref.createUser({
        //     email: email,
        //     password: password
        // });
    }
    
    authenticate(email: string, password: string) {
        this._ref.authWithPassword({
            email,
            password
        }).then((authData) => {
            this._login.next(true);
            // this._user.next(authData);
        }).catch((error) => {
            // Failed to login user
            this._login.next(false);
            this._error.next(error);
        });
    }
}