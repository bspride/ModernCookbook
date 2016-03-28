import {Component} from 'angular2/core';
//import {NgForm} from 'angular2/common';

import {User} from '../../interfaces/User';
import {AuthApi} from '../../services/auth-api/authentication';

@Component ({
    selector: 'registration',
    template: require('./registration.html'),
    styles: [require('./registration.scss')],
    providers: [AuthApi]
})
export /**
 * Registration
 */
class Registration {
    isRegistered: boolean;
    isLoggedIn: boolean;
    isRegister: boolean;
    loginError: string;
    // validPassword: string;
    
    constructor(private _auth: AuthApi) {
        this.isRegistered = false;
        this.isLoggedIn = false;
        this.loginError = '';
    }
    
    // validatePassword(password) {
    //     if(this.validatePassword === password) {
            
    //     }
    // }
    
    onRegister(email, password) {
        // this._auth.registerUser(email, password)
        //     .then(() => {
        //         this.isRegistered = true;
        //         this.isLoggedIn = true;
        //     })
        //     .catch((error) => {
        //         this.isRegistered = false;
        //         this.isLoggedIn = false;
        //     });
    }
    
    onSignIn(email, password) {
        this._auth.authenticate(email, password)
            .then(() => {
                this.isRegistered = true;
                this.isLoggedIn = true;
                console.log("Success");
                window.location.hash = "/";
            })
            .catch((error) => {
                console.log(error);
                this.isRegistered = false;
                this.isLoggedIn = false;
                this.loginError = error;
            });
    }
}
