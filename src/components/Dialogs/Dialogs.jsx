import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import MessageItem from './MessageItem/MessageItem';


const Dialogs = (props) => {
	let dialogsElements = props.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />);
	let messagesElements = props.messages.map(message => <MessageItem message={message.message} />);

	return (
		<div className={classes.dialogs}>
			<div className={classes.dialogsItems}>
				<h3>Dialogs</h3>
				{dialogsElements}
			</div>
			<div className={classes.messages}>
				<h3>Messages</h3>
				{messagesElements}
			</div>
		</div>
	)
}

export default Dialogs;