import {Component, OnInit} from 'angular2/core';

import {User} from '../../interfaces/user';

@Component({
  selector: 'login-small',
  template: require('./login-small.html'),
  styles: [require('./login-small.scss')],
  providers: [],
  directives: [],
  pipes: []
})
export class LoginSmall implements OnInit {
  isLoggedIn: boolean;
  user: User;
  
  constructor() {
    // Make a call to check if the user is still logged in
    this.isLoggedIn = false;
    this.user = {
      id: "0",
      name: "test",
      email: "test@test.com"
    }
  }

  ngOnInit() {
    console.log('Hello About');
  }

}
