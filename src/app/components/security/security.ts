import {Component, OnInit} from 'angular2/core';
import {RouteParams, Router} from 'angular2/router';
//import {NgForm} from 'angular2/common';

import {User} from '../../interfaces/User';
import {AuthApi} from '../../services/auth-api/authentication';

@Component ({
    selector: 'security',
    template: require('./security.html'),
    styles: [require('./security.scss')],
    providers: []
})
export /**
 * Registration
 */
class Security implements OnInit {
    task: string;
    isLoggedIn: boolean;
    isRegister: boolean;
    loginError: string;
    // validPassword: string;

    constructor(
        private _auth: AuthApi,
        private _routeParams: RouteParams,
        private _router: Router
    ) {}

    ngOnInit() {
        // Set task from route
        let routeTask = this._routeParams.get('task');
        if(routeTask === "login") {
            this.task = "Login";
            this.isRegister = false;
        } else {
            this.task = "Register";
            this.isRegister = true;
        }

        this.subscribe();
    }

    subscribe() {
        let successLink = ['MyRecipe'];
        this._auth.isLoggedIn$.subscribe(login => {
            this.isLoggedIn = login;
            if(login) {
                this._router.navigate(successLink);
            }
        });
        this._auth.loginError$.subscribe(error => {
            this.loginError = error;
        });
    }

    onSignIn(email, password) {
        let successLink = ['MyRecipe'];

        this._auth.authenticate(email, password);
    }
    
    loginExternal(client) {
        let successLink = ['MyRecipe'];
        
        this._auth.externalLogin(client);
    }

    onRegister(firstname, lastname, email, password) {
        let name = firstname + " " + lastname;
        this._auth.registerUser(name, email, password);
    }
}
