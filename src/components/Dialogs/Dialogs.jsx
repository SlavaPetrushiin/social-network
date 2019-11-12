import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import MessageItem from './MessageItem/MessageItem';

const Dialogs = (props) => {
	let dialogsElements = props.state.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} url={dialog.url} />);
	let messagesElements = props.state.messages.map(message => <MessageItem message={message.message} id={message.id}/>);
	
	let messagesText = React.createRef();
	let addMessage = () => {
		let userText = messagesText.current.value;
		(userText === "") ? alert("Введите сообщение") : alert(userText);
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
				<div className={classes.messagesAdd}>
					<textarea ref={messagesText} className={classes.userMessage} placeholder="Введите сообщение"></textarea>
					<button
						onClick = {addMessage}
						className = {classes.addMessage}
					>
						Добавить
					</button> 
				</div>
			</div>
		</div>
	)
}

export default Dialogs;