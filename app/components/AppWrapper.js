var React = require('react');
var Overview = require('./Overview');

var contents = [
	<Overview />
];

var AppWrapper = React.createClass({
	getInitialState: function() {
		return {
			currentTab: 0
		};
	},
	
	render: function() {
		return (
			<div>
				<div className='menu'>
          <a
            className={this.state.currentTab === 0 ? 'selected' : ''}
            onClick={this.selectTab.bind(this, 0)}>
            Overview
          </a>
        </div>
        <div className='mainPanel'>
          {contents[this.state.currentTab]}
        </div>
			</div>
		);
	},
	selectTab: function(tab) {
		this.setState({ currentTab: tab});
	}
});

module.exports = AppWrapper;