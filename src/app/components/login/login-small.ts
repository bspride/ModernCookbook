import {Component} from 'angular2/core';
import {RouteConfig, Router} from 'angular2/router';

import {Registration} from './registration';

@Component({
  selector: 'login-small',
  template: require('./login-small.html'),
  styles: [require('./login-small.scss')],
  providers: [],
  directives: [],
  pipes: []
})
export class LoginSmall {
  constructor(private _router: Router) {}

  onSignIn() {
      let link = ['Registration'];
      this._router.navigate(link);
  }
}
