import React from 'react';
import classes from './MessageItem.module.css';

const MessageItem = (props) => {
	return (
		<div>
			<p>{props.message}</p>
		</div>
	)
}

export default MessageItem;