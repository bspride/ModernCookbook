import React from 'react';
import ReactMixin from 'react-mixin';

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

export default class Ingredients extends React.Component {
    constructor() {
        super()
        this.state = {
            amount: '',
            name: '',
            ingredients: []
        }; 
    }
    
    addIngredient() {
        let newIngredients = this.state.ingredients.concat({
            id: Date.now(),
            amount: this.state.amount,
            name: this.state.name
        });
        
        this.setState({
            amount: '',
            name: '',
            ingredients: newIngredients
        });
    }
    
    render() {
        return (
            <div>
                <h3>Ingredients</h3>
                <input type="text" valueLink={this.linkState('amount')} placeholder="Amount" />
                <input type="text" valueLink={this.linkState('name')} placeholder="Name" />
                <a href="#" onClick={this.addIngredient.bind(this)}>Add Ingredient</a>
                <div className="subMenu">
                    Amount | Name
                </div>
                <IngredientList ingredients={this.state.ingredients} />
            </div>
        );
    }
}

ReactMixin(Ingredients.prototype, React.addons.LinkedStateMixin);