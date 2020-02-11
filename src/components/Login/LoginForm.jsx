import React, {Component} from 'react';
import { Field, reduxForm } from 'redux-form'
import {Input} from "../common/FormsControls/FormControls";
import {required} from "../../utils/ValidationForms/validation";

class LoginForm extends Component {
    render() {
        const {handleSubmit} = this.props;
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
                        validate={[required]}
                        name='rememberMe'
                    />
                    Remember Me
                </div>
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