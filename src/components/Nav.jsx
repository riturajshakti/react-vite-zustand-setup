import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/nav.css';

function Nav() {
	return (
		<div className='nav'>
			<Link to='/'>Home</Link>
			<Link to='/about'>About</Link>
			<Link to='/contact'>Contact</Link>
			<Link to='/users'>Users</Link>
		</div>
	);
}

export default Nav;
