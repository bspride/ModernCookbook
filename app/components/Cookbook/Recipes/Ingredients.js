import React, { Component, PropTypes } from 'react';
import ReactMixin from 'react-mixin';

class IngredientList extends Component {
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

export default class Ingredients extends Component {
    handleClick (e) {
        this.props.add({
            amount: this.refs.amount.value,
            name: this.refs.name.value
        });
    }
    
    render() {
        const { mIngredients } = this.props;
        
        return (
            <div>
                <h3>Ingredients</h3>
                <input type="text" ref="amount" placeholder="Amount" />
                <input type="text" ref="name" placeholder="Name" />
                <a href="#" onClick={ this.handleClick.bind(this) }>Add Ingredient</a>
                <div className="subMenu">
                    Amount | Name
                </div>
                <IngredientList ingredients={ mIngredients } />
            </div>
        );
    }
}

Ingredients.propTypes = {
    mIngredients: PropTypes.array.isRequired,
    add: PropTypes.func.isRequired
}