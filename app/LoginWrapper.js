var React = require('react');
var Parse = require('parse').Parse;
var ParseReact = require('parse-react');
var AppWrapper = require('./AppWrapper');

var LoginWrapper = React.createClass({
	mixins: [ParseReact.Mixin],
	
	getInitialState: function() {
		return {
			error: null
		};
	},
	
	observe: function() {
		return {
			user: ParseReact.currentUser
		};
	},
	
	render: function() {
		if (this.data.user) {
			return (
				<div>
					<a className='logOut' onClick={this.logOut}>
						Logout
					</a>
					<AppWrapper />
				</div>
			);
		}
		return (
			<div>
					<h1>
						Modern Cookbook
					</h1>
					<form className='loginForm'>
						{
							this.state.error ?
							<div>{this.state.error}</div> :
							null
						}
						<label htmlFor='username'>Username</label>
						<input ref='username' id='username' type='text' onChange={this.handleUsernameChange}/>
						<label htmlFor='password'>Password</label>
						<input ref='password' id='password' type='password' onChange={this.handlePasswordChange}/>
						<button type='button' id='login' onClick={this.submit}>
							{'Login'}
						</button>
						<div>
							or 
							<button id='signup' onClick={this.submit}>
								{'Sign up'}
							</button>
						</div>
					</form>
				</div>
		);
	},
	logOut: function() {
    Parse.User.logOut();
  },
	submit: function(e) {
		debugger;
		e.preventDefault();		
    var self = this;
    var username = this.refs.username.value;
    var password = this.refs.password.value;
    if (username.length && password.length) {
      if (e.currentTarget.id === "signup") {
        console.log('signup');
        var u = new Parse.User({
          username: username,
          password: password
        });
        u.signUp().then(function() {
          self.setState({
            error: null
          });
        }, function() {
          self.setState({
            error: 'Invalid account information'
          });
        });
      } else {
        Parse.User.logIn(username, password).then(function() {
          self.setState({
            error: null
          });
        }, function() {
          self.setState({
            error: 'Incorrect username or password'
          });
        });
      }
    } else {
      this.setState({
        error: 'Please enter all fields'
      });
    }
  }
});

module.exports = LoginWrapper;