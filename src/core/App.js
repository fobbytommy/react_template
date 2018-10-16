import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';

import routes from './routes';

import Navigation from '../components/Navigation';

const Wrap = styled.div`
	border: 2px dashed pink;
`;

class App extends Component {
	render() {
		return (
			<div className="container-fluid px-0 mx-0">
				<Navigation />
				<Wrap className="container">{routes()}</Wrap>
			</div>
		);
	}
}

export default App;
