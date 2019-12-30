import React from 'react';
import classes from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = ({isAuth, login}) => {
	return (
		<header className={classes.header}>
			<div className={classes.headerLogo}>
				<img src="http://mythemestore.com/friend-finder/images/logo.png" alt="logo"/>
			</div>
			<div className={classes.formGroup}>
				<input type="text" placeholder="Search friends, photos, videos" className={classes.search} />
			</div>
			<div className={classes.loginBlock}>
				{
					(isAuth) ? login : <NavLink to="/login">Login</NavLink>
				}
			</div>
		</header>
	)
}

export default Header;