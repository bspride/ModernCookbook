var React = require('react');
var RecipeList = require('./RecipeList');

var Overview = new React.createClass({		
	render: function() {
			return (
				<div>
					<RecipeList />
				</div>
			);
	},
	renderRecipe(recipes) {
		return (
			<div>
				<RecipeList />
			</div>
		);
	} 
});

module.exports = Overview;