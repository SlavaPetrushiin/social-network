import React from 'react';
import Dialogs from './Dialogs';
import {messageActionCreator, upDateNewMessageTextActionCreator} from './..//../Redux/dialogsPage-reducer'

const DialogsContainer = (props) => {
	let state = props.store.getState(); 
	console.log(state)


	let addMessage = () => {
		props.store.dispatch(messageActionCreator());
	};

	let onMessageChange = (text) => {
		props.store.dispatch(upDateNewMessageTextActionCreator(text));
	}

	return (
		<Dialogs 
			messageActionCreator={addMessage}
			upDateNewMessageTextActionCreator={onMessageChange}
			dialogs={state.dialogsPage.dialogs}
			messages={state.dialogsPage.messages}
			newTextMessage={state.dialogsPage.newTextMessage} />
	)
}




export default DialogsContainer;