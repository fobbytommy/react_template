import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
	<div className="text-center">
		<h1>PAGE NOT FOUND</h1>
		<Link to="/">go back to main</Link>
	</div>
);

export default NotFound;
