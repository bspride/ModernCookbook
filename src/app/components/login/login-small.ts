import {Component} from 'angular2/core';
import {RouteConfig, Router} from 'angular2/router';

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
  constructor(private _router: Router) {
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
