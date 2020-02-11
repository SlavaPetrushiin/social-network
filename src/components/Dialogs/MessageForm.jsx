import React, {Component} from 'react';
import classes from "./Dialogs.module.css";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../common/FormsControls/FormControls";
import {maxLengthCreator, required} from "../../utils/ValidationForms/validation";

const maxLength250 = maxLengthCreator(250);

let AddMessageForm = (props) => {
    const {handleSubmit} = props;
    return (
        <form onSubmit={handleSubmit} className={classes.messagesAdd}>
			<Field
				component={Textarea}
                validate={[required, maxLength250]}
				name="newMessageBody"
                className={classes.userMessage}
                placeholder="Введите сообщение"
            />
            <button className={classes.addMessage}>
                Добавить
            </button>
        </form>
    );

}

export default reduxForm({
	form : 'dialogAddMessageForm'
})(AddMessageForm);