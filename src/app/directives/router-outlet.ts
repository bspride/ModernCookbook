import { ElementRef, DynamicComponentLoader, AttributeMetadata, Directive } from 'angular2/core';
import { Router, RouterOutlet } from 'angular2/router';
import { AuthApi } from '../services/auth-api/authentication';

@Directive({
  selector: 'router-outlet'
})
export class LoggedInRouterOutlet extends RouterOutlet {
    publicRoutes = [
    '', 'about', 'Security/login', 'Security/register'
    ];

  private parentRouter: Router;
  private userService: AuthApi;

  static get parameters() {
    return [[ElementRef], [DynamicComponentLoader], [Router], [new AttributeMetadata('name'), String], [AuthApi]];
  }

  constructor(elementRef, componentLoader, parentRouter, name, userService) {
    super(elementRef, componentLoader, parentRouter, name);

    this.parentRouter = parentRouter;
    this.userService = userService;
  }

  activate(instruction) {
    if (this._canActivate(instruction.urlPath)) {
        if (this._loggedInCheck(instruction.urlPath)) {
            let link = ['MyRecipe'];
            this.parentRouter.navigate(link);
        }
        return super.activate(instruction);
    }
    let link = ['Security', {task: 'login'}];
    this.parentRouter.navigate(link);
  }

  _canActivate(url) {
    return this.publicRoutes.indexOf(url) !== -1 || this.userService.isLoggedIn();
  }
  
  //Check to see if they are already logged in and 
  //trying to navigate to public link, redirect to 
  //my recipe page   
  _loggedInCheck(url) {
    return this.publicRoutes.indexOf(url) !== -1 && this.userService.isLoggedIn(); 
  }
}
