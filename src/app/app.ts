import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {FORM_PROVIDERS} from 'angular2/common';

import '../style/app.scss';

import {User} from './interfaces/user';
import {Api} from './services/api/api';
import {Home} from './components/home/home';
import {About} from "./components/about/about";
import {Registration} from './components/login/registration';
import {LoginSmall} from './components/login/login-small';


/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app', // <app></app>
  providers: [...FORM_PROVIDERS, Api],
  directives: [...ROUTER_DIRECTIVES, LoginSmall],
  pipes: [],
  styles: [require('./app.scss')],
  template: require('./app.html')
})
@RouteConfig([
  {path: '/', component: Home, name: 'Home'},
  {path: '/About', component: About, name: 'About'},
  {path: '/Register', component: Registration, name: 'Registration'}
])
export class App {
  isLoggedIn: boolean;
  user: User;
  url: string = 'https://github.com/preboot/angular2-webpack';

  constructor(public api: Api) {
    this.isLoggedIn = false;
    this.user = {
      id: "0",
      name: "test",
      email: "test@test.com"
    };
  }
  
  onRegister() {
      window.location.hash = "#/Register";
  }
}
