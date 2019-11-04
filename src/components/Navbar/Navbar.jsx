import React from 'react';
import classes from './Navbar.module.css';

const Navbar = () => {
	return (
		<nav className={classes.nav}>
			<a href="#" className={`${classes.link} ${classes.active}`}>Profile</a>
			<a href="#" className={`${classes.link}`}>Messages</a>
			<a href="#" className={`${classes.link}`}>News</a>
			<a href="#" className={`${classes.link}`}>Music</a>
		</nav>
	)
}

export default Navbar;