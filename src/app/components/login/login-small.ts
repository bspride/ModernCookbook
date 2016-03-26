import {Component, OnInit} from 'angular2/core';

@Component({
  selector: 'login-small',
  template: require('./login-small.html'),
  styles: [require('./login-small.scss')],
  providers: [],
  directives: [],
  pipes: []
})
export class LoginSmall implements OnInit {
  
  
  constructor() {

  }

  ngOnInit() {
    console.log('Hello About');
  }

}
