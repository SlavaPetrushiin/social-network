import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import MessageItem from './MessageItem/MessageItem';


const Dialogs = (props) => {
	let dialogsElements = props.state.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} url={dialog.url} />);
	let messagesElements = props.state.messages.map(message => <MessageItem message={message.message} id={message.id}/>);
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