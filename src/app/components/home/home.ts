import {Component, OnInit} from 'angular2/core';
import {FORM_DIRECTIVES} from 'angular2/common';
import {Alert} from 'ng2-bootstrap/ng2-bootstrap';

@Component({
  selector: 'home',
  directives: [...FORM_DIRECTIVES, Alert],
  pipes: [],
  styles: [require('./home.scss')],
  template: require('./home.html')
})
export class Home implements OnInit {

  constructor() {
    // Do stuff
  }

  ngOnInit() {
    console.log('Hello Home');
  }

}
