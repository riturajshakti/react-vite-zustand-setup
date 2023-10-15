import React from 'react';
import Counter from '../components/Counter';
import { Link, useNavigate } from 'react-router-dom';

export default function Home() {
	const navigate = useNavigate();

	return (
		<>
			<Counter />
      {/* <Link to='/contact'>Contact</Link> */}
			<p>
				<button onClick={() => navigate('/about')}>Goto /about</button>
			</p>
		</>
	);
}
