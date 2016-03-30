import {Component} from 'angular2/core';
import {RouteConfig, Router} from 'angular2/router';

import {AuthApi} from '../../services/auth-api/authentication';
import {Security} from '../security/security';

@Component({
  selector: 'login-small',
  template: require('./login-small.html'),
  styles: [require('./login-small.scss')],
  providers: [],
  directives: [],
  pipes: []
})
export class LoginSmall {
  isLoggedIn: boolean;
  constructor(private _auth: AuthApi, private _router: Router) {
      this.isLoggedIn = false;
      this.subscribe();
  }
  
  subscribe() {
      this._auth.isLoggedIn$.subscribe(login => {
          this.isLoggedIn = login;
      });
  }

  onSignIn() {
      let link = ['Security', {task: 'login'}];
      this._router.navigate(link);
  }
  
  onRegister() {
      let link = ['Security', {task: 'register'}];
      this._router.navigate(link);
  }
}
