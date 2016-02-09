import React, { Component } from 'react';
import { connect } from 'react-redux';

class Home extends Component {
	render() {
		return (
			<div>
				Logged in Home
      </div>
		);
	}
}

function mapStateToProps(state) {
	return {
		routing: state.routing.location
	}
}

export default connect(mapStateToProps)(Home)