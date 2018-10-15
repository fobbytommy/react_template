import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// styled components
import styled from 'styled-components';
import { FlexDiv } from '../styles/general';

// const FixedDiv = styled.div`
// 	position: fixed;
// `;

const NavContainer = styled(FlexDiv)`
	border: 1px solid red;
	flex-direction: row;
	justify-content: space-between;
`;

const Menu = styled.div`
	height: 100px;
	border: 1px blue dotted;
`;

class Navigation extends Component {
	render() {
		return (
			// <FixedDiv>
			<NavContainer>
				<Menu>Menu 1</Menu>
				<Menu>Menu 2</Menu>
				<Menu>Menu 3</Menu>
				<Menu>Menu 4</Menu>
				<Menu>Menu 5</Menu>
				{/* <Link to="/">Main</Link>
				<a className="btn btn-outline-danger" href="/">
					Main w Anchor Tag (this will refresh)
				</a>
				<Link to="/home">Home</Link>
				<Link to="/asdfe">Not found</Link> */}
			</NavContainer>
			// </FixedDiv>
		);
	}
}

export default Navigation;
