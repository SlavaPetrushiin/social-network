import React from 'react';
import classes from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
	let {isAuth, login} = props;
	return (
		<header className={classes.header}>
			<div className={classes.headerLogo}>
				<img src="http://mythemestore.com/friend-finder/images/logo.png" alt="logo"/>
			</div>
			<div className={classes.loginBlock}>
				{
					(isAuth)
						? <span>{login}<button className={classes.loginBtn} onClick={props.deleteAuthLogout}> Logout </button></span>
						: <NavLink to="/login">Login</NavLink>
				}
			</div>
		</header>
	)
}

export default Header;