import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {FORM_PROVIDERS} from 'angular2/common';

import '../style/app.scss';
// Interfaces
import {User} from './interfaces/user';
// Services
import {Api} from './services/api/api';
import {AuthApi} from './services/auth-api/authentication';
// Components
import {Home} from './components/home/home';
import {About} from "./components/about/about";
import {Security} from './components/security/security';
import {Navbar} from './components/navbar/navbar';


/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app', // <app></app>
  providers: [...FORM_PROVIDERS, Api, AuthApi],
  directives: [...ROUTER_DIRECTIVES, Navbar],
  pipes: [],
  styles: [require('./app.scss')],
  template: require('./app.html')
})
@RouteConfig([
  {path: '/', component: Home, name: 'Home'},
  {path: '/About', component: About, name: 'About'},
  {path: '/Security/:task', component: Security, name: 'Security' }
])
export class App {
  isLoggedIn: boolean;
  user: User;
  url: string = 'https://github.com/preboot/angular2-webpack';

  constructor(public api: Api, private _auth: AuthApi) {
    this.isLoggedIn = false;
    // This subscribes to the observerable and updates when the value changes
    _auth.isLoggedIn$.subscribe(login => {
        this.isLoggedIn = login;
    });
  }
}
