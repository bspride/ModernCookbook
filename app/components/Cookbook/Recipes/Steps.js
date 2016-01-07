import React from 'react';
import ReactMixin from 'react-mixin';

class StepsList extends React.Component {
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

export default class Steps extends React.Component {
    constructor() {
        super()
        this.state = {
            text: '',
            steps: []
        }; 
    }
    
    addStep() {
        let newSteps = this.state.steps.concat({
            id: Date.now(),
            text: this.state.text,
            num: this.state.steps.length + 1
        });
        
        this.setState({
            text: '',
            steps: newSteps
        });
    }
    
    render() {
        return (
            <div>
                <h3>Steps</h3>
                <textArea col="50" row="5" valueLink={this.linkState('text')} />
                <a href="#" onClick={this.addStep.bind(this)}>Add Step</a>
                <StepsList steps={this.state.steps} />
            </div>
        );
    }
}

ReactMixin(Steps.prototype, React.addons.LinkedStateMixin);