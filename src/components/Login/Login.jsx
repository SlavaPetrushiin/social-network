import React from 'react';
import LoginForm from "./LoginForm";
import {connect} from "react-redux";
import {postAuthLogin} from "../../Redux/auth-reducer";
import {Redirect} from "react-router-dom";

const Login = (props) => {
    let onSubmit = (value) => {
        let {email, password, rememberMe} = value;
        props.postAuthLogin(email, password, rememberMe);
    }

    if(props.isAuth) return  <Redirect to={'/profile'}/>

    return (
        <div>
            <h2>Login</h2>
            <LoginForm onSubmit={onSubmit}/>
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        isAuth : state.auth.isAuth
    }
};

export default connect(mapStateToProps, {postAuthLogin})(Login);