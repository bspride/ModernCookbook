import BaseStore from './BaseStore';

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
		return false;
	}
}

export default new LoginStore();