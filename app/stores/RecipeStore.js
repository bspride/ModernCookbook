var Parse = require('parse').Parse;
var Recipe = Parse.Object.extend('Recipe', {}, {
	getById: function(objectId, callback) {
		var query = new Parse.Query(Recipe);
		query.get(objectId, {
			success: function(recipe) {
				callback(recipe);
			},
			error: function(obj, err) {
				console.error('getById() error', obj, err);
			}
		});
	},
	
	getOwned: function(userId, callback) {
		var query = new Parse.Query(Recipe);
		query.equalTo("createdBy", userId);
		query.find({
			success: function(recipes) {
				callback(recipes);
			},
			error: function(obj, err) {
				console.error('getOwned()', obj, err);
			}
		});
	}
});

module.exports = Recipe;