import {Component} from 'angular2/core';
import {Router} from 'angular2/router';
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
    
    constructor(private _auth: AuthApi, private _router: Router) {
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
        let successLink = ['Home'];
        
        this._auth.authenticate(email, password)
            .then(() => {
                this.isRegistered = true;
                this.isLoggedIn = true;
                console.log("Success");

                this._router.navigate(successLink);
            })
            .catch((error) => {
                console.log(error);
                this.isRegistered = false;
                this.isLoggedIn = false;
                this.loginError = error;
            });
    }
}
