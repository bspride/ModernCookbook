/**
 * Recipes
 * Container component for rendering the create
 * section of the application
 */

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { loadIngredient, loadStep } from '../../actions/RecipeActions';
import Ingredients from '../../components/Cookbook/Recipes/Ingredients';
import Steps from '../../components/Cookbook/Recipes/Steps';

class Create extends Component {
    constructor (props) {
        super(props)
        this.addIngredient = this.addIngredient.bind(this)
        this.addStep = this.addStep.bind(this)
    }
    
    addIngredient (ingredient) {
        const { dispatch } = this.props;
        dispatch (
            loadIngredient(ingredient.amount, ingredient.name)
        )
    }
    
    addStep (step) {
        const { dispatch } = this.props;
        dispatch (
            loadStep(step.text)
        )
    }
    
    render() {
        const { ingredients, steps } = this.props;
        
        return (
            <div className="recipe-create">
                <h2>Create Recipe</h2>
                <form>
                    <h3>Overview</h3>
                    <textArea col="50" row="5" ref="overview" />
                    <Ingredients 
                        add={ this.addIngredient }
                        mIngredients={ ingredients } />
                    <Steps
                        add={ this.addStep }
                        mSteps={ steps } />
                </form>
            </div>    
        );
    }
}

Create.propTypes = {
    ingredients: PropTypes.array.isRequired,
    steps: PropTypes.array.isRequired,
    dispatch: PropTypes.func.isRequired
};

function mapStateToProps (state) {
    return { 
        ingredients: state.recipeApp.ingredients,
        steps: state.recipeApp.steps 
    }
}

export default connect(mapStateToProps)(Create)