import {Component} from 'angular2/core';
import {RouteConfig, RouterLink} from 'angular2/router';
import {FORM_PROVIDERS} from 'angular2/common';

import '../style/app.scss';
//Directives
import {LoggedInRouterOutlet} from './directives/router-outlet';
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
import {CreateRecipe} from './components/createRecipe/createRecipe';


/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app', // <app></app>
  providers: [...FORM_PROVIDERS, Api, AuthApi],
  directives: [RouterLink, LoggedInRouterOutlet, Navbar],
  pipes: [],
  styles: [require('./app.scss')],
  template: require('./app.html')
})
@RouteConfig([
  {path: '/', component: Home, name: 'Home'},
  {path: '/About', component: About, name: 'About'},
  {path: '/Security/:task', component: Security, name: 'Security' },
  {path: '/Create', component: CreateRecipe, name: 'CreateRecipe'}
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
