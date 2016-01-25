import React, { Component, PropTypes } from 'react';
import ReactMixin from 'react-mixin';

class StepsList extends Component {
    render() {
        let createStep = (step) => {
            return (
                <div key={step.id}>
                    {'Step ' + step.num}: {step.text}
                </div>    
            );
        }
        
        return (
            <div>
                {this.props.steps.map(createStep)}
            </div>    
        );
    }
}

export default class Steps extends Component {
    handleClick(e) {
        this.props.add({
            text: this.refs.step.value
        })
    }
    
    render() {
        const { mSteps } = this.props
        
        return (
            <div>
                <h3>Steps</h3>
                <textArea col="50" row="5" ref="step" />
                <a href="#" onClick={ this.handleClick.bind(this) }>Add Step</a>
                <StepsList steps={ mSteps } />
            </div>
        );
    }
}

Steps.propTypes = {
    mSteps: PropTypes.array.isRequired,
    add: PropTypes.func.isRequired
}