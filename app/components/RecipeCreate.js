import React from 'react';
import AuthenticatedComponent from './AuthenticatedComponent'

class IngredientForm extends React.Component {
    render() {
        return (
            <div className="ingredient-form">
                <input onChange={this.props.amountChange} className="ingredient-amount" type="text" placeholder="Amount" value={this.props.newIngredient.amount} />
                <input onChange={this.props.nameChange} className="ingredient-name" type="text" placeholder="Ingredient" value={this.props.newIngredient.name} />
                <a href="#" onClick={this.props.addNewIngredient}>Add Ingredient</a>
            </div>
        );
    }
}

class IngredientList extends React.Component {
    render() {
        let createIngredient = (ingredient) => {
            return (
                <li key={ingredient.id}>
                    {ingredient.amount} {ingredient.name}
                </li>    
            );
        }
        
        return (
            <ul>
                {this.props.ingredients.map(createIngredient)}
            </ul>    
        );
    }
}

export default AuthenticatedComponent(class Create extends React.Component {
    constructor() {
        super()
        this.state = {
            overview: '',
            ingredient: {
                id: '',
                amount: '',
                name: ''  
            },
            ingredients: [],
            steps: [],
            materials: []
        };
    }
    
    ingredientAmountChange(e) {
        this.setState({
            ingredient: {
                id: '',
                amount: e.target.value,
                name: this.state.ingredient.name
            },
        });
    }
    
    ingredientNameChange(e) {
        this.setState({
            ingredient: {
                id: '',
                amount: this.state.ingredient.amount,
                name: e.target.value 
            }, 
        });
    }
    
    addIngredient() {
        let newIngredient = this.state.ingredients.concat({
            id: Date.now(),
            amount: this.state.ingredient.amount,
            name: this.state.ingredient.name
        });
        this.setState({
            ingredients: newIngredient,
            ingredient: {
                id: '',
                amount: '',
                name: ''  
            }
        });
    }
    
    render() {
        return (
            <div className="recipe-creation">
                <h2>Create Recipe</h2>
                <div className="ingredients">
                    <h3>Ingredients</h3>
                    <IngredientForm amountChange={this.ingredientAmountChange.bind(this)} nameChange={this.ingredientNameChange.bind(this)} newIngredient={this.state.ingredient} addNewIngredient={this.addIngredient.bind(this)} />
                    <div className="subMenu">
                        Amount | Name
                    </div>
                    <IngredientList ingredients={this.state.ingredients} />
                </div>
            </div>    
        );
    }
})