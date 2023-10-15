import React from 'react';
import Counter from '../components/Counter';
import { useNavigate } from 'react-router-dom';

export default function Home() {
	const navigate = useNavigate();

	return (
		<>
			<Counter />
			<p>
				Backend URL = <code>{import.meta.env.VITE_BACKEND_URL}</code>
			</p>
			<p>
				<button onClick={() => navigate('/about')}>Goto /about</button>
			</p>
		</>
	);
}
