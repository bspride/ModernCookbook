import when from 'when';
//import Parse from 'parse';

class RecipesApi {
    saveRecipe(recipe) {
        const Recipe = "";//Parse.Object.extend("Recipe");
        
        let newRecipe = new Recipe();
        let user = ""; //Parse.User.current();
        
        let savePromise = new Promise((resolve, reject) => {
            let result = newRecipe.save({
                    User: user,
                    Overview: recipe.overview,
                    Ingredients: { type: recipe.ingredients },
                    Steps: recipe.steps
                }, {
                    success: (newRecipe) => {
                        return resolve(newRecipe, true);
                    },
                    error: (newRecipe, error) => {
                        return reject(newRecipe, false);
                    }
                })
        })
        
        return savePromise;
    }
}

export default new RecipesApi()