import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../logoHenry.png'

import './styleNavar.css';


export default function NavBar() {
	return (
		<header className="navbar">
			<div>
				<img id="logoHenry" src={Logo} width="30" height="30" className="d-inline-block align-top" alt="" />
			</div>
			<nav>
				<ul className="list">
					  <li className="list_item">
						  <NavLink exact to="/" >Home</NavLink>
            			  </li>
						<li className="list_item"> 
						<NavLink to="/favs" >Favoritas</NavLink>
            		</li>
				</ul>
			</nav>
		</header>
	)
}