import React, {Component} from 'react';
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/ValidationForms/validation";
import {Textarea} from "../../common/FormsControls/FormControls";

const maxLength30 = maxLengthCreator(30);

let AddPostForm = (props) => {
    let {handleSubmit} = props;
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field
                    component={Textarea}
                    name='newPostText'
                    placeholder="Add new post text"
                    validate={[required, maxLength30]}
                />
            </div>
            <button>Add post</button>
        </form>
    );
}

export default reduxForm({
    form: 'newPostText'
})(AddPostForm);