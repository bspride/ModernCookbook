import React from 'react';
import Ingredients from './Ingredients';
import Steps from './Steps';
import ReactMixin from 'react-mixin';
import AuthenticatedComponent from '../../AuthenticatedComponent';

// Created outside of export in order to use the mixin
class Create extends React.Component {
    constructor() {
        super()
        this.state = {
            overview: ''
        };
    }
    
    createRecipe() {
        // TODO Add saving to store recipe in parse
    }
    
    render() {
        return (
            <div className="recipe-create">
                <h2>Create Recipe</h2>
                <form>
                    <h3>Overview</h3>
                    <textarea col="50" row="5" valueLink={this.linkState('overview')} />
                    <Ingredients />
                    <Steps />
                    <button type='button' onClick={this.createRecipe.bind(this)}>
				        Create
				    </button>
                </form>
            </div>    
        );
    }
}

export default AuthenticatedComponent(class RecipeCreate extends React.Component {
    render() {
        return <Create />;
    }
});

ReactMixin(Create.prototype, React.addons.LinkedStateMixin)