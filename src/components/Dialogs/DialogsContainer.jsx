import React, { Component }  from 'react';
import Dialogs from './Dialogs';
import {messageActionCreator} from './..//../Redux/dialogsPage-reducer'
import { connect } from 'react-redux'
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

let mapStateToProps = (state) => {
	return {
		dialogs : state.dialogsPage.dialogs,
		messages : state.dialogsPage.messages,
	}
};

let mapDispatchToProps = (dispatch) => {
	return {
		addNewMessage : (newMessageBody) => {
			dispatch(messageActionCreator(newMessageBody));
		}
	}
};

export default compose(
	connect(mapStateToProps, mapDispatchToProps),
	withAuthRedirect
)(Dialogs);;