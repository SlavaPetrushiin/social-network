import React from 'react';
import classes from './Header.module.css';

const Header = () => {
	return (
		<header className={classes.header}>
			<div className={classes.headerLogo}>
				<img src="http://mythemestore.com/friend-finder/images/logo.png" />
			</div>
			<div className={classes.formGroup}>
				<input type="text" placeholder="Search friends, photos, videos" className={classes.search} />
			</div>
		</header>
	)
}

export default Header;