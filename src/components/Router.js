import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// import Navigation from './Navigation';
import App from '../App';
import Main from './Main';
import Home from './Home';
import NotFound from './NotFound';

const Router = () => {
	return (
		<BrowserRouter>
			<App>
				<Switch>
					<Route exact path="/" component={Main} />
					<Route path="/home" component={Home} />
					<Route component={NotFound} />
				</Switch>
			</App>
		</BrowserRouter>
	);
};

export default Router;
