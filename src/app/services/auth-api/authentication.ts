import {Injectable} from 'angular2/core';
import Firebase = require('firebase');

@Injectable()
export class AuthApi {
    firebaseUrl: string;
    ref: Firebase;
    
    constructor() {
        this.firebaseUrl = "https://sizzling-fire-4278.firebaseio.com/";
        this.ref = new Firebase(this.firebaseUrl);
    }
    
    registerUser(email: string, password: string) {
        // Return promise to the initial caller
        // return this.ref.createUser({
        //     email: email,
        //     password: password
        // });
    }
    
    authenticate(email: string, password: string) {
        // Return promise to the initial caller
        return this.ref.authWithPassword({
            email: email,
            password: password
        });
    }
}