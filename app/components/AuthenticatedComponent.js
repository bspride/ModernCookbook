import { Component } from 'react';

function Auth (ComposedComponent) {
	return class AuthenticatedComponent extends Component {
		static willTransistionTo(transition) {
			if (!LoginStore.isLoggedIn()) {
				transition.redirect('/login', {}, {'nextPath': transition.path});
			}
		}
		
		constructor() {
			super()
			this.state = this._getLoginState();
		}
		
		_getLoginState() {
			return {
				userLoggedIn: LoginStore.isLoggedIn()
			};
		}
		
		componentDidMount() {
			this.changeListener = this._onChange.bind(this);
			LoginStore.addChangeListener(this.changeListener);
		}
		
		_onChange() {
			this.setState(this._getLoginState());
		}
		
		componentWillUnmount() {
			LoginStore.removeChangeListener(this.changeListener);
		}
		
		render() {
			return (
				<ComposedComponent
					{...this.props}
					userLoggedIn={this.state.userLoggedIn} />
			);
		}
	}
}