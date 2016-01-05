var React = require('react');
var Parse = require('parse');
var RecipeStore = require('../stores/RecipeStore');
var RecipeItem = require('./RecipeItem');

var RecipeList = new React.createClass({
	
	getInitialState: function() {
		return {
			ownedRecipes: null
		};
	},	
	componentDidMount: function() {
		RecipeStore.getOwned(Parse.User.current().id, this._getOwnedRecipes);
	},
	
	render: function() {
		var ownedRecipes = this.state.ownedRecipes;
		var recipes = [];
		if (!ownedRecipes) {
			recipes.push(<div>Loading</div>);
		} else {
			if (ownedRecipes.length == 0) {
				recipes.push(<div>No recipes</div>);
			}
			for (var key in ownedRecipes) {
				recipes.push(<RecipeItem key={ownedRecipes[key].id} recipe={ownedRecipes[key]} />);
			}
		}
		return (
			<div>
				{recipes}
			</div>
		);
	},
	_getOwnedRecipes: function(recipes) {
		this.setState({ownedRecipes:recipes});
	}	
});

module.exports = RecipeList;