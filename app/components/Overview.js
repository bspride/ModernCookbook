var React = require('react');

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