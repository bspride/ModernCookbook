import BaseStore from './BaseStore';
import Parse from 'parse';

class LoginStore extends BaseStore {
	constructor() {
		super();
		this.subscribe(() => this._registerToActions.bind(this));
	}
	
	_registerToActions(action) {
		switch(action.actionType) {
			case 'LOGIN_USER':
				this.emitChange();
				break;
			case 'LOGOUT_USER':
				this.emitChange();
				break;
			default:
				break;
		};
	}
	
	isLoggedIn() {
		return !!Parse.User.current();
	}
}

export default new LoginStore();