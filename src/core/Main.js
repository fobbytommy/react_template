import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';

import routes from './routes';

import App from './App';

const Wrap = styled.div`
	border: 2px dashed pink;
`;

class Main extends Component {
	render() {
		return (
			<Router>
				<Switch>
					<Route path="/" component={App} />
				</Switch>
			</Router>
		);
	}
}

export default Main;
