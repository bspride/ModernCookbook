import {Injectable} from 'angular2/core';
import {Subject} from 'rxjs/Subject';
import {Router} from 'angular2/router';
import Firebase = require("firebase");

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

    constructor(private _router: Router) {
        this._ref = new Firebase(FIREBASEURL);
    }

    registerUser(name: string, email: string, password: string) {
        // Return promise to the initial caller
        this._ref.createUser({
            email,
            password
        }, (error, userData) => {
            if (error) {
                this._login.next(false);
                switch (error.code) {
                case "EMAIL_TAKEN":
                    this._error.next("The new user account cannot be created because the email is already in use.");
                    break;
                case "INVALID_EMAIL":
                    this._error.next("The specified email is not a valid email.");
                    break;
                default:
                    this._error.next("Error creating user");
                }
            } else {
                this._ref
                    .child("users")
                    .push({
                        name
                    });
                this._login.next(true);
            }
        });
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
    
    externalLogin(client) {
        this._ref.authWithOAuthPopup(client, 
            (error, authData) => {
                if(error) {
                    this._login.next(false);
                    this._error.next(error); 
                } else if(authData) {
                    this._ref
                    .child("users")
                    .child(authData.uid)
                    .set({
                        provider: authData.provider,
                        name: this.getName(authData)
                    })
                    this._login.next(true);
                }
         });
    }
    
    getName(authData) {
        switch(authData.provider) {
            case 'password':
                return authData.password.email.replace(/@.*/, '');
            case 'twitter':
                return authData.twitter.displayName;
            case 'facebook':
                return authData.facebook.displayName;
            case 'google':
                return authData.google.displayName;
        }
    }
    
    logout() {
        this._ref.unauth();        
        this._login.next(false);
        let link = ['Security', {task: 'login'}];
        this._router.navigate(link);
    }

    isLoggedIn() {
        if(this._ref.getAuth()) {
            return true;
        }

        return false;
    }
    
    getUserId() {
        var authData = this._ref.getAuth();
        return authData.uid;
    }
}
