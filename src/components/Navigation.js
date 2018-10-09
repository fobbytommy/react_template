import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navigation extends Component {
	render() {
		return (
			<div>
				<h1>Navigation</h1>
				<Link to="/">Main</Link>
				<a className="btn btn-outline-danger" href="/">
					Main w Anchor Tag (this will refresh)
				</a>
				<Link to="/home">Home</Link>
				<Link to="/asdfe">Not found</Link>
			</div>
		);
	}
}

export default Navigation;
