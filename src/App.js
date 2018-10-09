import React, { Component, Fragment } from 'react';
import Navigation from './components/Navigation';

class App extends Component {
	render() {
		return (
			<Fragment>
				<Navigation />
				<div className="container">{this.props.children}</div>
			</Fragment>
		);
	}
}

export default App;
