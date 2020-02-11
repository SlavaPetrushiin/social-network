import React, {Component} from 'react';
import { Field, reduxForm } from 'redux-form'
import {Input} from "../common/FormsControls/FormControls";
import {required} from "../../utils/ValidationForms/validation";
import classes from "../common/FormsControls/FormControls.module.css";

class LoginForm extends Component {
    render() {
        const {handleSubmit, error} = this.props;
        return (
            <form onSubmit={handleSubmit}>
                <div>
                    <Field
                        type='email'
                        component={Input}
                        validate={[required]}
                        name='email'
                        placeholder='email'/>
                </div>
                <div>
                    <Field
                        type='password'
                        component={Input}
                        validate={[required]}
                        name='password'
                        placeholder='password'/>
                </div>
                <div>
                    <Field
                        type='checkbox'
                        component='input'
                        name='rememberMe'
                    />
                    Remember Me
                </div>
                {error && <p className={classes.formSummaryError}>{this.props.error}</p>}
                <div>
                    <button type="submit">Login</button>
                </div>
            </form>
        );
    }
};

const LoginReduxForm = reduxForm({
    form : 'login'
})(LoginForm);

export default LoginReduxForm;