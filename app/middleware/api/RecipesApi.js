import when from 'when';
import Firebase from 'firebase'
import FirebaseConstants from '../../constants/FirebaseConstants'

const fireRef = new Firebase(FirebaseConstants.FIREBASE);

class RecipesApi {
    saveRecipe(recipe) {
        const recipeRef = fireRef.child('recipes')
        const userRef = fireRef.child('users')
        
        let creator = fireRef.getAuth();
        
        let newRecipeRef = recipeRef.push();
        
        userRef
            .child(creator.uid)
            .child('recipes')
            .push().set({
                recipe: newRecipeRef.path.u[1]
            });
        
        return newRecipeRef.set({
            creator: creator.uid,
            title: recipe.title,
            ingredients: recipe.ingredients,
            steps: recipe.steps,
            materials: recipe.materials
        });
    }
}

export default new RecipesApi()