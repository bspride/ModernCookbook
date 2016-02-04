/**
 * Materials
 * Component for rendering and updating
 * materials for a recipe
 */

import React, { Component, PropTypes } from 'react';
import ReactMixin from 'react-mixin';

class MaterialsList extends Component {
    render() {
        let createMaterial = (material) => {
            return (
                <div key={material.id}>
                    {material.text}
                </div>    
            );
        }
        
        return (
            <div>
                {this.props.materials.map(createMaterial)}
            </div>    
        );
    }
}

export default class Materials extends Component {
    handleClick(e) {
        this.props.add({
            text: this.refs.material.value
        })
    }
    
    render() {
        const { mMaterials } = this.props
        
        return (
            <div>
                <h3>Materials</h3>
                <input type="text" ref="material" />
                <a href="#" onClick={ this.handleClick.bind(this) }>Add Materials</a>
                <MaterialsList materials={ mMaterials } />
            </div>
        );
    }
}

Materials.propTypes = {
    mMaterials: PropTypes.array.isRequired,
    add: PropTypes.func.isRequired
}