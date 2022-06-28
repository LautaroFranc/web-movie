import React from 'react';
import { NavLink } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";
import './styleNavar.css';


export default function NavBar() {
	const [menu, setMenu]= React.useState({
		btn_vander:true,
		btn_menu:"btn-menu",
		inc:<GiHamburgerMenu />,
		ul:"list",
		li:"list_item"
	})

	function onclikMenu(){
		if(menu.btn_vander){
			setMenu({
				btn_vander:false,
				btn_menu:"clos_btn",
				inc:<GrClose />,
				ul:"list-reponsi",
				li:"list_item-reponsi"});
		}else{
			setMenu({
				btn_vander:true,
				btn_menu:"btn-menu ",
				inc:<GiHamburgerMenu />,
				ul:" scrol ",
				li:"list_item-reponsi"})
		}

	}
	function onClickCondicion(e) {
		if(e.clientX<86){
			onclikMenu()
		}
	}
		return (
			<header className="navbar">
				<div className="navbar-logo">
					<NavLink exact to="/" >
						<span className="logoHenry" >Movies</span>
					</NavLink>
				</div>
				<nav>
					<ul className={menu.ul}>
							<li className={menu.li}>
								<NavLink exact to="/" onClick={(e) => onClickCondicion(e)}>Home</NavLink>
							</li>
							<li className={menu.li}> 
								<NavLink to="/favs"  onClick={(e) => onClickCondicion(e)}>Favorites</NavLink>
							</li>
					</ul>
				</nav>
				<div className ="btn-container">
					<button onClick={onclikMenu} className={menu.btn_menu}>{menu.inc}</button>
				</div>
			</header>
			);
}