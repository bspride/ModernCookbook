import {Component} from 'angular2/core';

import {AuthApi} from '../../services/auth-api/authentication';
import {LoginSmall} from '../login/login-small';
import {AppNavbar} from '../appnavbar/appnavbar';

@Component({
    selector: 'navbar',
    template: require('./navbar.html'),
    styles: [require('./navbar.scss')],
    providers: [],
    directives: [LoginSmall, AppNavbar],
    pipes: []
})
export class Navbar {
    isLoggedIn: boolean;
    constructor(private _auth: AuthApi) {
        this.isLoggedIn = false;
        this.subscribe();
    }

    subscribe() {
        this._auth.isLoggedIn$.subscribe(login => {
            this.isLoggedIn = login;
        });
    }
}
