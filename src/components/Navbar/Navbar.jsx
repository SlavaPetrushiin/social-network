import React from 'react';
import classes from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import SidebarContainer from './SidebarContainer';


const Navbar = (props) => {

	return (
		<nav className={classes.nav}>
			<NavLink to="/profile" activeClassName={classes.activeLink} className={`${classes.link}`}>Profile</NavLink>
			<NavLink to="/dialogs"  activeClassName={classes.activeLink} className={`${classes.link}`}>Dialogs</NavLink>
			<NavLink to="/users" activeClassName={classes.activeLink} className={`${classes.link}`}>Users</NavLink>
			<NavLink to="/news" activeClassName={classes.activeLink} className={`${classes.link}`}>News</NavLink>
			<NavLink to="/musics" activeClassName={classes.activeLink} className={`${classes.link}`}>Musics</NavLink>
			<NavLink to="/settings" activeClassName={classes.activeLink} className={`${classes.link}`}>Settings</NavLink>
			<SidebarContainer />
		</nav>
	)
};

export default Navbar;