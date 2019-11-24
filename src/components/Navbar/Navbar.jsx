import React from 'react';
import PropTypes from 'prop-types';
import classes from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import Sidebar from './../Sidebar/Sidebar';


const Navbar = (props) => {
	console.log(props)
	return (
		<nav className={classes.nav}>
			<NavLink to="/profile" activeClassName={classes.activeLink} className={`${classes.link}`}>Profile</NavLink>
			<NavLink to="/dialogs"  activeClassName={classes.activeLink} className={`${classes.link}`}>Dialogs</NavLink>
			<NavLink to="/news" activeClassName={classes.activeLink} className={`${classes.link}`}>News</NavLink>
			<NavLink to="/musics" activeClassName={classes.activeLink} className={`${classes.link}`}>Musics</NavLink>
			<NavLink to="/settings" activeClassName={classes.activeLink} className={`${classes.link}`}>Settings</NavLink>
			<Sidebar friends={props.sidebar.friends}/>
		</nav>
	)
};

export default Navbar;