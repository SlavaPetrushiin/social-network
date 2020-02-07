import React from 'react';
import PropTypes from 'prop-types';
import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import MessageItem from './MessageItem/MessageItem';
import AddMessageForm from "./MessageForm";


const Dialogs = (props) => {

	let dialogsElements = props.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} url={dialog.url} />);
	let messagesElements = props.messages.map(message => <MessageItem message={message.message} id={message.id}/>);
	
	let addMessage = (newMessageText) => {
		debugger
		let newMessage = newMessageText.newMessageBody;
		props.addNewMessage(newMessage);
	};

	return (
		<div className={classes.dialogs}>
			<div className={classes.dialogsItems}>
				<h3>Dialogs</h3>
				{dialogsElements}
			</div>
			<div className={classes.messages}>
				<h3>Messages</h3>
				{messagesElements}
				<AddMessageForm onSubmit={addMessage}/>
			</div>
		</div>
	)
}

Dialogs.propTypes = {
	state : PropTypes.object,
	addMessage : PropTypes.func,
	updateNewMessage : PropTypes.func
}


export default Dialogs;