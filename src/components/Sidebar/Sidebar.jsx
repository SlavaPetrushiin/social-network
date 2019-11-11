import React from 'react';
import classes from './Sidebar.module.css';
import Friend from './Friend/Friend';

const Sidebar = (props) => {
	let friendsUsers = props.friends.map(user => <Friend friendUrl={user.url} friendName={user.friendName}/>);

	return (
		<aside className={classes.friends}>
			<h2>Frends</h2>
			<div className={classes.friendsBlock}>
				{friendsUsers}
			</div>
		</aside>
	)
}

export default Sidebar;