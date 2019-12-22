import React from 'react';
import PropTypes from 'prop-types';
import classes from './Sidebar.module.css';
import Friend from './Friend/Friend';

const Sidebar = (props) => {
	let friendsUsers = props.friends.map((user, index) => <Friend friendUrl={user.url} friendName={user.friendName} key={index}/>);
	return (
		<aside className={classes.friends}>
			<h2>Frends</h2>
			<div className={classes.friendsBlock}>
				{friendsUsers}
			</div>
		</aside>
	)
};

Sidebar.propTypes = {
	friends : PropTypes.array
};

export default Sidebar;