import React from 'react';
import classes from './MessageItem.module.css';

const MessageItem = (props) => {
	let classFriend = (props.id !== 0) ? classes.friend : null;
	return (
		<div className={classes.messagesBlock}>
			<div className={classes.userAvatar}></div>
			<div className={classes.userMessage + ' ' + classFriend}>
				<p>{props.message}</p>		
			</div>
		</div>
	)
}

export default MessageItem;