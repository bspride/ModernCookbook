var React = require('react');
var Parse = require('parse').Parse;
var ParseReact = require('parse-react');

var Overview = new React.createClass({
	mixins: [ParseReact.Mixin],
	
	observe: function() {
		return {
			recipes: (new Parse.Query('Recipe')),
			user: ParseReact.currentUser
		};
	},
	
	render: function() {
			var content;
			if (this.pendingQueries().length) {
				content = "Loading";
			} else {
				content = "Loaded";
			}
			return (
				<div>
					{content}
				</div>
			);
	}
});

module.exports = Overview;