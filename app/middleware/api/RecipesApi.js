import when from 'when';
import Firebase from 'firebase'
import FirebaseConstants from '../../constants/FirebaseConstants'

const fireRef = new Firebase(FirebaseConstants.FIREBASE);

class RecipesApi {
    saveRecipe(recipe) {
        const recipeRef = fireRef.child('recipes')
        
        let creator = fireRef.getAuth();
        
        return recipeRef.push().set({
            creator: creator.uid,
            title: recipe.title,
            ingredients: recipe.ingredients,
            steps: recipe.steps
        });
    }
}

export default new RecipesApi()