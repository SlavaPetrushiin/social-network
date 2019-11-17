import React from 'react';
import PropTypes from 'prop-types';
import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import MessageItem from './MessageItem/MessageItem';

const Dialogs = (props) => {
	let dialogsElements = props.state.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} url={dialog.url} />);
	let messagesElements = props.state.messages.map(message => <MessageItem message={message.message} id={message.id}/>);
	
	let messagesText = React.createRef();
	let addMessage = () => {
		console.log(555)
		props.dispatch({type : 'ADD-NEW-MESSAGE'});
	};

	let onMessageChange = () => {
		let userText = messagesText.current.value;
		props.dispatch({
			type : 'UPDATE-NEW-MESSAGE',
			newText : userText
		});
	}

	return (
		<div className={classes.dialogs}>
			<div className={classes.dialogsItems}>
				<h3>Dialogs</h3>
				{dialogsElements}
			</div>
			<div className={classes.messages}>
				<h3>Messages</h3>
				{messagesElements}
				<div className={classes.messagesAdd}>
					<textarea
						ref={messagesText}
						className={classes.userMessage}
						placeholder="Введите сообщение"
						value={props.state.newTextMessage}
						onChange={onMessageChange}/>
					<button
						onClick = {addMessage}
						className = {classes.addMessage}>
						Добавить
					</button> 
				</div>
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