import Dialogs from './Dialogs';
import {messageActionCreator, upDateNewMessageTextActionCreator} from './..//../Redux/dialogsPage-reducer'
import { connect } from 'react-redux'

let mapStateToProps = (state) => {
	return {
		dialogs : state.dialogsPage.dialogs,
		messages : state.dialogsPage.messages,
		newTextMessage : state.dialogsPage.newTextMessage,
		isAuth : state.auth.isAuth
	}
}

let mapDispatchToProps = (dispatch) => {
	return {
		addNewMessage : () => {
			dispatch(messageActionCreator());
		},
		onNewMessageChange : (text) => {
			dispatch(upDateNewMessageTextActionCreator(text));
		}
	}
}

let DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;