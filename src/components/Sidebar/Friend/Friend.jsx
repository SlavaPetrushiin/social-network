import React from 'react';
import classes from './Friend.module.css';

const Friend = (props) => {
	return (
		<div className={classes.friend}>
			<div className={classes.friendImg}>
				<img src={props.friendUrl} alt={props.friendName}/>
			</div>
			<div className={classes.friendName}>{props.friendName}</div>
		</div>		
	);
}

export default Friend;