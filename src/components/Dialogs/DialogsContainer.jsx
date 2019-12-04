import React from 'react';
import Dialogs from './Dialogs';
import {messageActionCreator, upDateNewMessageTextActionCreator} from './..//../Redux/dialogsPage-reducer'
import StoreContext from '../../StoreContext';

const DialogsContainer = (props) => {
	return (
		<StoreContext.Consumer>
			{
				store => {
					let state = store.getState(); 

					let addMessage = () => {
						store.dispatch(messageActionCreator());
					};

					let onMessageChange = (text) => {
						store.dispatch(upDateNewMessageTextActionCreator(text));
					}

					return <Dialogs 
						messageActionCreator={addMessage}
						upDateNewMessageTextActionCreator={onMessageChange}
						dialogs={state.dialogsPage.dialogs}
						messages={state.dialogsPage.messages}
						newTextMessage={state.dialogsPage.newTextMessage} />
				}
			}

		</StoreContext.Consumer>
	)
}




export default DialogsContainer;