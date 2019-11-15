import React from 'react';
import PropTypes from 'prop-types';
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
};

MessageItem.propTypes = {
	id : PropTypes.number.isRequired,
	message : PropTypes.string,
};

export default MessageItem;