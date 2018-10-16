import React from 'react';
import { Route, Switch } from 'react-router-dom';

// import components for routing
import Main from '../components/Main';
import Home from '../components/Home';
import NotFound from '../components/NotFound';

const routes = () => {
	return (
		<Switch>
			<Route exact path="/" component={Main} />
			<Route path="/home" component={Home} />
			<Route component={NotFound} />
		</Switch>
	);
};

export default routes;
