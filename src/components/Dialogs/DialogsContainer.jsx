import React, { Component }  from 'react';
import Dialogs from './Dialogs';
import {messageActionCreator, upDateNewMessageTextActionCreator} from './..//../Redux/dialogsPage-reducer'
import { connect } from 'react-redux'
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

let mapStateToProps = (state) => {
	return {
		dialogs : state.dialogsPage.dialogs,
		messages : state.dialogsPage.messages,
		newTextMessage : state.dialogsPage.newTextMessage,
	}
};

let mapDispatchToProps = (dispatch) => {
	return {
		addNewMessage : () => {
			dispatch(messageActionCreator());
		},
		onNewMessageChange : (text) => {
			dispatch(upDateNewMessageTextActionCreator(text));
		}
	}
};

let AuthRedirectComponent = withAuthRedirect(Dialogs);

let DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);

export default DialogsContainer;