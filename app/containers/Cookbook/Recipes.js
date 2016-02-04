/**
 * Recipes
 * Container component for rendering the create
 * section of the application
 */

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { loadIngredient, loadStep, loadMaterial, saveRecipe } from '../../actions/RecipeActions';
import Ingredients from '../../components/Ingredients';
import Steps from '../../components/Steps';
import Materials from '../../components/Materials';

class Create extends Component {
    constructor (props) {
        super(props)
        this.addIngredient = this.addIngredient.bind(this)
        this.addStep = this.addStep.bind(this)
        this.addMaterial = this.addMaterial.bind(this)
        this.createRecipe = this.createRecipe.bind(this)
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
    
    addMaterial (material) {
        const { dispatch } = this.props;
        dispatch (
            loadMaterial(material.text)
        )
    }
    
    createRecipe (e) {
        e.preventDefault();
        const { dispatch } = this.props;
        let title = this.refs.title.value;
        
        dispatch (
            saveRecipe(title)
        )
    }
    
    render () {
        const { ingredients, steps, materials } = this.props;
        
        return (
            <div className="recipe-create">
                <h2>Create Recipe</h2>
                <h3>Title</h3>
                <input type="text" ref="title" />
                <Ingredients 
                    add={ this.addIngredient }
                    mIngredients={ ingredients } />
                <Steps
                    add={ this.addStep }
                    mSteps={ steps } />
                <Materials
                    add={ this.addMaterial }
                    mMaterials={ materials } />
                <button onClick={ this.createRecipe }>Create</button>
            </div>    
        );
    }
}

Create.propTypes = {
    ingredients: PropTypes.array.isRequired,
    steps: PropTypes.array.isRequired,
    materials: PropTypes.array.isRequired,
    dispatch: PropTypes.func.isRequired
};

function mapStateToProps (state) {
    return { 
        ingredients: state.newRecipe.creation.ingredients,
        steps: state.newRecipe.creation.steps,
        materials: state.newRecipe.creation.materials
    }
}

export default connect(mapStateToProps)(Create)