import React, { Component, Fragment } from 'react';
import Navigation from './components/Navigation';
import styled from 'styled-components';

const Wrap = styled.div`
	border: 2px dashed pink;
`;

class App extends Component {
	render() {
		// console.log(this.props);

		return (
			<Fragment>
				<Navigation />
				<Wrap className="container">{this.props.children}</Wrap>
			</Fragment>
		);
	}
}

export default App;
