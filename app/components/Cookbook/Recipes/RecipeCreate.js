import React from 'react';
import Ingredients from './Ingredients';
import Steps from './Steps';
import AuthenticatedComponent from '../../AuthenticatedComponent';

export default AuthenticatedComponent(class Create extends React.Component {
    constructor() {
        super()
        this.state = {
            
        };
    }
    
    createRecipe() {
        
    }
    
    render() {
        return (
            <div className="recipe-create">
                <h2>Create Recipe</h2>
                <form>
                    <Ingredients />
                    <Steps />
                    <button type='button' onClick={this.createRecipe.bind(this)}>
				        Create
				    </button>
                </form>
            </div>    
        );
    }
})