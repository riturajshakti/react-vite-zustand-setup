import React from 'react';
import {Link, Outlet} from 'react-router-dom'
import Nav from './components/Nav'


function Layout() {
	return (
    <div>
      <Nav />
      <Outlet />
    </div>
  )
}

export default Layout;
