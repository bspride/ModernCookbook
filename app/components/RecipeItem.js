var React = require('react');

var RecipeItem = React.createClass({
	render: function() {
		var recipe = this.props.recipe;
		return (
			<div>
				{recipe.get('Name')}
			</div>
		);
	}
});

module.exports = RecipeItem;