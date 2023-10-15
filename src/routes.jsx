import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import Layout from './layout';
import Error from './error';
import { createBrowserRouter } from 'react-router-dom';
import Users from './pages/users';
import UserDetail from './pages/users/[userId]';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		errorElement: <Error />,
		children: [
			{
				index: true,
				element: <Home />,
			},
			{
				path: 'contact',
				element: <Contact />,
			},
			{
				path: 'about',
				element: <About />,
			},
			{
				path: 'users',
				element: <Users />,
			},
			{
				path: 'users/:userId',
				element: <UserDetail />,
			},
		],
	},
	
]);

export default router;
