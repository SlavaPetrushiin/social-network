import React, {Component} from 'react';
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/ValidationForms/validation";
import {Textarea} from "../../common/FormsControls/FormControls";
import classes from "./MyPosts.module.css";

const maxLength30 = maxLengthCreator(30);

let AddPostForm = (props) => {
    let {handleSubmit} = props;
    return (
        <form onSubmit={handleSubmit} className={classes.addPost}>
            <div>
                <Field
                    component={Textarea}
                    name='newPostText'
                    placeholder="Add new post text"
                    className={classes.fieldForNewPost}
                    validate={[required, maxLength30]}
                />
            </div>
            <button className={classes.btnAddPost}>Add post</button>
        </form>
    );
}

export default reduxForm({
    form: 'newPostText'
})(AddPostForm);